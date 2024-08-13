from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_mail import Mail
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from config import Config
from models import db, User, Donation, Volunteer, Notification, Event, Inventory, Feedback
from utils import generate_verification_code, send_verification_email
import bcrypt
from dotenv import load_dotenv
import os
from extensions import mail

load_dotenv()

app = Flask(__name__)
app.config.from_object(Config)

# Initialize CORS
CORS(app)

mail.init_app(app)
db.init_app(app)
migrate = Migrate(app, db)
mail = Mail(app)
jwt = JWTManager(app)

@app.route('/register', methods=['POST'])
def register():
    """Register a new user and send a verification email."""
    try:
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username or not email or not password:
            return jsonify({'error': 'Username, email, and password are required.'}), 400

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        # Uncomment these lines to test email functionality
        # verification_code = generate_verification_code()
        # send_verification_email(email, verification_code)

        return jsonify({'message': 'User registered successfully. Please check your email for verification.'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    """Log in a user and return a JWT token."""
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        user = User.query.filter_by(email=email).first()
        if not user or not bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
            return jsonify({'error': 'Invalid email or password.'}), 401

        token = create_access_token(identity=user.id)
        return jsonify({'token': token}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/donate', methods=['POST'])
@jwt_required()
def donate():
    """Create a new donation record."""
    try:
        data = request.get_json()
        user_id = get_jwt_identity()
        amount = data.get('amount')
        message = data.get('message')

        if not amount:
            return jsonify({'error': 'Amount is required.'}), 400

        new_donation = Donation(user_id=user_id, amount=amount, message=message)
        db.session.add(new_donation)
        db.session.commit()

        return jsonify({'message': 'Donation recorded successfully.'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/volunteer', methods=['POST'])
@jwt_required()
def volunteer():
    """Register a user as a volunteer for an event."""
    try:
        data = request.get_json()
        user_id = get_jwt_identity()
        event_id = data.get('event_id')

        if not event_id:
            return jsonify({'error': 'Event ID is required.'}), 400

        new_volunteer = Volunteer(user_id=user_id, event_id=event_id)
        db.session.add(new_volunteer)
        db.session.commit()

        return jsonify({'message': 'Volunteer registration successful.'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/notifications', methods=['GET'])
@jwt_required()
def get_notifications():
    """Get all notifications for a user."""
    try:
        user_id = get_jwt_identity()

        notifications = Notification.query.filter_by(user_id=user_id).all()
        result = [{'id': n.id, 'message': n.message, 'is_read': n.is_read} for n in notifications]

        return jsonify(result), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/events', methods=['POST'])
@jwt_required()
def create_event():
    """Create a new event."""
    try:
        data = request.get_json()
        name = data.get('name')
        description = data.get('description')
        location = data.get('location')
        date = data.get('date')

        if not name or not location or not date:
            return jsonify({'error': 'Name, location, and date are required.'}), 400

        new_event = Event(name=name, description=description, location=location, date=date)
        db.session.add(new_event)
        db.session.commit()

        return jsonify({'message': 'Event created successfully.'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/inventory', methods=['POST'])
@jwt_required()
def add_inventory_item():
    """Add a new item to the inventory."""
    try:
        data = request.get_json()
        name = data.get('name')
        quantity = data.get('quantity')
        expiry_date = data.get('expiry_date')

        if not name or not quantity:
            return jsonify({'error': 'Name and quantity are required.'}), 400

        new_item = Inventory(name=name, quantity=quantity, expiry_date=expiry_date)
        db.session.add(new_item)
        db.session.commit()

        return jsonify({'message': 'Inventory item added successfully.'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/feedback', methods=['POST'])
@jwt_required()
def submit_feedback():
    """Submit user feedback."""
    try:
        data = request.get_json()
        user_id = get_jwt_identity()
        message = data.get('message')

        if not message:
            return jsonify({'error': 'Message is required.'}), 400

        new_feedback = Feedback(user_id=user_id, message=message)
        db.session.add(new_feedback)
        db.session.commit()

        return jsonify({'message': 'Feedback submitted successfully.'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/notifications/<int:user_id>', methods=['PUT'])
def mark_notifications_as_read(user_id):
    """Mark all notifications for a user as read."""
    try:
        notifications = Notification.query.filter_by(user_id=user_id, is_read=False).all()
        for notification in notifications:
            notification.is_read = True

        db.session.commit()

        return jsonify({'message': 'All notifications marked as read.'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

from app import app
from models import db, User, Donation, Volunteer, Notification, Event, Inventory, Feedback
from datetime import datetime

with app.app_context():
    db.create_all()

    # Add some initial data
    user1 = User(username='JohnDoe', email='johndoe@example.com', password='password123')
    user2 = User(username='JaneDoe', email='janedoe@example.com', password='password456')

    db.session.add_all([user1, user2])
    db.session.commit()

    # Updated Events
    events = [
        Event(name='Charity Run', description='5K run for charity.', location='Central Park', date=datetime(2024, 9, 1)),
        Event(name='Food Drive', description='Collecting non-perishable food items.', location='Community Center', date=datetime(2024, 9, 15)),
        Event(name='Clothing Drive', description='Collecting clothes for the needy.', location='Downtown', date=datetime(2024, 10, 1)),
        Event(name='Blood Donation Camp', description='Blood donation event to help hospitals.', location='City Hospital', date=datetime(2024, 10, 20))
    ]

    db.session.add_all(events)
    db.session.commit()

    donation1 = Donation(user_id=user1.id, amount=100.00, message='Happy to help!')
    donation2 = Donation(user_id=user2.id, amount=50.00, message='Great cause!')

    db.session.add_all([donation1, donation2])
    db.session.commit()

    volunteer1 = Volunteer(user_id=user1.id, event_id=events[0].id)
    volunteer2 = Volunteer(user_id=user2.id, event_id=events[1].id)

    db.session.add_all([volunteer1, volunteer2])
    db.session.commit()

    notification1 = Notification(user_id=user1.id, message='Your donation has been received!')
    notification2 = Notification(user_id=user2.id, message='Thank you for volunteering!')

    db.session.add_all([notification1, notification2])
    db.session.commit()

    feedback1 = Feedback(user_id=user1.id, message='Great event!')
    feedback2 = Feedback(user_id=user2.id, message='Looking forward to the next one.')

    db.session.add_all([feedback1, feedback2])
    db.session.commit()

    inventory1 = Inventory(name='Canned Beans', quantity=100, expiry_date=datetime(2025, 1, 1))
    inventory2 = Inventory(name='Bottled Water', quantity=200, expiry_date=datetime(2024, 12, 31))

    db.session.add_all([inventory1, inventory2])
    db.session.commit()

    print('Database seeded successfully!')

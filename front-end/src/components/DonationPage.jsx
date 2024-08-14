import React, { useState } from 'react';
import donationImage from '../images/DonationPage.jpg'; 
import { useNavigate } from 'react-router-dom';
import './DonationPage.css'; 

const DonationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate(); 

  const handleDonate = () => {
    alert('Payment processed successfully!');
    navigate('/Home'); 
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 relative">
        <img src={donationImage} alt="Donation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="text-center relative z-10">

        </div>
      </div>


      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
        <div className="payment-form-container">
          <div className="payment-form-header">
            <h2 className="text-4xl font-bold mb-4">GIVE YOUR DONATION</h2>
            <p className="text-lg mb-6">Your generosity helps us create a positive impact in the lives of those in need.</p>
          </div>
          <form className="p-6 flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 mb-6">
              <label className="flex flex-col">
                <span className="text-lg font-medium mb-2">Amount</span>
                <input
                  type="number"
                  className="input-field"
                  placeholder="Enter amount"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-lg font-medium mb-2">Frequency</span>
                <select className="input-field">
                  <option value="one-time">One-time</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </label>
              <fieldset className="flex flex-col">
                <legend className="text-lg font-medium mb-2 text-yellow-800">Payment Method</legend>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment-method"
                      value="credit-card"
                      className="form-radio"
                      checked={paymentMethod === 'credit-card'}
                      onChange={handlePaymentMethodChange}
                    />
                    <span className="text-lg">Credit Card</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment-method"
                      value="paypal"
                      className="form-radio"
                      checked={paymentMethod === 'paypal'}
                      onChange={handlePaymentMethodChange}
                    />
                    <span className="text-lg">PayPal</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment-method"
                      value="mpesa"
                      className="form-radio"
                      checked={paymentMethod === 'mpesa'}
                      onChange={handlePaymentMethodChange}
                    />
                    <span className="text-lg">M-Pesa</span>
                  </label>
                </div>
              </fieldset>
              {paymentMethod === 'credit-card' && (
                <>
                  <label className="flex flex-col">
                    <span className="text-lg font-medium mb-2">Card Information</span>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Card number"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-lg font-medium mb-2">Expiration Date</span>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="MM/YY"
                    />
                  </label>
                </>
              )}
              {paymentMethod === 'mpesa' && (
                <label className="flex flex-col">
                  <span className="text-lg font-medium mb-2">M-Pesa Number</span>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="07xxxxxxxx"
                  />
                </label>
              )}
            </div>
            <button
              type="button"
              className="donate-button"
              onClick={handleDonate}
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;

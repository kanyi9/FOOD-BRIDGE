
import React from 'react';

const DonationPage = () => {
  const handleDonate = () => {
    alert('You have successfully donated!');
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 flex justify-center items-center h-screen">
      <div className="bg-yellow-800 shadow-md rounded-md p-6 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Make a Donation</h1>
        <p className="text-lg mb-6 text-center text-white">Your donation will help us make a difference in the lives of those in need.</p>
        <form>
          <div className="flex flex-wrap mb-4 justify-center">
            <label className="block w-full md:w-1/2 mb-2 md:mb-0 pr-4">
              <span className="text-lg text-white">Amount:</span>
              <input
                type="number"
                className="w-full p-2 pl-10 text-lg border border-gray-300 rounded-md"
                placeholder="Enter amount"
              />
            </label>
            <label className="block w-full md:w-1/2 mb-2 md:mb-0 pl-4">
              <span className="text-lg text-white">Frequency:</span>
              <select className="w-full p-2 pl-10 text-lg border border-gray-300 rounded-md">
                <option value="one-time">One-time</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </label>
          </div>
          <div className="flex flex-wrap mb-4 justify-center text-white">
            <label className="block w-full mb-2">
              <span className="text-lg">Payment Method:</span>
              <div className="flex justify-center">
                <input
                  type="radio"
                  name="payment-method"
                  value="credit-card"
                  className="mr-2"
                />
                <span className="text-lg">Credit Card</span>
                <input
                  type="radio"
                  name="payment-method"
                  value="paypal"
                  className="mr-2 ml-4"
                />
                <span className="text-lg">PayPal</span>
                <input
                  type="radio"
                  name="payment-method"
                  value="mpesa"
                  className="mr-2 ml-4"
                />
                <span className="text-lg">M-Pesa</span>
              </div>
            </label>
          </div>
          <div className="flex flex-wrap mb-4 justify-center text-white">
            <label className="block w-full mb-2">
              <span className="text-lg">Card Information:</span>
              <input
                type="text"
                className="w-full p-2 pl-10 text-lg border border-gray-300 rounded-md"
                placeholder="Card number"
              />
            </label>
          </div>
          <div className="flex flex-wrap mb-4 justify-center text-white">
            <label className="block w-full mb-2">
              <span className="text-lg">Expiration Date:</span>
              <input
                type="text"
                className="w-full p-2 pl-10 text-lg border border-gray-300 rounded-md"
                placeholder="MM/YY"
              />
            </label>
          </div>
          <div className="flex flex-wrap mb-4 justify-center text-white">
            <label className="block w-full mb-2">
              <span className="text-lg">M-Pesa Number:</span>
              <input
                type="text"
                className="w-full p-2 pl-10 text-lg border border-gray-300 rounded-md"
                placeholder="07xxxxxxxx"
              />
            </label>
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md w-full"
            onClick={handleDonate}
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
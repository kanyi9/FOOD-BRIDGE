import React, { useState } from 'react';
import axios from 'axios';
import feedbackImage from '../images/campaign3.jpg'; 
import { useNavigate } from 'react-router-dom'; 

const FeedbackPage = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('User not authenticated. Please log in.');
      }

      await axios.post(
        'http://localhost:5000/feedback',
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      setSuccess('Feedback Successfully Sent!');
      setMessage(''); 
    } catch (error) {
      console.error('Error submitting feedback:', error);
      if (error.response && error.response.status === 401) {
        setError('Unauthorized. Please log in again.');
      } else if (error.response && error.response.status === 403) {
        setError('Access forbidden. You might not have the necessary permissions.');
      } else {
        setError('Failed to submit feedback. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    navigate('/Home'); 
  };

  return (
    <div className="relative flex flex-col h-screen">
      <a
        onClick={handleGoHome}
        className="absolute top-4 right-4 bg-yellow-600 text-white hover:bg-yellow-700 font-semibold py-2 px-4 rounded-lg shadow-lg cursor-pointer transition duration-300"
      >
        Home
      </a>

      <div className="flex flex-1">
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${feedbackImage})` }} 
        ></div>

        <div className="w-1/2 flex flex-col justify-center items-center bg-yellow-50 p-8">
          <h2 className="text-3xl font-bold mb-6 text-yellow-800">Give Us Your Feedback</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-40 p-4 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Write your feedback here..."
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && (
              <p className="text-green-700 mb-4 bg-green-100 border border-green-300 p-3 rounded-lg">
                {success}
              </p>
            )}
            <button
              type="submit"
              className={`w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg transition duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600'
              }`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;

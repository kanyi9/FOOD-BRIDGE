import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import campaignImage1 from '../images/campaign1.jpg';
import campaignImage4 from '../images/campaign4.jpg';
import campaignImage2 from '../images/campaign2.webp';
import campaignImage3 from '../images/campaign3.jpg';
import axios from 'axios';

const Campaigns = () => {
  const [events, setEvents] = useState([]);
  const containerRef = useRef(null);
  const images = [campaignImage4 ,campaignImage1, campaignImage2, campaignImage3]; 

  useEffect(() => {
    axios.get('http://localhost:5000/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleVolunteerClick = (eventId) => {
    const token = localStorage.getItem('token');
    console.log('Token:', token); 
  
    if (!token) {
      console.error('No token found');
      return;
    }
  
    axios.post('http://localhost:5000/volunteer', 
      { event_id: eventId },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    .then(response => alert('Thank You For Volunteering You Will Receive An Email With All The Required Information Sent To You!'))
    .catch(error => console.error('Error volunteering:', error));
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div id="campaigns" className="min-h-screen bg flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-md">
        <h1 className="text-orange-600 text-3xl font-bold font-semibold">EVENTS</h1>
        <h2 className="text-gray-800 text-3xl font-bold">
          You can help lots of people by donating just a little.
        </h2>
        <div className="relative mt-8">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth scrollbar-hide" // Increased space-x value
          >
            {events.map((event, index) => (
              <div key={event.id} className="bg-white shadow-md rounded-md overflow-hidden flex-none w-80 flex flex-col">
                <img
                  src={images[index % images.length]} // Rotate through the images
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-gray-700 font-semibold text-lg">{event.name}</h3> {/* Increased font size */}
                  <p className="mt-2 flex-grow">{event.description}</p> {/* Added flex-grow to ensure description takes available space */}
                  <div className="mt-4">
                    <span className="text-gray-500">Location: {event.location}</span>
                    <br/>
                    <span className="text-gray-500">Date: {event.date}</span>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center border-t border-gray-200">
                  <Link to='/donation' className="bg-orange-400 text-white py-2 px-4 rounded-md">Donate</Link>
                  <button 
                    onClick={() => handleVolunteerClick(event.id)} 
                    className="bg-orange-400 text-white py-2 px-4 rounded-md">
                    Volunteer
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <button 
              className="bg-orange-300 p-3 rounded-full" 
              onClick={() => scroll('left')}
            >
              ‹
            </button>
            <button 
              className="bg-orange-300 p-3 rounded-full" 
              onClick={() => scroll('right')}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;


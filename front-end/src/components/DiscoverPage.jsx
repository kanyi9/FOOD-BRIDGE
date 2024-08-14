import React from 'react';
import { Link } from 'react-router-dom';
import discoverImage from '../images/image1.jpg'; 
import story1 from '../images/image2.jpg'; 
import story2 from '../images/image3.jpg';
import story3 from '../images/image4.jpg';
import story4 from '../images/image5.jpg';

const DiscoverPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      
      <section
        className="relative h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${discoverImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
          <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
            <Link to="/" className="text-white text-2xl font-bold hover:text-yellow-400">
              Footbridge
            </Link>
            <Link to="/home" className="text-white text-2xl font-bold hover:text-yellow-400">
              Home
            </Link>
          </div>
          <div className="text-center text-white px-6 py-8 bg-black bg-opacity-70 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Discover Our Mission</h1>
            <p className="text-lg">Learn about our success stories and how we are making a difference.</p>
          </div>
        </div>
      </section>

      <section className="py-8 px-6">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={story1} alt="Story 1" className="w-full h-60 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Empowering Local Farmers</h3>
            <p className="text-gray-700 mb-4">
              Through our agricultural training programs, we’ve empowered over 200 local farmers with sustainable farming techniques. Our initiative has not only increased their crop yields but also improved their livelihoods.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={story2} alt="Story 2" className="w-full h-60 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Building Better Schools</h3>
            <p className="text-gray-700 mb-4">
              With the help of donations and volunteers, we’ve built and renovated schools in underserved communities, providing children with a safe and conducive learning environment that fosters education and growth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={story3} alt="Story 3" className="w-full h-60 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Providing Clean Water</h3>
            <p className="text-gray-700 mb-4">
              Our clean water initiative has successfully installed water purification systems in villages that previously had no access to clean drinking water, significantly reducing waterborne diseases.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={story4} alt="Story 4" className="w-full h-60 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Supporting Refugee Families</h3>
            <p className="text-gray-700 mb-4">
              We’ve provided essential support to refugee families, including shelter, food, and educational resources, helping them rebuild their lives and integrate into new communities.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Footbridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DiscoverPage;


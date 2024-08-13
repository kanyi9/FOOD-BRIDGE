import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/backgroundVideo.mp4';

function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
          <h1 className="text-2xl font-extrabold">Footbridge</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link 
                  to="/login" 
                  className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <h1 className="text-7xl font-extrabold mt-32 animate-fadeIn">Footbridge</h1>


        <p className="mt-7 text-4xl max-w-4xl animate-slideIn">
          Together, we bridge the gap, fostering a future where humanity thrives.
        </p>

        <p className="mt-8 text-3xl font-semibold animate-slideIn">Let's Save Humanity</p>

        <Link
          to="/signup"
          className="mt-12 px-10 py-5 bg-yellow-500 text-black text-xl font-bold rounded-full hover:bg-yellow-600 transition-colors animate-bounce"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;


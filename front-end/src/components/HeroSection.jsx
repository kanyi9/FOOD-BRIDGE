import React from 'react';
import heroBackground from '../images/hero-background.jpg';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-start px-20 py-80 mt-6 w-full min-h-[920px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img loading="lazy" src={heroBackground} alt="Hero Background" className="absolute inset-0 object-cover w-full h-full opacity-70" />
      <div className="relative flex flex-col max-w-full w-[754px] max-md:mb-2.5">
        <h1 className="w-full text-8xl font-extrabold text-yellow-800 leading-[97px] max-md:text-4xl max-md:leading-10">
          Become a Life Saver <br /> For Someone
        </h1>
        <div className="mt-8 max-w-full text-lg font-medium uppercase whitespace-nowrap">
          <Link
            to="/discover"
            className="bg-yellow-500 text-white py-4 px-12 rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Discover
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

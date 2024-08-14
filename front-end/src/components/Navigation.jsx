import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 
  const navItems = ['Home', 'About Us', 'Events', 'Feedback'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToAnchor = (anchorName) => {
    const anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      window.scrollTo({
        top: anchorElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };

  const isLoggedIn = !!localStorage.getItem('token'); 

  return (
    <nav className="relative flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-white md:px-8">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-2xl font-extrabold whitespace-nowrap">FoodBridge</div>
        <button 
          className="block md:hidden px-3 py-2 text-gray-700" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`flex-col md:flex-row md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <div className="flex flex-col md:flex-row md:items-center">
          {navItems.map((item, index) => {
            const routePath = `/${item.toLowerCase().replace(/\s+/g, '-') === 'home' ? '' : item.toLowerCase().replace(/\s+/g, '-')}`;
            const isActive = location.pathname === routePath;
            const anchorName = item.toLowerCase().replace(/\s+/g, '-');

            if (item === 'Events') {
              return (
                <button
                  key={index}
                  onClick={() => scrollToAnchor('campaigns')}
                  className={`block px-3 py-2 text-lg font-medium border-b-2 transition-colors duration-300 ${
                    isActive ? 'text-orange-500 border-orange-500' : 'text-gray-700 hover:text-gray-900 hover:border-gray-900'
                  }`}
                >
                  {item}
                </button>
              );
            } else if (item === 'Feedback') {
              return (
                <Link
                  key={index}
                  to="/feedback"
                  className={`block px-3 py-2 text-lg font-medium border-b-2 transition-colors duration-300 ${
                    isActive ? 'text-orange-500 border-orange-500' : 'text-gray-700 hover:text-gray-900 hover:border-gray-900'
                  }`}
                >
                  {item}
                </Link>
              );
            } else {
              return (
                <Link
                  key={index}
                  to={routePath}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAnchor(anchorName);
                  }}
                  className={`block px-3 py-2 text-lg font-medium border-b-2 transition-colors duration-300 ${
                    isActive ? 'text-orange-500 border-orange-500' : 'text-gray-700 hover:text-gray-900 hover:border-gray-900'
                  }`}
                >
                  {item}
                </Link>
              );
            }
          })}
        </div>
        <Link to="/donation" className="mt-4 md:mt-0 px-6 py-2 text-white uppercase whitespace-nowrap bg-orange-300 rounded-[34px]">
          Donate
        </Link>
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="mt-4 md:mt-0 px-6 py-2 text-white uppercase whitespace-nowrap bg-gray-700 rounded-[34px]"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="mt-4 md:mt-0 px-6 py-2 text-white uppercase whitespace-nowrap bg-gray-700 rounded-[34px]">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import LoginPage from './components/Login';
import SignupPage from './components/SignUp';
import DonationPage from './components/DonationPage';
import ContactUs from './components/ContactUs';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;

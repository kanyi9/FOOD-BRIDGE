import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import LoginPage from './components/Login';
import SignupPage from './components/SignUp';
import DonationPage from './components/DonationPage';
import Home from './components/Home';
import FeedbackPage from './components/FeedbackPage';
import DiscoverPage from './components/DiscoverPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/discover" element={<DiscoverPage />} /> 
      </Routes>
    </div>
  );
}

export default App;

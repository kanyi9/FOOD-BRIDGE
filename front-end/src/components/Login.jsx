import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import appleLogo from '../images/apple-logo.svg';
import googleLogo from '../images/google-logo.svg';
import backgroundImage from '../images/login-background.png'; 
import axios from 'axios';

function InputField({ label, placeholder, type = 'text', value, onChange }) {
  return (
    <div className="flex flex-col mt-4 w-full">
      <label className="text-sm font-medium text-gray-800 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="py-3 px-4 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        aria-label={label}
      />
    </div>
  );
}

function Button({ text, className }) {
  return (
    <button className={`w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-700 transition-colors ${className}`}>
      {text}
    </button>
  );
}

function SocialSignIn({ provider }) {
  const iconSrc = provider === 'Google' ? googleLogo : appleLogo;

  return (
    <button className="flex items-center justify-center w-full py-3 mt-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
      <img src={iconSrc} alt={`${provider} logo`} className="w-6 h-6 mr-2" />
      <span className="text-sm">Sign in with {provider}</span>
    </button>
  );
}

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/Home'); 
    } catch (error) {
      console.error('Login failed:', error.response?.data?.error || error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative flex flex-col w-full max-w-lg bg-white bg-opacity-80 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Welcome Back!</h1>
        <p className="text-base text-gray-600 mb-6 text-center">Enter your credentials to access your account.</p>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <InputField
            label="Email address"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/reset-password" className="text-sm text-blue-600 mt-2 self-end hover:underline">
            Forgot Password
          </a>
          <label className="flex items-center mt-4 text-sm text-gray-700">
            <input type="checkbox" className="h-4 w-4 text-yellow-600 rounded border-gray-300 focus:ring-yellow-500" />
            <span className="ml-2">Remember Me</span>
          </label>
          <Button text="Login" className="mt-6" />
        </form>
        <p className="text-center text-gray-700 mt-6 text-sm">
          Don't have an account? <Link to="/signup" className="text-yellow-600 font-semibold hover:underline">Create One</Link>
        </p>
        <div className="flex flex-col items-center mt-8">
          <span className="text-gray-500 text-sm">Or sign in with</span>
          <div className="flex gap-4 mt-4 w-full">
            <SocialSignIn provider="Google" />
            <SocialSignIn provider="Apple" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
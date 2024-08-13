import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import appleLogo from '../images/apple-logo.svg';
import googleLogo from '../images/google-logo.svg';
import backgroundImage from '../images/login-background.png';

function InputField({ label, placeholder, type = 'text', value, onChange }) {
  return (
    <div className="flex flex-col mt-5 w-full font-medium">
      <label className="self-start text-sm text-gray-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="py-2.5 px-3 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        aria-label={label}
      />
    </div>
  );
}

function Button({ text }) {
  return (
    <div className="mt-8">
      <button className="w-full py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors">
        {text}
      </button>
    </div>
  );
}

function SocialSignIn({ provider, iconSrc }) {
  return (
    <button className="flex items-center justify-center w-full py-2 mt-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
      <img src={iconSrc} alt={`${provider} logo`} className="w-6 h-6 mr-2" />
      <span>Sign in with {provider}</span>
    </button>
  );
}

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate('/login');  
      } else {
        setError(result.error || 'Something went wrong');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Image Section */}
      <div className="w-1/2 hidden md:block">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Signup Form Section */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-white px-10 py-12 md:px-16">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Join Us Now</h1>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <div className="flex items-center mt-5">
              <input type="checkbox" className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" />
              <label className="ml-2 text-gray-700 text-sm">
                I agree to the <a href="/terms-and-conditions" className="underline">terms & policy</a>
              </label>
            </div>
            <Button text="Signup" />
          </form>
          <div className="relative flex justify-center mt-8">
            <span className="bg-white px-2 text-gray-500">Or</span>
          </div>
          <div className="mt-4">
            <SocialSignIn provider="Google" iconSrc={googleLogo} />
            <SocialSignIn provider="Apple" iconSrc={appleLogo} />
          </div>
          <p className="mt-8 text-center text-gray-700">
            Have an account? <Link to="/login" className="text-yellow-500 font-semibold">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/api/auth/register', {
        // fullname,
        email,
        username,
        password,
      });
      console.log(response.data);
      toast.success('Registration successful! Redirecting to login page...', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Optionally, redirect or show a success message
       navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('Registration failed. Please try again.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center bg-[url('/img/bg.jpg')]">
      <div className="register-container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <div className="text-center mb-4">
          <img src="../img/logo.png" alt="NutriMed Logo" className="mx-auto mb-4" style={{ width: '150px' }} />
          <h2 className="text-xl font-bold">Create an Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="block w-full px-3 py-2 mb-4 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 mb-4 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Choose a Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-3 py-2 mb-4 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Choose a Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-3 py-2 mb-4 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;

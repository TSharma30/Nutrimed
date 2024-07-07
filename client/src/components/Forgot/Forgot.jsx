import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forgot-password', { email });
      console.log(response.data);
      toast.success('Password reset email sent! Please check your email.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Optionally, redirect to a confirmation page or display a message
    } catch (error) {
      console.error('Error sending password reset email:', error);
      toast.error('Something went wrong. Please try again later.', {
        position: 'top-right',
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('/img/bg.jpg')]">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl text-center mb-4 font-bold">Forgot Password?</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Reset Email
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Forgot;

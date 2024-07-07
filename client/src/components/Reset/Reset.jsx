// Reset.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reset = ({ history, match }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match. Please try again.');
      return;
    }

    try {
      const response = await axios.post(`/api/reset-password/${match.params.token}`, {
        password,
      });
      console.log(response.data);
      toast.success('Password reset successfully! Redirecting to login page...');
      history.push('/');
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Failed to reset password. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('/img/bg.jpg')]">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl text-center mb-4 font-bold">Reset Password</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset Password
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Reset;

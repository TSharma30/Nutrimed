import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext

const LoginForm = () => {
  const { updateAuthStatus, updateAccessToken } = useContext(AuthContext); // Destructure updateAuthStatus and updateAccessToken from AuthContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/api/auth/login', {
        username,
        password,
      },{
        withCredentials:true
      });
      
      const { token } = response.data; // Assuming your server sends back a token
      console.log(response.data)
      // Update authentication status and token using context
      updateAuthStatus(true);
      updateAccessToken(token); // Update accessToken in context

      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      localStorage.setItem('accessToken', token); // Store accessToken in localStorage

      toast.success('Login successful! Redirecting to dashboard...', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate('/'); // Redirect to dashboard page after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Invalid username or password. Please try again.', {
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
        <img src="../img/logo.png" alt="NutriMed Logo" className="mx-auto mb-4 " style={{ width: '150px', height:'100px' }} />
        <h2 className="text-2xl text-center mb-4 font-bold">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;

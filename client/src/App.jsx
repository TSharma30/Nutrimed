// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import RegisterForm from '../src/components/RegisterForm/RegisterForm';
import LoginForm from '../src/components/LoginForm/LoginForm';
import HealthForm from '../src/components/HealthForm/HealthForm';
import DietPlan from '../src/components/DietPlan/DietPlan';
import HomePage from "./components/HomePage/HomePage"
import UserPage from './components/UserPage/UserPage';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Cursor from './components/Cursor/Cursor';
import Forgot from './components/Forgot/Forgot';
import "../src/App.css"
import Reset from './components/Reset/Reset';

const App = () => {
  return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <Router>
        <div className="App cursor-none">
          <Cursor/>
          <Navbar /> {/* Navbar now uses AuthContext */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/HealthForm" element={<HealthForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/diet" element={<DietPlan />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/reset-password" element={<Reset />} />
            {/* <Route path="/user" element={<UserPage />} /> */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

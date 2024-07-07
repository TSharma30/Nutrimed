import React, { createContext, useState, useEffect } from 'react';

// Create a new context
export const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  // Function to update authentication status and localStorage
  const updateAuthStatus = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', JSON.stringify(status));
  };

  // Function to update accessToken in context and localStorage
  const updateAccessToken = (token) => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
  };

  // Effect to check authentication status on app startup
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedToken = localStorage.getItem('accessToken');
    if (storedAuth && storedToken) {
      setIsAuthenticated(JSON.parse(storedAuth));
      setAccessToken(storedToken);
      // Fetch user info if authenticated (replace with your actual API call)
      // try {
      //   const response = await axios.get('http://localhost:8800/api/userinfo');
      //   setUserName(response.data.username);
      // } catch (error) {
      //   console.error('Error fetching user info:', error);
      // }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, updateAuthStatus, updateAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

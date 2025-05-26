// ProtectedRoute.js
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { userName, id } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName || !id) {
      navigate('/login'); // Redirect if not logged in
    }
  }, [userName, id, navigate]);

  if (!userName || !id) {
    return null; // Or a spinner/loading if you like
  }

  return children;
};

export default ProtectedRoute;

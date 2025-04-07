import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // Grab token from query param or local storage or however you want
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const validToken = process.env.REACT_APP_ACCESS_TOKEN;

  if (token === validToken) {
    return children;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
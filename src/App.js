import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Footer from "./components/Footer";
import Header from "./components/Header";

import { AllRoutes } from "./routes/AllRoutes";

import "../src/app.css"

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Toaster position="top-center" />
      {/* <ScrollToTop /> */}
      <Header />
     
        <AllRoutes />
      <Footer />
      
    </div>
  );
}

export default App;
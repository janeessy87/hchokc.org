import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from './components/extras/ScrollToTop';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter
    
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
    >
       <ScrollToTop />
   <App  />
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results 
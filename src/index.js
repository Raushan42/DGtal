import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'remixicon/fonts/remixicon.css'


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


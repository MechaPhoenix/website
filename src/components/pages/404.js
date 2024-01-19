// NotFoundPage.jsx

import React from 'react';
import '../css/404.css'
const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Page Not Found</p>
      <div className="circuit-board">
        <div className="circuit-line horizontal"></div>
        <div className="circuit-line vertical"></div>
        <div className="circuit-line diagonal"></div>
        <div className="circuit-dot dot1"></div>
        <div className="circuit-dot dot2"></div>
        <div className="circuit-dot dot3"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;

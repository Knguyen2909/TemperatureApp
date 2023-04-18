import React, { useState } from "react";
import "../styles.css";

function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');

  function handleClick() {
    setCurrentPage('TempApp');
  }

  return (
    <div className="app-container">
      {currentPage === 'home' ? (
        <>
          <div className="temperature-display-container">
            <div className="temperature-display neutral">0°C</div>
          </div>
          <div className="start-button-container">
            <div className="start-button" onClick={handleClick}>
              Start<span>&#10132;</span>
            </div>
          </div>
        </>
      ) : (
        <div className="other-page-container">
          <h1>Other Page</h1>
          <button onClick={() => setCurrentPage('home')}>Go back</button>
        </div>
      )}
    </div>
  );
}

export default HomePage;

import React, { useState } from "react";
import "./Loginstyles.css";

function Login() {
  // useState variable created as currentPage and set as "home"
  const [currentPage, setCurrentPage] = useState('home');

  // handles click events by setting the current page and navaigates to Temperature Control component
  function handleClick() {
    setCurrentPage('TempApp');
    window.location = "/TemperatureControl"
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        {/* uses form to get the user input for the username and password*/}
        <form>
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
        </form>
      </div>

      {/* buttons to start heating and display an alert when clicked*/}
      <div className="start-button-container">
        <div className="start-button" onClick={handleClick}>
          Login<span> </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

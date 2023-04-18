import React, { useState } from "react";
import "./Loginstyles.css";

function Login() {
  const [currentPage, setCurrentPage] = useState('home');

  function handleClick() {
    setCurrentPage('TempApp');
    window.location = "/TemperatureControl"
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
      <form>
        <input type="text" placeholder="Username"/>
        <br/>
        <input type="password" placeholder="Password"/>
      </form>
      </div>
      <div className="start-button-container">
        <div className="start-button" onClick={handleClick}>
          Login<span> </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

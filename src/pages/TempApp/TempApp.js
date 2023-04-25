import React, { useState } from "react";
import "./TempAppstyles.css";

const TempApp = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 40) return;

    const newTemperature = temperatureValue + 1;

    setTemperatureValue(newTemperature);
    if (newTemperature >= 35 && newTemperature <= 40) {
      setTemperatureColor("hot");
    } else if (newTemperature >= 20 && newTemperature <= 34) {
      setTemperatureColor("warm");
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;

    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if (newTemperature <= 19 && newTemperature >= 10) {
      setTemperatureColor("cold");
    } else if (newTemperature <= 9) {
      setTemperatureColor("freezing");
    }
  };

  const [currentPage, setCurrentPage] = useState('home');

  function handleClick() {
    setCurrentPage('');
    window.location = "/ScheduleManager"
  }
  function alertTemp() {
    alert("The heating has started")
  };
  function alertOff() {
    alert("The heating is off")
  }

  return (
    <div className="app-container">
      <div class="start-button-container">
      <div className="plus-button" onClick={handleClick}>
          Schedule <span> </span>
        </div>
        <div className="plus-button">Manual <span> </span>
        </div>
        <div className="plus-button" onClick={alertOff}>
          Off <span> </span>
        </div>
      </div>

      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
        
      </div>
      <div class="start-button" onClick={alertTemp}>
          Start<span> </span>
        </div>

      { }
      
      <div className="button-container">
        
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );

};

export default TempApp;


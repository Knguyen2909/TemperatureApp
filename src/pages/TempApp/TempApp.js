import React, { useState } from "react";
import "./TempAppstyles.css";

const TempApp = () => {
  // useState variables are defined using temperature value and colour
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  // the temperature value increases by 1 and the useState value is updated
  const increaseTemperature = () => {
    if (temperatureValue === 40) return; // max temperature is 40 

    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    // the temperature colour is updated based on new temperature value
    if (newTemperature >= 35 && newTemperature <= 40) {
      setTemperatureColor("hot");
    } else if (newTemperature >= 20 && newTemperature <= 34) {
      setTemperatureColor("warm");
    }
  };

  // the temperature value decreases by 1 and the useState value is updated
  const decreaseTemperature = () => {
    if (temperatureValue === 0) return; // minumum value is 0

    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);

    // the temperature colour is updated based on new temperature value
    if (newTemperature <= 19 && newTemperature >= 10) {
      setTemperatureColor("cold");
    } else if (newTemperature <= 9) {
      setTemperatureColor("freezing");
    }
  };

  // the useState variable is set for the current page as "home"
  const [currentPage, setCurrentPage] = useState('home');

  // handles click events by setting the current page and navaigates to ScheduleManager
  function handleClick() {
    setCurrentPage('');
    window.location = "/ScheduleManager";
  }

  // displays an alert when the heating is turned on
  function alertTemp() {
    alert("The heating has started");
  }

  // displays an alert when the heating is turned off
  function alertOff() {
    alert("The heating is off");
  }

  // renders the temperature app component
  return (
    <div className="app-container">
      <div class="start-button-container">
        {/* Buttons for scheduling, manual page, and turning off the heat*/}
        <div className="plus-button" onClick={handleClick}>
          Schedule <span> </span>
        </div>
        <div className="plus-button">Manual <span> </span>
        </div>
        <div className="plus-button" onClick={alertOff}>
          Off <span> </span>
        </div>
      </div>

      {/* temperature value and colour is displayed*/}
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>

      {/* buttons to start heating and display an alert when clicked*/}
      <div class="start-button" onClick={alertTemp}>
        Start<span> </span>
      </div>

      {/* Button to increase and decrease the temperature*/}
      <div className="button-container">

        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );

};

export default TempApp;


import React, { useState } from "react";
import ScheduleSelector from 'react-schedule-selector'
import "./ScheduleManagerstyles.css";


function ScheduleManager() {

  // useState variables are defined using the schedule method from ScheduleSelector, and as the current page
  const [schedule, setSchedule] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  // handles click events by setting the current page and navaigates to ScheduleManager
  function handleClick() {
    setCurrentPage('TempApp');
    window.location = "/TemperatureControl"
  }

  // displays an alert when the heating is turned on
  function alertTemp() {
    alert("The schedule has been confirmed")
  }

  // renders the schedule manager component
  return (
    <div className="app-container">

      {/* renders the ScheduleSelector component*/}
      <ScheduleSelector
        selection={schedule}
        numDays={7}
        minTime={1}
        maxTime={24}
        hourlyChunks={1}
        dateFormat="dd"
        onChange={setSchedule}
      />

      {/* button to return abck to the temperature app component*/}
      <div className="back-button-container">
        <div className="back-button" onClick={handleClick}>
          Back<span> </span>
        </div>

        <div className="temperature-display-container">

          {/* the schedule manager is displayed*/}
          <div className="schedule-manager">
            <div className="top-border"></div>
          </div>
        </div>
      </div>

      {/* Button to confirm the schedule and alert the user*/}
      <div className="start-button-container">
        <button className="start-button" onClick={alertTemp}>Confirm</button>
      </div>
    </div>
  )
}

export default ScheduleManager;

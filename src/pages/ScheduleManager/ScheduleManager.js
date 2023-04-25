import React, { useState } from "react";
import ScheduleSelector from 'react-schedule-selector'
import "./ScheduleManagerstyles.css";


function ScheduleManager() {
  const [schedule, setSchedule] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  function handleClick() {
    setCurrentPage('TempApp');
    window.location = "/TemperatureControl"
  }

  function alertTemp() {
    alert("The schedule has been confirmed")
  }

  return (
    <div className="app-container">
                <ScheduleSelector
            selection={schedule}
            numDays={7}
            minTime={1}
            maxTime={24}
            hourlyChunks={1}
            dateFormat="dd"
            onChange={setSchedule}
          />
      <div className="back-button-container">
        <div className="back-button" onClick={handleClick}>
          Back<span> </span>
        </div>
        
        <div className="temperature-display-container">
          <div className="schedule-manager">
            <div className="top-border"></div>
          </div>

        </div>
        
      </div>
      <div className="start-button-container">
        <button className="start-button" onClick={alertTemp}>Confirm</button>
      </div>
      
    </div>
    
  )
}

export default ScheduleManager;

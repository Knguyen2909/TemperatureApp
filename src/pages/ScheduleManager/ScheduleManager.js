import React, { useState } from "react";
import ScheduleSelector from 'react-schedule-selector'
import "./ScheduleManagerstyles.css";


function ScheduleManager() {
  const [schedule, setSchedule] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  function handleTempClick() {
    setCurrentPage('TempApp');
    window.location = "/TemperatureControl"
  }

  function handleTestingClick() {
    setCurrentPage('Testing');
    window.location = "/Testing"
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
        <div className="back-button" onClick={handleTempClick}>
          Back<span> </span>
        </div>
        
        <div className="temperature-display-container">
          
          <div className="schedule-manager">
            <div className="top-border"></div>
          </div>

        </div>
        
      </div>
      <div className="start-button-container">
      <div className="start-button" onClick={handleTestingClick}>
          Confirm<span> </span>
        </div>
      </div>
      
    </div>
    
  )
}

export default ScheduleManager;

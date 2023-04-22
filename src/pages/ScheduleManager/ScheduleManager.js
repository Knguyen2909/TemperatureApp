import React from "react";
import ScheduleSelector from 'react-schedule-selector'
import "./ScheduleManagerstyles.css";


class ScheduleManager extends React.Component {
  state = { schedule: [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }



  render() {

    function alertTemp() {
      alert("The settings have been confirmed")
    };

    return (
      <div className="app-container">
 
        <div className="temperature-display-container">
          
          <div>
            
          <div className="top-border"> </div>
            <ScheduleSelector
              selection={this.state.schedule}
              numDays={7}
              minTime={1}
              maxTime={24}
              hourlyChunks={1}
              dateFormat="dd"
              onChange={this.handleChange}
            />
            
          </div>
          
        </div>
        <div className="top-border"> </div>
        <div className="start-button">
          
          <start-button onClick={alertTemp}>Confirm</start-button>
        </div>
      </div>
    )
  }
}

export default ScheduleManager;
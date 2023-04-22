import React from "react";
import ScheduleSelector from 'react-schedule-selector'

class ScheduleManager extends React.Component {
  state = { schedule : [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  render() {
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={7}
        minTime={1}
        maxTime={24}
        hourlyChunks={1}
        onChange={this.handleChange}
      />
    )
  }
}

export default ScheduleManager;
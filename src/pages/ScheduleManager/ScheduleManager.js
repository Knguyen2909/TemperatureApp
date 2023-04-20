import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Calendar, Agenda } from 'react-native-calendar-timetable';

const ScheduleManager = () => {
  const events = [
    {
      title: 'Event 1',
      start: '2023-04-26 10:00:00',
      end: '2023-04-26 11:00:00',
      color: '#bce6eb',
    },
    {
      title: 'Event 2',
      start: '2023-04-27 14:00:00',
      end: '2023-04-27 16:00:00',
      color: '#ffe0b2',
    },
    {
      title: 'Event 3',
      start: '2023-04-28 09:30:00',
      end: '2023-04-28 10:30:00',
      color: '#ffccbc',
    },
  ];

  return (
    <View style={styles.container}>
      <Calendar
        events={events}
        onEventPress={(event) => console.log(event)}
        dayFormat="ddd"
        headerDateFormat="MMM DD"
      />
      <Agenda events={events} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScheduleManager;
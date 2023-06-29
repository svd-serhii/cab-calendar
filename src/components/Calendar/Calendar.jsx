import React from 'react';
import { CalendarStyled } from './Calendar.styled';

export const Calendar = () => {
  const srcUrl = process.env.REACT_APP_CALENDAR_URL;

  return <CalendarStyled src={srcUrl} frameborder="0" />;
};

export default Calendar;

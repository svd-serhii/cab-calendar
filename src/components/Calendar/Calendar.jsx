import React from 'react';
import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

const calendarId = process.env.REACT_APP_CALENDAR_ID;
const key = process.env.REACT_APP_KEY;

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      googleCalendarApiKey={key}
      events={{
        googleCalendarId: `${calendarId}`,
      }}
      allDaySlot={false}
      initialView="timeGridWeek"
      slotDuration={'01:00:00'}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={true}
      nowIndicator={true}
    />
  );
};

export default Calendar;

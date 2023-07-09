import React from 'react';
import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarStyled, Wrapper } from './Calendar.styled';
import SideBar from '../SideBar/SideBar';

const Calendar = () => {
  const calendarId = process.env.REACT_APP_CALENDAR_ID;
  const key = process.env.REACT_APP_KEY;

  return (
    <>
      <Wrapper>
        <SideBar />
        <CalendarStyled>
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
              className: 'gcal-event',
              extendedProps: 'extendedProperties',
            }}
            allDaySlot={false}
            initialView="dayGridMonth"
            slotDuration={'01:00:00'}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            timeZone="Ukraine/Kyiv"
            titleFormat={{
              month: 'long',
              day: '2-digit',
            }}
            slotMinTime="09:00:00"
            slotMaxTime="19:00:00"
          />
        </CalendarStyled>
      </Wrapper>
    </>
  );
};

export default Calendar;

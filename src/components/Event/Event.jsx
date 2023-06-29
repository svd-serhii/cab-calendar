import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Calendar from '../Calendar/Calendar';

export const Event = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [region, setRegion] = useState('');
  const [branch, setBranch] = useState('');
  const [loan, setLoan] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const calendarId = process.env.REACT_APP_CALENDAR_ID;

  const session = useSession();
  const supabase = useSupabaseClient();

  async function createCalendarEvent() {
    console.log('Creating calendar event');
    const event = {
      summary: name,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
      end: {
        dateTime: end.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
      extendedProperties: {
        private: {
          branch: branch,
          region: region,
          carBrand: brand,
          carLoan: loan,
        },
      },
    };
    await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + session.provider_token, // Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
        toast.success('Event created, check your Google Calendar!');
      });
  }

  return (
    <div>
      <Calendar />
    </div>
  );
};

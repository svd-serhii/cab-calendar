import React, { useState } from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { toast } from 'react-toastify';
import {
  FormContainer,
  ErrorContainer,
  FieldContainer,
  FormTitle,
  EventBtn,
  DateTitle,
  FieldStyled,
  DatePickerContainer,
} from './EventForm.styled';

const EventForm = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [region, setRegion] = useState('');
  const [branch, setBranch] = useState('');
  const [loan, setLoan] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const session = useSession();

  const initialValues = {
    name: '',
    brand: '',
    region: '',
    branch: '',
    loan: '',
    start: new Date(),
    end: new Date(),
  };

  const onSubmit = values => {
    console.log('onSubmit', values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Прізвище клієнта обов'язкове!"),
    brand: Yup.string().required("Назва марки авто обов'язкове!"),
    region: Yup.string().required("Назва міста обов'язкове!"),
    branch: Yup.string().required("Назва відділення обов'язкове!"),
    loan: Yup.string().required("Сума кредиту обов'язкова!"),
    // start: Yup.date().required("Час призначення угоди обов'язковий!"),
    // end: Yup.date().required("Час закінчення угоди обов'язковий!"),
  });

  async function createCalendarEvent() {
    console.log('Creating calendar event');
    const event = {
      summary: name,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      extendedProperties: {
        private: {
          brand: brand,
          region: region,
          branch: branch,
          loan: loan,
        },
      },
    };
    await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + session.provider_token,
        },
        body: JSON.stringify(event),
      }
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
        toast.success('Угоду призначено, перевірте свій Google Calendar!');
      });
  }

  return (
    <FormContainer>
      <FormTitle>Форма призначення кредитної угоди</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <FieldContainer>
              <FieldStyled
                type="text"
                id="name"
                name="name"
                placeholder="Прізвище клієнта"
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="name" component="span" />
            </ErrorContainer>

            <FieldContainer>
              <FieldStyled
                type="text"
                id="brand"
                name="brand"
                placeholder="Назва марки авто"
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="brand" component="span" />
            </ErrorContainer>

            <FieldContainer>
              <FieldStyled
                type="text"
                id="region"
                name="region"
                placeholder="Назва міста"
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="region" component="span" />
            </ErrorContainer>

            <FieldContainer>
              <FieldStyled
                type="text"
                id="branch"
                name="branch"
                placeholder="Номер відділення банку"
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="branch" component="span" />
            </ErrorContainer>

            <FieldContainer>
              <FieldStyled
                type="text"
                id="loan"
                name="loan"
                placeholder="Сума кредиту"
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="loan" component="span" />
            </ErrorContainer>
            <DatePickerContainer>
              <DateTitle>Початок угоди</DateTitle>

              <DateTimePicker value={start} onChange={setStart} />

              <DateTitle>Кінець угоди</DateTitle>

              <DateTimePicker value={end} onChange={setEnd} />
              <EventBtn type="submit">Призначити</EventBtn>
            </DatePickerContainer>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default EventForm;

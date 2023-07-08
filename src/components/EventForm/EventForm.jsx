import React from 'react';
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
  const calendarId = process.env.REACT_APP_CALENDAR_ID;
  const session = useSession();

  const initialValues = {
    name: '',
    brand: '',
    region: '',
    branch: '',
    loan: '',
    start: new Date(),
    end: new Date(),
    eventDescription: '',
  };

  // const onSubmit = values => {
  //   console.log('onSubmit', values);
  // };

  const validationSchema = Yup.object({
    name: Yup.string().required("Прізвище клієнта обов'язкове!"),
    brand: Yup.string().required("Назва марки авто обов'язкове!"),
    region: Yup.string().required("Назва міста обов'язкове!"),
    branch: Yup.string().required("Назва відділення обов'язкове!"),
    loan: Yup.string().required("Сума кредиту обов'язкова!"),
    start: Yup.date(),
    end: Yup.date(),
  });

  const createCalendarEvent = async (values, { isSubmitting, resetForm }) => {
    console.log('Creating calendar event');
    const event = {
      summary: values.name,
      description: values.eventDescription,
      start: {
        dateTime: values.start.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: values.end.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      extendedProperties: {
        shared: {
          brand: values.brand,
          region: values.region,
          branch: values.branch,
          loan: values.loan,
        },
      },
    };
    await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
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
        if (data.error) {
          toast.error(data.error.message);
        } else {
          toast.success('Угоду призначено, перевірте календар!');
        }
      });

    resetForm();
  };

  return (
    <FormContainer>
      <FormTitle>Форма призначення кредитної угоди</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={createCalendarEvent}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          resetForm,
        }) => (
          <Form>
            <FieldContainer
              error={errors.name && touched.name}
              style={{
                borderColor: errors.name && touched.name ? '#F43F5E' : null,
              }}
            >
              <FieldStyled
                type="text"
                id="name"
                name="name"
                placeholder="Прізвище клієнта"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="name" component="span" />
            </ErrorContainer>

            <FieldContainer
              error={errors.brand && touched.brand}
              style={{
                borderColor: errors.brand && touched.brand ? '#F43F5E' : null,
              }}
            >
              <FieldStyled
                type="text"
                id="brand"
                name="brand"
                placeholder="Назва марки авто"
                value={values.brand}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="brand" component="span" />
            </ErrorContainer>

            <FieldContainer
              error={errors.region && touched.region}
              style={{
                borderColor: errors.region && touched.region ? '#F43F5E' : null,
              }}
            >
              <FieldStyled
                type="text"
                id="region"
                name="region"
                placeholder="Назва міста"
                value={values.region}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="region" component="span" />
            </ErrorContainer>

            <FieldContainer
              error={errors.branch && touched.branch}
              style={{
                borderColor: errors.branch && touched.branch ? '#F43F5E' : null,
              }}
            >
              <FieldStyled
                type="text"
                id="branch"
                name="branch"
                placeholder="Номер відділення банку"
                value={values.branch}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="branch" component="span" />
            </ErrorContainer>

            <FieldContainer
              error={errors.loan && touched.loan}
              style={{
                borderColor: errors.loan && touched.loan ? '#F43F5E' : null,
              }}
            >
              <FieldStyled
                type="text"
                id="loan"
                name="loan"
                placeholder="Сума кредиту"
                value={values.loan}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldContainer>
            <ErrorContainer>
              <ErrorMessage name="loan" component="span" />
            </ErrorContainer>
            <DatePickerContainer>
              <DateTitle>Початок угоди</DateTitle>

              <DateTimePicker value={values.start} onChange={handleChange} />

              <DateTitle>Кінець угоди</DateTitle>

              <DateTimePicker value={values.end} onChange={handleChange} />
              <EventBtn type="submit">Призначити</EventBtn>
            </DatePickerContainer>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default EventForm;

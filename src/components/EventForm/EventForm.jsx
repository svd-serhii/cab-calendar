import React, { useState } from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import DateTimePicker from 'react-datetime-picker';
import { toast } from 'react-toastify';

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
    <div>
      <h2>Форма призначення кредитної угоди</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Прізвище клієнта"
              />
              <div>
                <ErrorMessage name="name" component="span" />
              </div>
            </div>
            <div>
              <Field
                type="text"
                id="brand"
                name="brand"
                placeholder="Назва марки авто"
              />
              <div>
                <ErrorMessage name="brand" component="span" />
              </div>
            </div>

            <div>
              <Field
                type="text"
                id="region"
                name="region"
                placeholder="Назва міста угоди"
              />
              <div>
                <ErrorMessage name="region" component="span" />
              </div>
            </div>

            <div>
              <Field
                type="text"
                id="branch"
                name="branch"
                placeholder="Номер відділення банку"
              />
              <div>
                <ErrorMessage name="branch" component="span" />
              </div>
            </div>

            <div>
              <Field
                type="text"
                id="loan"
                name="loan"
                placeholder="Сума кредиту"
              />
              <div>
                <ErrorMessage name="loan" component="span" />
              </div>
            </div>

            <p>Start of your event</p>
            {/* <Field type="date" id="start" name="start"> */}
            <DateTimePicker value={start} onChange={setStart} />
            {/* </Field> */}

            <p>End of your event</p>
            {/* <Field type="date" id="start" name="end"> */}
            <DateTimePicker value={end} onChange={setEnd} />
            {/* </Field> */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventForm;

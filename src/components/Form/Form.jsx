import { useFormik } from 'formik';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const Form = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [region, setRegion] = useState('');
  const [branch, setBranch] = useState('');
  const [loan, setLoan] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      brand: '',
      region: '',
      branch: '',
      loan: '',
      start: new Date(),
      end: new Date(),
    },
    onSubmit: values => console.log('form data', values),
  });

  //   console.log('form values', formik.values);

  return (
    <>
      <div>
        <h2>Form</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="brand">Car Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            onChange={formik.handleChange}
            value={formik.values.brand}
          />
          <label htmlFor="region">Region</label>
          <input
            type="text"
            id="region"
            name="region"
            onChange={formik.handleChange}
            value={formik.values.region}
          />
          <label htmlFor="branch">Bank branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            onChange={formik.handleChange}
            value={formik.values.branch}
          />
          <label htmlFor="loan">Car Loan</label>
          <input
            type="text"
            id="loan"
            name="loan"
            onChange={formik.handleChange}
            value={formik.values.loan}
          />

          <p>Start of your event</p>
          <DateTimePicker
            onChange={formik.handleChange}
            value={formik.values.start}
          />
          <p>End of your event</p>
          <DateTimePicker
            onChange={formik.handleChange}
            value={formik.values.end}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;

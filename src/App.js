import { useSession, useSessionContext } from '@supabase/auth-helpers-react';
import Auth from './components/Auth/Auth';
import { Event } from './components/Event/Event';
import { Loader } from './components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import Calendar from './components/Calendar/Calendar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Auth />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} theme="light" />
    </>
  );
}

export default App;

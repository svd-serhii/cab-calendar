import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage';
import Auth from './components/Auth/Auth';
import Calendar from './components/Calendar/Calendar';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Loader } from './components/Loader/Loader';

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Auth />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="calendar" element={<Calendar />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer autoClose={2000} theme="light" />
    </>
  );
}

export default App;

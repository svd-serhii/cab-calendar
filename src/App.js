import { useSession, useSessionContext } from '@supabase/auth-helpers-react';
import Auth from './components/Auth/Auth';
import { Event } from './components/Event/Event';
import { Loader } from './components/Loader/Loader';
import Container from './components/Container/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const session = useSession();
  const { isLoading } = useSessionContext();

  return (
    <>
      <Container>
        {isLoading ? <Loader /> : session ? <Event /> : <Auth />}

        <ToastContainer autoClose={2000} theme="light" />
      </Container>
    </>
  );
}

export default App;

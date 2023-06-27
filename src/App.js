import { useSession, useSessionContext } from '@supabase/auth-helpers-react';
import { Auth } from './components/Auth/Auth';
import { Event } from './components/Event/Event';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './components/Loader/Loader';

function App() {
  const session = useSession();
  const { isLoading } = useSessionContext();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App">{session ? <Event /> : <Auth />}</div>
      )}

      <ToastContainer />
    </>
  );
}

export default App;

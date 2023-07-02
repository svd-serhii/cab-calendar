import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { useSession, useSessionContext } from '@supabase/auth-helpers-react';
import { Loader } from '../Loader/Loader';

const PrivateRoute = () => {
  const { isLoading } = useSessionContext();
  const session = useSession();

  if (isLoading) {
    return <Loader />;
  }

  if (!session) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

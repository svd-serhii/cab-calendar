import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { useSession, useSessionContext } from '@supabase/auth-helpers-react';
import { Loader } from '../Loader/Loader';

const PublicRoute = () => {
  const { isLoading } = useSessionContext();
  const session = useSession();

  if (isLoading && session) {
    return <Loader />;
  }

  if (session) {
    return <Navigate to="/calendar" />;
  }

  return <Outlet />;
};

export default PublicRoute;

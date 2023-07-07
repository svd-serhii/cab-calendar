import React from 'react';
import { AuthBtn, ContentWrapper } from './Auth.styled';
import { toast } from 'react-toastify';
import {
  useSupabaseClient,
  useSessionContext,
  useSession,
} from '@supabase/auth-helpers-react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const { isLoading } = useSessionContext();
  const navigate = useNavigate();
  console.log(session);
  console.log(isLoading);

  async function googleSignIn() {
    const response = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar',
      },
    });
    if (response.error) {
      toast.error('Error logging in to Google provider with Supabase');
      console.log(response.error);
    }
    if (!response.error) {
      toast.success('Ви авторизувались на сайті!');
    }
    navigate('/');
  }

  return (
    <>
      <ContentWrapper>
        <AuthBtn type="button" onClick={googleSignIn}>
          Авторизуватись через Google
        </AuthBtn>
      </ContentWrapper>
    </>
  );
};

export default Auth;

import React from 'react';
import { AuthBtn, ContentWrapper } from './Auth.styled';
import { toast } from 'react-toastify';
import {
  useSupabaseClient,
  useSessionContext,
  useSession,
} from '@supabase/auth-helpers-react';

const Auth = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const { isLoading } = useSessionContext();
  console.log(session);
  console.log(isLoading);

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar',
      },
    });
    if (error) {
      toast.error('Error logging in to Google provider with Supabase');
      console.log(error);
    }
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

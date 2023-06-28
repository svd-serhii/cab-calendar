import React from 'react';
import { AuthBtn, AuthTitle, ContentWrapper } from './Auth.styled';
import { toast } from 'react-toastify';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Auth = () => {
  const supabase = useSupabaseClient();

  async function googleSignIn() {
    const { error, success } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar',
      },
    });
    if (error) {
      toast.error('Error logging in to Google provider with Supabase');
      console.log(error);
    }
    if (success) {
      toast.success('You are logged in');
    }
  }

  return (
    <ContentWrapper>
      <AuthTitle>
        Вітаю на сайті планування кредитних угод.
        <br /> Для подальшої роботи необхідно авторизуватись
      </AuthTitle>
      <AuthBtn type="button" onClick={googleSignIn}>
        Авторизуватись через Google
      </AuthBtn>
    </ContentWrapper>
  );
};

export default Auth;

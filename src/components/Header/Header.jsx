import React from 'react';
import {
  HeaderWrapper,
  LogoWrapper,
  Wrapper,
  Logo,
  UserWrapper,
  User,
  UserBtn,
  BtnWrapper,
  EventBtn,
  CalendarBtn,
} from './Header.styled';
import Container from '../Container/Container';
import logo from '../../images/logo/logo-credit-agricole-jp-160.jpg';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from 'react-toastify';

const Header = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  async function signOut() {
    await supabase.auth.signOut();
    toast.info('Ви не авторизовані!');
  }
  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <LogoWrapper to="/" aria-label="Site logo">
            <Logo src={logo} />
          </LogoWrapper>
          {session ? (
            <>
              <BtnWrapper>
                <EventBtn to="event">Призначити угоду</EventBtn>
                <CalendarBtn to="calendar">Календар</CalendarBtn>
              </BtnWrapper>
              <UserWrapper>
                <User>{session.user.email}</User>
                <UserBtn onClick={() => signOut()}>Вийти</UserBtn>
              </UserWrapper>
            </>
          ) : (
            ''
          )}
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

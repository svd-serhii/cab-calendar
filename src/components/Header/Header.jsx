import React from 'react';
import {
  HeaderWrapper,
  LogoWrapper,
  Wrapper,
  Logo,
  UserWrapper,
  User,
  UserBtn,
  DayWrapper,
  Today,
} from './Header.styled';
import Container from '../Container/Container';
import logo from '../../images/logo/logo-credit-agricole-jp-160.jpg';
import {
  useSession,
  useSessionContext,
  useSupabaseClient,
} from '@supabase/auth-helpers-react';
import moment from 'moment';

const Header = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  // console.log(session.user);
  async function signOut() {
    await supabase.auth.signOut();
  }
  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <Logo src={logo} />
          </LogoWrapper>
          <DayWrapper>
            <Today>{moment().format('dddd, Do MMM YYYY')}</Today>
          </DayWrapper>
          <UserWrapper>
            {session ? (
              <>
                <User>{session.user.email}</User>{' '}
                <UserBtn onClick={() => signOut()}>Вийти</UserBtn>
              </>
            ) : (
              ''
            )}
          </UserWrapper>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

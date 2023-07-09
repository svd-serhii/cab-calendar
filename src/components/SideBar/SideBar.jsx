import React from 'react';
import axios from 'axios';
import {
  ContentWrapper,
  LoanContainer,
  SideBarTitle,
  TotalLoanMonth,
} from './SideBar.styled';
import { useSession } from '@supabase/auth-helpers-react';

const gcId = process.env.REACT_APP_CALENDAR_ID;

const SideBar = () => {
  const session = useSession();
  const fetchGoogleCalendarData = async () => {
    try {
      const token = session.provider_token;
      const response = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/${gcId}/events`,
        {
          headers: {
            Authorization: 'Bearer' + token,
          },
        }
      );
      // Обробка отриманих даних
      console.log(response.data);
    } catch (error) {
      // Обробка помилки
      console.error(error);
    }
  };

  fetchGoogleCalendarData();

  return (
    <ContentWrapper>
      <SideBarTitle>Інформація</SideBarTitle>
      <LoanContainer>
        <TotalLoanMonth>Призначено угод на суму 100500</TotalLoanMonth>
      </LoanContainer>
    </ContentWrapper>
  );
};

export default SideBar;

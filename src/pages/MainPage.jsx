import React from 'react';
import { ContentWrapper, MainBtn, MainTitle } from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <ContentWrapper>
        <MainTitle>
          Вітаю на сайті планування кредитних угод.
          <br /> Для подальшої роботи необхідно авторизуватись
        </MainTitle>
        <MainBtn to="login">Далі</MainBtn>
      </ContentWrapper>
    </>
  );
};

export default MainPage;

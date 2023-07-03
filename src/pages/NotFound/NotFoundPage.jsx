import React from 'react';
import {
  NfBtn,
  Title,
  Paragraf,
  BottomInfoWrapper,
  Span,
  MainContainer,
} from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Span>
        <Title>
          Ooops!
          <Paragraf> This page not found :(</Paragraf>
        </Title>
      </Span>

      <BottomInfoWrapper>
        <NfBtn
          type="button"
          text={'To main page'}
          onClick={() => navigate('/')}
        >
          Назад
        </NfBtn>
      </BottomInfoWrapper>
    </MainContainer>
  );
}

export default NotFoundPage;

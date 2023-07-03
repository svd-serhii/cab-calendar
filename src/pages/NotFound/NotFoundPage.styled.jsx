import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-image: url('/src/images/notfound.jpeg');
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    background-image: url('/src/images/notfound.jpeg');
  } */
`;

export const Title = styled.h2`
  margin-top: 80px;
  display: block;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const Paragraf = styled.span`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
    margin-left: 10px;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const BottomInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    margin-top: 68px;
  }
  @media (min-width: 1280px) {
    margin-top: 18px;
  }
`;

export const Span = styled.span``;

export const NfBtn = styled.button`
  width: 100px;
  padding: 10px 0 10px 0;
  background: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.1;

  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
    background: ${({ theme }) => theme.colors.lightBlue};
    scale: 1.1;
  }

  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};
`;

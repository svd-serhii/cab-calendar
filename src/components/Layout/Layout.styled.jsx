import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  min-height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  /* height: calc(${({ screenHeight }) => screenHeight} - 72px); */
  padding: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 10px;
  }
`;

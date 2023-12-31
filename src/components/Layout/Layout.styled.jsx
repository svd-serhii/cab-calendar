import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  min-height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  /* height: calc(${({ screenHeight }) => screenHeight} - 72px); */

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

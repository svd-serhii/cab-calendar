import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CalendarStyled = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 320;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 512px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 800px;
    height: 600px;
  }
`;

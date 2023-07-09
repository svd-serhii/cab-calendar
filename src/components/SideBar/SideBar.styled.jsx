import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  display: flex;
  /* border-right: 0.5px solid #9b9ba0; */
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 160px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 246px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 400px;
    height: 600px;
  }
`;

export const SideBarTitle = styled.h2`
  margin-top: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

export const LoanContainer = styled.div`
  margin-top: 10px;
`;
export const TotalLoanMonth = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

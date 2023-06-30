import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.breakpoints.tablet};
    padding: 0 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
    padding: 0 10px;
  }
`;

export { Wrapper };

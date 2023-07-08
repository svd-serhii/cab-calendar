import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #9b9ba0;
  padding-bottom: 5px;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
`;

export const Logo = styled.img``;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 5px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: unset;
    gap: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 30px;
  }
`;

export const User = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.bold};

  color: ${({ theme }) => theme.colors.green};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;
export const UserBtn = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.main.bold};

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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 70px;
    font-size: 12px;
    padding: 5px 0 5px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 160px;
    font-size: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100px;
    padding: 10px 0 10px 0;
    font-size: 18px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: unset;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const EventBtn = styled(Link)`
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.blue};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.main.lightBlue};
  line-height: 1.1;
  text-align: center;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
    background: ${({ theme }) => theme.colors.lightBlue};
  }

  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 140px;
    font-size: 12px;
    padding: 5px 10px 5px 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 140px;
    font-size: 12px;
    padding: 5px 10px 5px 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: auto;
    padding: 10px 20px 10px 20px;
    font-size: 18px;
  }
`;

export const CalendarBtn = styled(Link)`
  line-height: 1.1;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.main.lightBlue};
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
    background: ${({ theme }) => theme.colors.lightBlue};
  }

  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 140px;
    font-size: 12px;
    padding: 5px 10px 5px 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 140px;
    font-size: 12px;
    padding: 5px 10px 5px 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: auto;
    padding: 10px 20px 10px 20px;
    font-size: 18px;
  }
`;

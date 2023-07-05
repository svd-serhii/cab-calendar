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
`;

export const User = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.green};
`;
export const UserBtn = styled.button`
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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EventBtn = styled(Link)`
  width: auto;
  padding: 10px 20px 10px 20px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.main.lightBlue};
  font-size: 18px;
  line-height: 1.1;

  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
    background: ${({ theme }) => theme.colors.lightBlue};
  }

  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};
`;

export const CalendarBtn = styled(Link)`
  width: auto;
  margin-left: 10px;
  padding: 10px 20px 10px 20px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.main.lightBlue};
  font-size: 18px;
  line-height: 1.1;

  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
    background: ${({ theme }) => theme.colors.lightBlue};
  }

  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};
`;

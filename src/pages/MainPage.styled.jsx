import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  margin-top: 60px;
  margin-bottom: 40px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.green};
`;

export const MainBtn = styled(Link)`
  width: auto;
  padding: 10px 20px 10px 20px;
  background: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: 18px;
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

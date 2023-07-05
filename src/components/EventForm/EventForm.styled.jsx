import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 320px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 20px;

  margin-bottom: ${({ error }) => (error ? '6px' : '12px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '5px' : '8px')};
  }
`;

export const FieldStyled = styled(Field)`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 18px;
  line-height: 1.1;
  border-radius: 20px;
  padding: 0 5px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.main.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ErrorContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2px 16px;
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: ${({ error }) => (error ? '5px' : '8px')};
`;

export const DateTitle = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 18px;
  line-height: 1.1;
`;

export const EventBtn = styled.button`
  margin-top: 20px;
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

export const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

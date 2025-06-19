// src/pages/Registro.styles.js
import styled from 'styled-components';

export const RegistroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 12px;
  width: 100%;
  max-width: 400px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #3700b3;
  }
`;

export const LinkText = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #333;
  
  a {
    color: #6200ea;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

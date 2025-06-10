// src/pages/Register.styles.js
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #37472b;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;

  &:hover {
    background-color: #2d3a25;
  }
`;

export const LinkText = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: #37472b;
`;

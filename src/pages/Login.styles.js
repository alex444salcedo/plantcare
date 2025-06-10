import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 0 20px;
  font-family: Arial, sans-serif;
`;

export const LoginForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #37472b;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #37472b;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  
  &:hover {
    background-color: #2d3a25;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #37472b;
  font-size: 1rem;

  a {
    color: #37472b;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

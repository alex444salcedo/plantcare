import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 40px 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #37472b;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  height: 150px;
`;

export const Button = styled.button`
  background-color: #37472b;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #2d3a25;
  }
`;

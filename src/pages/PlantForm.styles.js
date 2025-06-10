// src/pages/PlantForm.styles.js
import styled from 'styled-components';

export const PlantFormContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #37472b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2d3a25;
  }
`;

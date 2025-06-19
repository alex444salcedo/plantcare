// src/Comunidad.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #3700b3;
  }
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin: 5px 0;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Card = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const AdviceCard = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

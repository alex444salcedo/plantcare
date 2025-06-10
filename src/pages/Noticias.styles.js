// src/pages/Noticias.styles.js
import styled from 'styled-components';

export const NoticiasContainer = styled.div`
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

export const NewsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const NewsItem = styled.li`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const NewsTitle = styled.h3`
  font-size: 1.6rem;
  color: #37472b;
  margin-bottom: 10px;
`;

export const NewsDescription = styled.p`
  font-size: 1.2rem;
  color: #757575;
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

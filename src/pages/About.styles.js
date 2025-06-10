// src/pages/About.styles.js
import styled from 'styled-components';

export const AboutContainer = styled.div`
  background-color: #a0ae82;
  color: #222;
  min-height: 100vh;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const SectionTitle = styled.h3`
  margin-top: 40px;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 6px;
  border: none;
  background-color: #37472b;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2d3a25;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

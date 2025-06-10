import styled from 'styled-components';

export const PlantDetailContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
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

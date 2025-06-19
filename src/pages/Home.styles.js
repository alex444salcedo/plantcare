import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #d7e4d4;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding: 10px 25px;
  font-size: 1.2rem;
  border: 2px solid black;
  background: transparent;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #2d3a25;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  font-size: 0.9rem;
`;

import styled from 'styled-components';

export const PlantasContainer = styled.div`
  padding: 2rem;
  background: #191923;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BuscadorForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  width: 320px;
`;

export const BuscadorInput = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 1rem;
  border: none;
  background: #222;
  color: #fff;
  font-size: 1.1rem;
  outline: none;
  width: 100%;
  &::placeholder {
    color: #888;
  }
`;

export const BuscadorButton = styled.button`
  padding: 0.7rem 1.2rem;
  border-radius: 1rem;
  border: none;
  background: #5dd39e;
  color: #191923;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #36bf7f;
  }
`;

export const PlantaFicha = styled.div`
  background: #232336;
  color: #fff;
  padding: 2rem;
  border-radius: 1.5rem;
  max-width: 410px;
  margin-top: 2rem;
  text-align: center;
  box-shadow: 0 4px 18px #0003;
  transition: box-shadow 0.2s;
  img {
    border-radius: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 10px #0005;
  }
  a {
    color: #5dd39e;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export const ErrorMsg = styled.div`
  color: #ff7675;
  font-weight: bold;
  margin-top: 1rem;
`;

export const SugeridasGrid = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

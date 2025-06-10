import styled from 'styled-components';

export const LibraryContainer = styled.div`
  padding: 40px 20px;
  background-color: #e6f7f3;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #37472b;
  margin-bottom: 40px;
`;

export const PlantList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 0;
  list-style-type: none;
`;

export const PlantItem = styled.li`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const PlantImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const PlantName = styled.h3`
  font-size: 1.6rem;
  color: #37472b;
  margin-bottom: 10px;
`;

export const PlantSpecies = styled.p`
  font-size: 1.2rem;
  color: #757575;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background-color: #37472b;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #2d3a25;
  }
`;

export const NoPlantsMessage = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #757575;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const SectionButton = styled(Button)`
  width: auto;
  padding: 12px 25px;
  font-size: 1.1rem;
`;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LibraryContainer,
  Title,
  PlantList,
  PlantItem,
  PlantName,
  PlantSpecies,
  Button,
  PlantImage,
  NoPlantsMessage,
  ButtonContainer,
  SectionButton
} from './Library.styles';

export default function Library() {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el token existe en localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login'); // Si no está autenticado, redirige al login
    } else {
      // Aquí se deberían obtener las plantas del usuario
      fetch('http://localhost:5000/api/plants', {
        headers: { 'Authorization': `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => setPlants(data.plants)) // Aquí se supone que la respuesta contiene un array de plantas
        .catch((error) => console.error(error));
    }
  }, [navigate]);

  return (
    <LibraryContainer>
      <Title>Mi Jardín</Title>
      {plants.length === 0 ? (
        <NoPlantsMessage>No tienes plantas en tu jardín.</NoPlantsMessage>
      ) : (
        <PlantList>
          {plants.map((plant) => (
            <PlantItem key={plant.id}>
              <PlantImage src={plant.image_url || '/default-image.jpg'} alt={plant.name} />
              <PlantName>{plant.name}</PlantName>
              <PlantSpecies>{plant.species}</PlantSpecies>
              <Button onClick={() => navigate(`/plant/${plant.id}`)}>Ver detalles</Button>
            </PlantItem>
          ))}
        </PlantList>
      )}

      <ButtonContainer>
        <SectionButton onClick={() => navigate('/noticias')}>Noticias</SectionButton>
        <SectionButton onClick={() => navigate('/reminders')}>Recordatorios</SectionButton>
        <SectionButton onClick={() => navigate('/community')}>Comunidad</SectionButton>
        <SectionButton onClick={() => navigate('/contacto')}>Soporte</SectionButton>
        <SectionButton onClick={() => navigate('/profile')}>Mi Perfil</SectionButton>
      </ButtonContainer>
    </LibraryContainer>
  );
}

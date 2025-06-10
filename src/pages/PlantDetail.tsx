import { PlantDetailContainer, Title, Description, Button } from './PlantDetail.styles';

export default function PlantDetail() {
  return (
    <PlantDetailContainer>
      <Title>Detalles de la Planta</Title>
      <Description>
        Aquí irían todos los detalles sobre la planta seleccionada, incluyendo sus cuidados, fotos y más.
      </Description>
      <Button>Agregar a mi Colección</Button>
    </PlantDetailContainer>
  );
}

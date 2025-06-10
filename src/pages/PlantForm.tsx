import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlantFormContainer, Title, Input, Textarea, Button } from './PlantForm.styles';

export default function PlantForm() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [description, setDescription] = useState('');
  const [careInstructions, setCareInstructions] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Los datos de la planta que queremos agregar
    const plantData = { name, species, description, careInstructions };

    try {
      // Hacemos la petición POST al backend
      const response = await fetch('http://localhost:5000/api/plants/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(plantData),
      });

      // Si la respuesta es exitosa, redirige al usuario a la biblioteca
      if (response.ok) {
        const data = await response.json();
        console.log('Planta guardada:', data);
        navigate('/library'); // Redirige a la página de la biblioteca de plantas
      } else {
        console.error('Error al agregar planta');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <PlantFormContainer>
      <Title>{'Agregar Planta'}</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nombre de la planta"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Especie"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
        <Textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Textarea
          placeholder="Instrucciones de cuidado"
          value={careInstructions}
          onChange={(e) => setCareInstructions(e.target.value)}
          required
        />
        <Button type="submit">Guardar Planta</Button>
      </form>
    </PlantFormContainer>
  );
}

import { useState } from 'react';
import { ProfileContainer, Title, Input, Button } from './Perfil.styles';

export default function Profile() {
  const [name, setName] = useState('Alejandro');
  const [email, setEmail] = useState('user@example.com');
  const [location, setLocation] = useState('Ciudad');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí pondrías la lógica para actualizar el perfil
    alert('Perfil actualizado');
  };

  return (
    <ProfileContainer>
      <Title>Editar Perfil</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type="submit">Guardar Cambios</Button>
      </form>
    </ProfileContainer>
  );
}

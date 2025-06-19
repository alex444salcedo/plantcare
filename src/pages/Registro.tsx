// src/pages/Registro.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { 
  RegistroContainer, 
  Title, 
  Input, 
  Button, 
  LinkText 
} from './Registro.styles';  // Importar el archivo de estilos

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de campos
    if (contrasena !== confirmarContrasena) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
      });
      return;
    }

    if (!nombre || !correo || !contrasena) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios',
      });
      return;
    }

    try {
      // Enviar datos al servidor
      const response = await axios.post('http://localhost:5000/api/auth/registro', {
        correo,
        password: contrasena,
        fecha_registro: new Date().toISOString(),
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Usuario creado correctamente',
        });
        navigate('/login'); // Redirige a la página de login después del registro
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al registrar el usuario. Intenta de nuevo más tarde.',
      });
    }
  };

  return (
    <RegistroContainer>
      <Title>Registro de Usuario</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Correo Electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
        />
        <Button type="submit">Registrarse</Button>
      </form>
      <LinkText>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
      </LinkText>
    </RegistroContainer>
  );
}

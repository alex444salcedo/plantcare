import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer, Title, Input, Button, LinkText } from './Register.styles';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación
    if (!email || !password || !confirmPassword || !name || !location) {
      setError('Por favor ingresa todos los campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor ingresa un correo válido.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setError(''); // Limpiar el error

    const userData = { email, password, name, location };

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Guardamos el token
        navigate('/library'); // Redirigimos a Library
      } else {
        setError('Error al registrar. Intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setError('Hubo un error en la conexión.');
    }
  };

  return (
    <RegisterContainer>
      <Title>Registrarse</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Registrarse</Button>
      </form>
      <LinkText>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
      </LinkText>
    </RegisterContainer>
  );
}

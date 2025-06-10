import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, Title, Input, Button, LinkText } from './Login.styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación
    if (!email || !password) {
      setError('Por favor ingresa todos los campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor ingresa un correo válido.');
      return;
    }

    setError(''); // Limpiar el error

    const userData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Guardamos el token
        navigate('/library'); // Redirigimos a Library
      } else {
        setError('Credenciales incorrectas.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setError('Hubo un error en la conexión.');
    }
  };

  return (
    <LoginContainer>
      <Title>Iniciar Sesión</Title>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Iniciar Sesión</Button>
      </form>
      <LinkText>
        ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
      </LinkText>
    </LoginContainer>
  );
}

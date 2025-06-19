import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Verificar si está autenticado
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el token existe en localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      setIsAuthenticated(true); // Si hay token, el usuario está autenticado
    } else {
      setIsAuthenticated(false); // Si no hay token, redirige al login
      navigate('/home'); // Redirigir al login si no hay token
    }
  }, [navigate]); // Dependemos de navigate para redirigir

  const handleConocenos = () => {
    navigate('/about'); // Redirige a About
  };

  const handleComenzar = () => {
    navigate('/login'); // Redirige al Login
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        height: '100vh',
        backgroundColor: '#d7e4d4',
        padding: '0 20px',
      }}
    >
      <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>PlantCare</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Cuida tus plantas como un experto
      </p>
      <button
        onClick={handleConocenos}
        style={{
          padding: '10px 25px',
          fontSize: '1.2rem',
          border: '2px solid black',
          background: 'transparent',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Conócenos
      </button>
      <button
        onClick={handleComenzar}
        style={{
          padding: '10px 25px',
          fontSize: '1.2rem',
          border: '2px solid black',
          background: 'transparent',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '20px',
        }}
      >
        Comenzar mi jardín digital
      </button>

      <footer style={{ position: 'absolute', bottom: 10, fontSize: '0.9rem' }}>
        Footer: Enlaces legales, redes sociales, contacto
      </footer>
    </div>
  );
}

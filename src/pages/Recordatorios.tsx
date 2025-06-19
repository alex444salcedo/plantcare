import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para el botón de regresar
import { Button, ReminderCard, Container, Title, Form, FormButton, RecordatoriosList, BackButton } from './Recordatorios.style';

const Recordatorios = () => {
  const [recordatorios, setRecordatorios] = useState<any[]>([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [editando, setEditando] = useState<{ id: number; nombre: string; descripcion: string } | null>(null);
  const navigate = useNavigate(); // Para redirigir cuando se presione el botón de regresar

  // Función para obtener los recordatorios del backend
  const obtenerRecordatorios = async () => {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    console.log('Token recuperado:', token); // Verifica que el token esté presente

    if (!token) {
      console.error('Token no encontrado');
      return;
    }

    try {
      // Hacer la solicitud GET al backend con el token
      const response = await fetch('http://localhost:5000/api/recordatorios', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Enviar el token en el encabezado
        },
      });

      console.log('Respuesta del servidor:', response); // Verifica la respuesta del servidor

      if (response.ok) {
        const data = await response.json();
        console.log('Recordatorios recibidos:', data);
        setRecordatorios(data); // Guardar los recordatorios en el estado
      } else {
        console.error('Error al obtener los recordatorios:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  // Obtener los recordatorios cuando el componente se monte
  useEffect(() => {
    obtenerRecordatorios();
  }, []);

  // Función para agregar un nuevo recordatorio
  const agregarRecordatorio = async () => {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    console.log('Token al agregar recordatorio:', token);

    if (!token) {
      console.error('Token no encontrado');
      return;
    }

    if (nombre.trim() !== '' && descripcion.trim() !== '') {
      try {
        const response = await fetch('http://localhost:5000/api/recordatorios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Enviar el token en el encabezado
          },
          body: JSON.stringify({ nombre, descripcion }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Recordatorio agregado:', data);
          setRecordatorios([...recordatorios, { id: data.recordatorioId, nombre, descripcion, realizado: false }]);
          setNombre('');
          setDescripcion('');
        } else {
          console.error('Error al agregar el recordatorio:', response.statusText);
        }
      } catch (error) {
        console.error('Error al hacer la solicitud POST:', error);
      }
    }
  };

  // Función para editar un recordatorio
  const editarRecordatorio = (id: number, nombre: string, descripcion: string) => {
    setEditando({ id, nombre, descripcion });
  };

  // Función para eliminar un recordatorio
  const eliminarRecordatorio = async (id: number) => {
    const token = localStorage.getItem('token');
    console.log('Token al eliminar recordatorio:', token);

    if (!token) {
      console.error('Token no encontrado');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/recordatorios/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setRecordatorios(recordatorios.filter((rec) => rec.id !== id));
        console.log(`Recordatorio ${id} eliminado`);
      } else {
        console.error('Error al eliminar el recordatorio:', response.statusText);
      }
    } catch (error) {
      console.error('Error al hacer la solicitud DELETE:', error);
    }
  };

  // Función para marcar un recordatorio como realizado
  const marcarComoRealizado = async (id: number) => {
    const token = localStorage.getItem('token');
    console.log('Token al marcar como realizado:', token);

    if (!token) {
      console.error('Token no encontrado');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/recordatorios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setRecordatorios(
          recordatorios.map((rec) =>
            rec.id === id ? { ...rec, realizado: !rec.realizado } : rec
          )
        );
        console.log(`Recordatorio ${id} marcado como realizado`);
      } else {
        console.error('Error al marcar el recordatorio como realizado:', response.statusText);
      }
    } catch (error) {
      console.error('Error al hacer la solicitud PUT:', error);
    }
  };

  // Función para manejar el envío del formulario
  const handleFormularioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editando) {
      setRecordatorios(
        recordatorios.map((rec) =>
          rec.id === editando.id ? { ...rec, nombre, descripcion } : rec
        )
      );
      setEditando(null);
    } else {
      agregarRecordatorio();
    }
    setNombre('');
    setDescripcion('');
  };

  return (
    <Container>
      <BackButton onClick={() => navigate('/Inicio')}>Regresar</BackButton>
      <Title>Mis Recordatorios</Title>
      <Button onClick={() => setEditando({ id: 0, nombre: '', descripcion: '' })}>
        Configurar Recordatorio
      </Button>

      {editando !== null && (
        <Form onSubmit={handleFormularioSubmit}>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del Recordatorio"
            required
          />
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción del Recordatorio"
            required
          />
          <FormButton type="submit">{editando.id === 0 ? 'Agregar' : 'Editar'} Recordatorio</FormButton>
        </Form>
      )}

      <RecordatoriosList>
        {recordatorios.map((rec) => (
          <ReminderCard key={rec.id} realizado={rec.realizado}>
            <h3>{rec.nombre}</h3>
            <p>{rec.descripcion}</p>
            <button className="realizado-btn" onClick={() => marcarComoRealizado(rec.id)}>
              {rec.realizado ? 'Completado' : 'Marcar como Realizado'}
            </button>
            <button onClick={() => editarRecordatorio(rec.id, rec.nombre, rec.descripcion)}>Editar</button>
            <button onClick={() => eliminarRecordatorio(rec.id)}>Eliminar</button>
          </ReminderCard>
        ))}
      </RecordatoriosList>
    </Container>
  );
};

export default Recordatorios;

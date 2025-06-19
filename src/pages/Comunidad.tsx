import React, { useState, useEffect } from 'react';
import { Container, Title, Section, Button, Form, TextArea, Gallery, Card, AdviceCard } from './Comunidad.style';

const Comunidad = () => {
  const [consejos, setConsejos] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [contenido, setContenido] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);  // Control de apertura del modal

  // Obtener los consejos desde la base de datos
  useEffect(() => {
    fetch('http://localhost:5000/api/plants/consejos')
      .then((response) => response.json())
      .then((data) => setConsejos(data));
  }, []);

  // Obtener las imágenes de la galería desde la base de datos
  useEffect(() => {
    fetch('http://localhost:5000/api/plants/galeria')
      .then((response) => response.json())
      .then((data) => setImagenes(data));
  }, []);

  const handleAddConsejo = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/plants/consejos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contenido }),
    })
      .then((response) => response.json())
      .then((data) => {
        setConsejos([data, ...consejos]); // Actualizamos el estado para agregar el nuevo consejo al inicio
        setContenido(''); // Limpia el formulario
        setIsModalOpen(false);  // Cerrar el modal después de agregar el consejo
      })
      .catch((error) => console.error('Error al agregar consejo:', error));
  };

  const handleAddImagen = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);

    fetch('http://localhost:5000/api/plants/galeria', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImagenes([data, ...imagenes]);  // Agregar la nueva imagen al inicio de la galería
        setDescripcion('');
        setImagen(null);
        setIsModalOpen(false);  // Cerrar el modal después de subir la imagen
      })
      .catch((error) => console.error('Error al subir imagen:', error));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <Title>Bienvenidos a la Comunidad de Plantas</Title>

      {/* Botón para abrir el modal */}
      <Button onClick={toggleModal}>Agregar Consejo o Imagen</Button>

      {/* Consejos del Día */}
      <Section>
        <h3>Consejos del Día</h3>
        <ul>
          {consejos.length > 0 ? (
            consejos.map((consejo) => (
              <AdviceCard key={consejo.id}>
                <p>{consejo.contenido}</p>
              </AdviceCard>
            ))
          ) : (
            <p>No hay consejos disponibles.</p>
          )}
        </ul>
      </Section>

      {/* Galería de Plantas */}
      <Section>
        <h3>Galería de Plantas</h3>
        <Gallery>
          {imagenes.map((imagen) => (
            <Card key={imagen.id}>
              <img src={imagen.imagen_url} alt={imagen.descripcion} />
              <p>{imagen.descripcion}</p>
            </Card>
          ))}
        </Gallery>
      </Section>

      {/* Modal para agregar consejo o imagen */}
      {isModalOpen && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <h3>Agregar Consejo o Imagen</h3>
            <Form onSubmit={handleAddConsejo}>
              <TextArea
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
                placeholder="Escribe tu consejo..."
                required
              />
              <Button type="submit">Agregar Consejo</Button>
            </Form>

            <Form onSubmit={handleAddImagen}>
              <input
                type="file"
                onChange={(e) => setImagen(e.target.files ? e.target.files[0] : null)}
                required
              />
              <TextArea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción de la planta..."
                required
              />
              <Button type="submit">Subir Imagen</Button>
            </Form>

            <Button onClick={toggleModal}>Cerrar</Button>
          </div>
        </div>
      )}
    </Container>
  );
};

// Estilos para el modal
const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  width: '80%',
  maxWidth: '600px',
  textAlign: 'center',
};

export default Comunidad;

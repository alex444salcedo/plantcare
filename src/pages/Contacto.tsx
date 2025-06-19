import React, { useState } from "react";
import { ContactContainer, Form, Input, TextArea, Button, Title, ContactMethod } from './Contacto.styles';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Por favor, llena todos los campos');
      return;
    }

    setLoading(true);  // Poner el estado en "enviando..."
    setErrorMessage(""); // Limpiar el error anterior

    try {
      console.log("Enviando datos:", formData);  // Verifica que los datos se envían correctamente

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: name, correo: email, mensaje: message }),
      });

      if (response.ok) {
        console.log("Mensaje enviado correctamente");  // Verificar que la respuesta es exitosa
        // Actualizar el estado después de la respuesta exitosa
        setSubmitted(true);  // Cambiar el estado para mostrar el mensaje de éxito
        setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
      } else {
        const error = await response.json().catch(() => 'Error desconocido');
        console.error('Error al enviar los datos: ', error);
        setErrorMessage('Hubo un error al enviar los datos. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error: ', error);
      setErrorMessage('Hubo un error al intentar enviar los datos. Verifica tu conexión y vuelve a intentarlo.');
    } finally {
      setLoading(false);  // Asegúrate de poner esto en el "finally" para que siempre se ejecute
      console.log("Estado de loading después de la petición:", loading);  // Verifica si el estado se actualiza
    }
  };

  return (
    <ContactContainer>
      <Title>Contacta con nosotros</Title>
      {!submitted ? (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Escribe tu queja o sugerencia"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </Form>
      ) : (
        <div>¡Gracias por tu mensaje! Nos pondremos en contacto pronto.</div> // Mensaje de éxito
      )}

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* Mensaje de error si existe */}

      <ContactMethod>
        <p>O también puedes contactarnos a través de:</p>
        <ul>
          <li>Correo: contacto@empresa.com</li>
          <li>Teléfono: 123-456-789</li>
        </ul>
      </ContactMethod>
    </ContactContainer>
  );
};

export default ContactPage;

import { useState } from 'react';
import { ContactContainer, Title, Form, Input, Textarea, Button } from './Contacto.styles';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('Formulario enviado');
  };

  return (
    <ContactContainer>
      <Title>Contacto</Title>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Tu nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Input 
          type="email" 
          placeholder="Tu correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Textarea 
          placeholder="Tu mensaje" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <Button type="submit">Enviar mensaje</Button>
      </Form>
    </ContactContainer>
  );
}

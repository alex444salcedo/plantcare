import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #e8f5e9; /* Fondo suave de color verde claro, estilo naturaleza */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #388e3c; /* Verde más oscuro para el título */
  margin-bottom: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Button = styled.button`
  background-color: #4caf50; /* Verde natural */
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1rem;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c; /* Verde más oscuro al pasar el ratón */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  input, textarea {
    padding: 12px;
    width: 300px;
    margin-bottom: 15px;
    font-size: 1rem;
    border: 1px solid #388e3c; /* Borde verde */
    border-radius: 8px;
    background-color: #f1f8e9; /* Fondo claro para los campos */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  textarea {
    height: 120px;
    resize: none;
  }
`;

export const FormButton = styled.button`
  background-color: #81c784; /* Verde más claro */
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #66bb6a; /* Verde medio */
  }
`;

export const ReminderCard = styled.div`
  background-color: ${(props) => (props.realizado ? '#c8e6c9' : '#f1f8e9')}; /* Verde suave para completado, fondo claro para pendiente */
  color: ${(props) => (props.realizado ? '#388e3c' : '#66bb6a')}; /* Cambiar el color del texto cuando se marca como completado */
  margin: 15px;
  padding: 20px;
  width: 280px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 15px;
    font-size: 1rem;
    color: #388e3c;
  }

  button {
    background-color: #66bb6a; /* Verde claro para los botones */
    color: white;
    border: none;
    padding: 8px 15px;
    margin: 5px 0;
    cursor: pointer;
    border-radius: 8px;
    width: 100%;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #388e3c; /* Verde más oscuro al pasar el ratón */
    }
  }

  .realizado-btn {
    background-color: ${(props) => (props.realizado ? '#81c784' : '#c8e6c9')};
    &:hover {
      background-color: ${(props) => (props.realizado ? '#66bb6a' : '#a5d6a7')};
    }
  }

  button:last-child {
    background-color: #ff4081;
    &:hover {
      background-color: #f50057;
    }
  }
`;

export const BackButton = styled.button`
  background-color: #388e3c; /* Verde para el botón de regresar */
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #66bb6a;
  }
`;

export const RecordatoriosList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

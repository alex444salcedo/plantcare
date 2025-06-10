import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />; // Redirigir a login si no hay token
  }

  return element; // Si hay token, renderiza el componente
};

export default PrivateRoute;

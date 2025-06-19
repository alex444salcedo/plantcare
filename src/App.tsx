import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';
import About from './pages/About';
import Perfil from './pages/Perfil';
import Inicio from './pages/Inicio';
import Coleccion from './pages/coleccion';
import Recordatorios from './pages/Recordatorios';
import Comunidad from './pages/Comunidad';
import Plantas from './pages/Plantas'
import Contacto from './pages/Contacto';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      {/* Si no está autenticado, redirige a /home */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/perfil" element={<Perfil />} />

      {/* Usamos PrivateRoute para proteger las rutas privadas */}
      <Route path="/Inicio" element={<PrivateRoute element={<Inicio />} />} />
      <Route path="/recordatorios" element={<PrivateRoute element={<Recordatorios />} />} />
      <Route path="/coleccion" element={<PrivateRoute element={<Coleccion />} />} />
      <Route path="/comunidad" element={<PrivateRoute element={<Comunidad />} />} />
      <Route path="/contacto" element={<PrivateRoute element={<Contacto />} />} />
      <Route path="/Plantas" element={<PrivateRoute element={<Plantas />} />} />
    </Routes>
  );
}

export default App;

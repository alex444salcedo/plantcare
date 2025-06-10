// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Library from './pages/Library';
import PlantDetail from './pages/PlantDetail';
import PlantForm from './pages/PlantForm';
import Reminders from './pages/Reminders';
import Community from './pages/Community';
import Noticias from './pages/Noticias';
import Contacto from './pages/Contacto';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      {/* Si no está autenticado, redirige a /login */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />

      {/* Usamos PrivateRoute para proteger las rutas privadas */}
      <Route path="/library" element={<PrivateRoute element={<Library />} />} />
      <Route path="/plant/:id" element={<PrivateRoute element={<PlantDetail />} />} />
      <Route path="/plant-form/:id?" element={<PrivateRoute element={<PlantForm />} />} />
      <Route path="/reminders" element={<PrivateRoute element={<Reminders />} />} />
      <Route path="/community" element={<PrivateRoute element={<Community />} />} />
      <Route path="/contacto" element={<PrivateRoute element={<Contacto />} />} />
      <Route path="/noticias" element={<PrivateRoute element={<Noticias />} />} />
    </Routes>
  );
}

export default App;

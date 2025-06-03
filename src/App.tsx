import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Library from './pages/Library'
import PlantDetail from './pages/PlantDetail'
import PlantForm from './pages/PlantForm'
import Reminders from './pages/Reminders'
import Community from './pages/Community'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/library" element={<Library />} />
      <Route path="/plant/:id" element={<PlantDetail />} />
      <Route path="/plant-form/:id?" element={<PlantForm />} />
      <Route path="/reminders" element={<Reminders />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  )
}

export default App

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Bienvenido a PlantCare</h1>

      <div className="d-flex justify-content-between mb-4">
        <Link to="/profile" className="btn btn-secondary">
          Mi Perfil
        </Link>
        <button className="btn btn-danger">Cerrar sesión</button>
      </div>

      <section>
        <h2>Mi colección de plantas</h2>
        <Link to="/plant-form" className="btn btn-primary mb-3">
          + Agregar Planta
        </Link>
        <p>Aquí mostrarás la lista de plantas del usuario con opciones para editar y eliminar.</p>
        {/* Aquí podrías mapear la lista de plantas del usuario */}
      </section>

      <section className="mt-5">
        <h2>Recordatorios de cuidado</h2>
        <Link to="/reminders" className="btn btn-primary mb-3">
          Ver Recordatorios
        </Link>
        {/* Aquí podrías mostrar resumen o lista de recordatorios */}
      </section>

      <section className="mt-5">
        <h2>Comunidad</h2>
        <Link to="/community" className="btn btn-primary mb-3">
          Ir a Comunidad
        </Link>
      </section>
    </div>
  )
}

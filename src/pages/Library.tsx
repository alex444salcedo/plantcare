import { useState } from 'react'
import { Link } from 'react-router-dom'

type Planta = {
  id: number
  nombre: string
  especie: string
  descripcion: string
}

const plantasMock: Planta[] = [
  { id: 1, nombre: 'Cactus', especie: 'Succulent', descripcion: 'Planta que requiere poco riego.' },
  { id: 2, nombre: 'Helecho', especie: 'Pteridophyta', descripcion: 'Le gusta la sombra y humedad.' },
  { id: 3, nombre: 'Orquídea', especie: 'Orchidaceae', descripcion: 'Necesita cuidados especiales.' },
]

export default function Library() {
  const [search, setSearch] = useState('')

  const plantasFiltradas = plantasMock.filter(
    (p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase()) ||
      p.especie.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mt-4" style={{ maxWidth: 800 }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Biblioteca de Plantas</h2>
        <Link to="/plant-form" className="btn btn-success">
          + Agregar Planta
        </Link>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar planta por nombre o especie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {plantasFiltradas.length === 0 ? (
        <p>No se encontraron plantas.</p>
      ) : (
        <ul className="list-group">
          {plantasFiltradas.map((planta) => (
            <li key={planta.id} className="list-group-item">
              <Link to={`/plant/${planta.id}`}>
                <strong>{planta.nombre}</strong> ({planta.especie})
              </Link>{' '}
              — {planta.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'

type Planta = {
  id: number
  nombre: string
  especie: string
  descripcion: string
  cuidados: string
}

const plantasMock: Planta[] = [
  {
    id: 1,
    nombre: 'Cactus',
    especie: 'Succulent',
    descripcion: 'Planta que requiere poco riego.',
    cuidados: 'Riego cada 2 semanas. Luz indirecta.',
  },
  {
    id: 2,
    nombre: 'Helecho',
    especie: 'Pteridophyta',
    descripcion: 'Le gusta la sombra y humedad.',
    cuidados: 'Riego frecuente. No luz directa.',
  },
  {
    id: 3,
    nombre: 'Orquídea',
    especie: 'Orchidaceae',
    descripcion: 'Necesita cuidados especiales.',
    cuidados: 'Riego moderado, humedad alta y luz indirecta.',
  },
]

export default function PlantDetail() {
  const { id } = useParams<{ id: string }>()
  const planta = plantasMock.find((p) => p.id === Number(id))

  if (!planta) {
    return (
      <div className="container mt-4">
        <h2>Planta no encontrada</h2>
        <Link to="/library" className="btn btn-secondary mt-3">
          Volver a Biblioteca
        </Link>
      </div>
    )
  }

  return (
    <div className="container mt-4" style={{ maxWidth: 700 }}>
      <h2>{planta.nombre}</h2>
      <p><strong>Especie:</strong> {planta.especie}</p>
      <p>{planta.descripcion}</p>
      <h4>Cuidados</h4>
      <p>{planta.cuidados}</p>
      <Link to="/library" className="btn btn-secondary mt-3">
        Volver a Biblioteca
      </Link>
    </div>
  )
}

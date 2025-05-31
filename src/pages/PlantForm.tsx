import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

type PlantaForm = {
  nombre: string
  especie: string
  descripcion: string
  cuidados: string
}

// Mock para edición (simula que traes datos de backend)
const plantasMock = [
  { id: 1, nombre: 'Cactus', especie: 'Succulent', descripcion: '', cuidados: '' },
  { id: 2, nombre: 'Helecho', especie: 'Pteridophyta', descripcion: '', cuidados: '' },
]

export default function PlantForm() {
  const { id } = useParams<{ id?: string }>()
  const navigate = useNavigate()

  const plantaEdit = plantasMock.find((p) => p.id === Number(id))

  const { register, handleSubmit, reset } = useForm<PlantaForm>({
    defaultValues: plantaEdit || {
      nombre: '',
      especie: '',
      descripcion: '',
      cuidados: '',
    },
  })

  const onSubmit = (data: PlantaForm) => {
    console.log('Guardar planta:', data)
    // Aquí guardarías en backend y luego rediriges
    navigate('/home')
  }

  return (
    <div className="container mt-4" style={{ maxWidth: 600 }}>
      <h2>{id ? 'Editar Planta' : 'Agregar Planta'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" {...register('nombre', { required: true })} />
        </div>
        <div className="mb-3">
          <label className="form-label">Especie</label>
          <input className="form-control" {...register('especie', { required: true })} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" {...register('descripcion')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Cuidados</label>
          <textarea className="form-control" {...register('cuidados')} />
        </div>
        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </form>
    </div>
  )
}

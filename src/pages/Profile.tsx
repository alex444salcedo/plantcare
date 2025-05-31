import { useForm } from 'react-hook-form'

type ProfileForm = {
  name: string
  email: string
  location: string
}

export default function Profile() {
  const { register, handleSubmit } = useForm<ProfileForm>({
    defaultValues: {
      name: 'Alejandro Salcedo',
      email: 'user@example.com',
      location: 'Ciudad',
    },
  })

  const onSubmit = (data: ProfileForm) => {
    console.log('Actualizar perfil:', data)
    // Aquí iría llamada a API para actualizar datos
  }

  return (
    <div className="container mt-4" style={{ maxWidth: 600 }}>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" {...register('name')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input className="form-control" {...register('email')} disabled />
        </div>
        <div className="mb-3">
          <label className="form-label">Ubicación</label>
          <input className="form-control" {...register('location')} />
        </div>
        <button className="btn btn-primary" type="submit">
          Guardar cambios
        </button>
      </form>
    </div>
  )
}

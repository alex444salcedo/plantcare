import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

type LoginForm = {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginForm>()
  const navigate = useNavigate()

  const onSubmit = (data: LoginForm) => {
    console.log('Login data:', data)
    // Aquí iría la llamada a API para login
    // Si éxito:
    navigate('/home')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4 text-center">Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            {...register('password', { required: true })}
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Entrar
        </button>
      </form>
      <p className="mt-3 text-center">
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  )
}

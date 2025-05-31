import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type RegisterForm = {
  email: string
  password: string
  confirmPassword: string
}

const schema = yup.object({
  email: yup.string().email('Correo inválido').required('Requerido'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
    .required('Requerido'),
}).required()

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()

  const onSubmit = (data: RegisterForm) => {
    console.log('Register data:', data)
    // Aquí iría llamada API para registrar usuario
    // Si éxito:
    navigate('/login')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4 text-center">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            {...register('password')}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className={`form-control ${
              errors.confirmPassword ? 'is-invalid' : ''
            }`}
            {...register('confirmPassword')}
          />
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Registrarse
        </button>
      </form>

      <p className="mt-3 text-center">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  )
}

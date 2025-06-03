import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const handleConocenos = () => {
    navigate('/about')
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        height: '100vh',
        backgroundColor: '#d7e4d4',
        padding: '0 20px',
      }}
    >
      <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>PlantCare</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Cuida tus plantas como un experto
      </p>
      <button
        onClick={handleConocenos}
        style={{
          padding: '10px 25px',
          fontSize: '1.2rem',
          border: '2px solid black',
          background: 'transparent',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Conócenos
      </button>

      <footer style={{ position: 'absolute', bottom: 10, fontSize: '0.9rem' }}>
        Footer: Enlaces legales, redes sociales, contacto
      </footer>
    </div>
  )
}

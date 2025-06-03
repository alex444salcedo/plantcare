import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        backgroundColor: '#a0ae82',
        color: '#222',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: 900,
        margin: '0 auto',
        lineHeight: 1.6,
      }}
    >
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>
        Conócenos
      </h2>

      <section>
        <h3>Nuestra Misión</h3>
        <p>
          “Transformando la forma en que cuidamos las plantas”
          <br />
          En PlantCare creemos que todos merecen disfrutar de la belleza y beneficios de las plantas, sin importar su nivel de experiencia.
          Nuestra misión es eliminar las barreras que existen entre las personas y el cuidado exitoso de plantas,
          proporcionando herramientas digitales intuitivas que convierten a cualquier persona en un jardinero exitoso.
        </p>
        <p>
          El Problema que Resolvemos
          <br />
          ¿Por qué nace PlantCare? Cada año, millones de plantas mueren por falta de conocimiento sobre sus cuidados específicos.
          Vimos cómo personas con las mejores intenciones terminaban frustradas después de perder plantas una y otra vez.
          El problema no es la falta de amor por las plantas, sino la falta de información accesible y recordatorios oportunos.
        </p>
        <p>
          Nuestra Solución
          <br />
          “Tecnología al servicio de la naturaleza”
          <br />
          PlantCare combina una extensa base de datos botánica con algoritmos inteligentes para crear planes de cuidado personalizados.
          No solo te decimos qué hacer, sino cuándo hacerlo, adaptándonos a tu rutina y al ambiente específico de tus plantas.
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h3>Sección - Nuestros Valores</h3>
        <ul>
          <li>Accesibilidad: Creemos que el conocimiento sobre plantas debe estar al alcance de todos</li>
          <li>Simplicidad: Convertimos información compleja en acciones simples y claras</li>
          <li>Sostenibilidad: Promovemos el cuidado responsable que respeta el medio ambiente</li>
          <li>Comunidad: Fomentamos el intercambio de experiencias entre amantes de las plantas</li>
          <li>Innovación: Utilizamos tecnología para mejorar constantemente la experiencia del usuario</li>
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h3>Nuestro Compromiso</h3>
        <p>
          “Más que una app, una filosofía”
          <br />
          Nos comprometemos a ser tu compañero confiable en el viaje del cuidado de plantas.
          Cada funcionalidad está diseñada pensando en resolver problemas reales que enfrentan los cuidadores diariamente.
          Nuestro éxito se mide por la salud y longevidad de las plantas que cuidamos juntos.
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h3>Visión a Futuro</h3>
        <p>
          “Construyendo un mundo más verde”
          <br />
          Visualizamos un futuro donde cada hogar tenga plantas saludables y prósperas.
          Donde la jardinería sea una actividad relajante y exitosa, no una fuente de estrés.
          PlantCare es nuestro primer paso hacia ese mundo más verde y conectado con la naturaleza.
        </p>
      </section>

      <section style={{ marginTop: 40, textAlign: 'center' }}>
        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '12px 30px',
            fontSize: '1.1rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#37472b',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Comenzar mi jardín digital
        </button>
      </section>
    </div>
  )
}

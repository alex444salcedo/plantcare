import { useNavigate } from 'react-router-dom';
import {
  AboutContainer,
  SectionTitle,
  Button,
  List,
  ListItem,
} from './About.styles';

export default function About() {
  const navigate = useNavigate();

  return (
    <AboutContainer>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>
        Conócenos
      </h2>

      <section>
        <h3>Nuestra Misión</h3>
        <p>
          “Transformando la forma en que cuidamos las plantas”
          <br />
          En PlantCare creemos que todos merecen disfrutar de la belleza y beneficios de las plantas, sin importar su nivel de experiencia.
          Nuestra misión es eliminar las barreras que existen entre las personas y el cuidado exitoso de plantas, proporcionando herramientas digitales intuitivas que convierten a cualquier persona en un jardinero exitoso.
        </p>
        <p>
          El Problema que Resolvemos
          <br />
          ¿Por qué nace PlantCare? Cada año, millones de plantas mueren por falta de conocimiento sobre sus cuidados específicos.
          Vimos cómo personas con las mejores intenciones terminaban frustradas después de perder plantas una y otra vez.
          El problema no es la falta de amor por las plantas, sino la falta de información accesible y recordatorios oportunos.
        </p>
      </section>

      <section>
        <SectionTitle>Sección - Nuestros Valores</SectionTitle>
        <List>
          <ListItem>Accesibilidad: Creemos que el conocimiento sobre plantas debe estar al alcance de todos</ListItem>
          <ListItem>Simplicidad: Convertimos información compleja en acciones simples y claras</ListItem>
          <ListItem>Sostenibilidad: Promovemos el cuidado responsable que respeta el medio ambiente</ListItem>
          <ListItem>Comunidad: Fomentamos el intercambio de experiencias entre amantes de las plantas</ListItem>
          <ListItem>Innovación: Utilizamos tecnología para mejorar constantemente la experiencia del usuario</ListItem>
        </List>
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
        <Button onClick={() => navigate('/login')}>Comenzar mi jardín digital</Button>
      </section>
    </AboutContainer>
  );
}

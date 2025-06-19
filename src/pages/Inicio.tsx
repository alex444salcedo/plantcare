import { useNavigate } from 'react-router-dom';
import {
  Container,
  SideBar,
  LogoCircle,
  MainContent,
  Title,
  Subtitle,
  SideMenu,
  MenuButton,
  JardinButton,
} from './inicio.styles';


export default function Inicio() {
  const navigate = useNavigate();

  return (
    <Container>
      <SideBar>
        <LogoCircle>LOGO</LogoCircle>
        <SideMenu>
          <MenuButton onClick={() => navigate('/plantas')}>Buscador de plantas</MenuButton>
          <MenuButton onClick={() => navigate('/recordatorios')}>Recordatorios</MenuButton>
          <MenuButton onClick={() => navigate('/comunidad')}>Comunidad</MenuButton>
          <MenuButton onClick={() => navigate('/contacto')}>Soporte</MenuButton>
        </SideMenu>
      </SideBar>
      <MainContent>
        <Title>PlantCare</Title>
        <Subtitle>Cuida tus plantas como un experto"</Subtitle>
        <JardinButton onClick={() => navigate('/coleccion')}>Mi Jardín</JardinButton>
      </MainContent>
    </Container>
  );
}

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #e2eedd;
  font-family: 'Georgia', serif;
  position: relative;
`;

export const SideBar = styled.div`
  min-width: 240px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  gap: 40px;
`;

export const LogoCircle = styled.div`
  width: 75px;
  height: 75px;
  background: #b8cbb7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 30px;
  border: 1.5px solid #7a9277;
  color: #222c13;
  letter-spacing: 1px;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const MenuButton = styled.button`
  width: 85%;
  margin: 0 auto;
  background: transparent;
  border: 1.5px solid #37472b;
  color: #37472b;
  font-size: 1.06rem;
  padding: 13px 0;
  border-radius: 4px;
  transition: background 0.18s, color 0.18s;
  cursor: pointer;
  font-family: 'Georgia', serif;

  &:hover {
    background: #c8dfc1;
    color: #212b16;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  /* Para centrar vertical */
  padding: 30px 0 30px 0;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-family: 'Georgia', serif;
  font-weight: bold;
  color: #222c13;
  margin-bottom: 5px;
  letter-spacing: 1px;
`;

export const Subtitle = styled.div`
  font-size: 1.2rem;
  color: #232a19;
  font-family: 'Georgia', serif;
  margin-bottom: 45px;
`;

export const JardinButton = styled.button`
  font-size: 1.3rem;
  padding: 18px 100px;
  border: 1.5px solid #222c13;
  border-radius: 4px;
  background: transparent;
  color: #232a19;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #b6d2ad;
    color: #142010;
  }
`;

// Imagen decorativa de planta a la derecha
export const PlantImg = styled.img`
  position: absolute;
  right: 60px;
  bottom: 0;
  max-height: 90vh;
  min-height: 330px;
  width: auto;
  pointer-events: none;
  z-index: 1;
  opacity: 0.98;
  @media (max-width: 1000px) {
    display: none;
  }
`;

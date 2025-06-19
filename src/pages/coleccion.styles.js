import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
  padding: 40px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw 30px 5vw;
  font-size: 1.3rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
`;

export const StyledButton = styled.button`
  background: #b4ceac;
  color: #222;
  border: 1.5px solid #6a9662;
  border-radius: 8px;
  padding: 8px 22px;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 1px 2px 5px #b1cba8a1;
  transition: background 0.2s, box-shadow 0.2s;
  &:hover {
    background: #c8e6c9;
    box-shadow: 2px 4px 10px #b1cba8c1;
  }
`;

export const PlantList = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 0;
`;

export const PlantCard = styled.div`
  background: #9cbfaaec;
  min-width: 170px;
  min-height: 110px;
  border-radius: 15px;
  box-shadow: 0 4px 14px #8dcea94a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 14px;
  font-size: 1.1rem;
  transition: transform 0.12s;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 8px 22px #7ea08b66;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(245, 255, 245, 0.97);
  z-index: 1111;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddPlantForm = styled.form`
  background: #e6f4ea;
  border-radius: 20px;
  box-shadow: 0 2px 20px #a6cba673;
  padding: 36px 32px;
  min-width: 340px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 1rem;

  input, select {
    width: 100%;
    padding: 7px 10px;
    border-radius: 7px;
    border: 1.5px solid #b0cbb5;
    margin-top: 2px;
    margin-bottom: 5px;
  }
  label {
    font-size: 0.98rem;
    color: #314431;
  }
`;


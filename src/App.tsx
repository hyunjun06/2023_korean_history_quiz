import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #111;
`;

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Topbar = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuizBox = styled.div`
  width: 1000px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

function App() {
  return (
    <Container>
      <Topbar></Topbar>
      <QuizBox></QuizBox>
    </Container>    
  );
}

export default App;

import { useState } from "react";
import styled from "styled-components";
import { quizData, quizAnswer, quizDesc } from "./data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Topbar = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  right: 0;
`;
interface TopbarButtonProps {
  active?: boolean;
  color: string;
}

const TopbarButton = styled.button<TopbarButtonProps>`
  width: 150px;
  height: 50px;
  background-color: ${props => props.active ? props.color : props.color};
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    width: 155px;
    height: 55px;
    transition: 0.3s ease-in-out;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0,0,0,0.2);
  font-weight: 900;
  letter-spacing: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  
  span {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
    margin-left: 10px;
  }
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

interface QuizTextProps {
  weight: number;
}

const QuizText = styled.h2<QuizTextProps>`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0,0,0,0.2);
  font-weight: ${props => props.weight};
  letter-spacing: ${props => props.weight === 900 ? "5px" : "0px"};
  padding: 0 50px 0 50px;
  text-align: center;
`;

const QuizInput = styled.input`
  width: 500px;
  height: 50px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 0 20px;
  font-size: 20px;
  color: #333;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  transition: 0.3s ease-in-out;
  text-align: center;

  &:focus {
    width: 505px;
    height: 55px;
    transition: 0.3s ease-in-out;
  }
`;

const QuizButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: orange;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  color: #333;
  transition: 0.3s ease-in-out;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    width: 105px;
    height: 35px;
    transition: 0.3s ease-in-out;
  }
`;

function App() {
  const getNewQuiz = () => {
    setAttemptedQuizzes(prevAttempted => {
      // If all quizzes have been attempted, reset the list
      if (prevAttempted.length === quizData.length) {
        const random = Math.floor(Math.random() * quizData.length);

        setQuiz(quizData[random]);
        setAnswer(quizAnswer[random]);
        setDesc(quizDesc[random]);
        setIsQuiz(true);

        return [random];
      } else {
        let random;
        do {
          random = Math.floor(Math.random() * quizData.length);
        } while (prevAttempted.includes(random));
  
        setQuiz(quizData[random]);
        setAnswer(quizAnswer[random]);
        setDesc(quizDesc[random]);
        setIsQuiz(true);
  
        // Return the updated list of attempted quizzes
        return [...prevAttempted, random];
      }
    });
  }
  
  const changeState = () => {
    setInput("");
    if(!isQuiz) getNewQuiz();
    setIsQuiz(!isQuiz);
  }
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeState();
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  
  const [quiz, setQuiz] = useState<string>(quizData[0]);
  const [answer, setAnswer] = useState<string>(quizAnswer[0]);
  const [desc, setDesc] = useState<string>();
  const [isQuiz, setIsQuiz] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [attemptedQuizzes, setAttemptedQuizzes] = useState<number[]>([]);

  return (
    <Container>
      <Title>Quiz App<span>by 22081 이현준</span></Title>
      <Topbar>
        <TopbarButton color="orange">퀴즈 풀기</TopbarButton>
        <TopbarButton color="teal">오답 확인</TopbarButton>
      </Topbar>
      <QuizBox>
        {isQuiz ? null : <QuizText weight={800}>입력한 정답</QuizText>}
        {isQuiz ? null : <QuizText weight={300}>{input}</QuizText>} 
        {isQuiz ? null : <QuizText weight={800}>정답</QuizText>}
        <QuizText weight={isQuiz ? 900: 300}>{isQuiz ? quiz : answer}</QuizText>
        {isQuiz && desc !== "" ? <QuizText weight={300}>{desc}</QuizText> : null}
        <form onSubmit={onSubmit}>
          {isQuiz ? <QuizInput placeholder="정답을 입력하세요." onChange={onChange}/> : null}
        </form>
        <QuizButton onClick={changeState}>{isQuiz ? "정답 확인" : "다음 퀴즈"}</QuizButton>
      </QuizBox>
    </Container>    
  );
}

export default App;

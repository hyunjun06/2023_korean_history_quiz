import { useEffect, useState } from "react";
import styled from "styled-components";
import { quizData, quizAnswer, quizDesc } from "./data";

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

function Quiz() {
  const getNewQuiz = () => {
    setInput("");
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
    if(!isQuiz) getNewQuiz();
    setIsQuiz(!isQuiz);
  }
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeState();
    
    const savedQuizzes = localStorage.getItem("quiz");
    const parsedQuizzes = savedQuizzes ? JSON.parse(savedQuizzes) : [];
    const newQuiz = {
      quiz: quiz,
      desc: desc,
      answer: answer,
      input: input,
      key: Date.now(),
    }

    localStorage.setItem("quiz", JSON.stringify([...parsedQuizzes, newQuiz]));
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    e.target.scrollLeft = e.target.scrollWidth;
  }
  
  const [quiz, setQuiz] = useState<string>(quizData[0]);
  const [answer, setAnswer] = useState<string>(quizAnswer[0]);
  const [desc, setDesc] = useState<string>();
  const [isQuiz, setIsQuiz] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [attemptedQuizzes, setAttemptedQuizzes] = useState<number[]>([]);
  const init = useState(true)[0];

  useEffect(() => {
    getNewQuiz();
  }, [init])
  
  useEffect(() => {
    const handleNextQuiz = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !isQuiz) 
        changeState();
    }
    
    document.addEventListener("keydown", handleNextQuiz);

    return () => {
      document.removeEventListener("keydown", handleNextQuiz);
    }
  });
  
  return (
      <QuizBox>
        <QuizText weight={300}>퀴즈 {attemptedQuizzes.length}/{quizData.length}</QuizText>
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
  );
}

export default Quiz;

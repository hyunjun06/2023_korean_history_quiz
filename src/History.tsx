import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 800px;
    height: calc(100vh - 100px);
    display: flex;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    overflow: scroll;
`;

const Quiz = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
`;

const QuizContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 20px;
    width: 770px;
    padding-left: 10px;
    padding-top: 10px;
`;

const QuizIndex = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #333;
    font-weight: 300;
    text-align: center;
    align-self: center;
    height: 100%;
    width: 30px;
    background-color: orange;
    border-radius: 10px;
`;

interface QuizTextProps {
  weight: number;
  size: number;
  title?: boolean;
}

const QuizText = styled.h2<QuizTextProps>`
  font-size: ${props => props.size}px;
  color: #333;
  margin-bottom: 20px;
  text-shadow: ${props => props.title ? "0 0 10px rgba(0,0,0,0.2)" : "none"};
  font-weight: ${props => props.weight};
  letter-spacing: ${props => props.title ? "5px" : "0px"};
  text-align: left;
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
  cursor: pointer;

  &:hover {
    width: 105px;
    height: 35px;
    transition: 0.3s ease-in-out;
  }
`;

const NoHistory = styled.h2`
    font-size: 20px;
    color: #333;
    font-weight: 300;
    text-align: center;
    align-self: center;
    height: 100%;
    width: 100%;
`;

function History() {
    interface HistoryProps {
        quiz: string;
        desc: string;
        answer: string;
        input: string;
        key: number;
    }

    const [history, setHistory] = useState<HistoryProps[]>([]);

    useEffect(() => {
        const data = localStorage.getItem("quiz");
        if(data) setHistory(JSON.parse(data));
    }, []);

    return (
        <Container>            
            {
                history.map((item, index) => (
                    <Quiz key={item.key}>
                        <QuizIndex>{index + 1}</QuizIndex>
                        <QuizContainer>
                            <QuizText weight={900} size={20} title>퀴즈</QuizText>
                            <QuizText weight={900} size={16}>{item.quiz}</QuizText>
                            <QuizText weight={300} size={16}>{item.desc}</QuizText>
                            <QuizText weight={900} size={20} title>입력</QuizText>
                            <QuizText weight={300} size={16}>{item.input}</QuizText>
                            <QuizText weight={900} size={20} title>정답</QuizText>
                            <QuizText weight={300} size={16}>{item.answer}</QuizText>
                            <QuizButton onClick={() => {
                                const data = localStorage.getItem("quiz");
                                if(data) {
                                    const parsed = JSON.parse(data);
                                    const filtered = parsed.filter((i: HistoryProps) => i.key !== item.key);
                                    localStorage.setItem("quiz", JSON.stringify(filtered));
                                    setHistory(filtered);
                                }
                            }}>삭제</QuizButton>
                        </QuizContainer>
                    </Quiz>
                ))
            }
            {history.length <= 0 ?? <NoHistory>푼 문제가 없습니다</NoHistory>}
        </Container>
    );
}

export default History;
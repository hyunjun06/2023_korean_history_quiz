import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

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

function Frame() {
    return (
        <>
          <Title>Quiz<span>by 22081 이현준</span></Title>
          <Topbar>
            <Link to="">
              <TopbarButton color="orange">퀴즈 풀기</TopbarButton>
            </Link>
            <Link to="history">
              <TopbarButton color="teal">푼 문제 확인</TopbarButton>
            </Link>
          </Topbar>
          <Outlet />
        </>
    );
}

export default Frame;
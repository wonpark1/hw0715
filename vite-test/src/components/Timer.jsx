import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
`;

const StartButton = styled.button`
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  border: 1px solid #666;
  background: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const Hr = styled.hr`
  margin: 4rem 0 3rem;
  border: 0;
  border-top: 1px solid #e5e5e5;
`;

const TimeText = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 1rem;
`;

const RemainText = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`;

const TOTAL = 10;

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (running) return;
    setSeconds(0);
    setRunning(true);
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (seconds >= TOTAL && running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  }, [seconds, running]);

  return (
    <Wrapper>
      <StartButton onClick={handleStart} disabled={running}>
        타이머 시작
      </StartButton>

      <Hr />

      {seconds > 0 && (
        <>
          <TimeText>Time: {seconds} seconds</TimeText>
          <RemainText>남은 시간 : {TOTAL - seconds}</RemainText>
        </>
      )}
    </Wrapper>
  );
}

export default Timer;

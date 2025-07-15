import React from "react";
import styled, { css } from "styled-components";
import { FiTrendingUp, FiClock, FiRss, FiMoreVertical } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5 0 1.5rem;
  padding: 0 0.5rem;
`;

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Tab = styled.li`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  color: #606060;
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    css`
      color: #000;
      font-weight: 700;

      &::after {
        content: "";
        display: block;
        height: 2px;
        background: #000;
        margin-top: 6px;
      }
    `}
  svg {
    font-size: 1.05rem;
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MonthBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.45rem 0.8rem;
  font-size: 0.9rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
  cursor: default;
`;

const MoreBtn = styled.button`
  font-size: 1.3rem;
  border: none;
  background: none;
  cursor: default;
`;

function TabBar() {
  return (
    <Wrapper>
      <Tabs>
        <Tab $active>
          <FiTrendingUp /> 트렌딩
        </Tab>
        <Tab>
          <FiClock /> 최신
        </Tab>
        <Tab>
          <FiRss /> 피드
        </Tab>
      </Tabs>

      <RightGroup>
        <MonthBtn>
          이번 달 <MdExpandMore />
        </MonthBtn>
        <MoreBtn>
          <FiMoreVertical />
        </MoreBtn>
      </RightGroup>
    </Wrapper>
  );
}

export default TabBar;

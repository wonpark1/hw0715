// src/components/TabBar.jsx
import React from "react";
import styled, { css } from "styled-components";
import { FiTrendingUp, FiClock, FiRss, FiMoreVertical } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1.5rem 0;
  padding: 0 0.5rem;
`;

const Tabs = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Tab = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.35rem;
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
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 3px;
        background: #000;
        border-radius: 2px;
      }
    `}

  svg {
    font-size: 1.05rem;
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const MonthBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.45rem 0.9rem;
  font-size: 0.9rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
`;

const MoreBtn = styled.button`
  font-size: 1.3rem;
  border: none;
  background: none;
  cursor: pointer;
`;

function TabBar() {
  return (
    <Wrapper>
      <Tabs>
        <Tab $active>
          <FiTrendingUp />
          트렌딩
        </Tab>
        <Tab>
          <FiClock />
          최신
        </Tab>
        <Tab>
          <FiRss />
          피드
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

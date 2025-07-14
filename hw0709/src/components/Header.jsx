// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import { FiSearch, FiBell } from "react-icons/fi";

const Wrapper = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
`;

const Logo = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.25rem;
`;

const LoginBtn = styled.button`
  padding: 0.45rem 1.25rem;
  font-size: 0.9rem;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  color: #ffffff;
  background: #000000;
  cursor: pointer;
`;

function Header() {
  return (
    <Wrapper>
      <Logo>velog</Logo>
      <IconGroup>
        <FiBell />
        <FiSearch />
        <LoginBtn>로그인</LoginBtn>
      </IconGroup>
    </Wrapper>
  );
}

export default Header;

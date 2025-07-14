// Button.jsx
import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
`;

function Button({ label, bgColor, buttonHandler }) {
  return (
    <BoxWrapper color={bgColor} onClick={buttonHandler}>
      {label}
    </BoxWrapper>
  );
}
export default Button;

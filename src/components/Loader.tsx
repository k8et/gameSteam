import React from "react";
import styled from "styled-components";

const DarkBackground = styled.span`
  width: 58px;
  height: 58px;
  border: 4px solid #FFF;
  border-bottom-color: #7469F8;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
    return (
        <DarkBackground />
    );
};

export default Loader;

import React from "react";
import styled from "styled-components";
import Central from "../components/Center/Central";
import Left from "../components/Center/Left";
import Right from "../components/Center/Right";
const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  height: 400px;
  margin: 0.5rem;
  @media (max-width: 600px) {
    height: 300px;
  }
`;
const Center = () => {
  return (
    <Block>
      <Left />
      <Central />
      <Right />
    </Block>
  );
};

export default Center;

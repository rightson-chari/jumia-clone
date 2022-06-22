import React from "react";
import styled from "styled-components";
import Deal from "./Deal";
import { deals } from "../data";
const first = deals.slice(0, 2);
const Container = styled.div`
  margin: 2rem 1.5rem 2rem 1rem;
  width: 96vw;
  position: relative;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.3);
  background: orange;
  height: 350px;
  border-radius: 6px;
  padding-top: 1rem;
  @media (max-width: 600px) {
    height: 200px;
  }
`;
const Top = styled.div`
  position: relative;
  position: flex;
  align-items: center;
  text-align: center;
  padding-bottom: 0.5rem;
  font-weight: 800;
  font-size: 17px;
`;
const Deals = () => {
  return (
    <Container>
      <Top>DEALS YOU CAN MISS</Top>
      <Deal first={first} />
    </Container>
  );
};

export default Deals;

import React from "react";
import styled from "styled-components";
import Bottom from "./Footer/Bottom";
import Top from "./Footer/Top";

const Container = styled.div`
  justify-content: center;
  flex-direction: column;
`;
const Footer = () => {
  return (
    <Container>
      <Top />

      <Bottom />
    </Container>
  );
};

export default Footer;

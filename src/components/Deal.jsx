import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 90%;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: white;

  margin-bottom: 0.5rem;
`;
const ImageContainer = styled.div`
  padding: 0;
  flex: 1;
  @media (min-width: 1000px) {
    height: 95%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
const Deal = ({ first }) => {
  console.log(first);
  return (
    <Container>
      {first.map((item, index) => {
        console.log(item);
        return (
          <ImageContainer>
            <Image src={item.img} />
          </ImageContainer>
        );
      })}
    </Container>
  );
};

export default Deal;

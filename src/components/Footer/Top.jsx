import React from "react";
import styled from "styled-components";
import Star from "@mui/icons-material/Star";

import { TextField } from "@mui/material";
const Container = styled.div`
  width: 100%;
  height: 150px;
  background: rgb(40, 40, 40);
  color: white;
  padding: 1rem 0 1rem 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: flex-start;
  @media (max-width: 900px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 2fr;
    height: 200px;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 900px) {
    grid-column: 1/-1;

    display: flex;
    justify-content: center;
  }
`;
const Center = styled.div`
  display: flex;
  margin-top: 0.5rem;
  justify-content: start;
  flex-direction: column;
`;
const Right = styled.div``;
const Button = styled.button`
  margin-left: 1rem;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  padding: 0.4rem;
  background: transparent;
`;
const Top = () => {
  return (
    <Container>
      <Left>
        <span
          style={{
            fontWeight: "600",
            letterSpacing: "2px",
            fontSize: "35px",
          }}
        >
          {" "}
          JUMIA{" "}
        </span>
        <span
          style={{
            display: "flex",
            alignitems: "center",
            marginLeft: ".1rem",
            justifyContent: "center",
            padding: ".1rem",
            height: "30px",
            width: "30px",
            alignItems: "center",
            background: "orange",
            borderRadius: "50%",
          }}
        >
          {" "}
          <Star sx={{ color: "#fff", fontSize: "22px" }} />
        </span>
      </Left>
      <Center>
        <h5
          style={{
            fontSize: "12px",
            fontWeight: 600,
            marginBottom: ".4rem",
            padding: 0,
          }}
        >
          NEW TO JUMIA?
        </h5>
        <p style={{ margin: 0, padding: 0, fontSize: "12px" }}>
          Subscribe to our newsletter to get updates on our latest offers!
        </p>
        <div style={{ marginTop: "1rem" }}>
          <TextField
            size="small"
            label="Enter Email Address"
            sx={{
              background: "white",
              borderRadius: "5px",
            }}
          />
          <Button>MALE</Button>
          <Button>FEMALE</Button>
        </div>
      </Center>
      <Right>
        <div
          style={{
            display: "flex",
            gap: ".3rem",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "5px",
              backgroundColor: "orange",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignitems: "center",

                justifyContent: "center",
                height: "30px",
                width: "30px",
                alignItems: "center",
                background: "white",
                borderRadius: "50%",
              }}
            >
              {" "}
              <Star sx={{ color: "orange", fontSize: "22px" }} />
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "13px", fontWeight: "600" }}>
              DOWNLOAD JUMIA FREE APP
            </span>
            <span style={{ fontSize: "10px", fontWeight: "300" }}>
              Get access to exclusive offers!
            </span>
          </div>
        </div>
      </Right>
    </Container>
  );
};

export default Top;

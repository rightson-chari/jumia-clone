import React from "react";
import styled from "styled-components";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import { Box } from "@mui/material";
const Block = styled.div`
  flex: 1;
  height: 100%;
  background: rgb(254, 153, 0);
  margin: 0.5rem;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  column-gap: 1rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;
const Top = styled.div`
  background-color: white;
  border-radius: 5px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 0.5rem;
`;
const Bottom = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex: 1;
  margin-top: 0.5rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const First = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Right = () => {
  return (
    <Block>
      <Top>
        <First>
          <HelpOutlineRoundedIcon
            fontSize="large"
            sx={{ flex: 1, color: "orange" }}
          />
          <Box sx={{ flex: 2, display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 600 }}>HELP CENTER</span>
            <span style={{ fontWeight: 400, fontSize: "10px" }}>
              Guide To Customer Care
            </span>
          </Box>
        </First>
        <First>
          <PaidRoundedIcon fontSize="large" sx={{ flex: 1, color: "orange" }} />
          <Box sx={{ flex: 2, display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 600 }}>EASY RETURN</span>
            <span style={{ fontWeight: 400, fontSize: "10px" }}>
              Quik Refund
            </span>
          </Box>
        </First>
        <First>
          <SellRoundedIcon fontSize="large" sx={{ flex: 1, color: "orange" }} />
          <Box sx={{ flex: 2, display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 600 }}>SELL ON JUMIA</span>
            <span style={{ fontWeight: 400, fontSize: "10px" }}>
              Millions Of Visitors
            </span>
          </Box>
        </First>
      </Top>
      <Bottom>
        <Image src="https://ke.jumia.is/cms/2022/JA22/Live/Day01/Generics/ezgif.com-gif-maker.gif" />
      </Bottom>
    </Block>
  );
};

export default Right;

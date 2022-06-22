import React from "react";
import { items } from "../data";
import styled from "styled-components";
import { Box } from "@mui/material";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import IconButton from "@mui/material/IconButton";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
const Boxes = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  padding-top: 3rem;
  height: 90%;
  margin-bottom: -1rem;
  width: fit-content;
  transition: 0.5s;
  transform: translateX(${(props) => props.index * -250}px);
`;

const Card = styled.div`
  border-radius: 5px;
  margin: 5px;
  height: 95%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2px;
  width: 250px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;
const Image = styled.img`
  flex: 4;
  width: 80%;
  z-index: 3;
  height: 60%;
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  color: white;
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "15px"};
  z-index: 3;
`;
const Top = styled.div`
  position: absolute;
  text-align: left;
  margin: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(230, 22, 1, 1);
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  top: 0;
  display: flex;
  flex-direction: row;
`;
const Timer = styled.div`
  flex: 4;
  text-align: center;
  @media (max-width: 600px) {
    display: none;
  }
`;
// const Spans = styled.span`
//   margin: 0 0.3rem;
//   color: white;
// `;

const Info = styled.div`
  flex: 1;
  width: 80%;
`;
const Title = styled.div``;
const Subtitle = styled.span``;
const Name = styled.span``;
const Discount = styled.div`
  position: absolute;
  background-color: rgba(255, 165, 0, 0.2);
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  right: 1%;
  z-index: 10;
  color: orange;
`;
const FlashSales = () => {
  const [index, setIndex] = React.useState(0);
  const [seconds, setSecond] = React.useState(0);
  const [minutes, setMinutes] = React.useState(60);
  React.useEffect(() => {
    const next = (seconds + 1) % 60;
    const id = setTimeout(() => setSecond(next), 1000);
    if (seconds === 0) {
      setMinutes((minutes) => minutes - 1);
    }
  }, [seconds]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : 0);
    } else {
      setIndex(index <= items.length - 3 ? index + 1 : 0);
    }
  };
  React.useEffect(() => {
    const next = (index - 1) % items.length;

    const id = setTimeout(() => handleClick("right"), 4000);

    return () => clearTimeout(id);
  }, [index]);

  return (
    <Box
      sx={{
        position: "relative",
        background: "white",
        width: "96vw",
        overflowX: "hidden",
        margin: ".5rem",
        boxShadow: "3px 3px 3px rgba(0,0,0,.3)",
        borderTop: "1px solid rgba(0,0,0,.1)",
        borderLeft: "1px solid rgba(0,0,0,.1)",
        p: 0,
        height: "300px",
        borderRadius: "6px",
      }}
    >
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {" "}
        <IconButton>
          <ArrowLeftOutlined sx={{ color: "white" }} />
        </IconButton>{" "}
      </Arrow>

      <Top>
        {" "}
        <div>
          <SellRoundedIcon
            fontSize="large"
            sx={{
              flex: 1,
              color: "orange",
              transform: "rotate(90deg)",
            }}
          />
          <span
            style={{
              flex: 1,
              color: "white",
              fontSize: "22px",
              fontWeight: "500",
              marginLeft: ".5rem",
            }}
          >
            Flash Sales
          </span>
        </div>
        <Timer>
          <span style={{ color: "white", margin: "0rem .3rem" }}>
            Time Left:
          </span>
          <span style={{ color: "white", margin: "0rem .3rem" }}>20h:</span>
          <span style={{ color: "white", margin: "0rem .3rem" }}>
            {minutes}m
          </span>
          <span style={{ color: "white", margin: "0rem .3rem" }}>{`${
            60 - seconds
          }s`}</span>
        </Timer>
      </Top>
      <Boxes index={index}>
        {items.map((item, index) => {
          const { img, name, price } = item;

          return (
            <Card key={index}>
              <Discount>-{Math.floor(Math.random() * 30)}%</Discount>
              <Image src={item.img} />
              <Info>
                <Name>{name.slice(0, 12)}...</Name>
                <Title>{`KSH ${item.price}`}</Title>
                <Subtitle>
                  <s>{`KSH ${Number(item.price) + 100}`}</s>
                </Subtitle>
              </Info>
            </Card>
          );
        })}
      </Boxes>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IconButton>
          <ArrowRightOutlined sx={{ color: "white" }} />
        </IconButton>
      </Arrow>
    </Box>
  );
};

export default FlashSales;

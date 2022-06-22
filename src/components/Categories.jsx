import React from "react";
import { categories } from "../data";
import styled from "styled-components";
import { Box } from "@mui/material";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import IconButton from "@mui/material/IconButton";

const Boxes = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: 90%;
  width: fit-content;
  transition: 0.5s;
  transform: translateX(${(props) => props.index * -180}px);
`;

const Card = styled.div`
  border-radius: 5px;
  margin: 5px;
  height: 95%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 180px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;
const Image = styled.img`
  width: 80%;
  z-index: 3;
  height: 150px;
  margin: 0;
  padding: 0;
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
  left: 0;
  padding: 0.5rem;
  background-color: rgb(255, 154, 0, 0.2);
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  top: 0;
`;

const Info = styled.div`
  flex: 1;
  width: 80%;
`;
const Title = styled.div``;
const Subtitle = styled.span``;
const Name = styled.span``;
const Discount = styled.div`
  position: absolute;
  background-color: rgba(255, 0, 0, 0.8);
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  right: 5%;
  z-index: 10;
`;

const Categories = () => {
  const [index, setIndex] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : 0);
    } else {
      setIndex(index <= categories.length - 3 ? index + 1 : 0);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "white",
        width: "96vw",
        overflowX: "hidden",
        m: ".5rem",
        boxShadow: "3px 3px 3px rgba(0,0,0,.3)",
        borderTop: "1px solid rgba(0,0,0,.1)",
        borderLeft: "1px solid rgba(0,0,0,.1)",
        borderRadius: "5px",
        height: "200px",
      }}
    >
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {" "}
        <IconButton>
          <ArrowLeftOutlined sx={{ color: "white" }} />
        </IconButton>{" "}
      </Arrow>

      <Boxes index={index}>
        {categories.map((item, key) => {
          const { img, category } = item;

          return (
            <Card key={index}>
              <Image src={img} />
              <Info>
                <Name>{category}...</Name>
                <Title>{`KSH ${item.price}`}</Title>
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

export default Categories;

import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import IconButton from "@mui/material/IconButton";
import { center } from "../../data";
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const Block = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
  flex: 3;
  flex-shrink: 2;
  height: 100%;

  background: rgb(254, 153, 0);
  margin: 0.5rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    flex: 2;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  transform: translateX(${(props) => props.index * -100}%);
`;
const Central = () => {
  const [index, setIndex] = React.useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : 0);
    } else {
      setIndex(index < center.length - 1 ? index + 1 : 0);
    }
  };
  React.useEffect(() => {
    const next = (index + 1) % center.length;

    const id = setTimeout(() => handleClick("right"), 3000);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <Block>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {" "}
        <IconButton>
          <ArrowLeftOutlined sx={{ color: "rgba(255,255,255,.3)" }} />
        </IconButton>{" "}
      </Arrow>
      {center.map((item, indexs) => (
        <Image src={item.img} index={index} key={indexs} />
      ))}

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IconButton>
          <ArrowRightOutlined sx={{ color: "rgba(255,255,255,.3)" }} />
        </IconButton>
      </Arrow>
    </Block>
  );
};

export default Central;

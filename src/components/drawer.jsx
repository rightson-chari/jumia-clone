import React from "react";
import { useGlobalContext } from "../context";
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Box,
//   Drawer,
//   Switch,
// } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Star from "@mui/icons-material/Star";
import MessageIcon from "@mui/icons-material/Message";
import AddCardIcon from "@mui/icons-material/AddCard";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
// import { Home, ExpandMore } from "@mui/icons-material";
import { Divider } from "@mui/material";
import styled from "styled-components";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import HealthAndSafetyOutlined from "@mui/icons-material/HealthAndSafetyOutlined";
import HomeWorkOutlined from "@mui/icons-material/HomeWorkOutlined";
import PhoneAndroidOutlined from "@mui/icons-material/PhoneAndroidOutlined";
import ComputerOutlined from "@mui/icons-material/ComputerOutlined";
import SpeakerOutlined from "@mui/icons-material/SpeakerOutlined";
import CheckroomOutlined from "@mui/icons-material/CheckroomOutlined";
import GamepadOutlined from "@mui/icons-material/GamepadOutlined";
import BabyChangingStationOutlined from "@mui/icons-material/BabyChangingStationOutlined";
import SportsFootballOutlined from "@mui/icons-material/SportsFootballOutlined";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
const List = styled.ul`
  border-radius: 5px;
  width: 100%;
  background: white;
  padding: 0.4rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Li = styled.li`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-size: 15px;
  margin-bottom: 0.5rem;
`;
const Span = styled.span`
  font-weight: 600;
`;
const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.7rem;
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.7rem;
  width: 100%;
`;
const Header = styled.div`
  color: orange;
  padding: 0.7rem;
  width: 100%;
  font-weight: 600;
  font-size: 90%;
  text-align: left;
`;

const Drawers = () => {
  const { open, closeMenu } = useGlobalContext();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={closeMenu}
      sx={{ mt: 1, overflow: "scroll" }}
    >
      <Box
        width="200px"
        textAlign="center"
        display="flex"
        flexDirection="column"
      >
        <Title>
          <span style={{ fontWeight: "600", letterSpacing: "2px" }}>
            {" "}
            JUMIA
          </span>
          <span
            style={{
              display: "flex",
              height: "20px",
              width: "20px",
              alignItems: "center",
              marginLeft: ".1rem",
              justifyContent: "center",
              background: "orange",
              borderRadius: "50%",
            }}
          >
            {" "}
            <Star sx={{ color: "#fff", fontSize: "17px" }} size="small" />
          </span>
        </Title>
        <Divider sx={{ width: "110%" }} />
        <Item>
          <MessageIcon />
          <span
            style={{
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: "15px",
            }}
          >
            {" "}
            LIVE HELP
          </span>
        </Item>
        <Divider />
        <Header>MY JUMIA ACCOUNT </Header>
        <Item>
          <AddCardIcon />
          <span
            style={{
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: "15px",
            }}
          >
            {" "}
            Orders
          </span>
        </Item>{" "}
        <Item>
          <PauseCircleOutlineIcon />
          <span
            style={{
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: "15px",
            }}
          >
            {" "}
            Pending Reviews
          </span>
        </Item>{" "}
        <Item>
          <CreditScoreIcon />
          <span
            style={{
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: "15px",
            }}
          >
            {" "}
            Jumia Credit
          </span>
        </Item>{" "}
        <Item>
          <FolderSpecialIcon />
          <span
            style={{
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: "15px",
            }}
          >
            {" "}
            Saved Items
          </span>
        </Item>
        <Divider />
        <List>
          <Li>
            <ShoppingBagOutlined />
            <Span>Supermarket</Span>
          </Li>
          <Li>
            <HealthAndSafetyOutlined />
            <Span> Health & Beuty</Span>
          </Li>
          <Li>
            <HomeWorkOutlined />
            <Span>Home And Office</Span>
          </Li>
          <Li>
            <PhoneAndroidOutlined />
            <Span>Phones & Tablets</Span>
          </Li>
          <Li>
            <ComputerOutlined />
            <Span>Computing</Span>
          </Li>
          <Li>
            <SpeakerOutlined />
            <Span>Electronics</Span>
          </Li>
          <Li>
            <CheckroomOutlined />
            <Span>Fashion</Span>
          </Li>
          <Li>
            <GamepadOutlined />
            <Span>Gaming</Span>
          </Li>
          <Li>
            <BabyChangingStationOutlined />
            <Span>Baby Products</Span>
          </Li>
          <Li>
            <SportsFootballOutlined />
            <Span>Sporting Goods</Span>
          </Li>
          <Li>
            <DeckOutlinedIcon />
            <Span>Garden & Outdoors</Span>
          </Li>
        </List>
      </Box>
    </Drawer>
  );
};

export default Drawers;

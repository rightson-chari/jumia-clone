import React from "react";
import styled from "styled-components";
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

const Block = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`;
const List = styled.ul`
  border-radius: 5px;
  width: 100%;
  height: 100%;
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
  font-size: 12px;
`;
const Span = styled.span`
  font-weight: 300;
`;

const Left = () => {
  return (
    <Block>
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
    </Block>
  );
};

export default Left;

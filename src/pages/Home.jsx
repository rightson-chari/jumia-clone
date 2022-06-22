import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";

import Gif from "../components/Center/Gif";
import Deals from "../components/Deals";
import Details from "../components/Details";
import Drawers from "../components/drawer";
import FlashSales from "../components/FlashSales";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Center from "./Center";

const Home = () => {
  return (
    <div
      style={{
        background:
          'url("https://ke.jumia.is/cms/2022/JA22/Live/HP/Day7/KE_JA22_Tecno_BrandDay_TO-(1).png")',
      }}
    >
      <Drawers />
      <Gif />
      <Announcement />
      <Navbar />
      <Center />

      <Categories />
      <Deals />
      <FlashSales />
      <Slider />
      <Details />
      <Footer />
    </div>
  );
};

export default Home;

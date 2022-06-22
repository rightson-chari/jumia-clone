import Box from "@mui/material/Box";
import React from "react";
import Star from "@mui/icons-material/Star";
import { center } from "../data";
import DeliveryDining from "@mui/icons-material/DeliveryDining";
import Payment from "@mui/icons-material/Payment";
import Calculate from "@mui/icons-material/Calculate";

const Announcement = () => {
  return (
    <Box
      width="100vw"
      display="flex"
      sx={{
        flex: 1,
        p: 1,
        textAlign: "center",
        background: "rgb(245,245,245)",
        color: "#fff",
        top: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "orange",
          alignItems: center,
          justifyContent: "center",
        }}
      >
        <span
          style={{
            display: "flex",
            alignitems: "center",
            marginRight: ".5rem",
            justifyContent: "center",
            height: "20px",
            background: "orange",
            borderRadius: "50%",
            width: "20px",
          }}
        >
          {" "}
          <Star sx={{ color: "#fff", fontSize: "17px" }} size="small" />
        </span>
        <span>Sell on jumia</span>
      </div>
      <Box
        sx={{ flex: 4, justifyContent: "center" }}
        display={{
          xs: "none",
          sm: "flex",
          md: "flex",
        }}
      >
        <div
          style={{
            alignItems: "center",
            marginRight: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DeliveryDining />
          <span>FOOD</span>
        </div>
        <div
          style={{
            alignItems: "center",
            marginRight: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Star />
          <span>PRIME</span>
        </div>
        <div
          style={{
            alignItems: "center",
            marginRight: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Payment />
          <span>PAY</span>
        </div>
        <div
          style={{
            alignItems: "center",
            marginRight: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Calculate />
          <span>LOGISTICS</span>
        </div>
      </Box>
    </Box>
  );
};

export default Announcement;

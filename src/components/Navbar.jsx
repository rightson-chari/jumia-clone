import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Search from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Menu from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import Star from "@mui/icons-material/Star";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import ArrowBackIosOutlined from "@mui/icons-material/ArrowBackIosOutlined";
const SearchContainer = styled.div`
  flex: 3;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  margin-left: 1rem;
  padding: 0.3rem;
`;
const SearchI = styled.input`
  border: none;
  flex: 9;
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  margin: 0 10px;
  @media (max-width: 768px) {
    flex: 1;
    width: 180px;
  }
`;

const Navbar = () => {
  const ref = React.useRef(null);
  const [stickyClass, setStickyClass] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    const top = ref.current.getBoundingClientRect().top;

    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 80 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  const { openMenu } = useGlobalContext();

  return (
    <>
      <div className={`navbar ${stickyClass}`} ref={ref}>
        <Toolbar
          display="flex"
          sx={{
            justifyContent: "space-between",

            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ color: "black" }}
              onClick={openMenu}
            >
              <Menu size="large" sx={{ fontSize: "30px" }} />
            </IconButton>
            <Typography
              variant="h6"
              component={"div"}
              sx={{
                color: "black",
                display: {
                  xs: "none",
                  sm: "flex",
                  alignItems: "center",
                },
              }}
            >
              <span
                style={{
                  fontWeight: "600",
                  letterSpacing: "2px",
                  fontSize: "25px",
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
                  background: "orange",
                  borderRadius: "50%",
                }}
              >
                {" "}
                <Star sx={{ color: "#fff", fontSize: "17px" }} size="small" />
              </span>
            </Typography>
          </div>
          <Holder>
            <SearchContainer sx={{ flexGrow: 1 }}>
              <Search sx={{ flex: 1 }} />
              <SearchI></SearchI>
            </SearchContainer>
            <Button
              variant="contained"
              size="medium"
              sx={{
                width: "70px",
                m: 1,
                background: "rgb(255,154,0)",
                display: {
                  sm: "none",
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              SEARCH
            </Button>
          </Holder>

          <Stack
            direction="row"
            edge="end"
            sx={{
              color: "black",
              justifySelf: "flex-end",
              flex: 1,
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                display: "flex",
                gap: ".3rem",
                color: "black",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
              }}
            >
              <PersonOutlineOutlined />
              ACCOUNT
              <ArrowBackIosOutlined
                sx={{ transform: "rotate(-90deg)", fontSize: "17px" }}
              />
            </Button>
            <Button
              sx={{
                color: "black",
                display: "flex",
                gap: ".3rem",
                color: "black",
                display: {
                  sm: "none",
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <HelpOutlineOutlined />
              HELP
              <ArrowBackIosOutlined
                sx={{ transform: "rotate(-90deg)", fontSize: "17px" }}
              />
            </Button>
            <IconButton sx={{ ml: 3 }}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </div>
    </>
  );
};

export default Navbar;

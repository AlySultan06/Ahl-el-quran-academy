/* eslint-disable no-unused-vars */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";

const pages = ["التواصل", "الدورات", "المزايا", "نظام التعليم", "من نحن"];
pages.reverse();

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [navBg, setNavBg] = React.useState("transparent !important");
  const [scrollY, setScrollY] = React.useState(window.scrollY);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setNavBg("white");
    } else {
      setNavBg("transparent");
    }
  });

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: navBg,
        boxShadow: "none",
        transition: "0.3s",
       top: 0,
        right: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{ alignItems: "center", justifyContent: { xs: "space-between" } }}
        >
          {/* pc */}

          <Link
            noWrap
            href="/"
            sx={{
              display: "flex",
              width: { xs: "80px", sm: "85px", md: "95px" },
            }}
          >
            <img src="../public/imgs/logo.png" />
          </Link>

          {/* mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              disablefocusripple
            >
              <MenuIcon
                sx={{
                  fontSize: "30px",
                  color: navBg === "white" ? "text.secondary.blue" : "white",
                }}
              />
            </IconButton>

            <Drawer
              anchor="right"
              open={anchorElNav}
              onClose={handleCloseNavMenu}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "50vw",
                },
                textAlign: "right",
              }}
            >
              <IconButton
                size="large"
                onClick={handleCloseNavMenu}
                disableRipple
                color="inherit"
                sx={{
                  marginRight: "10px",

                  justifyContent: "flex-start",
                  px: 0,
                }}
              >
                <CloseIcon
                  sx={{
                    fontSize: "40px",
                  }}
                />
              </IconButton>

              <List>
                {pages.map((page) => {
                  return (
                    <ListItem
                      key={page}
                      className="hover"
                      sx={{
                        my: 1.5,
                        paddingRight: "40px",
                        width: "fit-content",
                        textAlign: "right",
                        cursor: "pointer",
                        fontSize: "16px",
                        color: "text.secondary.blue",
                        display: "block",
                        "&:hover": {
                          color: "text.primary",
                          transform: "scale(1.3)",
                        },
                      }}
                    >
                      {page}
                    </ListItem>
                  );
                })}
              </List>
            </Drawer>
          </Box>

          {/* pc */}
          <Box
            sx={{
              flexGrow: 1,
              marginRight: "50px",
              gap: "30px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <ListItem
                key={page}
                className="hover"
                onClick={handleCloseNavMenu}
                disableRipple
                disableTouchRipple
                disableFocusRipple
                sx={{
                  my: 2,
                  fontSize: "16px",
                  p: 0,
                  textAlign: "right",
                  width: "auto",
                  cursor: "pointer",
                  color: navBg == "white" ? "text.secondary.blue" : "white",
                  display: "block",
                  "&:hover": {
                    color: "text.primary",
                    transform: "scale(1.3)",
                  },
                }}
              >
                {page}
              </ListItem>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Button
              sx={{
                bgcolor: navBg == "white" ? "text.primary" : "white",
                border: "1px solid",
                borderColor: "text.primary",
                color: navBg == "white" ? "white" : "text.secondary.blue",
                px: "10px",
                py: "5px",
                fontWeight: "bold",
                fontSize: "16px",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "text.primary",
                },
              }}
            >
              تواصل: +2010926540323
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

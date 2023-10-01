import React, { useState, useContext } from "react";
import "../css/header.css";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../utility/themeToggle";
import ThemeContext from "../utility/themeContext";

const drawerWidth = 240;
const navItems = [
  { id: 1, text: "About", link: "aboutSection" },
  { id: 2, text: "Projects", link: "projectSection" },
  { id: 3, text: "Skills", link: "skillsSection" },
  { id: 4, text: "Let's Connect", link: "contact-section" }
];

function Header() {
  const { window } = Window;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={`#${item.link}`}
                >
                  {item.text}
                </a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ThemeSwitch
        sx={{ m: 1 }}
        checked={theme}
        inputProps={{ "aria-label": "Toggle Theme" }}
        onChange={toggleTheme}
      />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      {console.log("mobileOpen: ", theme)}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" component="nav">
          <Toolbar
            style={{
              display: "flex",
              flex: "1",
              background: theme
                ? "linear-gradient(to right,#0f0c29,#302b63,#24243e)"
                : "rgb(185 62 62)"
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: " space-around",
                width: "100%"
              }}
            >
              {navItems.map((item) => (
                <a href={`#${item.link}`}>
                  <Button key={item.id} size="large" sx={{ color: "#fff" }}>
                    {item.text}
                  </Button>
                </a>
              ))}
              <ThemeSwitch
                sx={{ m: 1 }}
                checked={theme}
                inputProps={{ "aria-label": "Toggle Theme" }}
                onChange={toggleTheme}
              />
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: theme
                  ? "linear-gradient(to bottom,#0f0c29,#302b63,#24243e)"
                  : "rgb(185 62 62)",
                color: "white"
              }
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </header>
  );
}

export default Header;

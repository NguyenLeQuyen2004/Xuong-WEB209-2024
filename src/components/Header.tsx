import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" sx={{ marginRight: "1rem" }}>
            My Website
          </Typography>
          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/register">Register</Link>
          </Button>
        </Box>
        <Button
          color="inherit"
          startIcon={<ShoppingCartIcon sx={{ fontSize: 40 }} />}
        ></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

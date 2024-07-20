import React, { useEffect, useMemo } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Product } from "src/types/Product";
import { useCart } from "src/contexts/ShoppingContext";

const Header = () => {
  const { cart } = useCart();
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
            <Link to="/about">About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/register">Register</Link>
          </Button>
        </Box>
        <Badge badgeContent={cart} color="error">
          <Link to="/cart">
            {" "}
            <ShoppingCartIcon sx={{ sx: "40px" }} />{" "}
          </Link>
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

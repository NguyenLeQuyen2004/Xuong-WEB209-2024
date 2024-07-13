import React from "react";
import { Paper, Typography, Button, CardMedia } from "@mui/material";

const Banner: React.FC = () => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://png.pngtree.com/template/20210618/ourlarge/pngtree-blue-grocery-store-online-shopping-banner-template-image_536404.jpg"
        alt="Banner Image"
      />
      {/* <Typography variant="h6" gutterBottom>
        Welcome to our website!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Discover amazing products and enjoy exclusive discounts.
      </Typography>
      <Button variant="contained" color="primary">
        Shop Now
      </Button> */}
    </Paper>
  );
};

export default Banner;

import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "src/types/Product";
import { Link } from "react-router-dom";

type ProductListProps = {
  product: Product;
};

const ProductList: FC<ProductListProps> = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Price: ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: "flex-end" }}>
        <Button size="small">
          <Link to={`/product/${product.id}`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductList;

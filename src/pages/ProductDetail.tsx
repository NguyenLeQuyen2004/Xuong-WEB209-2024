import {
  Alert,
  Button,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import instance from "src/apis";
import Loading from "src/components/Loading";
import { Product } from "src/types/Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [cart, setCart] = useState<
    Array<{ product: Product; quantity: number }>
  >([]);
  const nav = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const getProduct = async (id: string) => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
        nav("*");
      } finally {
        setLoading(false);
      }
    };
    if (!id) {
      return;
    }
    getProduct(id);
  }, [id, nav]);

  // quantity
  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    if (product) {
      if (quantity > 0) {
        const item = {
          product,
          quantity,
        };
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        setSuccessMessage("Product added to cart successfully!");
      }
    }
  };

  return (
    <div>
      <Loading isShow={loading} />
      <Container className="pr-detail">
        {product && (
          <div className="ctsp">
            <CardMedia
              component="img"
              alt="green iguana"
              height="400"
              image={product.image}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Price: ${product.price}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {product.description}
              </Typography>
              <Typography>Rate: {product.rating.count}</Typography>
              <Typography variant="subtitle1" gutterBottom>
                Quantity
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={decreaseQuantity}
              >
                -
              </Button>
              <Button variant="outlined" size="small">
                {quantity}
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={increaseQuantity}
              >
                +
              </Button>
              <br />
              <br />
              <Button variant="contained" disableElevation onClick={addToCart}>
                Add to cart
              </Button>
              <br />
              <br />
              {successMessage && (
                <Alert variant="filled" severity="success">
                  {successMessage}
                </Alert>
              )}
            </CardContent>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetail;

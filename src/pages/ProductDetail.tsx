import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import instance from "src/apis";
import { Product } from "src/interfaces/Product";
import StarIcon from "@mui/icons-material/Star";
import Loading from "src/components/Loading";
type Props = {};
const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const value = 3.5;
  useEffect(() => {
    setLoading(true);
    const getProduct = async (id: string) => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (!id) return;
    getProduct(id);
  }, [id]);

  // quantity
  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <Loading isShow={loading} />
      <Container>
        {product && (
          <div className="ctsp">
            <CardMedia
              component="img"
              alt="green iguana"
              height="400"
              image={product.images}
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
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Box>
              <br />
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
              <Button variant="contained" disableElevation>
                Add to cart
              </Button>
            </CardContent>

            {/* <div className="nd">
              <h3>{product.title}</h3>
              <span>
                <b>Price: ${product.price}</b>
              </span>
              <br />
              <p>{product.description}</p>
              <p>Category: </p>
              <p>
                Rating:
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Box>
              </p>
              <p className="quantity">
                <b>Quantity: </b>
                <button className="button" onClick={decreaseQuantity}>
                  -
                </button>
                <button className="button">{quantity}</button>
                <button className="button" onClick={increaseQuantity}>
                  +
                </button>
              </p>
              <br />
              <p>
                <button className="button1" onClick={addToCart}>
                  THÊM VÀO GIỎ HÀNG
                </button>
              </p>
            </div> */}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "src/interfaces/Product";
import instance from "src/apis";
import Loading from "src/components/Loading";
import { Stack, Typography } from "@mui/material";
import ProductList from "src/components/ProductList";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const { data } = await instance.get("/products");
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Loading isShow={loading} />
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {products.map((product, index) => (
          <ProductList key={index} product={product} />
        ))}
      </Stack>
    </>
  );
};

export default Home;

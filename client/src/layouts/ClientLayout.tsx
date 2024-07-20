import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "src/components/Banner";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import SlideShow from "src/components/SlideShow";
import { useLoading } from "src/contexts/loading";
import { useCart } from "src/contexts/ShoppingContext";

const ClientLayout = () => {
  const { loading } = useLoading();
  const { cart, setCart } = useCart();
  console.log(cart);

  useEffect(() => {
    const cartStorage = localStorage.getItem("carts") || "[]";
    const carts = JSON.parse(cartStorage);
    setCart(carts.length);
  }, [setCart]);
  return (
    <div>
      <Header />
      {/* <Banner /> */}
      <SlideShow />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;

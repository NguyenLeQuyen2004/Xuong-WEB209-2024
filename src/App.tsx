import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interfaces/Product";
import instance from "./apis";
import Header from "./components/Header";
import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ProductDetail from "./pages/ProductDetail";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <>
          <Header />
          <ProductDetail />
          <Footer />
        </>
      ),
    },
  ]);

  return element;
}

export default App;

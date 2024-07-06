import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import List from "./pages/admin/product/List";
import Add from "./pages/admin/product/Add";
import Edit from "./pages/admin/product/Edit";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const routeConfig = [
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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "product/list",
        element: <List />,
      },
      {
        path: "product/add",
        element: <Add />,
      },
      {
        path: "product/edit/:id",
        element: <Edit />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;

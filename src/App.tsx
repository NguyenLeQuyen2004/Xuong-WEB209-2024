import React, { Children } from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import List from "./pages/admin/product/List";
import Add from "./pages/admin/product/Add";
import Edit from "./pages/admin/product/Edit";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ClientLayout from "./layouts/ClientLayout";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const routeConfig = [
  // {
  //   path: "/",
  //   element: (
  //     <>
  //       <Header />
  //       <Home />
  //       <Footer />
  //     </>
  //   ),
  // },
  // {
  //   path: "/product/:id",
  //   element: (
  //     <>
  //       <Header />
  //       <ProductDetail />
  //       <Footer />
  //     </>
  //   ),
  // },
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
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
  {
    path: "*",
    element: <NotFound />,
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;

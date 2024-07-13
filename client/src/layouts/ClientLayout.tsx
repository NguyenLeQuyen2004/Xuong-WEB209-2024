import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "src/components/Banner";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;

/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* The background grid lives behind everything */}
      <div className="grid-lines"></div>

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;

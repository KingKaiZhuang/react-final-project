// src/components/Layout.js
import React from "react";
import Navbar from "./NavBar";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <footer>© {new Date().getFullYear()}, 建立於 Gatsby</footer>
  </div>
);

export default Layout;

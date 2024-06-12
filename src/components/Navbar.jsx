// src/pages/index.js
import React from "react";
import { Link } from "gatsby";
import "../assets/scss/_Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Link to="/CalculatorView">Calculator</Link>
        <Link to="/ColorPanelView">ColorPanel</Link>
        <Link to="/TictactoeView">TictactoeView</Link>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import çiçek from "../assets/çiçek.jpg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={çiçek} alt="" />
        <div className="mainLink">
          <Link to="/">Home</Link>
          <Link to="/flowers">Flowers</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

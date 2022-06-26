import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="app-title">Criss-Cross</span>
      <div className="link-container">
        <a href="#">Support Us</a>
        <a href="#">How to play?</a>
      </div>
    </div>
  );
}

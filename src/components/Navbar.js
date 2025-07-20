// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css"; // bana lena

export default function Header() {
  return (
    <header className="header">
      <h1>🍕 PIZZA HOUSE</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my-orders">My Orders</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

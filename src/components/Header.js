// client/src/components/Header.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import "./Header.css";

const Header = ({ token, setToken, darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">🍕 Pizza Tilla</div>
      </div>

      <div className="header-center">
        <Link to="/" className="nav-link">Home</Link>
        {token && (
          <>
            <Link to="/profile" className="nav-link"><FaUserCircle /> Profile</Link>
            <Link to="/my-orders" className="nav-link">My Orders</Link>
            <Link to="/cart" className="nav-link"><FaShoppingCart /> Cart</Link>
            <button className="nav-button" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>

      <div className="header-right">
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import Hero from "./components/Hero";
import PizzaSelector from './components/PizzaSelector';
import Pizzas from "./components/Pizzas";
import Login from "./components/Login";
import Register from "./components/Register";
import MyOrders from "./components/MyOrders";
import Profile from "./components/MyProfile";
import EditProfile from "./components/EditProfile";
import CartPage from "./components/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import { CartProvider } from "./context/CartContext"; // ✅ IMPORTED
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <CartProvider> {/* ✅ Wrap all with CartProvider */}
        <div className={darkMode ? "dark-mode" : ""}>
          <Header token={token} setToken={setToken} darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route
              path="/"
              element={
                token ? (
                  <Pizzas />
                ) : (
                  <>
                    <Hero />
                    <PizzaSelector />
                  </>
                )
              }
            />
            <Route path="/login" element={token ? <Navigate to="/" /> : <Login setToken={setToken} />} />
            <Route path="/register" element={token ? <Navigate to="/" /> : <Register setToken={setToken} />} />
            <Route path="/my-orders" element={token ? <MyOrders /> : <Navigate to="/login" />} />
            <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/edit-profile" element={token ? <EditProfile /> : <Navigate to="/login" />} />
            <Route path="/cart" element={token ? <CartPage /> : <Navigate to="/login" />} />
            <Route path="/checkout" element={token ? <CheckoutPage /> : <Navigate to="/login" />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;

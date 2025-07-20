// src/pages/CheckoutPage.js
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"; // ✅ correct path
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const orderData = {
        items: cartItems,
        address,
        paymentMethod,
      };

      await axios.post("/api/orders", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      clearCart();
      navigate("/myorders");
    } catch (error) {
      console.error("❌ Order placement failed:", error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <textarea
        placeholder="Enter your delivery address..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <div className="payment-methods">
        <label>
          <input
            type="radio"
            value="COD"
            checked={paymentMethod === "COD"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
        <label>
          <input
            type="radio"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>
        <label>
          <input
            type="radio"
            value="Card"
            checked={paymentMethod === "Card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit/Debit Card
        </label>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;

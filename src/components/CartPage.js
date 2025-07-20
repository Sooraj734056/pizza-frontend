import React from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "/api/orders",
        {
          items: cartItems,
          totalAmount,
          userId: "64abcdef12345678", // fake for now
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Order Placed Successfully!");
      clearCart();
      navigate("/my-orders");
    } catch (err) {
      alert("❌ Order Failed!");
      console.error(err);
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              {item.size && <p>Size: {item.size}</p>}
              {item.quantity && <p>Qty: {item.quantity}</p>}
            </div>
            <div className="cart-actions">
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="checkout-section">
          <p className="total">Total: ₹{totalAmount}</p>
          <button className="checkout-btn" onClick={handlePlaceOrder}>
            ✅ Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

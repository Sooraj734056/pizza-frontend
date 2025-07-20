// src/pages/MyOrders.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const userId = "64abcdef12345678"; // ✅ Replace with actual user id later

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`/api/orders/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="my-orders-wrapper">
      <h2 className="my-orders-title">📦 My Orders</h2>
      {orders.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <span className="order-id">Order ID: {order._id.slice(-6)}</span>
                <span className="order-status">{order.status}</span>
              </div>

              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">x{item.quantity}</span>
                    <span className="item-price">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <span>Total: ₹{order.totalAmount}</span>
                <span className="order-time">
                  {new Date(order.createdAt).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;

// client/src/components/Order.js

import React, { useState } from 'react';
import axios from 'axios';
import './Order.css'; // optional: agar styling karni ho to

export default function Order() {
  const [pizza, setPizza] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/orders', {
        pizza: pizza,
        userId: 'demoUser123', // static id demo ke liye
        paid: false
      });
      console.log(res.data);
      setMsg('✅ Order placed successfully!');
      setPizza(''); // clear input
    } catch (err) {
      console.error(err);
      setMsg('❌ Something went wrong!');
    }
  };

  return (
    <div className="order-container">
      <h2>Place Your Order 🍕</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <input
          type="text"
          placeholder="Enter Pizza Name"
          value={pizza}
          onChange={(e) => setPizza(e.target.value)}
          required
        />
        <button type="submit">Order Now</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

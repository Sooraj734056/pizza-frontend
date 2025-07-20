import React from 'react';
import './PizzaBuilder.css';
import { toast } from 'react-toastify';

export default function OrderSummary({ base, sauce, cheese, veggies, prevStep }) {
  const handlePlaceOrder = () => {
    // Dummy pay logic
    toast.success("🍕 Order Placed Successfully!", { position: "top-center" });
  };

  return (
    <div className="builder-step">
      <h2>Order Summary</h2>
      <p><strong>Base:</strong> {base}</p>
      <p><strong>Sauce:</strong> {sauce}</p>
      <p><strong>Cheese:</strong> {cheese}</p>
      <p><strong>Veggies:</strong> {veggies.join(', ')}</p>
      <button onClick={prevStep}>Back</button>
      <button onClick={handlePlaceOrder}>Pay with Razorpay (Test)</button>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>My Orders</h1>
      <ul>
        {orders.map((o) => (
          <li key={o._id}>{o.pizza} - {o.status}</li>
        ))}
      </ul>
    </div>
  );
}

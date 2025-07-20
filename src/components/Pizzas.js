import React, { useState } from "react";
import "./Pizzas.css";
import { useCart } from "../context/CartContext"; // ✅ Import cart context

import margherita from "../assets/pizza1.jpg";
import pepperoni from "../assets/pizza2.jpg";
import veggie from "../assets/pizza3.jpg";
import cheeseBurst from "../assets/pizza4.jpg";
import farmHouse from "../assets/pizza5.jpg";
import mexicanGreenWave from "../assets/pizza6.jpg";
import paneerTikka from "../assets/pizza7.jpg";
import chickenDominator from "../assets/pizza8.jpg";
import tandooriPaneer from "../assets/pizza9.jpg";
import deluxeVeggie from "../assets/pizza10.jpg";

const pizzas = [
  { id: 1, name: "Margherita", image: margherita, price: 199 },
  { id: 2, name: "Pepperoni", image: pepperoni, price: 249 },
  { id: 3, name: "Veggie", image: veggie, price: 229 },
  { id: 4, name: "Cheese Burst", image: cheeseBurst, price: 269 },
  { id: 5, name: "Farm House", image: farmHouse, price: 239 },
  { id: 6, name: "Mexican Green Wave", image: mexicanGreenWave, price: 259 },
  { id: 7, name: "Paneer Tikka", image: paneerTikka, price: 279 },
  { id: 8, name: "Chicken Dominator", image: chickenDominator, price: 289 },
  { id: 9, name: "Tandoori Paneer", image: tandooriPaneer, price: 269 },
  { id: 10, name: "Deluxe Veggie", image: deluxeVeggie, price: 249 },
];

const sauces = [
  "Tomato", "Spicy", "Garlic", "Barbecue", "Cheese Burst",
  "Mint", "Tandoori", "Peri Peri", "Chipotle", "Mayo"
];

const Pizzas = () => {
  const [selectedSauce, setSelectedSauce] = useState({});
  const { addToCart } = useCart(); // ✅ Hook to access cart context

  const handleAddToCart = (pizza) => {
    const sauce = selectedSauce[pizza.id] || sauces[0];
    addToCart(pizza, sauce); // ✅ Add to cart context
    alert(`✅ ${pizza.name} with ${sauce} sauce added to cart!`);
  };

  return (
    <div className="pizzas-container">
      <h2>🍕 Our Delicious Pizzas</h2>
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <div className="pizza-card" key={pizza.id}>
            <img src={pizza.image} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>₹{pizza.price}</p>
            <select
              value={selectedSauce[pizza.id] || sauces[0]}
              onChange={(e) =>
                setSelectedSauce({ ...selectedSauce, [pizza.id]: e.target.value })
              }
            >
              {sauces.map((sauce) => (
                <option key={sauce} value={sauce}>
                  {sauce}
                </option>
              ))}
            </select>
            <button onClick={() => handleAddToCart(pizza)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizzas;

// src/components/PizzaSelector.js
import React from "react";
import "./PizzaSelector.css";
import pizza1 from "../assets/pizza1.jpg";
import pizza2 from "../assets/pizza2.jpg";
import pizza3 from "../assets/pizza3.jpg";
import pizza4 from "../assets/pizza4.jpg";
import pizza5 from "../assets/pizza5.jpg";

const PizzaSelector = () => {
  return (
    <div className="pizza-selector">
      {[pizza1, pizza2, pizza3, pizza4, pizza5].map((img, idx) => (
        <img key={idx} src={img} alt={`Pizza ${idx + 1}`} />
      ))}
    </div>
  );
};

export default PizzaSelector;

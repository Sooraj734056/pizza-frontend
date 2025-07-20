import React from 'react';
import './PizzaBuilder.css';

export default function SelectSauce({ sauce, setSauce, nextStep, prevStep }) {
  const sauces = ['Tomato Basil', 'Pesto', 'Barbecue', 'Garlic Ranch', 'Spicy Marinara'];

  return (
    <div className="builder-step">
      <h2>Select Sauce</h2>
      {sauces.map((s) => (
        <label key={s}>
          <input
            type="radio"
            name="sauce"
            value={s}
            checked={sauce === s}
            onChange={(e) => setSauce(e.target.value)}
          />
          {s}
        </label>
      ))}
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

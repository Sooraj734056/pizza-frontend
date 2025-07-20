import React from 'react';
import './PizzaBuilder.css';

export default function SelectCheese({ cheese, setCheese, nextStep, prevStep }) {
  const cheeses = ['Mozzarella', 'Cheddar', 'Parmesan', 'Goat Cheese', 'Vegan Cheese'];

  return (
    <div className="builder-step">
      <h2>Select Cheese</h2>
      <select value={cheese} onChange={(e) => setCheese(e.target.value)}>
        <option value="">Select Cheese</option>
        {cheeses.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep} disabled={!cheese}>Next</button>
    </div>
  );
}

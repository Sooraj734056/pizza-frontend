import React from 'react';
import './PizzaBuilder.css';

export default function SelectBase({ base, setBase, nextStep }) {
  const bases = ['Thin Crust', 'Cheese Burst', 'Whole Wheat', 'Gluten Free', 'Classic'];

  return (
    <div className="builder-step">
      <h2>Select Pizza Base</h2>
      {bases.map((b) => (
        <label key={b}>
          <input
            type="radio"
            name="base"
            value={b}
            checked={base === b}
            onChange={(e) => setBase(e.target.value)}
          />
          {b}
        </label>
      ))}
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

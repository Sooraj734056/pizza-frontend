import React from 'react';
import './PizzaBuilder.css';

export default function SelectVeggies({ veggies, setVeggies, nextStep, prevStep }) {
  const allVeggies = ['Bell Peppers', 'Olives', 'Onions', 'Mushrooms', 'Corn', 'Tomatoes', 'Spinach'];

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setVeggies([...veggies, value]);
    } else {
      setVeggies(veggies.filter((v) => v !== value));
    }
  };

  return (
    <div className="builder-step">
      <h2>Select Veggies</h2>
      {allVeggies.map((veg) => (
        <label key={veg}>
          <input
            type="checkbox"
            value={veg}
            checked={veggies.includes(veg)}
            onChange={handleChange}
          />
          {veg}
        </label>
      ))}
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

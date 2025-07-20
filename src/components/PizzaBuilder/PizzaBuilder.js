import React, { useState } from 'react';
import SelectBase from './SelectBase';
import SelectSauce from './SelectSauce';
import SelectCheese from './SelectCheese';
import SelectVeggies from './SelectVeggies';
import OrderSummary from './OrderSummary';
import './PizzaBuilder.css';

export default function PizzaBuilder() {
  const [step, setStep] = useState(1);
  const [base, setBase] = useState('');
  const [sauce, setSauce] = useState('');
  const [cheese, setCheese] = useState('');
  const [veggies, setVeggies] = useState([]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <SelectBase base={base} setBase={setBase} nextStep={nextStep} />;
    case 2:
      return <SelectSauce sauce={sauce} setSauce={setSauce} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <SelectCheese cheese={cheese} setCheese={setCheese} nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <SelectVeggies veggies={veggies} setVeggies={setVeggies} nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <OrderSummary base={base} sauce={sauce} cheese={cheese} veggies={veggies} prevStep={prevStep} />;
    default:
      return null;
  }
}

import React, { useState } from 'react';

interface CostCalculatorProps {
  priceOfSingleVMPerHour: number;
}

const CostCalculator: React.FC<CostCalculatorProps> = ({ priceOfSingleVMPerHour }) => {
  const [vmCount, setVmCount] = useState<string>('');

  const calculateCosts = () => {
    const numVMs = Number(vmCount) || 0;
    const hourCost = numVMs * priceOfSingleVMPerHour;
    const dayCost = hourCost * 24;
    const monthCost = dayCost * 30;
    
    const yearCost = hourCost * 24 * 365; 
    
    return { hourCost, dayCost, monthCost, yearCost };
  };

  const { hourCost, dayCost, monthCost, yearCost } = calculateCosts();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVmCount(event.target.value);
  };

  return (
    <div>
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmCount}
        onChange={handleInputChange}
      />
      <div>
        <p>Cost per hour: {hourCost}</p>
        <p>Cost per day: {dayCost}</p>
        <p>Cost per month: {monthCost}</p>
        <p>Cost per year: {yearCost}</p>
      </div>
    </div>
  );
};

export default CostCalculator;
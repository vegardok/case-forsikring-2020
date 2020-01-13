import React from 'react';

const BonusSelector = () => (
  <label>
    Din bonus
    <select>
      <option value={0.2}>20%</option>
      <option value={0.3}>30%</option>
      <option value={0.4}>40%</option>
      <option value={0.5}>50%</option>
    </select>
  </label>
);

export default BonusSelector;

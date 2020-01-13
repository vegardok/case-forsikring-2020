import React from 'react';

const BonusSelector = () => (
  <div className="field">
    <label className="label">
      Din bonus
      <div className="control">
        <div className="select">
          <select >
            <option value={0.2}>20%</option>
            <option value={0.3}>30%</option>
            <option value={0.4}>40%</option>
            <option value={0.5}>50%</option>
          </select>
        </div>
      </div>
    </label>
  </div>
);

export default BonusSelector;

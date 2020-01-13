import React from 'react';

// TODO: client side validation
const PersonalNumberInput = () => (
  <div className="field">
    <label className="label">
      <div className="control">
        Fødselsnummer
        <input className="input" placeholder="11 siffer" />
      </div>
    </label>
  </div>
);

export default PersonalNumberInput;

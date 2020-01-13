import React from 'react';


// TODO: reg nr validation client or server side?

const RegNrInput = () => (
  <div className="field">
    <label className="label">
      <div className="control">
        Bilens registreringsnummer
        <input className="input" type="text" placeholder="e.g. AB 12345" />
      </div>
    </label>
  </div>
);


export default RegNrInput;

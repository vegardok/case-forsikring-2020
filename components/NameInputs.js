import React from 'react';

export const FirstNameInput = () => (
  <div className="field">
    <label className="label">
      <div className="control">
        Fornavn
        <input className="input" placeholder="placeholder" />
      </div>
    </label>
  </div>
);

export const LastNameInput = () => (
  <div className="field">
    <label className="label">
      <div className="control">
        Etternavn
        <input className="input" placeholder="placeholder" />
      </div>
    </label>
  </div>
);

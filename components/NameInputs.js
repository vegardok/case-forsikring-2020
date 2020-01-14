import React from 'react';
import {connect} from 'react-redux';

const CHANGE = 'Name/CHANGE_NAME';


const changeName = (name, key) => ({
  type: CHANGE,
  value: name,
  key,
});

const defaultState = {
  firstName: '',
  lastName: '',
  firstNameValid: false,
  lastNameValid: false,
};

export const reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case CHANGE: {
      return {
        ...previousState,
        [action.key]: action.value,
        [`${action.key}Valid`]: action.value.length >= 2,
      };
    }
    default: {
      return previousState;
    }
  }
};

const LastNameInput_ = ({
  firstName,
  lastName,
  changeName,
}) => (
  <div className="field is-grouped">
    <label className="label">
      <div className="control">
        Fornavn
        <input
          className="input"
          value={firstName}
          onChange={(e) => changeName(e.target.value, 'firstName')}
          placeholder="placeholder" />
      </div>
    </label>
    <label className="label">
      <div className="control">
        Etternavn
        <input
          className="input"
          value={lastName}
          onChange={(e) => changeName(e.target.value, 'lastName')}
          placeholder="placeholder" />
      </div>
    </label>
  </div>
);


export default connect(
    (state) => ({
      firstName: state.name.firstName,
      lastName: state.name.lastName,
    }), {
      changeName,
    })(LastNameInput_);

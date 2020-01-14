import React from 'react';
import {connect} from 'react-redux';

const CHANGE_FIRST_NAME = 'Name/CHANGE_FIRST_NAME';
const CHANGE_LAST_NAME = 'Name/CHANGE_LAST_NAME';

const changeFirstName = (name) => ({
  type: CHANGE_FIRST_NAME,
  value: name,
});

const changeLastName = (name) => ({
  type: CHANGE_LAST_NAME,
  value: name,
});

const defaultState = {
  firstName: '',
  lastName: '',
};

export const reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME: {
      return {...previousState, firstName: action.value};
    }
    case CHANGE_LAST_NAME: {
      return {...previousState, lastName: action.value};
    }
    default: {
      return previousState;
    }
  }
};

const FirstNameInput_ = ({
  value,
  changeValue,
}) => (
  <div className="field">
    <label className="label">
      <div className="control">
        Fornavn
        <input
          className="input"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
          placeholder="placeholder" />
      </div>
    </label>
  </div>
);

const LastNameInput_ = ({
  value,
  changeValue,
}) => (
  <div className="field">
    <label className="label">
      <div className="control">
        Etternavn
        <input
          className="input"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
          placeholder="placeholder" />
      </div>
    </label>
  </div>
);

export const FirstNameInput = connect(
    (state) => ({value: state.name.firstName}), {
      changeValue: changeFirstName,
    })(FirstNameInput_);


export const LastNameInput = connect(
    (state) => ({value: state.name.lastName}), {
      changeValue: changeLastName,
    })(LastNameInput_);

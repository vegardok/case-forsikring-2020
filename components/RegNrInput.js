import React from 'react';
import {connect} from 'react-redux';

const INPUT_INTERACTION = 'RegNr/INPUT_INTERACTION';
const INPUT_CHANGE = 'RegNr/INPUT_CHANGE';

const toggleInputInteraction = () => ({
  type: INPUT_INTERACTION,
});

const changeInput = (regNr) => ({
  type: INPUT_CHANGE,
  value: regNr,
});

const defaultState = {
  interactedWith: false,
  regNr: '',
};

export const reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case INPUT_INTERACTION: {
      return {...previousState, interactedWith: true};
    }
    case INPUT_CHANGE: {
      return {...previousState, regNr: action.value};
    }
    default: {
      return previousState;
    }
  }
};

const RegNrInput = ({
  value,
  toggleInputInteraction,
  changeInput,
  valid,
  showValidation,
}) => (
  <div className="field">
    <label className="label">
      <div className="control">
        Bilens registreringsnummer
        <input className={['input',
          showValidation &&
                           (valid ? 'is-success' : 'is-danger')].join(' ')}
        type="text"
        placeholder="e.g. AB12345"
        value={value}
        onBlur={() => toggleInputInteraction()}
        onChange={(e) => changeInput(e.target.value)}
        />
      </div>
    </label>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  value: state.regNr.regNr,
  valid: /^[a-zA-Z]{2,2}[\d]{5,5}$/.test(state.regNr.regNr),
  showValidation: state.regNr.interactedWith && state.regNr.regNr.length > 0,
});

const mapDispatchToProps = {
  toggleInputInteraction,
  changeInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegNrInput);

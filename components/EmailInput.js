import React from 'react';
import {connect} from 'react-redux';

const INPUT_INTERACTION = 'Email/INPUT_INTERACTION';
const INPUT_CHANGE = 'Email/INPUT_CHANGE';

const toggleInputInteraction = () => ({
  type: INPUT_INTERACTION,
});

const changeInput = (email) => ({
  type: INPUT_CHANGE,
  value: email,
});

const defaultState = {
  interactedWith: false,
  email: '',
  valid: false,
};


// Copied from https://emailregex.com/
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case INPUT_INTERACTION: {
      return {...previousState, interactedWith: true};
    }
    case INPUT_CHANGE: {
      return {
        ...previousState,
        email: action.value,
        valid: emailRegex.test(action.value),
      };
    }
    default: {
      return previousState;
    }
  }
};


const EmailInput = ({
  value,
  toggleInputInteraction,
  changeInput,
  valid,
  showValidation,
}) => (
  <div className="field">
    <label className="label">
      <div className="control">
        Epost
        <input
          className={['input',
            showValidation &&
                      (valid ? 'is-success' : 'is-danger')].join(' ')}
          value={value}
          onBlur={() => toggleInputInteraction()}
          onChange={(e) => changeInput(e.target.value)}
          placeholder="ola@example.org" />
      </div>
    </label>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  value: state.email.email,
  valid: state.email.valid,
  showValidation: state.email.interactedWith && state.email.email.length > 0,
});

const mapDispatchToProps = {
  toggleInputInteraction,
  changeInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailInput);

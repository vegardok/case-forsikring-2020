import React from 'react';
import {connect} from 'react-redux';

const SUBMIT = 'Form/SUBMIT';


const submit = () => ({
  type: SUBMIT,
});


const defaultState = {
  submitted: false,
};

export const reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case SUBMIT: {
      return {...previousState, submitted: true};
    }
    default: {
      return previousState;
    }
  }
};

const FormButtons = ({
  enabled,
}) => (
  <div className="field is-grouped very-large-margin-top">
    <div className="control">
      <button className="button is-link" disabled={!enabled}>
        Beregn pris
      </button>
    </div>
    <div className="control">
      <button className="button is-link is-light" disabled={true}>
        Avbryt
      </button>
    </div>
  </div>
);

export default connect(
    (state) => ({
      enabled: state.regNr.valid &&
        state.pn.valid &&
        state.email.valid &&
        state.name.firstNameValid &&
        state.name.lastNameValid,
    }), {
      submit,
    })(FormButtons);

import React from 'react';
import {connect} from 'react-redux';

const INPUT_CHANGE = 'PersonalNumber/CHANGE';
const INPUT_INTERACTION = 'PersonalNumber/INTERACTION';

const defaultState = {
  nr: undefined,
  interactedWith: false,
};

export const reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case INPUT_INTERACTION: {
      return {...previousState, interactedWith: true};
    }
    case INPUT_CHANGE: {
      return {...previousState, nr: action.value};
    }
    default: {
      return previousState;
    }
  }
};

const toggleInputInteraction = () => ({
  type: INPUT_INTERACTION,
});

const changeInput = (bonus) => ({
  type: INPUT_CHANGE,
  value: bonus,
});


// TODO: client side validation
const PersonalNumberInput = ({
  nr,
  changeInput,
  toggleInputInteraction,
  valid,
  showValidation,
}) => (
  <div className="field">
    <label className="label">
      <div className="control">
        Fødselsnummer
        <input
          className={['input',
                      showValidation &&
                      (valid ? 'is-success' : 'is-danger')].join(' ')}
          onChange={(e) => changeInput(e.target.value)}
          onBlur={() => toggleInputInteraction()}
          value={nr}
          placeholder="11 siffer"
        />
      </div>
    </label>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  bonus: state.pn.nr,
  valid: /^[\d]{11,11}$/.test(state.pn.nr),
  showValidation: state.pn.interactedWith && state.pn.nr.length > 0,
});

const mapDispatchToProps = {
  toggleInputInteraction,
  changeInput,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PersonalNumberInput);

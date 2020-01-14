import React from 'react';
import {connect} from 'react-redux';

const INPUT_CHANGE = 'BonusSelector/CHANGE';

const changeInput = (bonus) => ({
  type: INPUT_CHANGE,
  value: bonus,
});

const defaultState = {
  bonus: 0.2,
};

export const reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case INPUT_CHANGE: {
      return {...previousState, bonus: action.value};
    }
    default: {
      return previousState;
    }
  }
};

const BonusSelector = ({
  bonus,
  changeInput,
}) => (
  <div className="field">
    <label className="label">
      Din bonus
      <div className="control">
        <div className="select">
          <select value={bonus} onChange={(e) => changeInput(e.target.value)}>
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

const mapStateToProps = (state, ownProps) => ({
  bonus: state.bonus.bonus,
});

const mapDispatchToProps = {
  changeInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(BonusSelector);

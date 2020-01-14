import React from 'react';
import {connect} from 'react-redux';

import RegNrInput from '../components/RegNrInput';
import BonusSelector from '../components/BonusSelector';
import PersonalNumberInput from '../components/PersonalNumberInput';
import NameInput from '../components/NameInputs';
import EmailInput from '../components/EmailInput';
import SubmitButtons from '../components/SubmitButtons';


const SUBMIT = 'Form/SUBMIT';

const onSubmit = () => ({
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

const InsuranceForm = ({
  submitted = false,
  onSubmit,
}) => submitted ? (
  <>
    <h1 className="title">Tilbud bilforsikring</h1>
    <p>
      {parseInt(Math.random()* 1000, 10)} kr
    </p>
  </>
) : (
  <form onSubmit={(e) => {
    e.preventDefault();
    onSubmit();
  }}>
    <RegNrInput />
    <BonusSelector />
    <PersonalNumberInput />
    <NameInput />
    <EmailInput />
    <SubmitButtons />
  </form>
);

export default connect(
    (state) => ({submitted: state.form.submitted}),
    {onSubmit},
)(InsuranceForm);

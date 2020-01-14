import React from 'react';
import RegNrInput from '../components/RegNrInput';
import BonusSelector from '../components/BonusSelector';
import PersonalNumberInput from '../components/PersonalNumberInput';
import NameInput from '../components/NameInputs';
import EmailInput from '../components/EmailInput';
import SubmitButtons from '../components/SubmitButtons';


const InsuranceForm = () => (
  <form>
    <RegNrInput />
    <BonusSelector />
    <PersonalNumberInput />
    <NameInput />
    <EmailInput />
    <SubmitButtons />
  </form>
);

export default InsuranceForm;

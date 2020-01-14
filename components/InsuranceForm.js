import React from 'react';
import RegNrInput from '../components/RegNrInput';
import BonusSelector from '../components/BonusSelector';
import PersonalNumberInput from '../components/PersonalNumberInput';
import NameInput from '../components/NameInputs';
import EmailInput from '../components/EmailInput';


const InsuranceForm = () => (
  <form>
    <RegNrInput />
    <BonusSelector />
    <PersonalNumberInput />
    <NameInput />
    <EmailInput />
  </form>
);

export default InsuranceForm;

import React from 'react';
import RegNrInput from '../components/RegNrInput';
import BonusSelector from '../components/BonusSelector';
import PersonalNumberInput from '../components/PersonalNumberInput';
import {FirstNameInput, LastNameInput} from '../components/NameInputs';
import EmailInput from '../components/EmailInput';


const InsuranceForm = () => (
  <form>
    <RegNrInput />
    <BonusSelector />
    <PersonalNumberInput />
    <FirstNameInput/>
    <LastNameInput/>
    <EmailInput/>
  </form>
);

export default InsuranceForm;

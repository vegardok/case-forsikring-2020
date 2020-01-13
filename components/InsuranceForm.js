import React from 'react';
import RegNrInput from '../components/RegNrInput.js';
import BonusSelector from '../components/BonusSelector.js';
import PersonalNumberInput from '../components/PersonalNumberInput.js';
import {FirstNameInput, LastNameInput} from '../components/NameInputs.js';
import EmailInput from '../components/EmailInput.js';


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

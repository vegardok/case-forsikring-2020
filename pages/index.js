import React from 'react';
import Header from '../components/Header.js';
import RegNrInput from '../components/RegNrInput.js';
import BonusSelector from '../components/BonusSelector.js';
import PersonalNumberInput from '../components/PersonalNumberInput.js';
import {FirstNameInput, LastNameInput} from '../components/NameInputs.js';

const Index = () => (
  <>
    <Header />
    <form>
      <RegNrInput />
      <BonusSelector />
      <PersonalNumberInput />
      <FirstNameInput/>
      <LastNameInput/>
    </form>
  </>
);

export default Index;

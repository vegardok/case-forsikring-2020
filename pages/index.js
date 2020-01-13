import React from 'react';
import Header from '../components/Header.js';
import RegNrInput from '../components/RegNrInput.js';
import BonusSelector from '../components/BonusSelector.js';
import PersonalNumberInput from '../components/PersonalNumberInput.js';

const Index = () => (
  <>
    <Header />
    <form>
      <RegNrInput />
      <BonusSelector />
      <PersonalNumberInput />
    </form>
  </>
);

export default Index;

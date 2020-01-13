import React from 'react';
import Header from '../components/Header.js';
import RegNrInput from '../components/RegNrInput.js';
import BonusSelector from '../components/BonusSelector.js';

const Index = () => (
  <>
    <Header />
    <form>
      <RegNrInput />
      <BonusSelector />
    </form>
  </>
);

export default Index;

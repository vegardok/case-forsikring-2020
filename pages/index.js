import React from 'react';
/* eslint no-unused-vars: 0 */
import bulma from 'bulma/css/bulma.css';
import css from '../assets/style.css';


import Header from '../components/Header.js';
import InsuranceForm from '../components/InsuranceForm.js';

const Index = () => (
  <section className="section">
    <div className="container">
      <Header />
      <InsuranceForm />
    </div>
  </section>
);

export default Index;

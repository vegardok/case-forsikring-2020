import React from 'react';
/* eslint no-unused-vars: 0 */
import bulma from 'bulma/css/bulma.css';
import css from '../assets/style.css';
import {Provider} from 'react-redux';

import Header from '../components/Header';
import InsuranceForm from '../components/InsuranceForm';
import store from '../components/store';

const Index = () => (
  <Provider store={store}>
    <section className="section">
      <div className="container">
        <Header />
        <InsuranceForm />
      </div>
    </section>
  </Provider>
);

export default Index;

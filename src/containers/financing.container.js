import React, { Component } from 'react';
import "../styles/financing.css";
import FinInfo from "../components/finInfo.js";
import FinForm from "../components/finForm.js";
import '../styles/financing.css';

class Financing extends Component {
  render() {
    return (
      <div>
      <div className="page financing-page">
        <h1>Tiny Home Financing</h1>
        <h3>Lower your cost of living when you finance a tiny home.</h3>
        <button>Get Started</button>
        <p>Fixed rates as low as 3.84%*</p>
        <p>*Annual Percentage Rate</p>
      </div>
      <div className="fin-info">
      <FinInfo />
      <FinForm />
      </div>
      </div>
    );
  }
}

export default Financing;
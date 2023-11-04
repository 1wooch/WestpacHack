import React, { useState } from 'react';
import './styles.css';

function futureValueDiscount(cost, term, unit, annualInterest = 4.75) {
  let weeks;

  switch (unit) {
    case 'week':
      weeks = term;
      break;
    case 'fortnight':
      weeks = 2 * term;
      break;
    case 'month':
      weeks = 4 * term;
      break;
  }

  const weeklyPayment = cost / weeks;

  // Weekly interest rate
  const weeklyInterestRate = (Math.pow(1 + annualInterest, 1 / 52) - 1) / 52;

  // Future value
  const futureValue = weeklyPayment * ((Math.pow(1 + weeklyInterestRate, weeks) - 1) / weeklyInterestRate);

  console.log(futureValue - cost)

  return (futureValue - cost).toFixed(2);
}

function PriceChecker() {
  const [url, setUrl] = useState('');
  const [unit, setUnit] = useState('week')
  const [term, setTerm] = useState(0);
  const [plan, setPlan] = useState({});
  const [planIsReady, setPlanIsReady] = useState(false);

  async function displayPlan(url) {
    setPlanIsReady(false);

    const api_url = `https://westpacbackend.netlify.app/.netlify/functions/api/JBscrape?url=${url}`;
    try {
      const response = await fetch(api_url);

      if (response.ok) {
        const data = await response.json();
        setPlanIsReady(true);
        setPlan(data);
      }

      else {
        console.error('Failed to fetch data');
      }
    }

    catch (error) {
      console.error('Error:', error);
    }

  }

  return (
    <div id="payment-plan-container">
      <h1>Plan ahead. Buy with no debt.</h1>

      <form>
        <div className="input-field">
          <label>Enter the URL:</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>


        <div className="input-field">
          <label>Choose saving frequency:</label>
          <select value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="week">Weekly</option>
            <option value="fortnight">Fortnightly</option>
            <option value="month">Monthly</option>
          </select>
        </div>

        <div className="input-field">
          <label>Enter how many {unit}s:</label>
          <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </form>
      <button onClick={e => {
        e.preventDefault();
        displayPlan(url);
      }}>Plan!</button>
      {
        planIsReady &&

        <div id="result">
          <h2>Here's how you can buy a <strong>{plan.title}</strong></h2>
          <img src={plan.image} />
          <p id="price">{plan.currency} {plan.price}</p>
          <p>All you need is {term} payments of <strong>{plan.currency} {(parseFloat(plan.price.replace(/,/g, '')) / term).toFixed(2)}</strong> per {unit}.</p>
          <p>While you wait, your money will work for you, saving {plan.currency} {futureValueDiscount(parseFloat(plan.price.replace(/,/g, '')), term, unit)} in interest.</p>
          <button>Save Plan</button>
        </div>
      }

    </div>
  );
}

export default PriceChecker;

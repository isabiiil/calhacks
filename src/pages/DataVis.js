import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore/lite';
import Navbar from '../components/Navbar';

export default class DataVis extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      months: 0,
    };
  }

  async componentDidMount() {
    const docRef = doc(this.props.database, 'business', 'ZpJ2AyHoFkLEqAZjyo40');
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    this.setState({data: data});
  }

  render() {
    const dailyRent = this.state.data.rent/30;
    const dailyRevenue = this.state.data.customers * this.state.data.spending;
    const dailyExpenditure = this.state.data.costs + this.state.data.wages + dailyRent;
    const netProfit = dailyRevenue - dailyExpenditure;
    const roi = ((netProfit*this.state.months)/100000)*100
    return (
      <>
        <Navbar />
        <div className="h-screen m-24">
          <h1>Here is what you had said:</h1>
          <p>You have {this.state.data.customers} customers every day, with each one spending an average of ${this.state.data.spending}.</p>
          <p>Every day, you pay ${this.state.data.costs} in operational costs, ${this.state.data.wages} in wages, and ${dailyRent} in rent.</p>
          <p>Your total daily revenue is: ${dailyRevenue}.</p>
          <p>Your total daily expenditure is: ${dailyExpenditure}.</p>
          <p>Your net profit for the day is: ${netProfit}.</p>
          <p>You put in $100000 in capital.</p>
          <p>If you wait for </p>
          <TextField
            label="Months"
            onChange={(e) => {this.setState({months: e.target.value})}}
          />
          <p>months, your return on investment will be: {roi}%.</p>
        </div>
      </>
    )
  }
}

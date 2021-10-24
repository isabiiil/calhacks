import React, { Component } from 'react';
import { Modal, TextField, Card } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore/lite';
import Navbar from '../components/Navbar';

export default class DataVis extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      months: 0,
      showRev: false,
      showExp: false,
      showNet: false,
      showROI: false,
    };
    this.handleDef = this.handleDef.bind(this);
  }

  handleDef(def) {
    switch (def) {
      case 'revenue':
        this.setState({
          showRev: true,
          showExp: false,
          showNet: false,
          showROI: false,
        });
        break;
      case 'expenditure':
        this.setState({
          showRev: false,
          showExp: true,
          showNet: false,
          showROI: false,
        });
        break;
      case 'profit':
        this.setState({
          showRev: false,
          showExp: false,
          showNet: true,
          showROI: false,
        });
        break;
      case 'roi':
        this.setState({
          showRev: false,
          showExp: false,
          showNet: false,
          showROI: true,
        });
        break;
    }
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
    var roi = ((netProfit*this.state.months)/100000)*100
    roi = roi.toFixed(2);
    return (
      <>
        <Navbar />
        <div className="grid gap-4 grid-flow-row grid-cols-2 grid-rows-1">
          <div className="h-screen m-24 text-gray-800 dark:text-gray-100">
            <h1 className="text-2xl">Here is what you had said:</h1>
            <p>You have {this.state.data.customers} customers every day, with each one spending an average of ${this.state.data.spending}.</p>
            <p>Every day, you pay ${this.state.data.costs} in operational costs, ${this.state.data.wages} in wages, and ${dailyRent} in rent.</p>
            <p>Your total daily <u style={{cursor:'pointer'}} onClick={(e) => {this.handleDef('revenue')}}>revenue</u> is: ${dailyRevenue}.</p>
            <p>Your total daily <u style={{cursor:'pointer'}} onClick={(e) => {this.handleDef('expenditure')}}>expenditure</u> is: ${dailyExpenditure}.</p>
            <p>Your <u style={{cursor:'pointer'}} onClick={(e) => this.handleDef('profit')}>net profit</u> for the day is: ${netProfit}.</p>
            <p>You put in $100000 in capital.</p>
            <p>If you keep at it for </p>
            <TextField
              label="Months"
              onChange={(e) => {this.setState({months: e.target.value})}}
            />
            <p>months, your <u style={{cursor:'pointer'}} onClick={(e) => {this.handleDef('roi')}}>return on investment</u> will be: {roi}%.</p>
          </div>
          <div className="bg-purple-300 dark:bg-purple-900 text-gray-800 dark:text-gray-100 m-16 p-2 w-64 h-64 border-2 rounded-2xl">
            {this.state.showRev && 
              <div>
                <p className="text-xl">Revenue</p>
                <br />
                <p>This is how much money your business made, without taking into account expenses.</p>
              </div>
            }
            {this.state.showExp && 
              <div>
                <p className="text-xl">Expenditure</p>
                <br />
                <p>This is just another word for expenses or the costs of maintaining your business.</p>
              </div>
            }
            {this.state.showNet && 
              <div>
                <p className="text-xl">Net Profit</p>
                <br />
                <p>This is the amount of money you earned after subtracting your expenditures from your revenue.</p>
              </div>
            }
            {this.state.showROI && 
              <div>
                <p className="text-xl">Return on Investment</p>
                <br />
                <p>This percentage is the measurement of how profitable your business is. As it sounds, this is how much has returned from your initial investment.</p>
              </div>
            }
          </div>
        </div>
      </>
    )
  }
}

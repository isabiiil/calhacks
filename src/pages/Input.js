import React from 'react';
import Navbar from '../components/Navbar';
import { Button, TextField } from '@mui/material';
import { doc, collection, getDoc, setDoc } from 'firebase/firestore/lite';

export default class Input extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      costs: 500,
      customers: 200,
      rent: 3000,
      spending: 50,
      timestamp: 'October 23, 2021 at 7:18:00 PM UTC-4',
      wages: 500,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    var today = new Date(),
        now = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ', ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
      timestamp: now,
    });
  }

  async handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    await setDoc(doc(this.props.database, 'business', this.state.timestamp), {
      costs: this.state.costs,
      customers: this.state.customers,
      rent: this.state.rent,
      spending: this.state.spending,
      timestamp: this.state.timestamp,
      wages: this.state.wages,
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="w-1/2 mx-auto my-8 grid grid-flow-row grid-cols-2 grid-rows-5 gap-8 text-gray-800 dark:text-gray-100">
          <h1 className="text-right text-2xl my-auto">How many customers do you get every day?</h1>
          <div className="my-auto">
            <TextField 
              label="Value"
              name="customers"
              onChange={this.handleChange}
            />
          </div>
          <h1 className="text-right text-2xl my-auto">How much, on average, do they spend?</h1>
          <div className="my-auto">
            <TextField 
              label="Value in $$"
              name="spending"
              onChange={this.handleChange}
            />
          </div>
          <h1 className="text-right text-2xl my-auto">How much is your daily operational costs? Don't include rent if you have a space.</h1>
          <div className="my-auto">
            <TextField 
              label="Value in $$"
              name="costs"
              onChange={this.handleChange}
            />
          </div>
          <h1 className="text-right text-2xl my-auto">If you have any employees, how much, on average, do you pay them every day?</h1>
          <div className="my-auto">
            <TextField 
              label="Value in $$" 
              name="wages"
              onChange={this.handleChange}
            />
          </div>
          <h1 className="text-right text-2xl my-auto">If you rent space, how much is the monthly rent?</h1>
          <div className="my-auto">
            <TextField 
              label="Value in $$" 
              name="rent"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center h-24">
          <Button onClick={this.handleSubmit} variant="outlined"><a href="/datavis">Submit</a></Button>
        </div>
      </>
    )
  }
}

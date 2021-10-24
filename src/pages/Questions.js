import { Button, TextField } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default class Questions extends React.Component {
  handleChange() {

  }

  render() {
    return (
      <>
        <Navbar />
        <div className="w-1/2 mx-auto my-8 grid grid-flow-row grid-cols-2 grid-rows-3 gap-8 text-gray-800 dark:text-gray-100">

          <h1 className="text-right text-2xl my-auto">What kind of small business would you like to start?</h1>
          <FormControl component="fieldset">
            <RadioGroup aria-label="businessType" name="row-radio-buttons-group">
              <FormControlLabel value="Restaurant" control={<Radio />} label="Restaurant" />
              <FormControlLabel value="Laundromat" control={<Radio />} label="Laundromat" />
              <FormControlLabel value="Housekeeping" control={<Radio />} label="Housekeeping" />
              <FormControlLabel value="Web Development" control={<Radio />} label="Web Development" />
              <FormControlLabel disabled value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <h1 className="text-right text-2xl my-auto">How much capital will you have to start with?</h1>
          <div className="my-auto">
            <TextField label="Value in $$" />
          </div>

          <h1 className="text-right text-2xl my-auto">Where will your business be?</h1>
          <FormControl component="fieldset">
            <RadioGroup aria-label="businessLocation" name="row-radio-buttons-group">
              <FormControlLabel value="Home" control={<Radio />} label="Home" />
              <FormControlLabel value="Online" control={<Radio />} label="Online" />
              <FormControlLabel value="Rented Space" control={<Radio />} label="Rented Space" />
              <FormControlLabel disabled value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="flex justify-center items-center h-24">
          <Button variant="outlined"><a href="/input">Submit</a></Button>
        </div>
      </>
    )
  }
}

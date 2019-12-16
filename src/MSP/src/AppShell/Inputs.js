import React, { Component } from 'react';

import * as headings from '../Styles/Text';
import * as buttons from '../Styles/Buttons';
import {TextField, InputAdornment} from '@material-ui/core';
import Breadcrumb from '../Components/Breadcrumb';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';

const options1 = [
  { value: 'item1', label: 'item1' },
  { value: 'item2', label: 'item2' },
  { value: 'item3', label: 'item3' },
];
const options2 = [
  { value: 'item1', label: 'item1' },
  { value: 'item2', label: 'item2' },
  { value: 'item3', label: 'item3' },
];


const selectContainer = {
  maxWidth: '300px'
}


 


class Inputs extends Component {

  state = {
    selectedOption1: null,
    selectedOption2: null
  };

  handleChange1 = selectedOption1 => {
    this.setState({ selectedOption1 });
    console.log(`Option selected:`, selectedOption1);
  };

  handleChange2 = selectedOption2 => {
    this.setState({ selectedOption2 });
    console.log(`Option selected:`, selectedOption2);
  };

  render() {

    const { selectedOption1 } = this.state;
    const { selectedOption2 } = this.state;

    console.log(this.props.location.pathname);

    
    
    return (
     <div style={{ maxWidth: '1200px',
     margin: '0 auto',
     paddingTop: '50px',
     paddingLeft: '15px',
     paddingRight: '15px'}}>
     <Breadcrumb></Breadcrumb>
      <headings.H1>Buttons</headings.H1>


      <Grid container spacing={0}>

      

      <Grid item xs={12} md={6}>
       <headings.H4>Primary Button</headings.H4>
       <buttons.PRIMARY>Primary Button</buttons.PRIMARY>
       <buttons.PRIMARY_OUTLINE>Primary Outline</buttons.PRIMARY_OUTLINE>
      </Grid>

      <Grid item xs={12} md={6}>
       <headings.H4>Secondary Button</headings.H4>
       <buttons.SECONDARY>Secondary Button</buttons.SECONDARY>
       <buttons.SECONDARY_OUTLINE>Secondary Button</buttons.SECONDARY_OUTLINE>
       </Grid>


       <Grid item xs={12} md={6}>
       <headings.H4>Single Select</headings.H4>
       <div style={selectContainer}>
       <Select
        value={selectedOption1}
        onChange={this.handleChange1}
        options={options1}
      />
     </div>
     </Grid>


     <Grid item xs={12} md={6}>
      <headings.H4>Multiple Select</headings.H4>
      <div style={selectContainer}>
       <Select
        value={selectedOption2}
        onChange={this.handleChange2}
        options={options2}
        isMulti
      />
      </div>
      </Grid>


      <Grid item xs={12} md={6}>
       <headings.H4>Default Input</headings.H4>
       <TextField
        id="outlined-dense"
        label="Dense"
        margin="dense"
        variant="outlined"
      />
 </Grid>


 <Grid item xs={12} md={6}>
      <headings.H4>Prefix Input</headings.H4>
      <TextField
        label="With normal TextField"
        id="simple-start-adornment"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />

</Grid>

<Grid item xs={12} md={6}>
     <headings.H4>Suffix Input</headings.H4>
    <TextField
        id="outlined-adornment-weight"
       
        variant="outlined"
        label="Weight"
       
       
        helperText="Weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
        }}
      />
      </Grid>

      
  </Grid>
     </div>
    );
  }
}


export default Inputs;
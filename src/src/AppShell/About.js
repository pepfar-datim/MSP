import React, { Component } from 'react';
import * as headings from '../Styles/Text';
import Breadcrumb from '../Components/Breadcrumb';
import Grid from '@material-ui/core/Grid';


class About extends Component {

  

  render() {
    return (
        <div style={{ maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '50px',
        paddingLeft: '15px',
        paddingRight: '15px'}}>
        <Breadcrumb></Breadcrumb>
        <headings.H1>About the Metadata Sharing Platform</headings.H1>

        <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
                <headings.H4>Header</headings.H4>
                <div>Need content! </div>
            </Grid>
           
        </Grid>
        </div>
    );
  }
}

export default About;
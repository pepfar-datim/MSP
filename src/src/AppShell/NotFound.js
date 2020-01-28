import React from 'react';
import * as headings from '../Styles/Text';
import Breadcrumb from '../Components/Breadcrumb';
import Grid from '@material-ui/core/Grid';


const styles = {                                                  
    divider:{
        width: '70px',
        height: '3px',
        marginTop: '1em',
        backgroundColor: '#C1A783'
      },                
  };

const NotFound =() =>(
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '50px', paddingLeft: '15px', paddingRight: '15px'}}>
        <Breadcrumb></Breadcrumb>
        <headings.H1>404 Error</headings.H1>
    <div/>
    <div style={styles.divider}/>
        <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
                <headings.H4>Data Not Found!</headings.H4>                
            </Grid>           
        </Grid>
        </div>
);

export default NotFound;



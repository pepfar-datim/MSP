import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink, useLocation } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({  
    shortcutButton:{        
        color: '#1d5893',
        marginBottom: '1em',
        marginTop: '1em',
        width: '100%',
        '&:hover, &:focus':{
          backgroundColor: '#C1A783',
          color: '#000000'
        }        
      },
      sidebar:{
        margin: '0em',
        marginRight: '2em'    
      },
    }));

export default function  Shortcut(props) {   

    let location = useLocation();        
    const classes = useStyles();

    return (
        <div>
        {location.pathname && location.pathname === "/indicator" ?
            <Paper className={classes.sidebar}>
                <Grid container>   
                    <Grid item xs={12} md={12}  className={classes.buttonContainer}>
                        <NavLink to="/codelist">       
                            <Button variant="outlined" color="primary" className={classes.shortcutButton} >
                                Back to Data Elements
                            </Button>
                        </NavLink>
                    </Grid>                
                </Grid>
            </Paper>
        : null }  
        {location.pathname && location.pathname === "/codelist" ?           
            <Paper className={classes.sidebar}>
            <Grid container>   
                <Grid item xs={12} md={12}  className={classes.buttonContainer}>
                  <NavLink to="/indicator" >       
                    <Button variant="outlined" color="primary" className={classes.shortcutButton} >
                        Back to Reference Indicators
                    </Button>
                  </NavLink>
                </Grid>              
            </Grid>
            </Paper>           
        : null }  
        </div>                
    );
}





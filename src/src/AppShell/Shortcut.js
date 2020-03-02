import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink, useLocation } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import LinkIcon from '@material-ui/icons/Link';


const useStyles = makeStyles(theme => ({  
    shortcutButton:{        
        color: '#1d5893',        
        width: '100%',
        textAlign: 'left',
        fontSize: '1.0em',        
        '&:hover, &:focus':{
          backgroundColor: '#C1A783',
          color: '#000000'
        }        
      },

      shortcutButtonSelected:{        
        color: '#000000',
        backgroundColor: '#C1A783',       
        width: '100%',
        align: 'left',            
        cursor: 'pointer',
        fontSize: '1.0em',
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
        {location.pathname && location.pathname.includes("/indicator")  ?
            <Paper className={classes.sidebar}>
                <Grid container>   
                    <Grid item xs={12} md={12}  >                                                                   
                        <NavLink to="/codelist">                                                              
                            <Button variant="outlined" color="primary" className={classes.shortcutButton} >
                                <LinkIcon className="material-icons" style={{ color: '#1D5893', marginRight: '5px',  textAlign: 'left' }} />  Data Elements
                            </Button>                            
                        </NavLink>
                        <Button  color="primary" align="left" className={classes.shortcutButtonSelected} >
                            <LocalOfferOutlinedIcon style={{ color: '#1D5893', marginRight: '5px' }} />Reference Indicators
                        </Button>                       
                    </Grid>                
                </Grid>
            </Paper>
        : null }  
        {location.pathname && location.pathname.includes("/codelist") ?           
            <Paper className={classes.sidebar}>
            <Grid container>   
                <Grid item xs={12} md={12}  className={classes.buttonContainer}>   
                    <Button  color="primary" align="left" className={classes.shortcutButtonSelected} >
                        <LocalOfferOutlinedIcon className="material-icons" style={{ color: '#1D5893', marginRight: '5px',  textAlign: 'left' }} />Data Elements
                    </Button>                    
                  <NavLink to="/indicator" >       
                    <Button variant="outlined" color="primary" className={classes.shortcutButton} >
                        <LinkIcon className="material-icons" style={{ color: '#1D5893', marginRight: '5px',  textAlign: 'left' }} />Reference Indicators
                    </Button> 
                  </NavLink>
                </Grid>              
            </Grid>
            </Paper>           
        : null }  
        </div>                
    );
}





import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink, useLocation } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FaTable } from 'react-icons/fa';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon } from '@fortawesome/free-solid-svg-icons'



const useStyles = makeStyles(theme => ({  
    shortcutButton:{        
        color: '#1d5893',        
        width: '100%',    
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
        <div style={{marginTop: '10px'}}>
        {location.pathname && location.pathname.includes("/referenceIndicator")  ?
            <Paper className={classes.sidebar}>
                <Grid container>   
                    <Grid item xs={12} md={12}  >  
                    <Button  color="primary" align="left" className={classes.shortcutButtonSelected} style={{ color: '#1D5893', paddingLeft: '10px' ,justifyContent:"left"}}>                            
                            <FontAwesomeIcon icon={faRibbon}  className="material-icons" style={{ color: '#1D5893', marginRight: '5px' }} />Reference Indicators
                        </Button>                                                                 
                        <NavLink to="/codelist">                                                              
                            <Button variant="outlined" color="primary" className={classes.shortcutButton} style={{ color: '#1D5893', paddingLeft: '10px',justifyContent:"left"}} >
                            <LocalOfferOutlinedIcon style={{ color: '#1D5893', marginRight: '5px' }} />  Data Elements
                            </Button>                            
                        </NavLink>
                        <NavLink to="/indicators">                                                              
                            <Button variant="outlined" color="primary" className={classes.shortcutButton} style={{ color: '#1D5893', paddingLeft: '10px',justifyContent:"left"}} >
                            <FaTable style={{ color: '#1D5893', marginRight: '5px' }} /> Datim Indicators
                            </Button>                            
                        </NavLink>
                                              
                    </Grid>                
                </Grid>
            </Paper>
        : null }  
        {location.pathname && location.pathname.includes("/codelist") ?           
            <Paper className={classes.sidebar} style={{  textAlign: 'left' }}>
            <Grid container>   
                <Grid item xs={12} md={12}  className={classes.buttonContainer}> 
                <NavLink to="/referenceIndicator" >       
                    <Button variant="outlined" color="primary" className={classes.shortcutButton} style={{ color: '#1D5893', paddingLeft: '10px' ,justifyContent:"left"}}>                        
                        <FontAwesomeIcon style={{ color: '#1D5893', marginRight: '5px' }} icon={faRibbon} />Reference Indicators
                    </Button> 
                  </NavLink>  
                    <Button  color="primary"  className={classes.shortcutButtonSelected}  style={{ color: '#1D5893', paddingLeft: '10px' ,justifyContent:"left"}}>
                        <LocalOfferOutlinedIcon className="material-icons" style={{ color: '#1D5893', marginRight: '5px' }} />Data Elements
                    </Button> 
                    <NavLink to="/indicators">                                                              
                            <Button variant="outlined" color="primary" className={classes.shortcutButton} style={{ color: '#1D5893', paddingLeft: '10px',justifyContent:"left"}} >
                            <FaTable style={{ color: '#1D5893', marginRight: '5px' }} /> Datim Indicators
                            </Button>                            
                        </NavLink>                   
                  
                </Grid>              
            </Grid>
            </Paper>           
        : null }  
                {location.pathname && location.pathname.includes("/indicators") ?           
            <Paper className={classes.sidebar} style={{  textAlign: 'left' }}>
            <Grid container>   
                <Grid item xs={12} md={12}  className={classes.buttonContainer}>   
                <NavLink to="/referenceIndicator" >       
                    <Button variant="outlined" color="primary" className={classes.shortcutButton} style={{ color: '#1D5893', paddingLeft: '10px' ,justifyContent:"left"}}>                        
                        <FontAwesomeIcon style={{ color: '#1D5893', marginRight: '5px' }} icon={faRibbon} />Reference Indicators
                    </Button> 
                  </NavLink>
                <NavLink to="/codelist">                                                              
                            <Button variant="outlined" color="primary" className={classes.shortcutButton} style={{ color: '#1D5893', paddingLeft: '10px',justifyContent:"left"}} >
                            <LocalOfferOutlinedIcon style={{ color: '#1D5893', marginRight: '5px' }} />  Data Elements
                            </Button>                            
                        </NavLink> 
                        <Button  color="primary"  className={classes.shortcutButtonSelected}  style={{ color: '#1D5893', paddingLeft: '10px' ,justifyContent:"left"}}>
                        <FaTable className="material-icons" style={{ color: '#1D5893', marginRight: '5px' }} />Datim Indicators
                    </Button>                             
                  
                </Grid>              
            </Grid>
            </Paper>           
        : null }  
        </div>                
    );
}





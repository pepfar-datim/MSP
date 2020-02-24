
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as headings from '../Styles/Text';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../ContextSetup';
import { NavLink } from 'react-router-dom';




const useStyles = makeStyles(() => ({
    button:{
        backgroundColor: '#C1A783',
        color: '#000000',
        marginBottom: '1em',
        marginTop: '1em',
    
        '&:hover, &:focus':{
          color: '#000000',
        }
      },
    divider:{
      width: '70px',
      height: '3px',
      marginTop: '10px',
      backgroundColor: '#C1A783'
    },
    indicatorTitle:{
      color:'#000',
      marginTop:'1em'
    },
    subtitle:{
      marginBottom: '0'
    },
    tabContainer:{
      borderBottom: '1px solid #C1A783',
      width: '100%'
    },
    bigIndicator:{
      backgroundColor:'#C1A783'
    },
    expandPanel:{
      width: '100%'
    },
    tabPanel:{
      width: '95vw',
      padding: '0 !important'
    },
    panelDetail:{
      flexDirection:'column'
    },
    itemTitle:{
      color: '#1d5893 !important',
      padding: '0',
      fontSize: '1.2em'
    },
    itemContent:{
      fontSize: '0.8em'
    },
    itemContainer:{
      marginTop:'1em',
      borderBottom:'1px solid #cdcdcd'
    }
    
}));


//tab panel function
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


//get global variables from context
export const WhatIsNew =() =>{
  
    const classes = useStyles();
    const [{ data_Elements, newIndicators, newDisaggregations, reportFrequencyChanges,  modifyExistIndicators, modifyExistDisaggregations,  retiredIndicators, retiredDisaggregations }, dispatch] = useStateValue();

    //console.log(props)
    
//update the indicator details and matched data-element when select indicator
const updateIndicator = indicator_name =>() =>{
 
 dispatch({
   type: 'changeIndicatorName',
   indicatorName: indicator_name
 })
  //match indicator details
 

  //match data element of this indicator
  const match = [];
  data_Elements.map(data_Element => {
  if((data_Element.name).includes(indicator_name)){
    match.push(data_Element);
  }
  return true;
});
//  setMatchDataElements(match);
dispatch({
 type: 'changeMatchDataElements',
 matchDataElements: match
})
}



     //set initial panel state and panel handle change function
     const [panel, setPanel] = React.useState(0);
     const handleChange = (event, newPanel) => {
       setPanel(newPanel);
     };

 
    return(
        <div>
           <Grid container alignItems="center" >
          <headings.H1 className={classes.indicatorTitle}>Select an indicator to view details</headings.H1>
          </Grid>
        
      </div>

    )
}
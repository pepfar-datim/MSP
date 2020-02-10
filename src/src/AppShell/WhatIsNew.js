
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
    const [{ data_Elements, newIndicators, newDisaggregations, reportFrequencyChanges,  modifyExistIndicators, modifyExistDisaggregations, retiredIndicators, retiredDisaggregations }, dispatch] = useStateValue();

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
          <Grid item xs={12} md={8}>
          <headings.H1>Select an indicator to view details</headings.H1>
          <div className={classes.divider}></div>
          </Grid>
          <Grid item xs={12} md={4}>
          <Button variant="outlined" color="primary" className={classes.button}>
          Download MER Guidance v2.3
          </Button>
          </Grid>
          
       <headings.H4 className={classes.subtitle}>MER 2.2 to MER 2.3</headings.H4>
       
        <p>Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve 
          implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should 
          be taken to scale.</p>

         {/* indicator tabs */}
         <Tabs value={panel} onChange={handleChange} className={classes.tabContainer}  classes={{ indicator: classes.bigIndicator }}>
          <Tab label="NEW ADDITIONS TO MER 2.3" {...a11yProps(0)} />
          <Tab label="ADJUSTMENTS FROM MER 2.2" {...a11yProps(1)} />
          <Tab label="REMOVALS FROM MER 2.2" {...a11yProps(2)} />
        </Tabs>

         {/* NEW ADDITIONS TO MER 2.3 */}
      <TabPanel value={panel} index={0} className={classes.tabPanel}>

         {/* NEW INIDCATORS */}
      <ExpansionPanel defaultExpanded className={classes.expandPanel}>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
               New Indicators
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetail}>

                {newIndicators.map(newIndicator =>{
                  return(
                <div className={classes.itemContainer}  key={newIndicator.name + Math.random()}>               
                    <NavLink className={classes.itemTitle}  to={"/indicator/" + newIndicator.name} href={`/indicator/${newIndicator.name}`}>{newIndicator.name}</NavLink>

                {Object.keys(Object(newIndicator.content)).map(
                  key => <p className={classes.itemContent} key={Math.random()}>{Object(newIndicator.content)[key]}</p>
                )}
                </div>
                  )
                })}

       </ExpansionPanelDetails>
       </ExpansionPanel>


        {/* NEW DISAGGREGATIONS */}
       <ExpansionPanel className={classes.expandPanel}>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1b-content"
                id="panel1b-header"
               
              >
               New Disaggregations
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetail}>

                {newDisaggregations.map(newDisaggregation =>{
                  return(
                <div className={classes.itemContainer} key={Math.random()}>
                <Button onClick={updateIndicator(newDisaggregation.name)} className={classes.itemTitle}>{newDisaggregation.name}</Button>
                {Object.keys(Object(newDisaggregation.content)).map(
                  key => <p className={classes.itemContent} key={Math.random()}>{Object(newDisaggregation.content)[key]}</p>
                )}
                </div>
                  )
                })}

                
            
       </ExpansionPanelDetails>
       </ExpansionPanel>

      </TabPanel>

        {/* ADJUSTMENTS FROM MER 2.2 */}
        <TabPanel value={panel} index={1} className={classes.tabPanel}>

        {/* CHANGES IN REPORTING FREQUENCY */}
        <ExpansionPanel defaultExpanded className={classes.expandPanel}>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
               
              >
               Changes in Reporting Frequency
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetail}>

                {reportFrequencyChanges.map(reportFrequencyChange =>{
                  return(
                <div className={classes.itemContainer} key={Math.random()}>
                <Button onClick={updateIndicator(reportFrequencyChange.name)} className={classes.itemTitle}>{reportFrequencyChange.name}</Button>
                {Object.keys(Object(reportFrequencyChange.content)).map(
                  key => <p className={classes.itemContent} key={Math.random()}>{Object(reportFrequencyChange.content)[key]}</p>
                )}
                </div>
                  )
                })}

                
            
       </ExpansionPanelDetails>
       </ExpansionPanel>

        {/* MODIFICATIONS TO EXISTING INDICATORS */}
       <ExpansionPanel defaultExpanded className={classes.expandPanel}>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2b-content"
                id="panel2b-header"
               
              >
               Modifications to Existing Indicators
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetail}>

                {modifyExistIndicators.map(modifyExistIndicator =>{
                  return(
                <div className={classes.itemContainer} key={Math.random()}>
                <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.itemTitle}>{modifyExistIndicator.name}</Button>
                {Object.keys(Object(modifyExistIndicator.content)).map(
                  key => <p className={classes.itemContent} key={Math.random()}>{Object(modifyExistIndicator.content)[key]}</p>
                )}
                </div>
                  )
                })}

                
            
       </ExpansionPanelDetails>
       </ExpansionPanel>

        {/* MODIFICATIONS TO EXISTING DISAGGREGATIONS */}
       <ExpansionPanel defaultExpanded className={classes.expandPanel}>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2c-content"
                id="panel2c-header"
               
              >
               Modifications to Existing Disaggregations
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetail}>

                {modifyExistDisaggregations.map(modifyExistDisaggregation =>{
                  return(
                <div className={classes.itemContainer} key={Math.random()}>
                <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.itemTitle}>{modifyExistDisaggregation.name}</Button>
                {Object.keys(Object(modifyExistDisaggregation.content)).map(
                  key => <p className={classes.itemContent} key={Math.random()}>{Object(modifyExistDisaggregation.content)[key]}</p>
                )}
                </div>
                  )
                })}

                
            
       </ExpansionPanelDetails>
       </ExpansionPanel>

      </TabPanel>

        {/* REMOVALS FROM MER 2.2 */}
        <TabPanel value={panel} index={2} className={classes.tabPanel}>

         {/* RETIRED INDICATORS */}  
        <ExpansionPanel defaultExpanded className={classes.expandPanel}>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
               
              >
              Retired Indicators
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetail}>

                {retiredIndicators.map(retiredIndicator =>{
                  return(
                <div className={classes.itemContainer} key={Math.random()}>
                <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.itemTitle}>{retiredIndicator.name}</Button>
                {Object.keys(Object(retiredIndicator.content)).map(
                  key => <p className={classes.itemContent} key={Math.random()}>{Object(retiredIndicator.content)[key]}</p>
                )}
                </div>
                  )
                })}

                
            
       </ExpansionPanelDetails>
       </ExpansionPanel>


        {/* RETIRED DISAGGREGATIONS */}
       <ExpansionPanel defaultExpanded className={classes.expandPanel}>
       <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3b-content"
                id="panel3b-header"
               
              >
              Retired Disaggregations
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetail}>

                {retiredDisaggregations.map(retiredDisaggregation =>{
                  return(
                <div className={classes.itemContainer} key={Math.random()}>
                <Button onClick={updateIndicator("VMMC_CIRC")} className={classes.itemTitle}>{retiredDisaggregation.name}</Button>
                {Object.keys(Object(retiredDisaggregation.content)).map(
                  key => <p className={classes.itemContent} key={Math.random()}>{Object(retiredDisaggregation.content)[key]}</p>
                )}
                </div>
                  )
                })}

                
            
       </ExpansionPanelDetails>
       </ExpansionPanel>

      </TabPanel>

        </Grid>
      </div>

    )
}
import React, {useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';
import * as headings from '../Styles/Text';
import styled from 'styled-components';
import * as color_palette from '../Styles/Colors';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Breadcrumb from '../Components/Breadcrumb';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {useStateValue} from '../ContextSetup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// eslint-disable-next-line no-unused-vars
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';

import LinearProgress from '@material-ui/core/LinearProgress';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Button from '@material-ui/core/Button';


import {WhatIsNew} from './WhatIsNew';
import {getDomain} from '../config.js';

//tab panel function
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div" role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}
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

//formular panel function
function FormularPanel(props) {
  
  //event.stopPropagation(); // comment out as cause error, need to look further if this has any impact
  //event.preventDefault();
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`formular-tabpanel-${index}`}
      aria-labelledby={`formular-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

FormularPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function formularProps(index) {
  return {
    id: `formular-tab-${index}`,
    'aria-controls': `formular-tabpanel-${index}`,
  };
}

const domain = getDomain();
const ExpandTitle = styled.p`
    margin:0;
    padding:0;
    font-size: 1.2em;
    color: ${color_palette.SECONDARY_RED};
    font-weight: bold;
`;
const ExpandSubTitle = styled.span`
    margin-left: 1em;
    font-size: 1em;
    padding-top: 5px;
    font-weight: 300;
`;


const ChildList =styled.ul`
    margin-top:0;
    padding-top:0;
`;


const useStyles = makeStyles(theme => ({
  
  
  childContent:{
    margin: 0,
    padding:0,
    paddingBottom: '1em',
    display: 'block',
    width: '100%'
  },

  hide:{
    display: 'none'
  },
  container:{
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '30px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom:'50px'
  },
  heroContainer:{
    margin: '0 auto',
    backgroundColor: '#eeeeee',
    paddingBottom: '20px'
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  chipContainer: {
    marginRight: '10px'
  },
  formControl:{
    width: '100%'
  },
  filterContainer: {
    display: 'flex',
    flexGrow: 1,
    paddingBottom: '20px',
    flexDirection: 'column'
  },
  filter: {
    paddingLeft: '20px',
    paddingRight: '20px',
    minHeight: '50px',
    marginBottom:'1em'
  },
  searchForm:{
    display: 'flex',
    justifyContent: 'flex-end'
  },
  inputField:{
    width: '100%',
    backgroundColor:'#ffffff'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `'#D55804' !important`,
      borderWidth: '2px',
    }

  },
  popOver:{
      padding: '20px',
      minWidth: '200px'
  },

  cssFocused: {},
  tabContainer:{
    borderBottom: '1px solid #C1A783',
    width: '100%'
  },
  bigIndicator:{
    backgroundColor:'#C1A783'
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#D55804 !important'
  },
  floatingLabelFocusStyle:{
    '&$focused': {
    color:'#D55804 !important'
    }
  },
  iconButton:{
    padding: '10px',
    borderRadius: '5px',
    marginLeft: '-10px'

  },
  select: {
    '&:before': {
        borderColor: '#D55804',
        borderWidth: '2px'
    },
    '&:after': {
        borderColor: '#D55804',
        borderWidth: '2px'
    }
},
  selectIcon:{
    fill: '#D55804'
  },
  checkbox:{
    color: '#D55804',
  },
  changeBox:{
    padding: '20px',
    marginLeft: '15px',
    marginRight: '15px'
  },
  changeBoxTitle:{
    color: '#920E0E'
  },
  expansionPanelSummary:{
    borderBottom: '1px solid #C1A783',
  },
  expansionPanelDetails:{
    paddingTop: '30px'
  },
  comboTable:{
    boxShadow: 'none',
    border: 'none',
    maxWidth: '100%',
  },
  expansionPanelLeft:{
    paddingBottom: '30px'
  },
  chip:{
    marginRight: '5px'
  },
  filterButton:{
    marginBottom: '20px',
    marginRight: '20px',

    '&:hover, &:focus':{
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  downloadButton:{
    marginRight: '20px',
    marginTop: '10px',
    '&:hover, &:focus':{
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  formLegend:{
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '1.2em',
    marginBottom: '10px'
  },
  sidebar:{
    margin: '0em',
    marginRight: '2em'

  },
  sidebarTitle:{
    textAlign: 'center',
    padding: '1em',
    marginBottom: '0 !important'
  },
  sidebarExpandTitle:{
    fontSize: '1em',
    lineHeight:'1.4em',
    fontWeight: 'normal',
    color: '#000000',
    margin: 0
  },
  sidebarGroup:{
    
   },
   sidebarSubtitle:{
    textAlign: 'center'
   },
   indicatorList:{
    display: 'flex',
    flexDirection: 'column'
   },
   indicatorListItem:{
     paddingBottom: '1em',
     cursor: 'pointer'
   },
   indicatorListItemActive:{
    paddingBottom: '1em',
    cursor: 'pointer',
    fontWeight:'bold'
  },
   button:{
    backgroundColor: '#C1A783',
    color: '#000000',
    marginBottom: '1em',
    marginTop: '1em',

    '&:hover, &:focus':{
      color: '#ffffff'
    }
  },
  titleNote:{
    color: "rgba(0, 0, 0, 0.87) !important",
    fontSize: '0.8rem',
    fontWeight: 'normal'
  },
  indicatorChanges:{
    padding: '1em',
    marginBottom:'2em'
  },
  panelDetails:{
    flexDirection: 'column'
  },
  comparePanelContainer:{
    maxWidth: '1200px',
    margin:'0 auto',
    height:'80vh'
  },
  closeComparePanel:{
    float:'right',
    margin: '1em',
    cursor:'pointer'
  },
  dataElementContainer:{
    marginBottom: '1em'
  },
  tabDashboard:{
    width: '100%',
    display:'flex',
    justifyContent: 'flex-end'
  },
  historyButton:{
    backgroundColor: '#C1A783',
    color: '#000000',
    marginBottom: '1em',
    marginTop: '1em',

    '&:hover, &:focus':{
      color: '#000000'
    }
  },
  cardList:{
    fontWeight: 300
  },
  formulaButton:{
    marginTop: '1em',
    backgroundColor:'#eeeeee',
    border:0
  },
  [theme.breakpoints.down('sm')]: {
    // styles
    filterContainer: {
      display: 'block',
    },
    formControl:{
      width: '100%'
    },
    root:{
      width: '95vw'
    },
    tableContainer:{
      maxWidth: "85vw"
    },
    tabPanel:{
      width: '95vw',
      padding: '0 !important'
    },
    expansionPanel:{
      margin: '0 -24px'
    },
    sidebar:{
      marginRight: 0
    }
   
  },
  
  
  
 
}));


export default function Indicator() {

    const classes = useStyles();
    
    //initial filter state
    const [values, setValues] = React.useState({
      frequency: "",
      fiscal: "2020", 
      type: ""
    });


    //get indicator and data-elements from context
    const [{ indicators, data_Elements, indicatorName, currentIndicator, matchDataElements }, dispatch] = useStateValue();
    

    //set initial panel state and panel handle change function
    const [panel, setPanel] = React.useState(0);
    const handleChange = (event, newPanel) => {
      setPanel(newPanel);
    };

    const [formularPanel, setFormularPanel] = React.useState(0);
    const handleFormularChange = (event, newFormularPanel) => {
      event.stopPropagation();
      event.preventDefault();
      setFormularPanel(newFormularPanel);
    };

    const sortJSON = function (data, key, direction) {    
      return data.sort(function(a, b) {       
          var x = a[key]; var y = b[key];         
          if (direction === 'asc' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
          if (direction === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
          return true;
      });    
    }



    const getIndicatorGroup = function (indicatorData) { 
      //console.log( "filter value: " + values.fiscal + " freq:" + values.frequency );
      var filteredByYearData = indicatorData.filter(function (data) {
        
        if (values.frequency !== "" && values.fiscal !== "") { 
          //console.log("case 1:" + data.periodYear + " " + data.frequency );
          return data.periodYear === values.fiscal && data.frequency.trim().toLowerCase() === values.frequency.trim().toLowerCase();
        }else if (values.frequency !== "") {         
          //console.log("case 2:" + data.periodYear + " " + data.frequency ); 
          return data.frequency.trim().toLowerCase() === values.frequency.trim().toLowerCase();
        }else if (values.periodYear !== "") {    
             
          return data.periodYear === values.fiscal;
        }
        
        //return true;
      });

      //console.log(filteredByYearData);
      const distinctGroup = [...new Set(filteredByYearData.map(item => item.group))];
      distinctGroup.sort();           

      //// set indicators based on filter
      ///??setIndicatorsListForUI(filteredByYearData);
      var valueObj = {};
      valueObj.indGroup = distinctGroup;
      valueObj.indicatorsFiltered = filteredByYearData;
      return distinctGroup;
      //return valueObj;
    }

    const getFilteredIndicator = function (indicatorData) { 
      console.log( "filter value: " + values.fiscal + " freq:" + values.frequency + " periodYear:" + values.periodYear);
      var filteredByYearData = indicatorData.filter(function (data) {
        
        if (values.frequency !== "" && values.fiscal !== "") {           
          return data.periodYear === values.fiscal && data.frequency.trim().toLowerCase() === values.frequency.trim().toLowerCase();
        }else if (values.frequency !== "") {                   
          return data.frequency.trim().toLowerCase() === values.frequency.trim().toLowerCase();
        }else if (values.periodYear !== "") {                
          return data.periodYear === values.fiscal;
        }
        
        //return true;
      });

      //console.log(filteredByYearData);
      return filteredByYearData;
    }

   const createIndicatorListForUI = function(indicatorsDataOCL) {
     var indicatorList = indicatorsDataOCL.map(function (indicator) {        
        var indicatorItem = {};        
        indicatorItem.id = indicator.id;
        indicatorItem.name = indicator.display_name ? indicator.display_name : "";
        indicatorItem.description = (indicator.descriptions && indicator.descriptions.length > 0) ? indicator.descriptions[0].description : "";        
        indicatorItem.created_on = indicator.created_on ? indicator.created_on : "";
        indicatorItem.updated_on = indicator.updated_on ? indicator.updated_on : "";        
        indicatorItem.group = indicator.extras && indicator.extras["Indicator Group"] ? indicator.extras["Indicator Group"]: "";
        indicatorItem.level = indicator.extras && indicator.extras["Reporting level"] ? indicator.extras["Reporting level"]: "";
        indicatorItem.frequency = indicator.extras && indicator.extras["Reporting frequency"] ? indicator.extras["Reporting frequency"]: "";
        indicatorItem.period = indicator.extras && indicator.extras["Period"] ? indicator.extras["Period"]: "";
        indicatorItem.periodYear = (indicatorItem.period !== "") ? "20" + indicatorItem.period.trim().substring(2,4) : "";
        indicatorItem.numerator = indicator.extras && indicator.extras["Numerator"] ? indicator.extras["Numerator"]: "";   
        indicatorItem.numerator_description = indicator.extras && indicator.extras["Numerator Description"] ? indicator.extras["Numerator Description"]: "";               
        indicatorItem.numerator_disaggregation_groups = indicator.extras && indicator.extras["Numerator Disaggregation Groups"] ? indicator.extras["Numerator Disaggregation Groups"]: "";       
        indicatorItem.disaggregate_descriptions_and_definitions = indicator.extras && indicator.extras["Disaggregate descriptions and definitions"] ? indicator.extras["Disaggregate descriptions and definitions"]: "";           
        indicatorItem.denominator = indicator.extras && indicator.extras["Denominator"] ? indicator.extras["Denominator"]: "";
        indicatorItem.denominator_disaggregation_groups = indicator.extras && indicator.extras["Denominator Disaggregation Groups"] ? indicator.extras["Denominator Disaggregation Groups"]: "";    

        indicatorItem.changeFromPreviousVersion = indicator.extras && indicator.extras["Change from previous version"] ? indicator.extras["Change from previous version"] : "";
        indicatorItem.how_to_use = indicator.extras && indicator.extras["How to use"] ? indicator.extras["How to use"]: "";
        indicatorItem.how_to_collect = indicator.extras && indicator.extras["How to collect"] ? indicator.extras["How to collect"]: "";
        indicatorItem.how_to_review = indicator.extras && indicator.extras["How to review for data quality"] ? indicator.extras["How to review for data quality"] : "";
        indicatorItem.how_to_calculate_annual_total = indicator.extras && indicator.extras["How to calculate annual total"] ? indicator.extras["How to calculate annual total"] : "";
        indicatorItem.PEPFAR_support_definition = (indicator.extras && indicator.extras["PEPFAR-support definition"] ) ? indicator.extras["PEPFAR-support definition"] : "";
        indicatorItem.guiding_narrative_questions = indicator.extras && indicator.extras["Guiding narrative questions"] ? indicator.extras["Guiding narrative questions"]: "";
        indicatorItem.guidance_version = indicator.extras && indicator.extras["Guidance Version"] ? indicator.extras["Guidance Version"]: "";
        //console.log(indicatorItem);        
        return indicatorItem;
      });      
     return indicatorList;
   }

    //indicator that the app has mounted
    const [init, setInit]= React.useState(false);
    var queryIndicators = "https://api." + domain + "/orgs/PEPFAR-Test2/sources/MER-Test2/concepts/?verbose=true&limit=0&conceptClass=\"Reference+Indicator\""; 
    
    const [indicatorsData, setIndicatorsData] = useState([] );
    const [dataElementsData, setDataElementsData] = useState([] ); 
    const [error, setError] = useState(null)
    const [indicatorsListForUI, setIndicatorsListForUI] = useState([] ); // contains indicators for all years
    const [filteredIndicatorsListForUI, setFilteredIndicatorsListForUI] = useState([] );
    const [indicatorGroups, setIndicatorGroups] = useState([] );
    const [indGrouploading, setIndGroupLoading] = useState(false);
    const [deloading, setDELoading] = useState(false);
 
    const loadIndicatorData = async ()=> {
      //console.log("loadIndicatorData - queryIndicators :"+queryIndicators);
      setIndGroupLoading(true);
      try {
        const response = await fetch(queryIndicators);
        if (!response.ok) {
          console.log(response);
          throw new Error(
            `Error when retrieve indicators ${response.status} ${response.statusText}`
          );
        }
        const jsonData = await response.json();
        if (!jsonData.length || jsonData.length === 0) {
          console.log("jsonData is empty");
          setIndGroupLoading(false);
          throw new Error(
            `Warning indicators data is emtpy from OCL `
          );
        }
        setIndicatorsData(jsonData); 
        console.log("indicators: " + jsonData.length);
        var d = createIndicatorListForUI(jsonData);
        var sortedData = sortJSON(d, 'name', 'asc');
        setIndicatorsListForUI (sortedData);
        setFilteredIndicatorsListForUI(sortedData);
        var indGroupTemp = getIndicatorGroup(d);        
        setIndicatorGroups(indGroupTemp);        
        setIndGroupLoading(false);
      }catch (e){
        console.log("error:" + e.message);
        setError(e.message);
      }
    }

    const loadDataElementsDataByIndicator = async (indicatorID)=> {
      console.log("loadDataElementsByIndicator: " + indicatorID);      
      var query = "https://api." + domain + "/orgs/PEPFAR-Test2/sources/MER-Test2/concepts/?limit=0&verbose=true&conceptClass=\"Data+Element\"&includeMappings=ture&q=" + indicatorID;

      //console.log("query data eleemnts by indicator : " + query );
      setDELoading(true);
      try {
        const response = await fetch(query);
        if (!response.ok) {
          console.log(response);
          setDELoading(false);
          throw new Error(
            `Error when retrieve indicators ${response.status} ${response.statusText}`
          );
        }
        const jsonData = await response.json();                
        if (!jsonData) {
          console.log("jsonData is empty");
          setDELoading(false);
          throw new Error(
            `Warning data element data is emtpy from OCL  ` + indicatorID
          );
        }
        console.log("data elements : " + jsonData.length);
        setDELoading(false);
        var mappedDataElements = [];
        if (jsonData && Array.isArray(jsonData)){          
          mappedDataElements = jsonData.map(item => {
            var dataElementItem = {};
            dataElementItem.source = item.owner;
            dataElementItem.description = (item.descriptions && item.descriptions.length > 0 ) ? item.descriptions[0].description : ""; 
            dataElementItem.uid = item.external_id;
            dataElementItem.code = item.id;
            dataElementItem.name = item.display_name;   
            var deMappings = [];            
            const mappings = item.mappings.filter(mapping => mapping.map_type === "Has Option");
            //console.log(mappings);
            deMappings = mappings            
              .map(mapping => {
                var disagItem = {};
                disagItem.code = mapping.to_concept_code;
                disagItem.name = mapping.to_concept_name;
                return disagItem;
              })
            //console.log(deMappings);
            var sortedMappings = sortJSON(deMappings, 'name', 'asc');
            dataElementItem.disags = sortedMappings;
            return dataElementItem;
          })
        }
                
        var sortedData = sortJSON(mappedDataElements, 'name', 'asc');
        setDataElementsData(mappedDataElements);
        dispatch({
          type: 'changeMatchDataElements',
          matchDataElements: sortedData
        })
        
      }catch (e){
        console.log("error:" + e.message);
        setError(e.message);
      }
    }

    useEffect(() => {
      console.log("loadIndicator from useEffect");
      loadIndicatorData();      
      setInit(true);
    }, [queryIndicators]);

   
  //update the indicator details and matched data-element when select indicator
  function updateIndicator(indicator_name){
     //match indicator name
    //  setIndicatorName(indicator_name);
    dispatch({
      type: 'changeIndicatorName',
      indicatorName: indicator_name
    })
     //match indicator details

     //indicators.map(indicator => {
     indicatorsListForUI.map(indicator => {
       if(indicator.name.trim().toLowerCase() === indicator_name.trim().toLowerCase()){
      //  setCurrentIndicator(indicator);
      dispatch({
        type: 'changeCurrentIndicator',
        currentIndicator: indicator
      })
       }
      return true;
     });

     //match data element of this indicator     
     loadDataElementsDataByIndicator(indicator_name);
     
     const match = [];
     data_Elements.map(data_Element => {
     if((data_Element.name).includes(indicator_name)){
       match.push(data_Element);
     }
     return true;
   });
  
}

  //realize the function of "key update" to back to the default status
  function backtoDefault(){
    dispatch({
      type: 'changeIndicatorName',
      indicatorName: ''
    })
    dispatch({
      type: 'changeCurrentIndicator',
      currentIndicator: []
    })
    dispatch({
      type: 'changeMatchDataElements',
      matchDataElements: []
    })
  }

  function convertMarkdown(text) {
    var md = new Remarkable();    
    return md.render(text) ;
  }
    
//implement filtering function by set Values first
  const handleFilterChange = event => {
    event.persist();
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));  
  };

  //when value has changed, call useEffect function
  useEffect(() => {
    //if it's not the first time the app mounted
    if(init){
      console.log("indicatorListForUI:" + indicatorsListForUI.length);
      var indGroupTemp = getIndicatorGroup(indicatorsListForUI);        
      setIndicatorGroups(indGroupTemp);
      var filteredInd = getFilteredIndicator(indicatorsListForUI);      
      setFilteredIndicatorsListForUI(filteredInd);

    }
  }, [values]);

  //indicator group display
  var groupExpansionPanelList = []; 
  indicatorGroups.map(function(indGroup, index) {
    //console.log(indGroup + " - " + index);
    groupExpansionPanelList.push(
      <ExpansionPanel key={"panel" + index}>
       <ExpansionPanelSummary key={"summary_" + index} expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content" id="panel1a-header" className={classes.sidebarExpansionSummary} >
          <ExpandTitle key={"title_" + index} className={classes.sidebarExpandTitle}>{indGroup}</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails key={"detail_" + index} className={classes.indicatorList}>
          {
              filteredIndicatorsListForUI.filter(indicator => (indicator.group === indGroup && indicator.periodYear === values.fiscal))
              .map(indicator =>{
                //console.log(indicator.id);
              return(
                <div key={"group_" + index + indicator.id } onClick={() => updateIndicator(indicator.id)} className={currentIndicator.name===indicator.name ? classes.indicatorListItemActive : classes.indicatorListItem}>
                {indicator.name} 
                </div>
              )                 
            })
          }             
        </ExpansionPanelDetails>
    </ExpansionPanel>
    );
    return true;
  }, this);

//console.log(currentIndicator);


  //layout
return (
         
 <div className={classes.container}>
  <Breadcrumb></Breadcrumb>

  <Grid container>
  {/* sidebar */}
  <Grid item xs={12} md={3}>
    <Paper className={classes.sidebar}>
    <h4 className={classes.sidebarTitle}>INDICATOR FILTERS</h4>
    {/* filters */}
    <form className={classes.filterContainer} autoComplete="off">
      {/* fiscal filter */}
      <Grid item xs={12} className={classes.filter} >
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="fiscal">Fiscal Year</InputLabel>
            <Select native  value={values.fiscal} onChange={handleFilterChange} className={classes.select}
              inputProps={{
              name: 'fiscal',
              id: 'fiscal',
              classes: {
                icon: classes.selectIcon
              }
              }}
            >
              <option value={'2020'}>2020</option>
              <option value={'2019'}>2019</option>
              <option value={'2018'}>2018</option>
            </Select>
        </FormControl>
      </Grid>

      {/* frequency filter */}
      <Grid item xs={12} className={classes.filter} >
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="frequency">Reporting Frequency</InputLabel>
          <Select native value={values.frequency} onChange={handleFilterChange} className={classes.select}
            inputProps={{
              name: 'frequency',
              id: 'frequency',
              classes: {
                icon: classes.selectIcon
              }
            }}
          >
            <option value={""} />
            <option value={'Quarterly'}>Quarterly</option>
            <option value={'Semi-Annually'}>Semi-Annually</option>
            <option value={'Annually'}>Annually</option>
          </Select>
        </FormControl>
      </Grid> 
    </form>

    {/* indicator groups */}
    <div key="sidebarGroup" className={classes.sidebarGroup}>
      <p className={classes.sidebarSubtitle}>INDICATOR GROUPS</p>
      {indGrouploading ? 
          <div>
              <LinearProgress mode="indeterminate" />
              <div style={{paddingTop: '1rem', paddingLeft: '1rem'}}>Loading indicators ...</div>
          </div> :
          groupExpansionPanelList}
    </div>
  </Paper>
</Grid>

{/* main content */}
<Grid item xs={12} md={9}>

{/* if there is no indicator selected display default what's new, otherwise display the indicator details and data elements related */}
  {
    indicatorName === '' ? <WhatIsNew/> : 
    <div>
      <Button onClick={backtoDefault}>&lt; KEY UPDATES</Button>
      <headings.H1>{indicatorName}</headings.H1>
      
      {/* indicator tabs */}     
      <Tabs value={panel} onChange={handleChange} className={classes.tabContainer}  classes={{ indicator: classes.bigIndicator }}>
        <Tab label="INDICATOR DETAILS" {...a11yProps(0)} />
        <Tab label="DATA ELEMENTS" {...a11yProps(1)} />
      </Tabs>

      {/* indicator details */}
      <TabPanel value={panel} index={0} className={classes.tabPanel}>
      
      {/* Indicator description */}        
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <ExpandTitle>Description</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <p className={classes.childContent}>
              {currentIndicator.description}
            </p>
            <p>
              <strong>Reporting level</strong>: {currentIndicator.level} <br/>
              <strong>Reporting frequency</strong>: {currentIndicator.frequency} <br/>
              <strong>How to calculate annual total</strong>:  {currentIndicator.how_to_calculate_annual_total} 
            </p>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

  {/* Indicator changes */}
  <ExpansionPanel defaultExpanded={true}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <ExpandTitle>Indicator changes</ExpandTitle>
        <ExpandSubTitle> Guidance Version: {currentIndicator.guidance_version}</ExpandSubTitle>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>                        
          <div><strong>Change from previous version</strong>: {currentIndicator.changeFromPreviousVersion}</div>                        
       </ExpansionPanelDetails>
       </ExpansionPanel>

   {/* Indicator numerator */}   
       <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header" >
          <ExpandTitle>Numerator</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
              <p className={classes.childContent}><strong>Numerator</strong>: {currentIndicator.numerator}</p>
              <p className={classes.childContent}><strong>Numerator Description</strong>: {currentIndicator.numerator_description}</p>
              <p className={classes.childContent}><strong>Disaggregate Groups</strong></p>              
              <div dangerouslySetInnerHTML={{__html: convertMarkdown(currentIndicator.numerator_disaggregation_groups)}} />                                           
        </ExpansionPanelDetails>
       </ExpansionPanel>

  {/* Indicator denominator */}
       <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
          <ExpandTitle>Denominator</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
              <p className={classes.childContent}><strong>Denominator</strong>: {currentIndicator.denominator}</p>
              <p className={classes.childContent}><strong>Denominator Description</strong>: {currentIndicator.numerator_description}</p>
              <p className={classes.childContent}><strong>Disaggregate Groups</strong>:                
                <span dangerouslySetInnerHTML={{__html: convertMarkdown(currentIndicator.denominator_disaggregation_groups)}} />
              </p>
        </ExpansionPanelDetails>
       </ExpansionPanel>

  {/* Indicator disaggregate */}
  {currentIndicator.disaggregate_descriptions_and_definitions.trim() !== "" ? 
       <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <ExpandTitle>Disaggregate descriptions & definitions</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>                                    
             <div dangerouslySetInnerHTML={{__html: convertMarkdown(currentIndicator.disaggregate_descriptions_and_definitions)}} />                         
        </ExpansionPanelDetails>
       </ExpansionPanel>
      : null }

  {/* Indicator pepfar definition */}
  {currentIndicator.PEPFAR_support_definition.trim() !== "" ?  
      <ExpansionPanel>
        <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <ExpandTitle>PEPFAR-support definition</ExpandTitle>
              {/*<ExpandSubTitle>Standard definition of DSD and TA-SDI used.</ExpandSubTitle>*/}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>                          
          <div dangerouslySetInnerHTML={{__html: convertMarkdown(currentIndicator.PEPFAR_support_definition)}}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  : null }
  {/* Indicator how to use */}
  {currentIndicator.how_to_use.trim() !== "" ?  
      <ExpansionPanel>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <ExpandTitle>How to use</ExpandTitle>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
       <div dangerouslySetInnerHTML={{__html: convertMarkdown(currentIndicator.how_to_use)}} />
       </ExpansionPanelDetails>
       </ExpansionPanel>
  : null }
  {/* Indicator how to collect */}
  {currentIndicator.how_to_collect.trim() !== "" ?  
       <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <ExpandTitle>How to collect</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div dangerouslySetInnerHTML={{__html: convertMarkdown(currentIndicator.how_to_collect)}}/>
       </ExpansionPanelDetails>
       </ExpansionPanel>
  : null }
  {/* Indicator how to review quality */}
  {currentIndicator.how_to_review.trim() !== "" ?  
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <ExpandTitle>How to review data quality</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div dangerouslySetInnerHTML={{__html: convertMarkdown(currentIndicator.how_to_review)}} />
       </ExpansionPanelDetails>
      </ExpansionPanel>
    : null }
  {/* Indicator guiding narrative questions */}
  {currentIndicator.guiding_narrative_questions.trim() !== "" ?  
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <ExpandTitle>Guiding narrative questions</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div dangerouslySetInnerHTML={{__html: convertMarkdown(currentIndicator.guiding_narrative_questions)}}/>
       </ExpansionPanelDetails>
      </ExpansionPanel>
  : null }
    </TabPanel>


   {/* data elements */}
    <TabPanel value={panel} index={1} className={classes.tabPanel}>
      {/* <div className={classes.tabDashboard}>
      <Button variant="contained" color="primary" className={classes.button} onClick={toggleDrawer('bottom', true)}>Comparison</Button>
      </div> */}      
      {deloading ? 
        <div><LinearProgress mode="indeterminate" /></div> : 
        matchDataElements.length === 0 ? 
          <div>No data elements found </div> : null        
        
      }
      
      {/*  TO DO: consider to put this into a function (for loading) or a component (for reuse) */ }
      {matchDataElements.map(dataElement => (
        <div key={dataElement.code}>
          <ExpansionPanel className={classes.expansionPanel}>

            {/* data elements summery */}
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.expansionPanelSummary}>
              <Grid container alignItems="center" justify="space-between">       
                <Grid item  xs={11} md={9}>         
                  <Typography className={classes.heading}> 
                  <strong>{dataElement.name}</strong> {dataElement.category}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography className={classes.heading}> 
                  <strong>Data Element UID</strong>: {dataElement.uid} 
                  </Typography>
                  </Grid>
              </Grid>         
            </ExpansionPanelSummary>

          {/* data elements details */}
          <ExpansionPanelDetails className={classes.expansionPanelDetails}>
            <Grid container>
            <Grid item  xs={12} className={classes.expansionPanelLeft}>
              <Typography>
                <strong>Description</strong>: {dataElement.description}<br/> 
                {/* <strong>Code</strong>: <NavLink to="/indicator" activeClassName="sidebarActive" className={classes.buttonNav}>
                {dataElement.indicatorName}
                </NavLink> */}
                <strong>Source</strong>: {dataElement.source}<br/>          
              </Typography>
            </Grid>
       
            {/* data element Disaggregations */}
            <Grid item  xs={12} className={classes.comboTable}>
              <strong>Disaggregations</strong>:<br/>       
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Disaggregations Name</TableCell>
                <TableCell>Disaggregations Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
             Object.keys(Object(dataElement.disags)).map(
               key => 
               <TableRow key={Math.random()}>
                <TableCell component="th" scope="row">
                {Object(dataElement.disags)[key].name}
                </TableCell> 
                <TableCell component="th" scope="row">
                {Object(dataElement.disags)[key].code}
                </TableCell> 
              </TableRow>              
             )
            }
            </TableBody>
        </Table>

         {/* open the formula panel */}        
        { 
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header" className={classes.formulaButton}>
            <Typography className={classes.heading}>Formula</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails  className={classes.expansionPanelDetails}>
            <div className={classes.tableContainer} >                     
              <Tabs value={formularPanel} onChange={handleFormularChange} className={classes.tabContainer}  classes={{ indicator: classes.bigIndicator }}>
                <Tab label="HUMAN READABLE FORMAT" {...formularProps(0)} />
                <Tab label="UID FORMAT" {...formularProps(1)} />
              </Tabs>

              <FormularPanel value={formularPanel} index={0} className={classes.tabPanel}>
                <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow key={Math.random()}>
                    <TableCell component="th" scope="row">
                    Numerator
                    </TableCell> 
                    {(dataElement && dataElement.disags )? 
                      <TableCell component="th" scope="row">                               
                      {
                        dataElement.disags.map(
                          (item, index ) => 
                            (index < dataElement.disags.length -1) ?
                              ( <span key={"item" + index}> {item.name} +   </span>)
                           :  ( <span key={"item" + index}> {item.name}   </span>)                                                    
                        )
                      }                        
                      </TableCell> 
                      : null
                  }
                    
                  </TableRow>
                  <TableRow key={Math.random()}>
                      <TableCell component="th" scope="row">
                      Denominator
                      </TableCell> 
                      <TableCell component="th" scope="row">
                      N/A
                      </TableCell> 
                  </TableRow>
                  <TableRow> 
                  
                      <TableCell colSpan={2}><div style={{color: '#808080'}}>[NOTE: The formula need to be updated once finalized in OCL.]</div></TableCell>  
                  </TableRow>
                   
                  </TableBody>
                </Table>
              </FormularPanel>
              <FormularPanel value={formularPanel} index={1} className={classes.tabPanel}>
                <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow key={Math.random()}>
                    <TableCell component="th" scope="row">
                    Numerator
                    </TableCell> 
                    {(dataElement && dataElement.disags )? 

                    <TableCell component="th" scope="row">                               
                    {
                      dataElement.disags.map(
                        (item, index ) => 
                          (index < dataElement.disags.length -1) ?
                            ( <span key={"item_" + item.code + index}> {item.code} +   </span>  )
                         : ( <span key={"item_" + item.code + index}> {item.code}   </span>   )                                                    
                      )
                    }           
                   
                    </TableCell> 
                    : null}
                    </TableRow>

                    <TableRow key={Math.random()}>
                    <TableCell component="th" scope="row">
                    Denominator
                    </TableCell> 
                    <TableCell component="th" scope="row">
                    {dataElement.uidDenominator}
                    </TableCell> 
                    </TableRow>

                    <TableRow> 
                      <TableCell colSpan={2}><div style={{color: '#808080'}}>[NOTE: The formula need to be updated once finalized in OCL.]</div></TableCell>  
                    </TableRow>
                  </TableBody>
                </Table>
              </FormularPanel>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        }        
          </Grid>
        </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      </div>

      ))}

      </TabPanel>
      
      </div>
        }
      </Grid>
     </Grid>
     </div>
    );
  
}




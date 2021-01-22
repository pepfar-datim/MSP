
import React, {useState, useEffect } from 'react';
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
import { NavLink } from 'react-router-dom';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import * as d3 from 'd3';

import csvData from '../data/MER_updates.csv';

import {convertMarkdown} from '../util.js';
import {getConfig} from '../config.js';

const versionMap = getConfig().versionMap;

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
    },
    home:{
      marginLeft:"65px",
      paddingRight:"5px",
      marginBottom:"40px"
    },
    formControl:{
      width: '150px',      
    },
    selectIcon:{
      fill: '#D55804',
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
    actionButton: {
      marginLeft: '10px',
      marginTop: '12px',     
      '&:hover, &:focus': {
        backgroundColor: '#C1A783',
        color: '#000000'
      }
    },
    
    
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

export const WhatIsNewHome =() =>{
  
    const classes = useStyles();    
    const [init, setInit]= useState(false);
    const [versionSelected, setVersion]= useState("");    
    const [versions, setVersions] = useState([]);
    const [jsonData, setJsonData] = useState([]);
    const [versionToListMap, setVersionToListMap] = React.useState(new Map());
    const [panelToListMap, setPanelToListMap] = React.useState(new Map());
    const [mapIndicatornameToIDcompound, setMapIndicatornameToIDcompound] = React.useState(new Map());
    const DELIMINATOR = "++";
    const domain = getConfig().domain;
    const org = getConfig().org;
   
    const loadIndicatorData = async (version)=> {
     
      if (version <= 1.1){ // as of 7/7/2020 there is no indicator link for versions < 1.1
        return;
      }
      
      let year = "";
      versionMap.map(   
        item => {         
          if (item.version.indexOf(version) > 0 ) {  
            year = item.year
          }
          return null;
      });  
     
      var queryIndicators =  "https://api." + domain + "/orgs/" + org + "/sources/MER/concepts/?limit=100&verbose=true&q=&conceptClass=Reference+Indicator&extras.Period=FY"+ year.substring(2,4);      
      console.log("queryIndicators : " + queryIndicators);
      
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
          
          throw new Error(
            `Warning indicators data is emtpy from OCL `
          );
        }        
        
        let mapIndicatornameToID = new Map();
        jsonData.map(
          item => {           
            mapIndicatornameToID.set(item.id, item.id + DELIMINATOR + item.uuid);
            return mapIndicatornameToID;
          }          
        );
       
       setMapIndicatornameToIDcompound(mapIndicatornameToID);
       
      }catch (e){
        console.log("error:" + e.message);
        
      }
    }


    const loadData = async ()=> {        
      try {       
          d3.csv(csvData).then(function(data) {
          console.log(data);          
          let versionToListMapTemp = new Map();
          let panelToListMapTemp = new Map();
        
          Object.keys(data).map(                         
            (key, index) => {             
              const item = data[key];             
              if (item['MER Version'] && !versions.includes(item['MER Version'])){
                versions.push(item['MER Version']);
              }
              let categoryList = new Set();
              let versionList = new Set();
              let categoryListForPanel = new Set();
              if (versionToListMapTemp.has(item['MER Version'])){
                categoryList = versionToListMapTemp.get(item['MER Version']);                 
              }                 
              let tab = getPanelFromItemTab(item['Tab']);
              if (panelToListMapTemp.has(tab)){
                categoryListForPanel = panelToListMapTemp.get(tab);                 
              }                        
              versionList.add(item['MER Version']);
              categoryList.add(item['List']);
              categoryListForPanel.add(item['List']);
              versionToListMapTemp.set(item['MER Version'], categoryList); 
              if (tab !== "") {
                panelToListMapTemp.set(tab, categoryListForPanel); 
              }
             return null;             
            }
            );
                
            versions.sort(function(a, b){return b-a}); // descending
            setVersions(versions);
            setVersion(versions[0]);           
            setJsonData(data);
            setVersionToListMap(versionToListMapTemp);
            setPanelToListMap(panelToListMapTemp);
            loadIndicatorData(versions[0]);
        }).catch(function(err) {
          throw err;
        })       
      }catch (e){
        console.log("error:" + e.message);        
      }
    }

    useEffect(() => {             
      setInit(true);  
      if (init) {       
        loadData();         
      }        
    }, [init]);
    

    const handleFilterChange = event => {
      event.persist();
      setVersion( event.target.value);  
      loadIndicatorData(event.target.value);        
    };

     //set initial panel state and panel handle change function
     const [panel, setPanel] = React.useState(0);
     const handleChange = (event, newPanel) => {
       setPanel(newPanel);
     };

     let versionLabelPrevious = "";
     let guidanceDownloadURL = "";
     versionMap.map(   
        item => {         
          if (item.version.indexOf(versionSelected) > 0 ) {  
            versionLabelPrevious = item.fromText;
            guidanceDownloadURL = item.guidanceDownloadURL;
          }
          return null;
      });  
      
      let headerText = "";
      if (versionLabelPrevious !== "") {
        headerText = versionLabelPrevious + " to MER " + versionSelected;
      }else {
        headerText =  "MER " + versionSelected;
      }

     
    return(
        <div className={classes.home}>
           <Grid container alignItems="center"  >
            <Grid item xs={12} md={7}>
            <headings.H1>KEY UPDATES AND CHANGES</headings.H1>
            <div className={classes.divider}></div>
            </Grid>
          <Grid item xs={12} md={5}>

            <form autoComplete="off">
              <Grid item xs={12}  className={classes.filter} >
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="source">Version</InputLabel>
                  <Select
                    native
                    value={versionSelected}
                    onChange={handleFilterChange}
                    className={classes.select}
                    inputProps={{
                      name: 'version',
                      id: 'version',
                      classes: {
                        icon: classes.selectIcon
                      }
                    }}
                  >                   
                    { versions.map(key => <option key={key} value={key} >{"MER " + key}</option>)}                    
                  </Select>
                </FormControl>                
                <Button variant="outlined" href={guidanceDownloadURL} color="primary"  className={classes.actionButton} download
                disabled={guidanceDownloadURL === null || guidanceDownloadURL === "" ? true : false}
                >
                Download MER Guidance {"V" + versionSelected}
                </Button>          
              </Grid>
          </form>

          </Grid>
         
          <Grid item xs={12} md={4}>
                  <headings.H4 className={classes.subtitle}>{headerText}</headings.H4>
          </Grid>
        <p>Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve 
          implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should 
          be taken to scale.</p>


         {/* indicator tabs */}
         <Tabs value={panel} onChange={handleChange} className={classes.tabContainer}  classes={{ indicator: classes.bigIndicator }}>
          <Tab label={"NEW ADDITIONS TO MER " + versionSelected} {...a11yProps(0)} />
          <Tab label={"ADJUSTMENTS FROM " + versionLabelPrevious} {...a11yProps(1)} />
          <Tab label={"REMOVALS FROM " + versionLabelPrevious}  {...a11yProps(2)} />
        </Tabs>

         {/* NEW ADDITIONS */}
        <TabPanel value={panel} index={0} className={classes.tabPanel}>
          <WhatsNewDetail panel={panel} version={versionSelected} versionToListMap={versionToListMap} panelToListMap={panelToListMap} jsonData={jsonData} mapIndicatornameToIDcompound={mapIndicatornameToIDcompound}></WhatsNewDetail>
        </TabPanel>
        {/* ADJUSTMENTS  */}
        <TabPanel value={panel} index={1} className={classes.tabPanel}>
          <WhatsNewDetail panel={panel} version={versionSelected} versionToListMap={versionToListMap} panelToListMap={panelToListMap} jsonData={jsonData} mapIndicatornameToIDcompound={mapIndicatornameToIDcompound}></WhatsNewDetail>
        </TabPanel>
        {/* REMOVALS  */}
        <TabPanel value={panel} index={2} className={classes.tabPanel}>
          <WhatsNewDetail panel={panel} version={versionSelected} versionToListMap={versionToListMap} panelToListMap={panelToListMap} jsonData={jsonData} mapIndicatornameToIDcompound={mapIndicatornameToIDcompound}></WhatsNewDetail>
        </TabPanel>
        </Grid>
      </div>
    )
}

function getPanelFromItemTab(itemTab){      
  let panel = "";
  if (itemTab && itemTab.indexOf('New Addition') > -1) {
    panel = 0;
  } else if (itemTab && itemTab.indexOf('Adjustments') > -1) {
    panel = 1;
  }else if (itemTab && itemTab.indexOf('Removals') > -1) {
    panel = 2;
  }  
  return panel;
}

export function  WhatsNewDetail(props) {   
  const classes = useStyles();  
  const list = props.panelToListMap.get(props.panel); 
  let listWithData = props.versionToListMap.get(props.version);
  var indicatorExpansionPanelList = []; 
  let dataFound = false;

  if (list){  
    for (let category of list){      
      if (listWithData && listWithData.has(category) ){
        dataFound = true;
        indicatorExpansionPanelList.push(
          <ExpansionPanel key={"panel" + Math.random()} defaultExpanded className={classes.expandPanel}>
            <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1b-content"
                  key={"panel_summary" + Math.random}
                  id="panel1b-header"               
                > {category}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails key={"panelDetail"+ Math.random()} className={classes.panelDetail}>
              { 
                props.jsonData.map(item =>{
                  //console.log(item);
                return (
                    (item["MER Version"] === props.version && item["List"] === category && getPanelFromItemTab(item["Tab"]) === props.panel) ?
                      (
                      <div className={classes.itemContainer} key={"data" +Math.random()}>
                      {item["HasIndicatorLink"] && item["HasIndicatorLink"].toLowerCase() === 'true' && props.mapIndicatornameToIDcompound.has(item["Indicator"]) ? 
                          <NavLink className={classes.itemTitle}  to={"/referenceIndicator/" + props.mapIndicatornameToIDcompound.get(item["Indicator"])} href={`/indicator/${props.mapIndicatornameToIDcompound.get(item["Indicator"])}`}>{item["Indicator"]}</NavLink>  
                          :<div className={classes.itemTitle}><span style={{color: '#000000'}}> {item["Indicator"]}</span></div>
                        }
                        <div className={classes.itemContent} dangerouslySetInnerHTML={{__html: convertMarkdown(item["Description"])}} />                    
                        </div>
                    ) 
                  : null)}               
                  )
                }                               
      </ExpansionPanelDetails>
      </ExpansionPanel>
        );
      }
    }
}
  if (!dataFound){
    indicatorExpansionPanelList.push("N/A");
  }
  return (
      <div>
          {indicatorExpansionPanelList}
      </div>      
  )
}
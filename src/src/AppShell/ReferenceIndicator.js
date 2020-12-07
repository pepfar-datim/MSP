/* eslint-disable */
import React, {useState, useEffect } from 'react';
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
import { Route, BrowserRouter as Router, NavLink, useParams, useLocation, Redirect } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Link from '@material-ui/core/Link';

import LinearProgress from '@material-ui/core/LinearProgress';
import TablePagination from '@material-ui/core/TablePagination';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GetAppIcon from '@material-ui/icons/GetApp';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import {getConfig} from '../config.js';
import {sortJSON} from '../util.js';
import {getCodeListMap} from '../currentCodelist.js'
import ReferenceIndicatorDetail from './ReferenceIndicatorDetail';
import DataElementDetail from './DataElementDetail';
import Shortcut from './Shortcut';
import DatimIndicator from './DatimIndicator';


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

const domain = getConfig().domain;
const org = getConfig().org;
const source = getConfig().source;
const defaultYear = getConfig().defaultYear;
const codeListMap = getCodeListMap();
const versionMap = getConfig().versionMap;

const ExpandTitle = styled.p`
    margin:0;
    padding:0;
    font-size: 1.2em;
    color: ${color_palette.SECONDARY_RED};
    font-weight: bold;
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
    paddingBottom: '0',
    flexDirection: 'column'
  },
  filter: {
    paddingLeft: '20px',
    paddingRight: '20px',
    minHeight: '20px',
    marginBottom:'0',
    paddingBottom: '0'
  },
  searchForm:{
    display: 'flex',
    justifyContent: 'flex-end'
  },
  inputField:{
    width: '100%',
    backgroundColor:'#ffffff'
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
    color: '#000000',       
        '&:hover, &:focus':{   
          backgroundColor: '#eeeeee'
        }
  },
  expansionPanelDetails:{
    paddingTop: '10px'
  },
  comboTable:{
    boxShadow: 'none',
    border: 'none',
    maxWidth: '100%',
  },
  expansionPanelLeft:{
    paddingBottom: '20px'
  },
  chip:{
    marginTop: '1px', 
    color: '#333333' ,
   /* backgroundColor: '#ffffff',*/
    fontSize: '12px'
  },
  filterButton:{
    marginBottom: '20px',
    marginRight: '20px',

    '&:hover, &:focus':{
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  detailsButton: {
    marginTop: '10px',
    marginBottom: '0px',
    '&:hover, &:focus': {
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
  actionButton: {
    marginLeft: '10px',
    marginRight: '20px',
    marginTop: '12px',     
    color: '#1D5893',
    '&:hover, &:focus': {
      backgroundColor: '#C1A783',
     /* color: '#000000'*/
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
    paddingBottom: '10px',
    marginBottom: '0 !important',
    marginTop: '2px',
    paddingTop: '10px'
  },
  sidebarExpandTitle:{
    fontSize: '1em',
    lineHeight:'1.4em',
    fontWeight: 'normal',
    color: '#000000',
    margin: '0',
    padding: '0'

  },
  sidebarGroup:{  
    padding: '0',
    marging: '0'
   },
   sidebarSubtitle:{
    textAlign: 'center',    
   },
   indicatorList:{
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '2px'
   },
   indicatorListItem:{
     paddingBottom: '3px',
     cursor: 'pointer',
     '&:hover, &:focus':{   
      backgroundColor: '#eeeeee'
    }
   },
   indicatorListItemUnclickable:{
    paddingBottom: '3px',
    cursor: 'default' 
  },
   indicatorListItemActive:{
    paddingBottom: '3px',
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
  closeComparePanel: {
    float: 'right',
    margin: '1em',
    cursor: 'pointer',
    padding: '10px',
    border: '1px solid #111111',
    borderRadius: '50%',
    marginTop: 0
  },
 
  titleNote:{
    color: "rgba(0, 0, 0, 0.87) !important",
    fontSize: '0.8rem',
    fontWeight: 'normal'
  },
  errorMessage:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: '0 !important'
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
  indicatorTable:{
    backgroundColor: '#C1A783',
    color: '#000000',
    marginBottom: '1em',
    marginTop: '1em',
  },
  numeratorTitle: {    
    fontSize: '1.2rem', 
    textAlign: 'center',
  },
  leftAlignedTitle: {    
    fontSize: '1.2rem', 
    textAlign: 'left',
    fontWeight: 'bold',
  },
  numeratorGridContainer: {
    border: '2px solid #C1A783',
    marginBottom: '2em',
  },
  numeratorGrid:{
    backgroundColor: '#fcfbfa',
    color: '#000000',
    /*marginBottom: '1em',*/
    /*marginTop: '1em',*/
    padding: '1em',
    borderBottom: '1px solid #ffffff',
    
  },
  numeratorGridCentered:{
    backgroundColor: '#f7f4f0',
    color: '#000000',
    /*marginBottom: '1em',*/
    /*marginTop: '1em',*/
    padding: '1em',
    borderTop: '2px solid #C1A783',
    borderBottom: '2px solid #C1A783',
    textAlign: 'center',
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



  export default function ReferenceIndicator() {
    
    const [page, setPage] = React.useState(0);    
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    var [count, setCountOfValues] = useState(0);
    const handleChangePage = (event, newPage) => {    
      console.log("newPage :" + newPage);  
      setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
      setPageForDatimIndicator(0);
      //setExpanded(false);
    };
    const [pageDatimIndicator, setPageForDatimIndicator] = React.useState(0);           
    const handleChangePageDatimIndicator = (event, newPage) => {         
      setPageForDatimIndicator(newPage);
    };

    let location = useLocation();          
    const classes = useStyles();
    
    //initial filter state
    const [values, setValues] = React.useState({
      frequency: "",
      fiscal: defaultYear, 
      type: ""
    });

    const getIndicatorIdFromParam = (pathname) =>{      
      var indID = "";
      var pieces = pathname.split('/');
      if (pieces.length > 2) {
        indID = pieces.pop()        
      }       
      return indID;
      }

      const INDICATOR_PANEL = 0;
      const DATA_ELEMENT_PANEL = 1;
      const DATIM_INDICATOR_PANEL = 2;
      const DELIMINATOR = "++";
      
    //get indicator and data-elements from context
    const [{ currentIndicator, matchDataElements, matchDatimIndicators }, dispatch] = useStateValue();
    
    //set initial panel state and panel handle change function
    const [panel, setPanel] = React.useState(INDICATOR_PANEL);

    const handleChange = (event, newPanel) => {     
      setPage(0);
      setPageForDatimIndicator(0);
      setPanel(newPanel);            
      setErrorLoadDataElement(null);
      setErrorLoadDatimIndiator(null);
      console.log(currentIndicator);
      if (newPanel === DATA_ELEMENT_PANEL){       
        console.log("load data elements, page: " + page);
        // reload data element
        if (currentIndicator && currentIndicator.id !== '' /*&& matchDataElements.length ===0*/){
          //updateIndicator(currentIndicator.id, DATA_ELEMENT_PANEL);
          loadDataElementsDataByIndicator(currentIndicator.id);
        }        
      }else if (newPanel === DATIM_INDICATOR_PANEL){       
        console.log(currentIndicator);
        setCountOfValues(0);      
        if (currentIndicator && currentIndicator.id !== '' ){          
          loadDatimIndicatorByIndicator(currentIndicator.id);
        }
      }
    };

    const copyToClipboard = str => {
      const el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      //handleTooltipOpen()
    };

    const [formularPanel, setFormularPanel] = React.useState(0);
    const [dataElementDetail, setDataElementDetail] = React.useState(null);
    let pdhDerivatives = {}

    const [detailPanel, setDetailPanel] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const handleFormularChange = (event, newFormularPanel) => {
      event.stopPropagation();
      event.preventDefault();
      setFormularPanel(newFormularPanel);
    };

    const toggleDetailDrawer = (dataElement, side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {        
        return;
      }
      console.log(dataElement);
      setDataElementDetail(dataElement);      
      setDetailPanel({ ...detailPanel, [side]: open });
    };


    const performDownload = event => {    
        const baseDownloadURL = "https://test.ohie.datim.org:5000/ocl-etl/msp";
        let downloadURL = "";
        console.log(matchDataElements);
        let deIDs = [];
        matchDataElements.map(item => {
          //console.log(item);
          if (item.id && item.id !== ""){
            deIDs.push(item.id);
          }
        });
      
        if (deIDs.length > 0) {
          downloadURL = baseDownloadURL + "?dataElements=" + deIDs.toString().trim() + "&format=" + downloadValue.trim();
        }
        let downloadLink = document.createElement('a');
        downloadLink.href = downloadURL;
        if (downloadValue.trim() !== "CSV") {
          downloadLink.setAttribute("target", "_blank");
        }
        downloadLink.setAttribute('download', "download");
        
        downloadLink.click();
        revokeDownloadLink(downloadLink.href);     
    }

    function revokeDownloadLink(href) {
      console.log("Revoke method... ");
      setTimeout(function () {
        window.URL.revokeObjectURL(href);
      }, 10000);
    }
  
    const getIndicatorGroup = function (indicatorData) {     
      //console.log( "filter value: " + values.fiscal + " freq:" + values.frequency );
      //console.log(indicatorData);
      var filteredByYearData = indicatorData.filter(function (data) {                
        if (values.frequency !== "" && values.fiscal !== "") {          
          return data.periodYear === values.fiscal && data.frequency.trim().toLowerCase() === values.frequency.trim().toLowerCase();
        }else if (values.frequency !== "") {                   
          return data.frequency.trim().toLowerCase() === values.frequency.trim().toLowerCase();
        }else if (values.periodYear !== "") {                 
          return data.periodYear === values.fiscal;
        }        
        return true;
      });
    
      let distinctGroup = [...new Set(filteredByYearData.map(item => item.group))];
      distinctGroup.sort();          
      if (distinctGroup.includes("Other")){      
        distinctGroup = distinctGroup.filter(group => group != "Other");       
        distinctGroup.push("Other");       
      }            
      return distinctGroup;      
    }

    const getFilteredIndicator = function (indicatorData) {  
      console.log( "filter value: " + values.fiscal + " freq: " + values.frequency );    
     
      var filteredByYearData = indicatorData.filter(function (data) {        
        if (values.frequency !== "" && values.fiscal !== "") {           
          return data.periodYear === values.fiscal && data.frequency.trim().toLowerCase() === values.frequency.trim().toLowerCase();
        }else if (values.frequency !== "") {                   
          return data.frequency.trim().toLowerCase() === values.frequency.trim().toLowerCase();
        }else if (values.periodYear !== "") {                
          return data.periodYear === values.fiscal;
        }        
        return true;
      });
      return filteredByYearData;
    }


   const createIndicatorDetailForUI = function(indicatorOCL) {            
      var indicatorItem = {};        
      indicatorItem.id = indicatorOCL.id;
      indicatorItem.name = indicatorOCL.display_name ? indicatorOCL.display_name : "";
      indicatorItem.description = (indicatorOCL.descriptions && indicatorOCL.descriptions.length > 0) ? indicatorOCL.descriptions[0].description : "";        
      indicatorItem.created_on = indicatorOCL.created_on ? indicatorOCL.created_on : "";
      indicatorItem.updated_on = indicatorOCL.updated_on ? indicatorOCL.updated_on : "";        
      indicatorItem.group = indicatorOCL.extras && indicatorOCL.extras["Indicator Group"] ? indicatorOCL.extras["Indicator Group"]: "Other";
      indicatorItem.level = indicatorOCL.extras && indicatorOCL.extras["Reporting level"] ? indicatorOCL.extras["Reporting level"]: "";
      indicatorItem.source = indicatorOCL.source;
      indicatorItem.frequency = indicatorOCL.extras && indicatorOCL.extras["Reporting frequency"] ? indicatorOCL.extras["Reporting frequency"]: "";
      indicatorItem.period = indicatorOCL.extras && indicatorOCL.extras["Period"] ? indicatorOCL.extras["Period"]: "";
      indicatorItem.periodYear = (indicatorItem.period !== "") ? "20" + indicatorItem.period.trim().substring(2,4) : "";
      indicatorItem.numerator = indicatorOCL.extras && indicatorOCL.extras["Numerator"] ? indicatorOCL.extras["Numerator"]: "";   
      indicatorItem.numerator_description = indicatorOCL.extras && indicatorOCL.extras["Numerator Description"] ? indicatorOCL.extras["Numerator Description"]: "";               
      indicatorItem.numerator_disaggregation_groups = indicatorOCL.extras && indicatorOCL.extras["Numerator Disaggregation Groups"] ? indicatorOCL.extras["Numerator Disaggregation Groups"]: "";       
      indicatorItem.disaggregate_descriptions_and_definitions = indicatorOCL.extras && indicatorOCL.extras["Disaggregate descriptions and definitions"] ? indicatorOCL.extras["Disaggregate descriptions and definitions"]: "";           
      indicatorItem.denominator = indicatorOCL.extras && indicatorOCL.extras["Denominator"] ? indicatorOCL.extras["Denominator"]: "";
      indicatorItem.denominator_disaggregation_groups = indicatorOCL.extras && indicatorOCL.extras["Denominator Disaggregation Groups"] ? indicatorOCL.extras["Denominator Disaggregation Groups"]: "";    
      indicatorItem.changeFromPreviousVersion = indicatorOCL.extras && indicatorOCL.extras["Change from previous version"] ? indicatorOCL.extras["Change from previous version"] : "";
      indicatorItem.how_to_use = indicatorOCL.extras && indicatorOCL.extras["How to use"] ? indicatorOCL.extras["How to use"]: "";
      indicatorItem.how_to_collect = indicatorOCL.extras && indicatorOCL.extras["How to collect"] ? indicatorOCL.extras["How to collect"]: "";
      indicatorItem.how_to_review = indicatorOCL.extras && indicatorOCL.extras["How to review for data quality"] ? indicatorOCL.extras["How to review for data quality"] : "";
      indicatorItem.how_to_calculate_annual_total = indicatorOCL.extras && indicatorOCL.extras["How to calculate annual total"] ? indicatorOCL.extras["How to calculate annual total"] : "";
      indicatorItem.PEPFAR_support_definition = (indicatorOCL.extras && indicatorOCL.extras["PEPFAR-support definition"] ) ? indicatorOCL.extras["PEPFAR-support definition"] : "";
      indicatorItem.guiding_narrative_questions = indicatorOCL.extras && indicatorOCL.extras["Guiding narrative questions"] ? indicatorOCL.extras["Guiding narrative questions"]: "";
      indicatorItem.guidance_version = indicatorOCL.extras && indicatorOCL.extras["Guidance Version"] ? indicatorOCL.extras["Guidance Version"]: "";
      indicatorItem.uuid = indicatorOCL.uuid;
      indicatorItem.id_uuid = indicatorOCL.id + "++" + indicatorOCL.uuid;
      
      return indicatorItem;     
   }

   const createIndicatorListForUI = function(indicatorsDataOCL) {
    var indicatorList = indicatorsDataOCL.map(function (indicator) {  
      return createIndicatorDetailForUI(indicator);             
     });      
    return indicatorList;
  }

    //indicator that the app has mounted
    const [init, setInit]= React.useState(false);    
    var queryIndicators =  "https://api." + domain + "/orgs/" + org + "/collections/MER_REFERENCE_INDICATORS_FY" + values.fiscal.trim().substring(2,4) + "/concepts/?limit=0&verbose=true";

    const [, setError] = useState(null);
    const [errorLoadDataElement, setErrorLoadDataElement] = useState(null);
    const [errorLoadIndicatorDetail, setErrorLoadIndicatorDetail] = useState(null);
    const [errorLoadDatimIndiator, setErrorLoadDatimIndiator] = useState(null);
    const [indicatorsListForUI, setIndicatorsListForUI] = useState([] ); // contains indicators for all years
    const [filteredIndicatorsListForUI, setFilteredIndicatorsListForUI] = useState([] );
    const [indicatorGroups, setIndicatorGroups] = useState([] );
    const [indGrouploading, setIndGroupLoading] = useState(false);
    const [deloading, setDELoading] = useState(false);    
    const [indicatorDetailLoading, setIndicatorDetailLoading] = useState(false); 
    const [datimIndicatorLoading, setDatimIndicatorLoading] = useState(false);  
    const [anchorEl, setAnchorEl] = React.useState(null);   
    const [dropDownName, setDropDownName] = React.useState("");
    
    const loadIndicatorsAbortController = new window.AbortController(); 
    const loadDataElementsAbortController = new window.AbortController();   
    
    // used to populate indicator groups and indicators under the filters
    const loadIndicatorData = async ()=> {
      console.log("loadIndicatorData - queryIndicators : " + queryIndicators);
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
               
        console.log(jsonData);
        var d = createIndicatorListForUI(jsonData);
        var sortedData = sortJSON(d, 'name', 'asc');
        setIndicatorsListForUI(sortedData);
        setFilteredIndicatorsListForUI(sortedData);
       
        var indGroupTemp = getIndicatorGroup(d);        
        setIndicatorGroups(indGroupTemp);        
        setIndGroupLoading(false);
      }catch (e){
        console.log("error:" + e.message);
        setError(e.message);
      }
    }

    
    
    // for Data Elements tab to get a list of data elements and their disags for the indicatorID
    const loadDataElementsDataByIndicator = async (indicatorID)=> {   
      
      var query = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + source +  '/concepts/?verbose=true&q=&q=' + indicatorID + '&conceptClass=Data+Element&limit=' + rowsPerPage + '&page=' + (page+1)+ '&extras.Applicable+Periods=FY' + values.fiscal.trim().substring(2,4);
      console.log("loadDataElementsByIndicator: " + indicatorID + " query: " + query);     
      setDELoading(true);
      setErrorLoadDataElement(null);
      try {       
        const response = await fetch(query, { signal: loadDataElementsAbortController.signal });
        if (!response.ok) {
          console.log(response);
          setDELoading(false);
          setCountOfValues(0);
          throw new Error(
            `Error when retrieve indicators ${response.status} ${response.statusText}`
          );
        }
        const jsonData = await response.json();                
        if (!jsonData) {
          console.log("jsonData is empty");
          setCountOfValues(0);
          setDELoading(false);
          throw new Error(
            `Warning data element data is emtpy from OCL  ` + indicatorID
          );
        }
        console.log("data elements : " + jsonData.length);
        console.log(jsonData);
        setDELoading(false);
       
        var mappedDataElements = [];
        if (jsonData && Array.isArray(jsonData)){          
          mappedDataElements = jsonData.map(item => {
            //console.log(item);
            var dataElementItem = {};           
            dataElementItem = item;
            var deMappings = []; 
            const mappings = [];           
            //const mappings = item.mappings.filter(mapping => mapping.map_type === "Has Option");
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
        setCountOfValues(parseInt(response.headers.get('num_found')));       

        dispatch({
          type: 'changeMatchDataElements',
          matchDataElements: sortedData
        })
        
      }catch (e){
        console.log("error:" + e.message);        
        setDELoading(false);
        setErrorLoadDataElement("Error when get data elements for " + indicatorID + ". " + e.message);
        // clear data elements
        dispatch({
          type: 'changeMatchDataElements',
          matchDataElements: []
        })
      }
      
    }

    const loadDatimIndicatorByIndicator = async (indicatorID)=> {           
      const query = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + source +  '/concepts/?verbose=true&q=&conceptClass=Indicator&limit=' + rowsPerPage + '&page=' + (pageDatimIndicator+1) + '&extras.indicator=' + indicatorID;      
      console.log("loadDatimIndicatorByIndicator: " + indicatorID + " query: " + query); 
      setDatimIndicatorLoading(true);     
      setErrorLoadDatimIndiator(null);
      try {
        const response = await fetch(query, { signal: loadDataElementsAbortController.signal });
        if (!response.ok) {
          console.log(response);
          setDatimIndicatorLoading(false);
          setCountOfValues(0);
          setPageForDatimIndicator(0);
          throw new Error(
            `Error when retrieve datim indicators ${response.status} ${response.statusText}`
          );
        }
        const jsonData = await response.json();                
        if (!jsonData) {
          console.log("jsonData is empty");
          setCountOfValues(0);
          setDatimIndicatorLoading(false);
          throw new Error(
            `Warning datim indicator data is emtpy from OCL  ` + indicatorID
          );
        }
        console.log("datim indicators : " + jsonData.length);
        console.log(jsonData);
        setDatimIndicatorLoading(false);                   
        setCountOfValues(parseInt(response.headers.get('num_found')));
        var sortedData = sortJSON(jsonData, 'display_name', 'asc'); 
        
        dispatch({
          type: 'changeMatchDatimIndicators',
          matchDatimIndicators: sortedData
        })                
      }catch (e){
        console.log("error:" + e.message);        
        setDatimIndicatorLoading(false);
        setErrorLoadDatimIndiator("Error when get datim indicator for " + indicatorID + ". " + e.message);
        // clear data elements
        dispatch({
          type: 'changeMatchDatimIndicators',
          matchDatimIndicators: []
        })
        
      }
      
    }

    var indicatorId = getIndicatorIdFromParam(location.pathname); // indicatorId from URL param    
    useEffect(() => {  
          
      loadIndicatorData(); 
      setInit(true);      
      setPage(0);
    }, [queryIndicators]);

    // update indicator each time indicatorId changes
    useEffect(() => {                                 
      if ( init  && indicatorId && indicatorId !== '' ) {                                      
          updateIndicator(indicatorId, panel);                           
        }                            
    }, [indicatorId, page, rowsPerPage, pageDatimIndicator]);
 
    async function getMappings(id) {          
      const queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + source  + '/concepts/' + id + '/?includeMappings=true';
      console.log("getMappings for " + id + ":" + queryMapping);
  
      try {
        const response = await fetch(queryMapping);
        if (!response.ok) {
          console.log(response);        
          throw new Error(
            `Error when retrieving data element mappings from indicator page ${response.status} ${response.statusText}`
          );
        }
        
        const jsonData = await response.json();
        let sortedData = sortJSON(jsonData.mappings, 'to_concept_name', 'asc');                        
        matchDataElements.map(item => {        
            
          if (item.id === id && (!item.disags || item.disags.length ===0)) {        
                                    
            const deMappings = sortedData
            .filter(mapping => mapping.map_type === "Has Option")            
            .map(mapping => {
              var disagItem = {};
              disagItem.code = mapping.to_concept_code;
              disagItem.name = mapping.to_concept_name;
              return disagItem;
            })
           
            var sortedMappings = sortJSON(deMappings, 'name', 'asc');
            item.disags = sortedMappings;
            
          }
          return item;
        })       
        dispatch({
          type: 'changeMatchDataElements',
          matchDataElements: matchDataElements
        })
      } catch (e) {
        console.log("error:" + e.message);
        setError(e.message);
        //setErrorDisplay(e.message);
      }
  
  
    };
  
    
    const loadIndicatorDetailByIndicator =  async (indicatorID)=> {

      let indicatorIDUuid = "";
      if (indicatorID !== "" && indicatorID.includes(DELIMINATOR)){
        indicatorIDUuid = indicatorID.split(DELIMINATOR);
      }
      
     // var query = "https://api." + domain + "/orgs/" + org + "/sources/MER" + source + "/concepts/" +  indicatorID + "/";     
      var query = "https://api." + domain + "/orgs/" + org + "/sources/MER" + source + "/concepts/" +  indicatorIDUuid[0] + "/" + indicatorIDUuid[1]+"/";      
      console.log("query indicator detail : " + query );
      setIndicatorDetailLoading(true);
      try {
        const response = await fetch(query);
        //console.log(response);
        if (!response.ok) {
          console.log(response);
          setIndicatorDetailLoading(false);
          throw new Error(
            `Error when retrieve indicator data. ${response.status} ${response.statusText}`
          );
        }else {
          const jsonData = await response.json();                
          if (!jsonData) {
            console.log("jsonData is empty");
            setIndicatorDetailLoading(false);
            throw new Error(
              `Warning indicator detail data is emtpy from OCL  ` + indicatorID
            );
          }        
          //console.log(jsonData);
          setIndicatorDetailLoading(false);
          var data = createIndicatorDetailForUI(jsonData);         
          dispatch({
            type: 'changeIndicatorName',
            indicatorName: indicatorID
          });
          dispatch({
            type: 'changeCurrentIndicator',
            currentIndicator: data
          })
        }                
      }catch (e){
        console.log("error:" + e.message);
        setIndicatorDetailLoading(false);
        setErrorLoadIndicatorDetail(e.message);        
      }
    }

  //update indicator details and matched data-element for selected indicator
  function updateIndicator(indicatorId, panel){           
    if (indicatorId === '' || !isValidIndicatorID(indicatorId) ) {      
      setErrorLoadIndicatorDetail("Invalid Indicator ID.");
      backtoDefault();
    }else {
      setErrorLoadIndicatorDetail(null);              
      loadIndicatorDetailByIndicator(indicatorId);        
      const indicatorIdOnly = indicatorId.includes(DELIMINATOR) ?   indicatorId.split(DELIMINATOR)[0] : indicatorId;            
      if (panel && panel === DATA_ELEMENT_PANEL) {
        loadDataElementsDataByIndicator(indicatorIdOnly);
      }else {// clear data elements
        dispatch({
          type: 'changeMatchDataElements',
          matchDataElements: []
        })
      }
      if (panel && panel === DATIM_INDICATOR_PANEL) {      
        loadDatimIndicatorByIndicator(indicatorIdOnly);
      }else {// clear daim indicator
        dispatch({
          type: 'changeMatchDatimIndicators',
          matchDatimIndicators: []
        })
      } 
    }         
  }

  //realize the function of "key update" to back to the default status
  function backtoDefault(){
    //console.log(currentIndicator);
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

  /*function convertMarkdown(text) {
    var md = new Remarkable();    
    return md.render(text) ;
  }*/
    
  function isValidIndicatorID(indicatorID) {   
    //allow only alphanumeric, hyphen, underscore    
    if (!indicatorID.match(/^[0-9a-zA-Z-_+]+$/)){
      return false;
    }else {
      return true;
    }    
  } 

  //implement filtering function by set Values first
  const handleFilterChange = event => {
    event.persist();
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));  
      setPage(0);      
  };

  const handleNavLinkChange = event => {
    setPage(0);
    setPageForDatimIndicator(0);
  }

  //set dropdown popup
  const dropDownMenu = buttonName => event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);  
    setDropDownName(buttonName);
  };
  
  const popOpen = Boolean(anchorEl);
  const popId = popOpen ? 'popover' : undefined;
  const popHandleClose = () => {
    setAnchorEl(null);
  };

  const [downloadValue, setDownloadValue] = React.useState('HTML');
  const handleDownloadChange = event => {
    setDownloadValue(event.target.value);
  };

  //when value has changed, call useEffect function
  useEffect(() => {
    //if it's not the first time the app mounted
    //console.log("**** useEffect - filter value change");
    setPage(0);
    if(init){
      //console.log("indicatorListForUI:" + indicatorsListForUI.length);
      var indGroupTemp = getIndicatorGroup(indicatorsListForUI);        
      setIndicatorGroups(indGroupTemp);
      var filteredInd = getFilteredIndicator(indicatorsListForUI);  
         
      setFilteredIndicatorsListForUI(filteredInd);          
    }    
  }, [values]);

  // when init change, to load indicator from URL param
  useEffect(() => {
    //if it's not the first time the app mounted
    //console.log("***** useEffect, run only when init change to true. init: " + init);
    
    if(init && indicatorId !== ''){          
      setPage(0);
      updateIndicator(indicatorId, DATA_ELEMENT_PANEL);                           
    }    
    
  }, [init]);


  //indicator group display
  var groupExpansionPanelList = []; 
  
  indicatorGroups.map(function(indGroup, index) {
    //console.log(indGroup + " - " + index);
    groupExpansionPanelList.push(
      <ExpansionPanel key={"panel" + index}    TransitionProps={{ unmountOnExit: true, mountOnEnter: true }} defaultExpanded={true}>
       <ExpansionPanelSummary key={"summary_" + index} expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content" id="panel1a-header" className={classes.sidebarExpansionSummary} >
          <ExpandTitle key={"title_" + index} className={classes.sidebarExpandTitle}>{indGroup}</ExpandTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails key={"detail_" + index} className={classes.indicatorList}>
          {
              filteredIndicatorsListForUI.filter(indicator => (indicator.group === indGroup && indicator.periodYear === values.fiscal))
              .map(indicator =>{                
              return(
                <div key={"group_" + index + indicator.id }  className={currentIndicator.id === indicator.id  && currentIndicator.uuid === indicator.uuid ? classes.indicatorListItemActive : deloading ? classes.indicatorListItemUnclickable : classes.indicatorListItem}>                                
                 {(currentIndicator.id ===indicator.id && currentIndicator.uuid === indicator.uuid ) || (panel && panel === DATA_ELEMENT_PANEL && deloading ) ? <div>{indicator.name}</div> : 
                  <NavLink  to={"/referenceIndicator/" + indicator.id + DELIMINATOR + indicator.uuid} onClick={handleNavLinkChange}><span style={{color: '#000000'}} >{indicator.name}</span></NavLink>  
                 }                                                
                </div>
              )                 
            })
          }             
        </ExpansionPanelDetails>
    </ExpansionPanel>
    );
    return true;
  }, this);

  function populatePDHDerivatives(source_data_elements) {
    source_data_elements.map(source_data_element => {
      if (!pdhDerivatives[source_data_element.source_data_element_name]) {
        let source_data_element_nameArray = [];
        source_data_element_nameArray.push(source_data_element.source_category_option_combo_name + source_data_element.add_or_subtract);
        pdhDerivatives[source_data_element.source_data_element_name] = source_data_element_nameArray;
      }
      else {
        let source_data_element_nameArray = Array.from(pdhDerivatives[source_data_element.source_data_element_name]);
        source_data_element_nameArray.push(source_data_element.source_category_option_combo_name + source_data_element.add_or_subtract);
        pdhDerivatives[source_data_element.source_data_element_name] = source_data_element_nameArray;
      }
    })
  }
  const [checked, setChecked] = React.useState(false);
  const [format, setFormat] = React.useState('Names');

  const toggleChecked = () => {
    setChecked(prev => !prev);
    if (!checked) {
      setFormat('UIDs')
    }
    else {
      setFormat('Names')
    }
  };

  let downloadIndicatorURL = "";
  if (currentIndicator) {   
    downloadIndicatorURL = "https://api." + domain + "/orgs/" + org + "/sources/MER/concepts/" + currentIndicator.id + "/" + currentIndicator.uuid;
  }

  function getDEdetailValue(dataElement, field){
    let value = "";
    if (field === "description" && dataElement.descriptions && dataElement.descriptions[0] && dataElement.descriptions[0].description ){
      value = dataElement.descriptions[0].description;
    }else if (field === "shortName" && dataElement.names && dataElement.names[1]){
      value = dataElement.names[1].name;
    }else if (field === "code" && dataElement.names && dataElement.names[2]){
      value = dataElement.names[2].name;
    }else if (field === "indicator" && dataElement.extras && dataElement.extras.indicator  ){
      value = dataElement.extras.indicator;
    }else if (field === "applicablePeriods" && dataElement.extras && dataElement.extras['Applicable Periods'] && dataElement.extras['Applicable Periods'].length > 0){                    
      if (Array.isArray(dataElement.extras['Applicable Periods'])) {
        dataElement.extras['Applicable Periods'].sort();
      }
      let peString = "", count = 0;
      for (const x of dataElement.extras['Applicable Periods']){
        peString +=  x;        
        if (count < dataElement.extras['Applicable Periods'].length -1){
          peString += ", ";
        }
        count++; 
      }     
      value = peString;
    }else if (field === "resultTarget" && dataElement.extras && dataElement.extras.resultTarget && dataElement.extras.resultTarget !== ""){
      value = dataElement.extras.resultTarget;
    }else if (field === "datatype" && dataElement.datatype && dataElement.datatype !== ""){
      value = dataElement.datatype;
    }else if (field === "retired" && dataElement.retired && dataElement.retired !== ""){
      value = dataElement.retired;
    }
    return value;
  };

  
  
  //layout
return (
  
 <div className={classes.container}>
  {/* <Breadcrumb></Breadcrumb> */}
  <div ></div>
    {errorLoadIndicatorDetail!== null ? <div className={classes.errorMessage} style={{marginTop: '30px'}}>{errorLoadIndicatorDetail}</div> : null}
    {errorLoadDataElement!== null ? <div className={classes.errorMessage} style={{marginTop: '30px'}}>{errorLoadDataElement}</div> : null}
  <Grid container>
  {/* sidebar */}
  <Grid item xs={12} md={3}>      
    <Shortcut ></Shortcut>
    <Paper className={classes.sidebar} >
    <h4 className={classes.sidebarTitle}>Reference Indicator Filters</h4>
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
              {
                Object.keys(codeListMap).reverse().map(
                    key => <option key={key} >{key}</option>
                )
              }                           
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
      <p className={classes.sidebarSubtitle}>Reference Indicator Groups</p>     
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
    currentIndicator && currentIndicator.length === 0  ? 
        <div>
           <Grid container alignItems="center" >   
              <div style={{marginTop: '30px'}}> Select an indicator to view details.</div>             
          </Grid>
        </div>
        : 
      <div>     
      
      <headings.H1>{currentIndicator.name}    
       {downloadIndicatorURL !== "" && panel === 0 ?
          <Tooltip disableFocusListener title={"Download reference indicator details in json format"}>
           <Button variant="outlined" href={downloadIndicatorURL} className={classes.actionButton} target="_black"
           style={{ float:"right"}}           
          >
            {currentIndicator.source + ": " + currentIndicator.guidance_version + " - FY " + currentIndicator.periodYear} 
            <GetAppIcon style={{ color: '#1D5893', marginLeft: '6px' }}/>
           </Button>  
          </Tooltip> 
       :
      <span>
          <Tooltip disableFocusListener title={panel === 2 ? "" : "Download data elements"} placement='bottom'>  
            <span style={{float: 'right'}}>        
              <Button variant="outlined" className={classes.actionButton} name="downloadDEButton" onClick={dropDownMenu("downloadDE")} id="downloadDEButton"
              disabled={(matchDataElements.length === 0 || panel === 2 )? true : false} style={{height:'36px',float: 'right'  }}>  
                {currentIndicator.source + ": " + currentIndicator.guidance_version + " - FY " + currentIndicator.periodYear}                           
                {
                  matchDataElements.length === 0 || panel === 2 ?
                    <GetAppIcon /> : <GetAppIcon style={{ color: '#1D5893', marginLeft: '6px' }} />
                }
              </Button>
            </span>
          </Tooltip>
           

          {/* popover panel */}
          <Popover
              id={popId}
              open={popOpen}
              anchorEl={anchorEl}
              onClose={popHandleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              {/* download popover panel */}
              {
                dropDownName === "downloadDE" ?
                  <FormControl component="fieldset" className={classes.popOver}>
                    <FormGroup>
                      <FormLabel component="legend" className={classes.formLegend}>Data Format</FormLabel>
                      <RadioGroup aria-label="download" name="downloadRadio" value={downloadValue} onChange={handleDownloadChange}>
                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="HTML" />} label="HTML" />
                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="CSV" />} label="CSV" />
                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="JSON" />} label="JSON" />
                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="XML" />} label="XML" />
                      </RadioGroup>
                      <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={performDownload}>
                        Download DATA
                    </Button>
                    </FormGroup>
                  </FormControl> : null                      
              }
            </Popover>
          </span>
       }       
       </headings.H1>           
      
      {/* indicator tabs */}    
      <Tabs value={panel} onChange={handleChange} className={classes.tabContainer}  classes={{ indicator: classes.bigIndicator }}>
        <Tab label="REFERENCE INDICATOR DETAILS" {...a11yProps(0)} />
        <Tab label="DATA ELEMENTS" {...a11yProps(1)} />
        <Tab label="DATIM INDICATOR" {...a11yProps(2)} />
      </Tabs>

     
      {/* indicator details */}
      <TabPanel value={panel} index={INDICATOR_PANEL} className={classes.tabPanel}>    
        <ReferenceIndicatorDetail currentIndicator={currentIndicator} versionMap={versionMap} classes={classes}  indicatorDetailLoading={indicatorDetailLoading}  />           
      </TabPanel>


   {/* data elements */}
    {deloading && panel === DATA_ELEMENT_PANEL ? <div><LinearProgress mode="indeterminate" /><p>Loading data elements. Please wait ...</p></div> :
     matchDataElements.length === 0 && panel === DATA_ELEMENT_PANEL ? 
     <div><p>No data elements found </p></div> :  
    <TabPanel value={panel} index={DATA_ELEMENT_PANEL} className={classes.tabPanel}>
      {/* <div className={classes.tabDashboard}>
      <Button variant="contained" color="primary" className={classes.button} onClick={toggleDrawer('bottom', true)}>Comparison</Button>
      </div> */}      
      
      
      {/*  TO DO: consider to put this into a function (for loading) or a component (for reuse) */ }
      {matchDataElements.map(dataElement => (
        <div key={dataElement.external_id}>        
              <Grid container alignItems="center"  className={classes.expansionPanelSummary} style={{padding: '4px'}}>       
                <Grid item  xs={12} md={12}>         
                  <Typography className={classes.heading}>                    
                   <Link href={"/codelist/dataElementDetail?id=" + dataElement.id} style={{ textDecoration: 'underline' }}>{dataElement.display_name}</Link>          
                  </Typography>
                </Grid>               
                  <Grid item xs={12} md={3}  className={classes.chip}>                                                            
                    <Tooltip disableFocusListener title="Click to copy UID">
                        <span className={classes.chip}
                          onClick={() => copyToClipboard(dataElement.external_id)}
                        >{"UID: " + dataElement.external_id}</span>
                      </Tooltip>
                    </Grid>
                  <Grid item xs={12} md={3} className={classes.chip}>  
                    <span>{"Source: " + dataElement.extras.source} </span>                                                                                     
                  </Grid>
                  <Grid item xs={12} md={6} />
              </Grid>                       
      </div>

      ))}


        {/* pagination */}
        <table>
              <tbody>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 100, 500]}
                    labelDisplayedRows={({ from, to, count }) => `Displaying rows ${from}-${to} of ${count}`}
                    
                    // page={0}
                    // rowsPerPage={10}
                    // count={100}
                    // onChangePage={() => {}}

                     count={count}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}                    
                  />
                </TableRow>
              </tbody></table>
        {/*pagination */}
      </TabPanel>
      
    }

    <TabPanel value={panel} index={DATIM_INDICATOR_PANEL} className={classes.tabPanel}>     
      <DatimIndicator currentIndicator={currentIndicator} 
                      matchDatimIndicators={matchDatimIndicators} 
                      classes={classes}  
                      loading={datimIndicatorLoading} 
                      error={errorLoadDatimIndiator}  />
                    
       {/* pagination */}
       <table>
          <tbody>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                labelDisplayedRows={({ from, to, count }) => `Displaying rows ${from}-${to} of ${count}`}                    
                count={count}
                rowsPerPage={rowsPerPage}
                page={pageDatimIndicator}
                onChangePage={handleChangePageDatimIndicator}
                onChangeRowsPerPage={handleChangeRowsPerPage}                    
              />
            </TableRow>
          </tbody>
        </table>
        {/*pagination */}
    </TabPanel>
      </div>
        }
      </Grid>
     </Grid>
     </div>
    );
  
}



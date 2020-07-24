import React, { useState, useEffect } from 'react';
/* eslint-disable */

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStateValue } from '../ContextSetup';
import SearchIcon from '@material-ui/icons/Search';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { Route, NavLink, useLocation, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { getConfig } from '../config.js';
import { getCodeListMap } from '../currentCodelist.js'
import { getCodeList } from '../currentCodelist.js'
import LinearProgress from '@material-ui/core/LinearProgress';
import Shortcut from './Shortcut';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InfoIcon from '@material-ui/icons/Info';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import history from './../history';
import GetAppIcon from '@material-ui/icons/GetApp';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { TiArrowSortedDown } from 'react-icons/ti';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

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

const domain = getConfig().domain;
const org = getConfig().org;
const version = getConfig().source;
const currentYear = getConfig().defaultYear
const codeListMap = getCodeListMap();
const codeListJson = getCodeList();

const ActionButtonLabel = styled.p`
    margin:0;
    padding:0;
    font-size: 0.9em;  
    font-weight: bold;
`;
const ExportButtonLabel = styled.p`
    margin:0;
    padding:0;
    font-size: 0.8em;  
    font-weight: bold;
`;

let deMappings = {};
let de = {}
let selectDataTemp = {};
let derivedCoC = {}
let pdhDerivatives = {}

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: '#fcfcfc'
  },
  hide: {
    display: 'none'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '30px',
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  heroContainer: {
    margin: '0 auto',
    backgroundColor: '#eeeeee',
    padding: '20px',
    width: '350px'
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  chipContainer: {
    marginRight: '10px'
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  formControl: {
    width: '100%'
  },
  filterContainer: {
    display: 'flex',
    paddingBottom: '20px'
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  inputField: {
    width: '100%',
    backgroundColor: '#ffffff'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `'#D55804' !important`,
      borderWidth: '2px',
    }

  },
  popOver: {
    padding: '20px'
    // minWidth: '200px'
  },
  fieldset: {
    borderRadius: '25px',
    borderColor: '#f0eee9',
    borderStyle: 'dotted'
  },
  cssFocused: {},

  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#D55804 !important'
  },
  floatingLabelFocusStyle: {
    '&$focused': {
      color: '#D55804 !important'
    }
  },
  iconButton: {
    padding: '10px',
    borderRadius: '5px',
    marginLeft: '-10px'

  },
  select: {
    //width: '300px',
    '&:before': {
      borderColor: '#D55804',
      borderWidth: '2px'
    },
    '&:after': {
      borderColor: '#D55804',
      borderWidth: '2px'
    }
  },
  selectIcon: {
    fill: '#D55804'
  },
  checkbox: {
    color: '#D55804',
  },
  changeBox: {
    padding: '20px',
    marginLeft: '15px',
    marginRight: '15px'
  },
  changeBoxTitle: {
    color: '#920E0E'
  },
  detailsDialogBar: {
    position: 'relative',
  },
  detailsDialogTitle: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  expansionPanelSummary: {
    borderBottom: '1px solid #C1A783',
    color: '#000000',
  },
  expansionPanelDetails: {
    paddingTop: '30px',
    flexDirection: 'column',
    color: '#000000'
  },
  comboTable: {
    boxShadow: 'none',
    border: 'none',
    maxWidth: '100%',
  },
  expansionPanelLeft: {
    paddingBottom: '30px'
  },
  chip: {
    marginTop: '5px',
    color: '#333333',
    /* backgroundColor: '#ffffff',*/
    fontSize: '12px'
  },
  filterButton: {
    marginTop: '20px',
    marginBottom: '0px',
    width: '100%',

    '&:hover, &:focus': {
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  downloadButton: {
    marginRight: '20px',
    marginTop: '10px',
    '&:hover, &:focus': {
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  formLegend: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '1.2em',
    marginBottom: '10px'
  },
  sidebar: {
    //width: '350px',
    margin: '0em',
    marginRight: '2em',
    marginBottom: '70px',
    paddingBottom: '2em'

  },
  sidebarTitle: {
    textAlign: 'center',
    padding: '1em',
    marginBottom: '0 !important'
  },
  sidebarContainer: {
    paddingTop: 0
  },
  sidebarExpandTitle: {
    fontSize: '1em',
    lineHeight: '1.4em',
    fontWeight: 'normal',
    color: '#000000',
    margin: 0
  },
  sidebarGroup: {

  },
  sidebarSubtitle: {
    textAlign: 'center'
  },
  dataElementContent: {
    paddingLeft: '1em',
    paddingBottom: '50px'

  },
  errorMessage: {
    //textAlign: 'center',
    marginLeft: '100px',
    color: '#FF0000',
    marginBottom: '0 !important'
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
  actionButton: {
    marginLeft: '20px',
    marginTop: '10px',
    marginBottom: '20px',
    '&:hover, &:focus': {
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  exportButton: {
    '&:hover, &:focus': {
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  detailsButton: {
    marginTop: '10px',
    marginBottom: '20px',
    '&:hover, &:focus': {
      backgroundColor: '#C1A783',
      color: '#000000'
    }
  },
  panelDetails: {
    flexDirection: 'column'
  },
  comparePanelContainer: {
    //maxWidth: '1200px',
    margin: '0 auto',
    height: '100vh'
  },
  dataElementContainer: {
  },
  disaggregationContainer: {
    marginTop: '1em',
    backgroundColor: '#eeeeee',
    border: 0
  },
  tabDashboard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  toggleFilters: {
    marginTop: '15px',
    color: "#1d5893 !important",
    padding: 0,

    '&:hover, &:focus': {
      background: 'transparent'
    }
  },
  historyButton: {
    backgroundColor: '#C1A783',
    color: '#000000',
    marginBottom: '1em',
    marginTop: '1em',

    '&:hover, &:focus': {
      color: '#000000'
    }
  },

  comparisonPanelTitle: {
    color: '#303030',
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: 'EB Garamond !important',
    fontWeight: 400,
    paddingLeft: '30px',
    paddingRight: '30px',
    textTransform: 'uppercase'
  },
  fixedTop: {
    top: 0,
    width: '100%',
    zIndex: 99,
    position: 'sticky',
    backgroundColor: '#ffffff'
  },
  compareTitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  compareTitleColumn: {
    flex: 1,
    color: '#ffffff',
    border: '1px solid #ffffff',
    padding: '1em',
    textAlign: 'center',
    alignItems: 'center',
    borderBottom: 0,
    justifyContent: 'center',
    backgroundColor: '#062133'
  },
  compareRow: {
    width: '100%',
    display: 'flex',
    paddingTop: '1em',
    borderBottom: '1px solid #062133',
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',

    '&:nth-child(even)': {
      backgroundColor: '#eeeeee'
    }
  },
  compareColumn: {
    width: '100%',
    display: 'flex',
    paddingTop: '1em',
    borderBottom: '1px solid #062133',
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',

    '&:nth-child(even)': {
      backgroundColor: '#eeeeee'
    }
  },
  compareRowColumn: {
    flex: 1,
    margin: '1em'
  },
  compareCardSummary: {
    flexDirection: 'column'
  },
  compareCardName: {
    fontWeight: 'bold',
    wordBreak: 'break-all'
  },
  compareCardText: {
    fontWeight: 300,
    paddingBottom: '5px',
    paddingTop: '5px'
  },



  search: {
    // padding: '6px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    border: '2px solid #D55804',
    /*borderColor: `'#D55804' !important`,
    borderWidth: '2px',*/
    marginTop: '10px',
    marginLeft: '15px'
  },
  compare: {
    padding: '6px 4px',
    display: 'flex',
    alignItems: 'left',
    width: '150px',
    //border: '2px solid #D55804',
    /*borderColor: `'#D55804' !important`,
    borderWidth: '2px',*/
  },
  derivatives: {
    maxHeight: 600,
    flexGrow: 1,
    width: 1000,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchButton: {
    padding: 10,
  },

  [theme.breakpoints.down('md')]: {
    actionButton: {
      fontSize: '0.7em'
    }
  },
  filter: {
    marginBottom: '1em'
  },
  formulaButton: {
    marginTop: '1em',
    backgroundColor: '#eeeeee',
    border: 0
  },
  tabContainer: {
    borderBottom: '1px solid #C1A783',
    width: '100%'
  },
  bigIndicator: {
    backgroundColor: '#C1A783'
  },
  [theme.breakpoints.down('sm')]: {
    // styles
    filterContainer: {
      display: 'block',
    },
    formControl: {
      width: '100%'
    },
    root: {
      width: '95vw'
    },
    tableContainer: {
      maxWidth: "85vw",
    },
    filter: {

      paddingRight: '0px'
    },
    heading: {
      wordBreak: 'break-all'
    },
    sidebar: {
      marginRight: 0
    },
    dataElementContent: {
      paddingLeft: '0em',
      paddingTop: '1em'

    },
    tabDashboard: {
      flexDirection: 'column'
    },
    actionButton: {
      width: '90vw',
      fontSize: '1em'
    },
    compareRow: {
      flexDirection: 'column'
    },
    comparisonPanelTitle: {
      margin: 0,
      padding: '30px',
      borderBottom: '2px solid #061233'
    },
    compareTitle: {
      display: 'none'
    },
    gridList: {
      width: 300
    }

  }




}));



export default function Codelist() {

  //****  Added for page pagination

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [expanded, setExpanded] = React.useState([]);
  let history = useHistory()
  const params = new URLSearchParams(useLocation().search)
  const [dataElementMapping, setDataElementMapping] = React.useState({});

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortJSONByKey = function (data, key, direction) {
    return data.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      if (direction === 'asc') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
      if (direction === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
      return true;
    });
  }

  const sortJSON = function (data, direction) {
    return data.sort(function (x, y) {
      if (direction === 'asc') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
      if (direction === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
      return true;
    });
  }
  const expandAll = (array) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setExpanded(array)
  }
  const collapseAll = (array) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setExpanded([])
  }
  // const [period, setPeriod] = useState(["FY" + currentYear.substring(2, 4)]);
  const [period, setPeriod] = useState([""]);
  const [source, setSource] = useState(["MER"]);
  const [search, setSearch] = React.useState(""); // set the search query string which is triggered by the search key
  const [searchInputText, setSearchInputText] = useState(""); // set the search text which is triggered on text change
  const [compareInputText, setCompareInputText] = useState(""); // set the search DE to compare
  const queryIndicators = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?verbose=true&conceptClass="Reference+Indicator"&limit=0';
  const [indicators, setIndicators] = useState([""]);
  const [indicatorsTemp, setIndicatorsTemp] = useState([""]);
  const [indicatorQuery, setIndicatorQuery] = useState("")
  const [disabledDataSet, setDisabledDataSet] = useState(true)
  const [hiddenDataSet, setHiddenDataSet] = useState(true)
  const [hiddenIndicator, setHiddenIndicator] = useState(true)
  const [sourceQuery, setSourceQuery] = useState([""]);
  const [periodQuery, setPeriodQuery] = useState([""]);
  const [codeListQuery, setCodeListQuery] = useState([""]);
  const [frequencyQuery, setFrequencyQuery] = useState([""]);
  const [typeQuery, setTypeQuery] = useState([""]);
  const [supportQuery, setSupportQuery] = useState([""]);
  const [numeratorQuery, setNumeratorQuery] = useState([""]);

  let queryDataElementsAllPeriodsMER = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?verbose=true&conceptClass="Data+Element"&limit=' + rowsPerPage + '&page=' + (page + 1) + sourceQuery + periodQuery + indicatorQuery + typeQuery + codeListQuery + frequencyQuery + supportQuery + numeratorQuery;

  const [collection, setCollection] = useState("");
  let queryByCodeList = 'https://api.' + domain + '/orgs/' + org + '/collections/' + collection + '/concepts/?conceptClass="Data+Element"&verbose=true&limit=' + rowsPerPage + '&page=' + (page + 1) + indicatorQuery;
  const [deloading, setDELoading] = useState(false);

  if (search && search !== "") {
    queryDataElementsAllPeriodsMER = queryDataElementsAllPeriodsMER + "&q=" + search;
    //queryDataElementsAllPeriods = queryDataElementsAllPeriods + "&q=" + search;
    queryByCodeList = queryByCodeList + "&q=" + search;
  }

  let display = '';

  //get data-elements from context
  const [{ data_Elements, pdhDataElements, mohDataElements }] = useStateValue();


  const [dataElementsInitial, setDataElementsInitialData] = useState([]);
  var [dataElements, setDataElementsData] = useState([]);
  var [count, setCountOfValues] = useState(0);
  const [error, setError] = useState(null)
  const [errorDisplay, setErrorDisplay] = useState(null)


  const loadDataElementsByPeriod = async () => {
    setDELoading(true)
    // if (values.type === "All") {
    setDataElementsData([]);
    setCountOfValues(0);
    try {
      const response = [];
      let queryToRun = queryDataElementsAllPeriodsMER

      console.log(" queryToRun " + queryToRun)

      // }
      response = await fetch(queryToRun);
      if (!response.ok) {
        console.log(response);
        setDataElementsData([]);
        setCountOfValues(0);
        setErrorDisplay("Failed to fetch");
        setDELoading(false)
        throw new Error(
          `Error when retrieving data elements: ${response.status} ${response.statusText}`
        );
      }
      const jsonData = await response.json();
      if (!jsonData.length || jsonData.length === 0) {
        console.log("jsonData is empty");
        setDataElementsData([]);
        setCountOfValues(0);
        setDELoading(false)
        throw new Error(
          `There is no data for this selection. `
        );
      }
      setDELoading(false)
      setErrorDisplay(null);
      var sortedData = sortJSONByKey(jsonData, 'display_name', 'asc');

      //filter by default filters

      const temp = [];
      setDataElementsData(sortedData);
      setCountOfValues(parseInt(response.headers.get('num_found')));
      console.log(jsonData.length + " dataElements.length ")
      console.log(response.headers.get('num_found') + " results found ")
      console.log(response.headers.get('num_returned') + " results returned ")
    } catch (e) {
      setDELoading(false)
      console.log("error:" + e.message);
      setError(e.message);
      setErrorDisplay(e.message);
    }
    //}
  }

  useEffect(() => {
    async function loadData() {
      if (params.get('dataElementid')) {
        await getMappings(params.get('dataElementid'))
        setDataElementDetail(de[params.get('dataElementid')]);
        setDetailPanel({ ...detailPanel, bottom: true });
      }
    }
    loadData();
    //toggleDetailDrawer(de[params.get('dataElementid')], 'bottom', true)
  }, []);

  useEffect(() => {
    loadDataElementsByPeriod();
  }, [queryDataElementsAllPeriodsMER]);

  const loadDataElementsData = async () => {
    if (collection !== "" && values.dataSet !== "All") {
      //setDataElementsData([]);
      //setCountOfValues(0);
      setDELoading(true)
      try {
        const response = await fetch(queryByCodeList);
        if (!response.ok) {
          console.log(response);
          setDataElementsData([]);
          setCountOfValues(0);
          setDELoading(false)
          setErrorDisplay("Failed to fetch")
          throw new Error(
            `Error when retrieving data elements ${response.status} ${response.statusText}`
          );
        }
        const jsonData = await response.json();
        if (!jsonData.length || jsonData.length === 0) {
          console.log("jsonData is empty");
          setDataElementsData([]);
          setCountOfValues(0);
          setDELoading(false)
          throw new Error(
            `There is no data for this selection.  `
          );
        }
        setErrorDisplay(null);
        setDELoading(false)
        var sortedData = sortJSONByKey(jsonData, 'display_name', 'asc');
        setDataElementsData(sortedData);
        setCountOfValues(parseInt(response.headers.get('num_found')));
        console.log(dataElements.length + " results returned ")
        console.log(response.headers.get('num_found') + " results found ")

      } catch (e) {
        setDELoading(false)
        console.log("error:" + e.message);
        setError(e.message);
        setErrorDisplay(e.message);
      }
    }
  }
  useEffect(() => {
    loadDataElementsData();
  }, [queryByCodeList]);

  const loadIndicatorsData = async () => {
    console.log("loadIndicatorsData - queryIndicators : " + queryIndicators);
    try {
      const response = await fetch(queryIndicators);
      if (!response.ok) {
        console.log(response);
        throw new Error(
          `Error when retrieving indicators: ${response.status} ${response.statusText}`
        );
      }
      const jsonData = await response.json();
      if (!jsonData.length || jsonData.length === 0) {
        console.log("jsonData is empty");
        throw new Error(
          `There is no data for this selection. `
        );
      }

      console.log("indicators: " + jsonData.length);
      var sortedData = sortJSON(jsonData, 'display_name', 'asc');
      setIndicators(sortedData);
      setIndicatorsTemp(sortedData)
    } catch (e) {
      console.log("error:" + e.message);
      setError(e.message);
    }
  }

  useEffect(() => {
    loadIndicatorsData();
  }, [queryIndicators]);

  function populatePDHDerivatives(source_data_elements) {
    try {
      source_data_elements.map(source_data_element => {
        if (!derivedCoC[source_data_element.derived_category_option_combo_name]) {
          let derived_category_option_comboArray = [];
          derived_category_option_comboArray.push(source_data_element.source_data_element_name + ' [' + source_data_element.source_data_element_uid + ']')
          derivedCoC[source_data_element.derived_category_option_combo_name] = derived_category_option_comboArray
        }
        else {
          let derived_category_option_comboArray = Array.from(derivedCoC[source_data_element.derived_category_option_combo_name]);
          if (!derived_category_option_comboArray.includes(source_data_element.source_data_element_name + ' [' + source_data_element.source_data_element_uid + ']')) {
            derived_category_option_comboArray.push(source_data_element.source_data_element_name + ' [' + source_data_element.source_data_element_uid + ']')
            derivedCoC[source_data_element.derived_category_option_combo_name] = derived_category_option_comboArray
          }

        }
        if (!pdhDerivatives[source_data_element.source_data_element_name + ' [' + source_data_element.source_data_element_uid + ']']) {
          let source_data_element_nameArray = [];
          let source_category_option_combo_object = {}
          source_category_option_combo_object.derivedDisag = source_data_element.derived_category_option_combo_name
          source_category_option_combo_object.sourceDisag = source_data_element.source_category_option_combo_name + ' [' + source_data_element.source_category_option_combo_uid + ']|' + source_data_element.add_or_subtract
          source_data_element_nameArray.push(source_category_option_combo_object);
          pdhDerivatives[source_data_element.source_data_element_name + ' [' + source_data_element.source_data_element_uid + ']'] = source_data_element_nameArray;
        }
        else {
          let source_data_element_nameArray = Array.from(pdhDerivatives[source_data_element.source_data_element_name + ' [' + source_data_element.source_data_element_uid + ']']);
          let source_category_option_combo_object = {}
          source_category_option_combo_object.derivedDisag = source_data_element.derived_category_option_combo_name
          source_category_option_combo_object.sourceDisag = source_data_element.source_category_option_combo_name + ' [' + source_data_element.source_category_option_combo_uid + ']|' + source_data_element.add_or_subtract
          source_data_element_nameArray.push(source_category_option_combo_object);
          pdhDerivatives[source_data_element.source_data_element_name + ' [' + source_data_element.source_data_element_uid + ']'] = source_data_element_nameArray;
        }

      })
    } catch (e) {
      setError('Something went wrong... ')
    }
  }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [comparePanel, setComparePanel] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [dropDownName, setDropDownName] = React.useState("");
  const [exportDataElement, setExportDataElement] = React.useState("");
  const [exportSource, setExportSource] = React.useState("");
  const [exportType, setExportType] = React.useState("");

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const [detailPanel, setDetailPanel] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(4),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(4),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
  }))(MuiDialogActions);


  //initial filter state
  const [values, setValues] = React.useState({
    fiscal: localStorage.getItem("fiscal") ? localStorage.getItem("fiscal") : "All",
    type: localStorage.getItem("type") ? localStorage.getItem("type") : "All",
    dataSet: localStorage.getItem("dataSet") ? localStorage.getItem("dataSet") : "All",
    source: localStorage.getItem("source") ? localStorage.getItem("source") : "MER",
    frequency: "All",
    indicator: localStorage.getItem("indicator") ? localStorage.getItem("indicator") : "All",
    support: localStorage.getItem("support") ? localStorage.getItem("support") : "All",
    numerator: localStorage.getItem("numerator") ? localStorage.getItem("numerator") : "All"
  });

  const type = ["All", "Result", "Target"];
  //clear all filter values
  const clearValues = event => {
    setValues(() => ({
      fiscal: "All",
      type: "All",
      dataSet: "All",
      source: "MER",
      frequency: "All",
      indicator: "All",
      support: "All",
      numerator: "All"
    }));

    //setDataElements(data);
  }


  const handleSearchInputChange = () => {
    setSearchInputText(document.getElementById("inputSearch").value);
  };

  const handleCompareInputChange = () => {
    setCompareInputText(document.getElementById("compareSearch").value);
  };

  const performSearch = event => {
    var searchText = document.getElementById("inputSearch").value;
    // search:  q=*demo, q=*demo*, q=demo*.  Add * to the search string to search any string containing "tx_curr"  
    setSearch("*" + searchText + "*");
    setPage(0);
  }

  const performCompare = async (dataElementDetail, dataElementToCompare) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    var compareText = document.getElementById("compareSearch") ? document.getElementById("compareSearch").value : '';

    let compareLink = ''
    if (!dataElementToCompare) {
      // if (compareText !== '') {
      compareLink = '/codelist/compare?id1=' + dataElementDetail.id + '&id2=' + compareText + '&dataElementDetail=true'
      //}
    } else {
      compareLink = '/codelist/compare?id1=' + dataElementDetail.id + '&id2=' + dataElementToCompare + '&dataElementDetail=true'
    }
    history.push(compareLink)
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) { // the enter/return key       
      event.preventDefault();
      performSearch();
    }
  };
  const handleKeyPressCompare = (event) => {
    if (event.keyCode === 13) { // the enter/return key       
      event.preventDefault();
      performCompare();
    }
  };

  //advanced search filters
  const [advanced, setAdvanced] = React.useState(false);
  const displayAdvanced = event => {
    setAdvanced(!advanced);
  }


  //implement filtering function by set Values first
  const handleFilterChange = event => {

    event.persist();

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    setPage(0);
    setSearchInputText(""); // reset search text
    setSearch("");
  };

  const handleTableClick = e => {
    let ds = e.target.value;
    codeListJson.codeList.map(cl => {
      if (ds === cl.full_name) {
        console.log(" dataset changed ")
        setCollection(cl.id)
      }
    })
  }

  //when source changes
  useEffect(() => {
    setDataElementsData([])
    setCountOfValues(0)
    if (values.source === "MER") {
      setSourceQuery("")
    }
    else {
      setSourceQuery("&extras__source=" + values.source)
    }
    if (values.source === "PDH") {
      setCodeListQuery("")
        if (!hiddenDataSet) {
        setHiddenDataSet(true)
      }
    }
    else {
      setHiddenDataSet(false)
      if (values.fiscal !== "All"){
        setDisabledDataSet(false)}
    }


    localStorage.setItem("source", values.source);

  }, [values.source]);

  //when fiscal changes
  useEffect(() => {
    setDataElementsData([])
    setCountOfValues(0)
    if (values.fiscal === "All") {
      if (!disabledDataSet) {
        setDisabledDataSet(true)
      }
      setPeriodQuery("")
    }
    else {
      setPeriodQuery("&extras__Applicable+Periods=FY" + (values.fiscal + "").substring(2, 4))
      if (values.source === 'PDH') {
        setDisabledDataSet(true)
      }
      else {
        if (disabledDataSet)
          setDisabledDataSet(false)
      }

    }
    localStorage.setItem("fiscal", values.fiscal);
    console.log(" displaying " + dataElements.length + " results")
  }, [values.fiscal]);

  //when data set changes
  useEffect(() => {
    setDataElementsData([])
    setCountOfValues(0)

    if (values.dataSet === "All") {
      setCodeListQuery("")
    }
    else {
      codeListJson.codeList.map(cl => {
        if (values.dataSet === cl.full_name) {
          console.log(" dataset changed ")
          setCodeListQuery("&extras__codelists__id=" + cl.dataset_id)
        }
      })
      console.log(" displaying " + dataElements.length + " results")
    }
    localStorage.setItem("dataSet", values.dataSet);
  }, [values.dataSet]);

  //when type changes
  useEffect(() => {
    setDataElementsData([])
    setCountOfValues(0)

    let s = values.source
    let year = values.fiscal
    let t = values.type
    let f = values.frequency
    let i = values.indicator
    let st = values.support
    let n = values.numerator
    if (values.type === "All") {
      // setValues({
      //   fiscal: year,
      //   type: t,
      //   dataSet: "All",
      //   source: s,
      //   frequency: f,
      //   indicator: i,
      //   support: st,
      //   numerator: n
      // })
      setTypeQuery("")
    }
    else {
      let element = document.getElementById("dataSet");
      let dataType = element.options[element.selectedIndex].text;
      setValues({
        fiscal: year,
        type: t,
        dataSet: dataType,
        source: s,
        frequency: f,
        indicator: i,
        support: st,
        numerator: n
      })
      setTypeQuery("&extras__resultTarget=" + values.type)
    }
    localStorage.setItem("type", values.type);

  }, [values.type]);

  //when frequency changes
  useEffect(() => {
    if (values.frequency === "All") {
      setIndicatorsTemp(indicators)
      setFrequencyQuery("")
    }
    else {
      setIndicatorsTemp([])
      let indicatorList = []
      indicators.map(indicator => {
        if (indicator.extras["Reporting frequency"] === values.frequency) {
          indicatorList.push(indicator)
        }
      })
      setIndicatorsTemp(indicatorList)
      setFrequencyQuery("&extras__Reporting+frequency=" + values.frequency)
      setIndicatorQuery("")

    }
    localStorage.setItem("frequency", values.frequency);
  }, [values.frequency]);

  //when indicator changes
  useEffect(() => {
    if (values.indicator === "All") {
      setIndicatorQuery("")
    }
    else {
      setIndicatorQuery("&extras__indicator=" + values.indicator)
    }
  }, [values.indicator]);

  //when support type changes
  useEffect(() => {
    if (values.support === "All") {
      setSupportQuery("")
    }
    else {
      setSupportQuery('&extras__pepfarSupportType="' + values.support + '"')
    }
    localStorage.setItem("support", values.support);
  }, [values.support]);

  //when numerator type changes
  useEffect(() => {
    if (values.numerator === "All") {
      setNumeratorQuery("")
    }
    else {
      setNumeratorQuery('&extras__numeratorDenominator=' + values.numerator)
    }
    localStorage.setItem("numerator", values.numerator);
  }, [values.numerator]);

  async function getMappings(id) {
    let queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/' + id + '/?includeMappings=true&includeInverseMappings=true';
    console.log(" queryByDataElement " + queryMapping)

    try {
      const response = await fetch(queryMapping);
      if (!response.ok) {
        console.log(response);
        setErrorDisplay("Failed to fetch")
        throw new Error(
          `Error when retrieving data element mappings ${response.status} ${response.statusText}`
        );
      }

      const jsonData = await response.json();
      let sortedData = sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
      if (!deMappings[id]) {
        deMappings[id] = sortedData;
        console.log('inside getMappings ' + deMappings[id])
        setDataElementMapping(deMappings[id]);
      }
      if (!de[id]) {
        de[id] = jsonData
      }
      // if the data element has linkages, retrieve those as well
      Object.keys(Object(deMappings[id])).map(

        async function (key) {
          let derivationId = ''
          if (Object(deMappings[id])[key].map_type === 'Derived From' || Object(deMappings[id])[key].map_type === 'Replaces') {
            derivationId = Object(deMappings[id])[key].to_concept_code
            if (derivationId === id) {
              let from_concept_url = Object(deMappings[id])[key].from_concept_url
              if (from_concept_url.endsWith('/')) {
                from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
              }
              let arr = from_concept_url.split('/')
              derivationId = arr[arr.length - 1]
            }
          }
          if (!deMappings[derivationId]) {
            queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/' + derivationId + '/?includeMappings=true&includeInverseMappings=true';
            console.log(" queryByDataElement " + queryMapping)
            response = await fetch(queryMapping);
            if (!response.ok) {
              console.log(response);
              setErrorDisplay("Failed to fetch")
              throw new Error(
                `Error when retrieving data element mappings ${response.status} ${response.statusText}`
              );
            }
            jsonData = await response.json()
            sortedData = sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
            deMappings[derivationId] = sortedData
            setDataElementMapping(deMappings[derivationId]);
            if (!de[derivationId]) {
              de[derivationId] = jsonData
            }
          }

        }
      )
    } catch (e) {
      console.log("error:" + e.message);
      setError(e.message);
      //setErrorDisplay(e.message);
    }


  };

  async function getDataElement(id) {
    const queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/' + id + '/?includeMappings=true&includeInverseMappings=true';
    console.log(" queryByDataElement " + queryMapping)

    try {
      let options = {
        uri: queryMapping
      }
      //const response = await rp(options)
      const response = await fetch(queryMapping);
      if (!response.ok) {
        console.log(response);
        setErrorDisplay("Failed to fetch")
        throw new Error(
          `Error when retrieving data element mappings ${response.status} ${response.statusText}`
        );
      }

      const jsonData = await response.json();
      //const jsonData = JSON.parse(response)
      console.log("jsonData " + jsonData)
      de[id] = jsonData;
      if (!deMappings[id]) {
        let sortedData = sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
        deMappings[id] = sortedData;
        setDataElementMapping(deMappings[id]);
      }
      return de[id]
    } catch (e) {
      console.log("error:" + e.message);
      setError(e.message);
      setDialogMessage(e.message)
      setDialogOpen(true)
      throw new Error(
        `Error when retrieving data element  ${e.message}`
      );
    }


  };



  const [selectedDataElement, setSelectedDataElement] = React.useState([]);
  const [dataElementDetail, setDataElementDetail] = React.useState(null);

  //implement comparison checkbox
  const handleCompareCheckbox = dataElement => event => {
    event.stopPropagation();

    //remove the element from the selected data element when unclick
    if (selectedDataElement.includes(dataElement.id)) {
      const newSelectedDataElement = selectedDataElement.filter(data => {
        return data !== dataElement.id;
      });
      setSelectedDataElement(newSelectedDataElement);


      if (Object.keys(selectDataTemp).includes(dataElement.id)) {
        delete selectDataTemp[dataElement.id]
      }
    } else {
      //add the element from the selected data element when click
      !deMappings[dataElement.id] ? getMappings(dataElement.id) : '';
      const newSelectedDataElement = [...selectedDataElement, dataElement.id];
      setSelectedDataElement(newSelectedDataElement);
      selectDataTemp[dataElement.id] = dataElement
    }


  };


  //check all, add/remove all data elements to/from the selected data element
  const selectAll = event => {
    if (selectedDataElement.length < dataElements.length) {
      const tempDataElement = [];
      dataElements.map(dataElement => {
        tempDataElement.push(dataElement.id);
        return true;
      })

      setSelectedDataElement(tempDataElement);
      setChecked(true);
    } else {
      setSelectedDataElement([]);
    }

    return true;
  }

  //set dropdown popup
  const dropDownMenu = buttonName => event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setDropDownName(buttonName);

  };
  // set export popup
  function exportMenu(buttonName, id, source, type) {
    //event = event || window.event;
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setDropDownName(buttonName);
    setExportDataElement(id)
    setExportSource(source)
    setExportType(type)
  };
  //set select popup
  const selectMenu = buttonName => event => {
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

  const [exportValue, setExportValue] = React.useState('HTML');
  const handleExportChange = event => {
    setExportValue(event.target.value);
  };

  const performDownload = event => {
    const baseDownloadURL = "https://test.ohie.datim.org:5000/ocl-etl/msp";
    let downloadURL = "";
    if (selectedDataElement.length > 0) {
      downloadURL = baseDownloadURL + "?dataElements=" + selectedDataElement.toString().trim() + "&format=" + downloadValue.trim();
    } else if (values.dataSet !== "All") {
      downloadURL = baseDownloadURL + '/' + collection + "?format=" + downloadValue.trim();
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

  const performExport = event => {
    let downloadURL = "";
    if (exportValue.trim() === 'OCL') {
      downloadURL = 'https://api.' + domain + '/orgs/' + org + '/sources/MER/concepts/' + exportDataElement;
    }
    else {
      if (exportType === 'data element') {
        downloadURL = 'https://dev-de.datim.org/api/dataElements/' + exportDataElement + '.' + exportValue.trim() + '?fields=*'
      }
      else {
        downloadURL = 'https://dev-de.datim.org/api/categoryOptionCombos/' + exportDataElement + '.' + exportValue.trim() + '?fields=*'
      }
    }
    console.log("downloadURL " + downloadURL)
    let downloadLink = document.createElement('a');
    downloadLink.href = downloadURL;
    if (exportValue.trim() !== "CSV") {
      downloadLink.setAttribute("target", "_blank");
    }
    downloadLink.setAttribute('download', "download");
    downloadLink.click();
    revokeDownloadLink(downloadLink.href);
  }

  function revokeDownloadLink(href) {
    setTimeout(function () {
      window.URL.revokeObjectURL(href);
    }, 10000);
  }

  const clearAll = event => {
    setSelectedDataElement([]);
    selectDataTemp = {}
  }

  const [comparePage, setComparePage] = React.useState("")
  //compare dropdown menu
  const [compare, setCompare] = React.useState({
    DATIM: true,
    PDH: false,
    MOH: false,
  });
  const handleCompareChange = name => event => {
    setCompare({ ...compare, [name]: event.target.checked });
  };


  const { DATIM, PDH, MOH } = compare;




  //setup the comparison panel
  const [selectedDatim, setSelectedDatim] = React.useState([]);

  //when open the drawer
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if (open) {
      if (selectedDataElement.length > 3) {
        setDialogOpen(true);
        setDialogMessage("You cannot compare more than 3 data elements at a time")
      }
      else if (selectedDataElement.length < 2) {
        setDialogOpen(true);
        setDialogMessage("Please select 2-3 data elements")
      }

      else {
        setCompare({ ...comparePanel, [DATIM]: true });

        let temp = []
        Object.values(selectDataTemp).map(value => {
          temp.push(value)
        }
        )
        setSelectedDatim(temp);
        let compareLink = ''
        Object.keys(selectedDataElement).map(key => {
          compareLink = compareLink + 'id' + (parseInt(key) + 1) + '=' + selectedDataElement[key] + '&'
        })
        compareLink = '/codelist/compare?' + compareLink.substring(0, compareLink.length - 1)
        history.push(compareLink)
      }
    }
    else {
      setComparePanel({ ...comparePanel, [side]: open });
    }
  };

  //const openCompareDrawer = 

  const toggleDetailDrawer = (dataElement, side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDataElementDetail(dataElement);
    //setDetailPanel({ ...detailPanel, [side]: open });
    if (open) {
      history.push('../codelist/dataElementDetail?id=' + dataElement.id)
    }
    else {
      setShowLinked(false)
      history.push('/codelist')
    }

  };

  const toggleCompareDetailDrawer = (dataElementDetail, dataElement, side, open) => {

    toggleDetailDrawer('bottom', false)
    let temp = []
    temp.push(dataElementDetail);
    temp.push(dataElement);
    setSelectedDatim(temp);
    setCompare({ ...comparePanel, [DATIM]: true });
    setComparePanel({ ...comparePanel, [side]: open });
  };

  // when values.dataSet === "All" && selectedDataElement.length ==0 disable the button

  function getDownloadLabel() {
    let downloadLabel = "Download";
    if (values.dataSet === "All") {
      if (selectedDataElement.length > 0) {
        downloadLabel = "Download Selected Data Elements";
      }
    } else if (values.dataSet !== "" && values.dataSet !== "All") {
      if (selectedDataElement.length > 0) {
        downloadLabel = "Download Selected Data Elements";
      } else {
        downloadLabel = "Download Full Code List";
      }
    }
    return downloadLabel;
  }

  //set initial panel state and panel handle change function
  const [panel, setPanel] = React.useState(0);
  const handleChange = (event, newPanel) => {
    setPanel(newPanel);
  };

  //layout below

  //Error handling
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }

    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <Dialog onClose={handleDialogClose} aria-labelledby="customized-dialog-title" open={dialogOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleDialogClose}>
            </DialogTitle>
            <DialogContent >
              <Typography gutterBottom>
                {dialogMessage}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleDialogClose} color="primary">
                OK
          </Button>
            </DialogActions>
          </Dialog>
        );
      }
      // Normally, just render children
      return this.props.children;
    }
  }
  const [toolTipOpen, setToolTipOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setToolTipOpen(false);
  };
  const handleTooltipOpen = () => {
    setToolTipOpen(true);
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

  const [showLinked, setShowLinked] = React.useState(false);

  return (
    <Route render={(history) => (
      <div>


        {/* <div>
        { 
          data &&
          data.length > 0 &&
          data.map(dataTemp => 
        <div key={dataTemp.id}>id:{dataTemp.external_id} -  name: {dataTemp.display_name}</div>)
        } 
      </div> */}



        <div className={classes.container}>

          {/* hero section */}
          <Grid container alignItems="center" >
            {<Grid item xs={12} md={7} >
              {/* <headings.H1>Data Elements</headings.H1> */}
              {/* <Breadcrumb></Breadcrumb> */}
            </Grid>}

            <Grid item xs={12} md={5} justifycontent="flex-end" >
            </Grid>
          </Grid>
          {/* </div> */}

          {/* <div className={classes.container}> */}
          <Grid container>
            {/* filters */}
            <Grid item xs={12} md={3}>

              <Shortcut ></Shortcut>
              <Paper className={classes.sidebar}>
                <div className={`${classes.container} ${classes.sidebarContainer}`}>


                  <h4 className={classes.sidebarTitle}>Data Element Filters</h4>


                  <form autoComplete="off">



                    {/* source filter */}


                    <Grid item xs={12} className={classes.filter} >
                      <FormControl className={classes.formControl}>


                        <InputLabel htmlFor="source">Source</InputLabel>
                        <Select
                          native
                          value={values.source}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'source',
                            id: 'source',
                            classes: {
                              icon: classes.selectIcon
                            }
                          }}

                        >
                          <option value={'MER'}>All</option> 
                        <option value={'DATIM'}>DATIM</option>
                          <option value={'PDH'} >PDH</option>
                          {/* <option value={'MOH'} disabled>MOH</option> */}
                        </Select>
                      </FormControl>
                    </Grid>


                    {/* fiscal year filter */}
                    <Grid item xs={12} className={classes.filter} >
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="fiscal">Fiscal Year</InputLabel>
                        <Select
                          native
                          value={values.fiscal}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'fiscal',
                            id: 'fiscal',
                            classes: {
                              icon: classes.selectIcon
                            }
                          }}

                        >
                          {/* <option value={"All"} /> */}
                          {

                            Object.keys(codeListMap).reverse().map(

                              key => <option key={Math.random()} >{key}</option>
                            )
                          }
                        </Select>
                      </FormControl>
                    </Grid>


                    {/* <fieldset className={`${classes.fieldset} ${hiddenDataSet ? classes.hide : ''}`}> */}
                    {/* type filter */}
                    <Grid item xs={12} className={classes.filter}  >
                      <FormControl className={`${classes.formControl}`}>
                        {/* <FormControl className={classes.formControl}> */}

                        <InputLabel htmlFor="type">Type</InputLabel>
                        <Select size="3"
                          native
                          // disabled={hiddenDataSet}
                          value={values.type}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'type',
                            id: 'type',
                            classes: {
                              icon: classes.selectIcon
                            }

                          }}
                        >
                          {type.map(key => <option key={Math.random()} >{key}</option>)
                          }
                        </Select>
                      </FormControl>
                    </Grid>
                    {/* data set filter */}
                    <Grid item xs={12} className={hiddenDataSet ? classes.hide : ''}>
                    <Grid item xs={12} className={classes.filter}>
                      <FormControl className={`${classes.formControl} `}>
                        <InputLabel htmlFor="dataSet">Code List (Fiscal Year required)</InputLabel>
                        <Select
                          //size={Object.values(codeListMap[values.fiscal]).length +""}
                          native
                          disabled={disabledDataSet}
                          value={values.dataSet}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'dataSet',
                            id: 'dataSet',
                            classes: {
                              icon: classes.selectIcon
                            },
                            disabled: values.source === 'PDH'
                          }}
                        >
                          <option value={'All'}>All</option>
                          {(values.type === 'All') ? (Object.values(codeListMap[values.fiscal]).map(

                            key => <option key={Math.random()} >{key}</option>)) : ([])}
                          {Object.values(codeListMap[values.fiscal]).map(

                            key => key.includes(values.type) ? (<option key={Math.random()} >{key}</option>) : ([])
                          )
                          }
                          {/* <option value={'facility'}>Facility Based Code List</option>
                        <option value={'community'}>Community Based Code List</option> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    </Grid>
                    {/* </fieldset>

                    <fieldset className={classes.fieldset}> */}

                    {/* frequency filter */}
                    {/* <Grid item xs={12} className={advanced ? classes.filter : classes.hide} > */}
                    <Grid item xs={12} className={classes.filter} >
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="frequency">Reporting Frequency</InputLabel>
                        <Select
                          native
                          value={values.frequency}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'frequency',
                            id: 'frequency',
                            classes: {
                              icon: classes.selectIcon
                            }
                          }}

                        >
                          <option value={"All"}>All</option>
                          <option value={'Annually'}>Annually</option>
                          <option value={'Semi-Annually'}>Semi-Annually</option>
                          <option value={'Quarterly'}>Quarterly</option>

                        </Select>
                      </FormControl>
                    </Grid>
                    {/* indicator filter */}
                    {/* <Grid item xs={12} className={advanced ? classes.filter : classes.hide} > */}
                    <Grid item xs={12} className={classes.filter} >
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="indicator">Reference Indicators</InputLabel>
                        <Select
                          native
                          value={values.indicator}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'indicator',
                            id: 'indicator',
                            classes: {
                              icon: classes.selectIcon
                            }
                          }}

                        >
                          <option value={'All'}>All</option>

                          {indicatorsTemp.map(key => <option key={Math.random()} value={key.id} >{key.display_name}</option>)
                          }

                        </Select>
                      </FormControl>
                    </Grid>
                    {/* </fieldset> */}

                    {/* support type filter */}
                    <Grid item xs={12} className={advanced ? classes.filter : classes.hide} style={{ marginTop: '15px' }}>
                      <Grid item xs={12} className={classes.filter} >
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="support">PEPFAR Support Type</InputLabel>
                          <Select
                            native
                            value={values.support}
                            onChange={handleFilterChange}
                            className={classes.select}
                            inputProps={{
                              name: 'support',
                              id: 'support',
                              classes: {
                                icon: classes.selectIcon
                              }
                            }}

                          >
                            <option value={"All"}>All</option>
                            <option value={'Technical+Assistance'}>TA</option>
                            <option value={'Direct+Service+Delivery'}>DSD</option>

                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    {/* support type filter */}
                    <Grid item xs={12} className={advanced ? classes.filter : classes.hide} style={{ marginTop: '15px' }}>
                      <Grid item xs={12} className={classes.filter} >
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="numerator">Numerator/Denominator</InputLabel>
                          <Select
                            native
                            value={values.numerator}
                            onChange={handleFilterChange}
                            className={classes.select}
                            inputProps={{
                              name: 'numerator',
                              id: 'numerator',
                              classes: {
                                icon: classes.selectIcon
                              }
                            }}

                          >
                            <option value={"All"}>All</option>
                            <option value={'Numerator'}>Numerator</option>
                            <option value={'Denominator'}>Denominator</option>

                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>

                    {/* active type filter */}
                    {/* <Grid item xs={12} className={advanced ? classes.filter : classes.hide} style={{ marginTop: '15px' }}>
                      <Grid item xs={12} className={classes.filter} >
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="numerator">Active/Inactive</InputLabel>
                          <Select
                            native
                            value={values.active}
                            onChange={handleFilterChange}
                            className={classes.select}
                            inputProps={{
                              name: 'active',
                              id: 'active',
                              classes: {
                                icon: classes.selectIcon
                              }
                            }}

                          >
                            <option value={"All"}>All</option>
                            <option value={'Active'}>Active</option>
                            <option value={'Inactive'}>DenomInactiveinator</option>

                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid> */}
                  </form>
                  {/* filter functions */}
                  <Button onClick={displayAdvanced} className={classes.toggleFilters}>
                    {advanced ? 'Less Filters' : 'More Filters'}
                  </Button>
                  <Button variant="outlined" onClick={clearValues} className={classes.filterButton}>
                    Clear Filters
                  </Button>
                </div>

              </Paper>
            </Grid>

            <Grid item xs={12} md={9} className={classes.dataElementContent}>

              {/* dashboard, including download, compare, select all buttons */}


              <div className={classes.tabDashboard}>
                <div >
                  <div style={{ flexDirection: 'row', display: 'flex' }} >
                    {/* {selectedDataElement && selectedDataElement.length > 0 ?
                    <Button variant="outlined" className={classes.actionButton} onClick={clearSelectedDataElements} id="clearDataElementButton">
                      <ActionButtonLabel> Clear Selection   <span style={{ background: '#D3D3D3', marginLeft: '2px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px' }}> {selectedDataElement.length}</span></ActionButtonLabel></Button>
                    : null} */}
                    <div>
                      <Tooltip disableFocusListener title="Download">
                        <i>
                          <Button variant="outlined" className={classes.actionButton} style={{ height: '48px', width: '80px', marginBottom: '10px' }} onClick={dropDownMenu("download")} id="downloadButton" disabled={selectedDataElement.length === 0 && values.dataSet === "All" ? true : false}>
                            {/* <ActionButtonLabel> {getDownloadLabel()}</ActionButtonLabel> */}
                            {
                              selectedDataElement.length === 0 && values.dataSet === "All" ?
                                <GetAppIcon /> : <GetAppIcon style={{ color: '#1D5893' }} />
                            }
                          </Button></i></Tooltip></div>
                    <div >
                      <Tooltip disableFocusListener disableTouchListener title="Compare 2 or 3 Data Elements">
                        <i >
                          <Button variant="outlined" className={classes.actionButton} style={{ height: '48px', width: '80px', marginBottom: '10px' }}
                            onClick={toggleDrawer('bottom', true)}
                            id="comparisonButton"
                            disabled={selectedDataElement.length < 2 || selectedDataElement.length > 3 ? true : false}>
                            {/* <ActionButtonLabel>Compare selected data elements</ActionButtonLabel> */}
                            {
                              selectedDataElement.length < 2 || selectedDataElement.length > 3 ?
                                <CompareArrowsIcon /> : <CompareArrowsIcon style={{ color: '#1D5893', marginLeft: '2px' }} />
                            }
                          </Button>
                        </i>
                      </Tooltip></div></div>
                  {/* </NavLink> */}
                </div>

                <div>
                  <Dialog onClose={handleDialogClose} aria-labelledby="customized-dialog-title" open={dialogOpen}>
                    <DialogTitle id="customized-dialog-title" onClose={handleDialogClose}>
                    </DialogTitle>
                    <DialogContent >
                      <Typography gutterBottom>
                        {dialogMessage}
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleDialogClose} color="primary">
                        OK
                   </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex' }} >
                  <div>
                    <Tooltip disableFocusListener title="Select">
                      <Button style={{ marginTop: '10px' }}>
                        {selectedDataElement.length == 0 ? <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onClick={selectAll}
                          style={{ padding: '5px' }} /> : ''}
                        {selectedDataElement.length > 0 && selectedDataElement.length < dataElements.length ?
                          <Checkbox
                            defaultChecked
                            indeterminate
                            inputProps={{ 'aria-label': 'indeterminate checkbox' }}
                            onClick={clearAll}
                            style={{ padding: '5px' }}
                          /> : ''}
                        {selectedDataElement.length > 0 && selectedDataElement.length == dataElements.length ? <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                          onClick={selectAll}
                          style={{ padding: '5px' }}
                        /> : ''}
                        <TiArrowSortedDown onClick={selectMenu('select')} />
                      </Button>
                    </Tooltip>
                  </div>
                  <div style={{ width: '500px' }}>
                    <Paper component="form" className={classes.search}>
                      <InputBase
                        className={classes.input}
                        placeholder="Search Data Elements"
                        inputProps={{ 'aria-label': 'search data elements' }}
                        id="inputSearch"
                        key="inputSearch"
                        onKeyDown={handleKeyPress}
                        onChange={handleSearchInputChange}
                        value={searchInputText}
                      />

                      <IconButton type="button" className={classes.searchButton} aria-label="search" id="searchButton" onClick={performSearch}  >
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </div>
                </div>
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
                    dropDownName === "download" ?
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
                      </FormControl> :
                      dropDownName === "export" ?
                        <FormControl component="fieldset" className={classes.popOver}>
                          <FormGroup>
                            {exportSource === 'DATIM' ?
                              <FormLabel component="legend" className={classes.formLegend}>From DATIM (Acount Required)</FormLabel> : ''}
                            {exportSource === 'DATIM' ?
                              <RadioGroup aria-label="export" name="exportRadio" value={exportValue} onChange={handleExportChange}>
                                <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="HTML" />} label="HTML" />
                                <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="CSV" />} label="CSV" />
                                <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="JSON" />} label="JSON" />
                                <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="XML" />} label="XML" />
                              </RadioGroup> : ''}
                            <FormLabel component="legend" className={classes.formLegend}>From Open Concept Lab (OCL)</FormLabel>
                            <RadioGroup aria-label="export" name="exportRadio" value={exportValue} onChange={handleExportChange}>
                              <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="OCL" />} label="JSON" />
                            </RadioGroup>
                            <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={performExport}>
                              Download DATA
                      </Button>
                          </FormGroup>
                        </FormControl> :
                        <FormControl component="fieldset" className={classes.popOver}>
                          <FormGroup>
                            <MenuItem value="All" onClick={selectAll}>All</MenuItem>
                            <MenuItem value="None" onClick={clearAll}>None</MenuItem>
                          </FormGroup>
                        </FormControl>
                  }
                </Popover>



              </div>
              {/* Loading */}
              {deloading ?
                <div>
                  <LinearProgress mode="indeterminate" />
                  <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>Loading data elements ...</div>
                </div> : ([])
              }
              <ErrorBoundary>
                <List>
                  {errorDisplay !== null ?
                    <div className={classes.errorMessage}>{errorDisplay}</div>
                    // <Alert severity="error">{errorDisplay}</Alert>
                    : null}
                  {dataElements.map(dataElement => (
                    [<ListItem dense button style={{ backgroundColor: selectedDataElement.includes(dataElement.id) ? '#f2dee5' : '' }}>

                      <ListItemIcon>
                        <Checkbox
                          aria-label="Acknowledge"
                          onClick={handleCompareCheckbox(dataElement)}
                          onFocus={event => event.stopPropagation()}
                          checked={selectedDataElement.includes(dataElement.id) ? true : false}
                          edge="start"
                        />
                      </ListItemIcon>
                      <ListItemText >
                        <Grid container alignItems="center"
                          //justify="space-between"
                          spacing={1}>
                          <Grid item xs={12}  >
                            <Typography className={classes.heading}>
                              <Link href={"/codelist/dataElementDetail?id=" + dataElement.id} style={{ textDecoration: 'underline' }}>{dataElement.display_name}</Link>
                            </Typography>
                          </Grid>

                          {/* <Grid item xs={3}>
                          </Grid> */}
                          <Grid item xs={2} md={3}>
                            <Tooltip disableFocusListener title="Click to copy UID">
                              <span className={classes.chip}
                                onClick={() => copyToClipboard(dataElement.id)}
                              >{"UID: " + dataElement.id}</span>
                            </Tooltip>
                          </Grid>
                          <Grid item xs={2} md={3}>
                            <span className={classes.chip}
                              onClick={() => copyToClipboard(dataElement.id)}
                            >{"Source: " + dataElement.extras.source}</span>
                          </Grid>
                          <Grid item xs={2} md={3}>
                            <span className={classes.chip}
                              onClick={() => copyToClipboard(dataElement.id)}
                            >{"Type: " + dataElement.concept_class}</span>
                          </Grid>
                          <Grid item xs={3} ></Grid>
                        </Grid>
                      </ListItemText>
                    </ListItem>,
                    <Divider variant="inset" component="li" />]
                  )
                  )
                  }
                </List>
              </ErrorBoundary>
              {/* </Parent> */}

              <table>
                <tbody>
                  <TableRow>

                    <TablePagination
                      rowsPerPageOptions={[10, 25, 50, 100]}
                      labelDisplayedRows={({ from, to, count }) => `Displaying rows ${from}-${to} of ${count}`}
                      count={count}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </TableRow>
                </tbody></table>
              {/* data element comparison panel */}
              <Drawer anchor="bottom" open={comparePanel.bottom} onClose={toggleDrawer('bottom', false)}>
                <Grid container className={classes.comparePanelContainer}>
                  <Grid item xs={12}>

                    {/* <div className={classes.fixedTop}> */}
                    <div >
                      <CloseIcon onClick={toggleDrawer('bottom', false)} className={classes.closeComparePanel}>add_circle</CloseIcon>
                      <h2 className={classes.comparisonPanelTitle}>DATA ELEMENT COMPARISON</h2>
                      {/* comparison panel title */}
                      <div className={classes.compareTitle}>
                        {DATIM ? <div className={classes.compareTitleColumn}>DATIM</div> : ''}
                        {PDH ? <div className={classes.compareTitleColumn}>PDH</div> : ''}
                        {MOH ? <div className={classes.compareTitleColumn}>MOH</div> : ''}
                      </div>
                    </div>


                    {/* datim row */}

                    <div className={classes.compareRow} >

                      {/* <ErrorBoundary> */}
                      {
                        selectedDatim.map(datim => {
                          !deMappings[datim.id] ? getMappings(datim.id) : ''
                          return (
                            <div className={classes.compareRowColumn} key={Math.random()}>
                              <div className={classes.fixedTop}>
                                {/* <div className={classes.compareCardSummary}> */}
                                <div className={classes.compareTitle}>
                                  {/* <div className={classes.compareCardText}>DATIM Data Element: </div> */}
                                  <div className={classes.compareTitleColumn}>{datim.display_name}</div>
                                  {/* <div className={classes.compareCardText}>DATIM UID: <strong>{datim.external_id}</strong></div> */}
                                </div>
                              </div>
                              <ExpansionPanel className={classes.expandPanel}>
                                <ExpansionPanelSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel3b-content"
                                  id="panel3b-header"
                                  onClick={() => !deMappings[datim.id] ? getMappings(datim.id) : ''}
                                >

                                  <Table className={classes.comboTable} aria-label="simple table">
                                    <TableBody>
                                      <TableRow>
                                        <TableCell><strong>Short Name</strong></TableCell>
                                        <TableCell>{datim.names[1] ? (datim.names[1].name) : '--'}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Code</strong></TableCell>
                                        <TableCell>{datim.names[2] ? (datim.names[2].name) : '--'}</TableCell>
                                      </TableRow>
                                      <TableRow className={classes.comboTable}>
                                        <TableCell><strong>Description</strong></TableCell>
                                        <TableCell>{(datim.descriptions) ? datim.descriptions[0].description : "--"}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>UID</strong></TableCell>
                                        <TableCell>{datim.id ? (datim.id) : '--'}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Source</strong></TableCell>
                                        <TableCell>{datim.extras.source ? (datim.extras.source) : '--'}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Data Type</strong></TableCell>
                                        <TableCell>{datim.datatype ? (datim.datatype) : '--'}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Domain Type</strong></TableCell>
                                        <TableCell>{datim.extras.domainType ? (datim.extras.domainType) : '--'}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Value Type</strong></TableCell>
                                        <TableCell>{datim.extras.valueType ? (datim.extras.valueType) : '--'}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Aggregation Type</strong></TableCell>
                                        <TableCell>{datim.extras.aggregationType ? (datim.extras.aggregationType) : '--'}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Applicable Periods</strong></TableCell>
                                        <TableCell>
                                          {
                                            datim.extras['Applicable Periods'] ? (datim.extras['Applicable Periods'].length > 0 ? (Object.keys(datim.extras['Applicable Periods']).map(

                                              key =>

                                                datim.extras['Applicable Periods'][key] + ", "

                                            )
                                            ) : '--') : '--'
                                          }
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Code List Membership</strong></TableCell>
                                        <TableCell>
                                          {
                                            datim.extras.codelists ? (datim.extras.codelists.length > 0 ? (Object.keys(datim.extras.codelists).map(

                                              key =>

                                                datim.extras.codelists[key].name + ", "

                                            )
                                            ) : '--') : '--'
                                          }
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell><strong>Result/Target</strong></TableCell>
                                        <TableCell>{datim.extras.resultTarget ? datim.extras.resultTarget : '--'}</TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.panelDetail}>


                                  {/* <Route render={({ history }) => ( */}
                                  <div className={classes.tableContainer} key={Math.random()}>
                                    {/* data element Disaggregations */}
                                    <strong>Disaggregations</strong>:<br />

                                    <Table className={classes.table} aria-label="simple table">
                                      <TableHead>
                                        <TableRow>
                                          <TableCell>Name</TableCell>
                                          <TableCell>Code</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody >
                                        {
                                          (deMappings[datim.id]) ? Object.keys(Object(deMappings[datim.id])).map(

                                            key =>
                                              <TableRow key={Math.random()}>
                                                <TableCell component="th" scope="row">
                                                  {Object(deMappings[datim.id])[key].to_concept_name}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                  {Object(deMappings[datim.id])[key].to_concept_code}
                                                </TableCell>
                                              </TableRow>

                                          ) : ''
                                        }
                                      </TableBody>
                                    </Table>
                                  </div>
                                  {/* )}></Route> */}
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                            </div>

                          )

                        })
                      }
                      {/* </ErrorBoundary> */}
                    </div>
                  </Grid>


                </Grid>
              </Drawer>



              <Drawer anchor="bottom" open={detailPanel.bottom} onClose={toggleDetailDrawer('bottom', false)}>
                <Grid container className={classes.comparePanelContainer} justify="space-between">
                  {setShowLinked(false)}
                  <Grid item xs={6}  >
                    <h2 className={classes.comparisonPanelTitle}>DATA ELEMENT DETAILS</h2>
                  </Grid>
                  <Grid item xs={6}  >
                    <CloseIcon onClick={toggleDetailDrawer(dataElementDetail, 'bottom', false)} className={classes.closeComparePanel}>add_circle</CloseIcon>
                  </Grid>
                  <Grid item xs={6}  >
                    {dataElementDetail ?
                      <Table className={classes.comboTable} style={{ marginRight: '20px' }} aria-label="simple table">
                        <TableBody>
                          <TableRow>
                            <TableCell><strong>Short Name</strong></TableCell>
                            <TableCell>{dataElementDetail.names[1] ? (dataElementDetail.names[1].name) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Code</strong></TableCell>
                            <TableCell>{dataElementDetail.names[2] ? (dataElementDetail.names[2].name) : '--'}</TableCell>
                          </TableRow>
                          <TableRow className={classes.comboTable}>
                            <TableCell><strong>Description</strong></TableCell>
                            <TableCell>{(dataElementDetail.descriptions) ? dataElementDetail.descriptions[0].description : "--"}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Data Type</strong></TableCell>
                            <TableCell>{dataElementDetail.datatype ? (dataElementDetail.datatype) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Domain Type</strong></TableCell>
                            <TableCell>{dataElementDetail.extras.domainType ? (dataElementDetail.extras.domainType) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Value Type</strong></TableCell>
                            <TableCell>{dataElementDetail.extras.valueType ? (dataElementDetail.extras.valueType) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Aggregation Type</strong></TableCell>
                            <TableCell>{dataElementDetail.extras.aggregationType ? (dataElementDetail.extras.aggregationType) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Applicable Periods</strong></TableCell>
                            <TableCell>
                              {
                                dataElementDetail.extras['Applicable Periods'] ? (dataElementDetail.extras['Applicable Periods'].length > 0 ? (Object.keys(dataElementDetail.extras['Applicable Periods']).map(

                                  key =>

                                    dataElementDetail.extras['Applicable Periods'][key] + ", "

                                )
                                ) : '--') : '--'
                              }
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Code List Membership</strong></TableCell>
                            <TableCell>
                              {
                                dataElementDetail.extras.codelists ? (dataElementDetail.extras.codelists.length > 0 ? (Object.keys(dataElementDetail.extras.codelists).map(

                                  key =>

                                    dataElementDetail.extras.codelists[key].name + ", "

                                )
                                ) : '--') : '--'
                              }
                            </TableCell>
                          </TableRow>
                          <TableRow></TableRow>
                          <TableRow>
                            <TableCell><strong>Result/Target</strong></TableCell>
                            <TableCell>{dataElementDetail.extras.resultTarget ? dataElementDetail.extras.resultTarget : '--'}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table> : ''}
                  </Grid>
                  {/* <Grid item xs={6}  > */}
                  <Grid item xs={6}  >
                    <div>
                      <div className={classes.heroContainer}>
                        <div style={{ paddingBottom: '10px' }}>COMPARE WITH</div>
                        <div>
                          <GridList cellHeight={60} className={classes.gridList} cols={2}>
                            <GridListTile >
                              <Paper component="form" className={classes.compare}>
                                <InputBase
                                  className={classes.input}
                                  //inputProps={{ 'aria-label': 'search data elements' }}
                                  id="compareSearch"
                                  key="compareSearch"
                                  onKeyDown={handleKeyPressCompare}
                                  onChange={handleCompareInputChange}
                                  value={compareInputText}
                                />
                              </Paper>
                            </GridListTile>
                            {/* </Grid>
                    <Grid item xs={3}  > */}
                            <GridListTile>
                              <Button type="button" className={classes.margin} aria-label="search" onClick={() => performCompare(dataElementDetail, null)} variant="outlined" >
                                COMPARE
                            </Button>
                            </GridListTile>
                          </GridList>
                          <div><InfoIcon fontSize='default' color="disabled"></InfoIcon><i style={{ color: '#8a8987' }}>Please enter a Data Element UID</i></div>
                        </div>

                      </div>
                      {showLinked ? <div style={{ padding: '20px', marginLeft: '170px' }}>or select a linked data element below</div> : ''}
                    </div>
                    <div>
                      <Table className={classes.comboTable} style={{ marginLeft: '20px', maxWidth: '700px' }} aria-label="simple table">
                        <TableBody>

                          {showLinked ?
                            <TableRow>
                              <TableCell><strong>Linked Resources</strong></TableCell>
                              <TableCell></TableCell>
                            </TableRow> : ''}

                          {dataElementDetail ? (
                            (deMappings[dataElementDetail.id]) ? Object.keys(Object(deMappings[dataElementDetail.id])).map(

                              function (key) {
                                if (deMappings[dataElementDetail.id][key].map_type === "Derived From") {
                                  setShowLinked(true)
                                  let name = ''
                                  let code = ''
                                  let source = ''
                                  let type = ''
                                  let derives = ''
                                  if (deMappings[dataElementDetail.id][key].to_concept_code !== dataElementDetail.id) {
                                    name = Object(deMappings[dataElementDetail.id])[key].to_concept_name
                                    code = deMappings[dataElementDetail.id][key].to_concept_code
                                    derives = 'Derived From'
                                    if (de[deMappings[dataElementDetail.id][key].to_concept_code]) {
                                      source = de[deMappings[dataElementDetail.id][key].to_concept_code].extras.source
                                      type = de[deMappings[dataElementDetail.id][key].to_concept_code].concept_class
                                    }
                                  }
                                  else {
                                    let from_concept_url = deMappings[dataElementDetail.id][key].from_concept_url
                                    if (from_concept_url.endsWith('/')) {
                                      from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
                                    }
                                    let arr = from_concept_url.split('/')
                                    let derivationId = arr[arr.length - 1]
                                    name = de[derivationId].display_name
                                    code = de[derivationId].id
                                    source = de[derivationId].extras.source
                                    type = de[derivationId].concept_class
                                    derives = 'Derived To'
                                    console.log(name + code + source + type)
                                  }
                                  return (
                                    <TableRow>

                                      <TableCell component="th" scope="row" style={{ maxWidth: '300px' }}>
                                        <Grid container alignItems="center"
                                          //justify="space-between"
                                          spacing={2}>
                                          <Grid item xs={12}  >
                                            <strong>{derives}</strong>
                                          </Grid>
                                          <Grid item xs={12}  >
                                            {name}
                                          </Grid>
                                          <Grid item xs={4} md={4} >
                                            <span className={classes.chip}
                                              onClick={() => copyToClipboard(code)}
                                            >{"UID: " + code}</span></Grid>
                                          <Grid item xs={4} md={4} >
                                            <span className={classes.chip}
                                            >{"Source: " + source}</span></Grid>
                                          <Grid item xs={4} md={4} >
                                            <span className={classes.chip}
                                            >{"Type: " + type}</span>                                            </Grid>
                                        </Grid>
                                      </TableCell>
                                      <TableCell component="th" scope="row" style={{ alignItems: 'left' }}>
                                        <Button type="button" className={classes.margin} aria-label="search" onClick={() => performCompare(dataElementDetail, code)} variant="outlined" >
                                          COMPARE
                                    </Button>
                                      </TableCell>
                                    </TableRow>
                                  )
                                }
                              }) : ''
                          ) : ''
                          }

                          {dataElementDetail ? (
                            (deMappings[dataElementDetail.id]) ? Object.keys(Object(deMappings[dataElementDetail.id])).map(

                              function (key) {
                                if (deMappings[dataElementDetail.id][key].map_type === "Replaces") {
                                  let name = ''
                                  let code = ''
                                  let source = ''
                                  let type = ''
                                  let replaces = ''
                                  if (deMappings[dataElementDetail.id][key].to_concept_code !== dataElementDetail.id) {
                                    name = Object(deMappings[dataElementDetail.id])[key].to_concept_name
                                    code = deMappings[dataElementDetail.id][key].to_concept_code
                                    replaces = 'Replaces'
                                    if (de[deMappings[dataElementDetail.id][key].to_concept_code]) {
                                      source = de[deMappings[dataElementDetail.id][key].to_concept_code].extras.source
                                      type = de[deMappings[dataElementDetail.id][key].to_concept_code].concept_class
                                    }
                                  }
                                  else {
                                    let from_concept_url = deMappings[dataElementDetail.id][key].from_concept_url
                                    if (from_concept_url.endsWith('/')) {
                                      from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
                                    }
                                    let arr = from_concept_url.split('/')
                                    let derivationId = arr[arr.length - 1]
                                    name = de[derivationId].display_name
                                    code = de[derivationId].id
                                    source = de[derivationId].extras.source
                                    type = de[derivationId].concept_class
                                    replaces = 'Replaced By'
                                    console.log(name + code + source + type)
                                  }
                                  return (
                                    <TableRow>
                                      <TableCell component="th" scope="row" style={{ maxWidth: '300px' }}>
                                        <Grid container alignItems="center"
                                          //justify="space-between"
                                          spacing={2}>
                                          <Grid item xs={12}  >
                                            <strong>{replaces}</strong>
                                          </Grid>
                                          <Grid item xs={12}  >
                                            {name}
                                          </Grid>
                                          <Grid item xs={4} md={4} >
                                            <span className={classes.chip}
                                              onClick={() => copyToClipboard(code)}
                                            >{"UID: " + code}</span></Grid>
                                          <Grid item xs={4} md={4} >
                                            <span className={classes.chip}
                                            >{"Source: " + source}</span></Grid>
                                          <Grid item xs={4} md={4} >
                                            <span className={classes.chip}
                                            >{"Type: " + type}</span></Grid>
                                        </Grid>
                                      </TableCell>
                                      <TableCell component="th" scope="row" style={{ alignItems: 'left' }}>
                                        <Button type="button" className={classes.margin} aria-label="search" onClick={() => performCompare(dataElementDetail, code)} variant="outlined" >
                                          COMPARE
                                    </Button>
                                      </TableCell>
                                    </TableRow>
                                  )
                                }
                              }) : ''
                          ) : ''
                          }

                        </TableBody>
                      </Table>
                    </div>
                  </Grid>
                  {/* </Grid> */}
                  {/* </Grid> */}
                  {/* </Dialog> */}
                </Grid>
              </Drawer>
            </Grid>
          </Grid>

        </div>


      </ div >

    )} ></Route>
  );

}

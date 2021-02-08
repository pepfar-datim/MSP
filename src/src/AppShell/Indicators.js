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
import { Route, useLocation, useHistory } from 'react-router-dom';
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
import Chip from '@material-ui/core/Chip';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InfoIcon from '@material-ui/icons/Info';
import TreeItem from '@material-ui/lab/TreeItem';
import GetAppIcon from '@material-ui/icons/GetApp';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { TiArrowSortedDown } from 'react-icons/ti';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
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
const indicatorGroups = getConfig().indicatorGroups;
const versionMap = getConfig().versionMap;

const ActionButtonLabel = styled.p`
    margin:0;
    padding:0;
    font-size: 0.9em;  
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
    padding: '20px',
    //minWidth: '200px'
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
    marginRight: '5px'
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
    paddingBottom: '2em'

  },
  chip: {
    marginTop: '5px',
    color: '#333333',
    /* backgroundColor: '#ffffff',*/
    fontSize: '12px'
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
  const [datatype, setDatatype] = useState(["All"]);
  const [denom, setDenom] = useState(["All"]);
  const [search, setSearch] = React.useState(""); // set the search query string which is triggered by the search key
  const [searchInputText, setSearchInputText] = useState(""); // set the search text which is triggered on text change
  const [compareInputText, setCompareInputText] = useState(""); // set the search DE to compare
  const queryIndicators = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?verbose=true&q=&concept_class=Reference+Indicator&limit=999&sortAsc=id';
  const [indicators, setIndicators] = useState([""]);
  const [indicatorsTemp, setIndicatorsTemp] = useState([""]);
  const [indicatorQuery, setIndicatorQuery] = useState("");
  const [indicatorGroupQuery, setIndicatorGroupQuery] = useState("");
  const [typeQuery, setTypeQuery] = useState("")
  const [hiddenDataSet, setHiddenDataSet] = useState(true)
  const [hiddenIndicator, setHiddenIndicator] = useState(true)

  let queryAllIndicators = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?verbose=true&q=&concept_class=Indicator&limit=' + rowsPerPage + '&page=' + (page + 1) + indicatorQuery + typeQuery + indicatorGroupQuery;
  let queryByDataType = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?verbose=true&q=&concept_class=Indicator&limit=' + rowsPerPage + '&page=' + (page + 1) + '&datatype=' + datatype + indicatorQuery + typeQuery + indicatorGroupQuery;

  let queryAllDenom = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?verbose=true&q=&concept_class=Indicator&limit=' + rowsPerPage + '&page=' + (page + 1) + indicatorQuery + typeQuery;
  let queryByDenom = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?verbose=true&q=&concept_class=Indicator&limit=' + rowsPerPage + '&page=' + (page + 1) + '&datatype=' + datatype + indicatorQuery + typeQuery + indicatorGroupQuery;

  let queryDataElementsAllPeriods = 'https://api.' + domain + '/orgs/' + org + '/collections/' + source + '/concepts/?verbose=true&q=&concept_class=Data+Element&limit=' + rowsPerPage + '&page=' + (page + 1) + indicatorQuery + typeQuery + indicatorGroupQuery;
  let queryIndicatorsByPeriod = 'https://api.' + domain + '/orgs/' + org + '/sources/MER/concepts/?verbose=true&q=&concept_class=Indicator&extras.Applicable+Periods=' + period + '&limit=' + rowsPerPage + '&page=' + (page + 1) + indicatorQuery + typeQuery + indicatorGroupQuery;

  const [collection, setCollection] = useState("");
  let queryByCodeList = 'https://api.' + domain + '/orgs/' + org + '/collections/' + collection + '/concepts/?concept_class=Data+Element&verbose=true&q=&limit=' + rowsPerPage + '&page=' + (page + 1) + indicatorQuery + typeQuery +indicatorGroupQuery;
  const [deloading, setDELoading] = useState(false);

  if (search && search !== "") {
    queryAllIndicators = queryAllIndicators + "&q=" + search;
    queryByDataType = queryByDataType + "&q=" + search;
    queryAllDenom = queryAllDenom + "&q=" + search;
    queryByDenom = queryByDenom + "&q=" + search;

    queryDataElementsAllPeriods = queryDataElementsAllPeriods + "&q=" + search;
    queryIndicatorsByPeriod = queryIndicatorsByPeriod + "&q=" + search;
    queryByCodeList = queryByCodeList + "&q=" + search;
  }

  let emptyMap = {};

  //get data-elements from context
  const [{ data_Elements, pdhDataElements, mohDataElements }] = useStateValue();
  const [dataElementsInitial, setDataElementsInitialData] = useState([]);
  var [dataElements, setDataElementsData] = useState([]);
  var [count, setCountOfValues] = useState(0);
  const [error, setError] = useState(null)
  const [errorDisplay, setErrorDisplay] = useState(null)


  const loadDataElementsByPeriod = async () => {
    setDELoading(true)
    try {
      const response = [];
      let queryToRun = ""
      if (values.denom === 'All') {
        if (values.datatype === 'All') {
          queryToRun = queryAllIndicators
        } else {
          queryToRun = queryByDataType
        }
      }
      else {
        queryToRun = queryByDenom
      }
      console.log("values " + JSON.stringify(values))
      if (values.fiscal !== 'All') {
        queryToRun = queryToRun + '&extras.Applicable+Periods=' + period
      }
      console.log(" queryToRun " + queryToRun)

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
      if (params.get('indicatorid')) {
        await getDataElement(params.get('indicatorid'))
        setDataElementDetail(de[params.get('indicatorid')]);
        setDetailPanel({ ...detailPanel, bottom: true });
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    loadDataElementsByPeriod();
  }, [queryAllIndicators, queryByDataType, queryIndicatorsByPeriod]);

  const loadDataElementsData = async () => {
    if (collection !== "" && values.dataSet !== "All") {
      console.log(" queryByCodeList " + queryByCodeList)
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
      // throw new Error(
      //   `Error when retrieving data element  ${e.message}`
      // );
    }
  }
  ///////////


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [comparePanel, setComparePanel] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [dropDownName, setDropDownName] = React.useState("");

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
    fiscal: localStorage.getItem("fiscal_ind") ? localStorage.getItem("fiscal_ind") : "All",
    indicator: localStorage.getItem("indicator_ind") ? localStorage.getItem("indicator_ind") : "All",
    datatype: localStorage.getItem("datatype") ? localStorage.getItem("datatype") : "All",
    denom: localStorage.getItem("denom") ? localStorage.getItem("denom") : "All",
    indicatorGroup: localStorage.getItem("indicatorGroup") ? localStorage.getItem("indicatorGroup") : "All",
    type: localStorage.getItem("type_ind") ? localStorage.getItem("type_ind") : "All"
  });

  const type = ["All", "Result", "Target"];
  const clearValues = event => {
    setValues(() => ({
      fiscal: "All",
      indicator: "All",
      datatype: "All",
      denom: "All",
      indicatorGroup: "All",
      type: "All"
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
      compareLink = '/indicators/compareIndicators?id1=' + dataElementDetail.id + '&id2=' + compareText + '&indicatorDetail=true'

    } else {
      compareLink = '/indicators/compareIndicators?id1=' + dataElementDetail.id + '&id2=' + dataElementToCompare + '&indicatorDetail=true'
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

    let t = values.datatype
    let y = values.fiscal
    let i = values.indicator
    let rt = values.type
    let ig = values.indicatorGroup
    setValues({
      fiscal: y,
      indicator: i,
      datatype: t,
      denom: "All",
      type: rt,
      indicatorGroup: ig
    })
    setDatatype(t);
    console.log("datatype " + datatype)
    localStorage.setItem("datatype", values.datatype);
  }, [values.datatype]);

  //when denom changes
  useEffect(() => {
    setDataElementsData([])
    setCountOfValues(0)

    let y = values.fiscal
    let d = values.denom
    let t = values.datatype
    let i = values.indicator
    let rt = values.type
    let ig = values.indicatorGroup
    setValues({
      fiscal: y,
      indicator: i,
      datatype: t,
      denom: d,
      type: rt,
      indicatorGroup: ig
    })
    if (values.denom === "All") {
      if (values.datatype === "All") {
        setDatatype("")
      }
      else {
        setDatatype(t)
      }
    }
    else if (values.denom === "Yes") {
      setDatatype('"Percentage,Ratio"')
    }
    else {
      setDatatype("Number")
    }
    console.log(" displaying " + dataElements.length + " results")
    localStorage.setItem("denom", values.denom);
  }, [values.denom]);

  //when data set changes
  useEffect(() => {
    setDataElementsData([])
    setCountOfValues(0)

    let year = values.fiscal
    let dt = values.datatype
    let de = values.denom
    let i = values.indicator
    let rt = values.type
    let ig = values.indicatorGroup
    setValues({
      fiscal: year,
      indicator: i,
      datatype: dt,
      denom: de,
      type: rt,
      indicatorGroup: ig
    })
    if (values.fiscal === "All") {
      setPeriod("")
    }
    else {
      setPeriod("FY" + (values.fiscal + "").substring(2, 4));

    }
    localStorage.setItem("fiscal_ind", values.fiscal);
  }, [values.fiscal]);

  //when indicator changes
  useEffect(() => {
    if (values.indicator === "All") {
      setIndicatorQuery("")
    }
    else {
      setIndicatorQuery("&extras.indicator=" + values.indicator)
    }
    localStorage.setItem("indicator_ind", values.indicator);
  }, [values.indicator]);

//when indicator group changes
useEffect(() => {
  if (values.indicatorGroup === "All") {
    setIndicatorGroupQuery("")
  }
  else {
    setIndicatorGroupQuery("&extras.indicatorGroups.id=" + indicatorGroups[values.indicatorGroup])
  }
  localStorage.setItem("indicatorGroup", values.indicatorGroup);
}, [values.indicatorGroup]);

  //when type changes
  useEffect(() => {
    if (values.type === "All") {
      setTypeQuery("")
    }
    else {
      setTypeQuery("&extras.resultTarget=" + values.type)
    }
    localStorage.setItem("type_ind", values.type);
  }, [values.type]);

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
          if (Object(deMappings[id])[key].map_type === 'Derived From') {
            const derivationId = Object(deMappings[id])[key].to_concept_code
            if (derivationId === id) {
              let from_concept_url = Object(deMappings[id])[key].from_concept_url
              if (from_concept_url.endsWith('/')) {
                from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
              }
              let arr = from_concept_url.split('/')
              derivationId = arr[arr.length - 1]
            }
            if (!deMappings[derivationId]) {
              queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/' + derivationId + '/?includeMappings=true&includeInverseMappings=true';
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
        }
      )
    } catch (e) {
      console.log("error:" + e);
      setError(e.message);
    }


  };

  async function getDataElement(id) {
    const queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/' + id + '/?includeMappings=true&includeInverseMappings=true';
    console.log(" queryByDataElement " + queryMapping)

    try {
      let options = {
        uri: queryMapping
      }
      const response = await fetch(queryMapping);
      if (!response.ok) {
        console.log(response);
        setErrorDisplay("Failed to fetch")
        throw new Error(
          `Error when retrieving data element mappings ${response.status} ${response.statusText}`
        );
      }

      const jsonData = await response.json();
      console.log("jsonData " + jsonData)
      de[id] = jsonData;
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
      !de[dataElement.id] ? getDataElement(dataElement.id) : '';
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

  const performDownload = event => {
    let downloadURL = "";
    if (downloadValue.trim() === 'OCL') {
      let UIDs = ''
      Object.values(selectedDataElement).map(value => {
        console.log(value)
        UIDs = UIDs + '"' + value + '"OR'
      }
      )
      UIDs = UIDs.substring(0, UIDs.length - 2)
      downloadURL = 'https://api.' + domain + '/orgs/' + org + '/sources/MER/concepts/?paging=false&verbose=true&q=&limit=999&q=' + UIDs;
    }
    else {
      downloadURL = 'https://datim.org/api/indicators' + '.' + downloadValue.trim() + '?filter=id:in:[' + selectedDataElement.toString().trim() + ']&fields=*&paging=false'
    }
    console.log("downloadURL " + downloadURL)
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
        setDialogMessage("You cannot compare more than 3 indicators at a time")
      }
      else if (selectedDataElement.length < 2) {
        setDialogOpen(true);
        setDialogMessage("Please select 2-3 indicators")
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
        compareLink = '/indicators/compareIndicators?' + compareLink.substring(0, compareLink.length - 1)
        history.push(compareLink)
      }
    }
    else {
      setComparePanel({ ...comparePanel, [side]: open });
    }
  };

  const toggleDetailDrawer = (dataElement, side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDataElementDetail(dataElement);
    //setDetailPanel({ ...detailPanel, [side]: open });
    if (open) {
      history.push('/indicators/indicatorDetail?id=' + dataElement.id)
    }
    else {
      setShowLinked(false)
      history.push('/indicators')
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
  getCompareLabel
  function getDownloadLabel() {
    let downloadLabel = "Download";
    if (selectedDataElement.length > 0) {
      downloadLabel = "Download Selected Indicators";
    }
    else {
      downloadLabel = "Download Indicators"
    }
    return downloadLabel;
  }

  function getCompareLabel() {
    let downloadLabel = "Compare";
    if (selectedDataElement.length > 0) {
      downloadLabel = "Compare Selected Indicators";
    }
    else {
      downloadLabel = "Compare Indicators"
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


  const renderTree = (nodes) => (
    <TreeItem key={nodes.derived_category_option_combo[0].id} nodeId={nodes.derived_category_option_combo[0].id} label={nodes.derived_category_option_combo[0].name}>
      {Array.isArray(nodes.source_data_element_name) ? nodes.source_data_element_name.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <Route render={(history) => (
      <div>
        <div className={classes.container}>

          {/* hero section */}
          <Grid container alignItems="center" >
            {<Grid item xs={12} md={7} >
            </Grid>}

            <Grid item xs={12} md={5} justifycontent="flex-end" >
            </Grid>
          </Grid>
          {/* </div> */}
          
          <Grid container>
            {/* filters */}
            <Grid item xs={12} md={3}>

              <Shortcut ></Shortcut>
              <Paper className={classes.sidebar}>
                <div className={`${classes.container} ${classes.sidebarContainer}`}>
                  <h4 className={classes.sidebarTitle}>Indicator Filters</h4>
                  <form autoComplete="off">

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
                        {
                          versionMap.map(
                              item => <option key={item.year} value={item.year}>{`FY${(item.year).trim().substring(2,4)} (MER ${(item.version).substring(1,4)})`}</option>
                          )
                        }
                        </Select>
                      </FormControl>
                    </Grid>
                    {/* Reference indicator filter */}
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
                    {/* data type filter */}
                    <Grid item xs={12} className={classes.filter} >
                      <FormControl className={classes.formControl}>


                        <InputLabel htmlFor="datatype">Data Type</InputLabel>
                        <Select
                          native
                          value={values.datatype}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'datatype',
                            id: 'datatype',
                            classes: {
                              icon: classes.selectIcon
                            }
                          }}

                        >
                          <option value={'All'}>All</option>
                          <option value={'Number'}>Number</option>
                          <option value={'Ratio'}>Ratio</option>
                          <option value={'Percentage'} >Percentage</option>
                          {/* <option value={'MOH'} disabled>MOH</option> */}
                        </Select>
                      </FormControl>
                    </Grid>


                    {/* denominator filter */}
                    <Grid item xs={12} className={classes.filter} >
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="fiscal">Has Denominator</InputLabel>
                        <Select
                          native
                          value={values.denom}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'denom',
                            id: 'denom',
                            classes: {
                              icon: classes.selectIcon
                            }
                          }}

                        >
                          <option value={"All"}>All</option>
                          <option value={'Yes'}>Yes</option>
                          <option value={'No'} >No</option>
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* indicator groups filter */}
                    <Grid item xs={12} className={classes.filter}  >
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="type">Indicator Groups</InputLabel>
                        <Select size="3"
                          native
                          value={values.indicatorGroup}
                          onChange={handleFilterChange}
                          className={classes.select}
                          inputProps={{
                            name: 'indicatorGroup',
                            id: 'indicatorGroup',
                            classes: {
                              icon: classes.selectIcon
                            }

                          }}
                        >
                          <option value={"All"}>All</option>
                          {
                            Object.keys(indicatorGroups).map(key => <option key={Math.random()} >{key}</option>)
                          }
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* type filter */}
                    <Grid item xs={12} className={classes.filter}  >
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="type">Result/Target</InputLabel>
                        <Select size="3"
                          native
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
                          {
                            type.map(key => <option key={Math.random()} >{key}</option>)
                          }
                        </Select>
                      </FormControl>
                    </Grid>
                  </form>
                  <Button variant="outlined" onClick={clearValues} className={classes.filterButton}>
                    Reset Filters
                  </Button>
                </div>

              </Paper>
            </Grid>

            <Grid item xs={12} md={9} className={classes.dataElementContent}>

              {/* dashboard, including download, compare, select all buttons */}
              <div className={classes.tabDashboard}>
                <div>
                  <div style={{ flexDirection: 'row', display: 'flex' }} >
                    <div>
                      <Tooltip disableFocusListener title="Download">
                        <i>
                          <Button variant="outlined" className={classes.actionButton} onClick={dropDownMenu("download")} id="downloadButton"
                            disabled={selectedDataElement.length === 0 ? true : false} style={{ height: '48px', width: '80px', marginBottom: '10px' }}>
                            {/* <ActionButtonLabel> Download Indicators</ActionButtonLabel> */}
                            {
                              selectedDataElement.length === 0 ?
                                <GetAppIcon /> : <GetAppIcon style={{ color: '#1D5893' }} />
                            }
                          </Button></i></Tooltip></div>
                    <div >
                      <Tooltip disableFocusListener disableTouchListener title="Compare 2 or 3 Indicators">
                        <i >
                          <Button variant="outlined" className={classes.actionButton} disabled={selectedDataElement.length < 2 || selectedDataElement.length > 3 ? true : false}
                            onClick={toggleDrawer('bottom', true)}
                            id="comparisonButton" style={{ height: '48px', width: '80px', marginBottom: '10px' }}>
                            {/* <ActionButtonLabel> Compare Indicators</ActionButtonLabel> */}
                            {
                              selectedDataElement.length < 2 || selectedDataElement.length > 3 ?
                                <CompareArrowsIcon style={{ marginLeft: '2px' }} /> : <CompareArrowsIcon style={{ color: '#1D5893', marginLeft: '2px' }} />
                            }

                          </Button></i></Tooltip></div></div>
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
                        placeholder="Search Indicators"
                        inputProps={{ 'aria-label': 'search indicators' }}
                        id="inputSearch"
                        key="inputSearch"
                        onKeyDown={handleKeyPress}
                        onChange={handleSearchInputChange}
                        value={searchInputText}
                      />

                      <IconButton type="button" className={classes.searchButton} aria-label="search" id="searchButton" onClick={performSearch}  >
                        <SearchIcon />
                      </IconButton>
                    </Paper></div>
                </div>

                {/* <Button variant="outlined" className={classes.actionButton} onClick={selectAll} id="downloadButton">
                Select All
</Button> */}


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
                          <FormLabel component="legend" className={classes.formLegend}>From DATIM (Account Required)</FormLabel>
                          <RadioGroup aria-label="export" name="exportRadio" value={downloadValue} onChange={handleDownloadChange}>
                            <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="CSV" />} label="CSV" />
                            <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="JSON" />} label="JSON" />
                            <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="XML" />} label="XML" />
                          </RadioGroup>
                          <FormLabel component="legend" className={classes.formLegend}>From Open Concept Lab (OCL)</FormLabel>
                          <RadioGroup aria-label="export" name="exportRadio" value={downloadValue} onChange={handleDownloadChange}>
                            <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="OCL" />} label="JSON" />
                          </RadioGroup>
                          <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={performDownload}>
                            Download
                      </Button>
                        </FormGroup>
                      </FormControl> :

                      //  select popover panel
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
                  <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>Loading indicators ...</div>
                </div> : ([])
              }
              {/* data elements */}
              {/* {dataElements.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(dataElement => ( */}
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
                        // label="I acknowledge that I should stop the click event propagation"
                        />
                      </ListItemIcon>
                      <ListItemText >
                        <Grid container alignItems="center"
                          //justify="space-between"
                          spacing={1}>
                          <Grid item xs={12}  >
                            <Typography className={classes.heading}>
                              <Link href={"/indicators/indicatorDetail?id=" + dataElement.id} style={{ textDecoration: 'underline' }}>{dataElement.display_name}</Link>
                            </Typography>
                          </Grid>
                          <Grid item xs={2} md={3}>
                            <Tooltip disableFocusListener title="Click to copy UID">
                              <span className={classes.chip}
                                onClick={() => copyToClipboard(dataElement.id)}
                              >{"UID: " + dataElement.id}</span>
                            </Tooltip>
                          </Grid>
                          <Grid item xs={2} md={3} >
                            <span className={classes.chip}
                            >{"Source: DATIM"}</span></Grid>
                          <Grid item xs={2} md={3}>
                            <span className={classes.chip}
                            >{"Type: " + dataElement.concept_class}</span></Grid>
                          <Grid item xs={3} ></Grid>
                        </Grid>
                      </ListItemText>
                    </ListItem>,
                    <Divider variant="inset" component="li" />]

                  ))}
                </List>
              </ErrorBoundary>
              {/* </Parent> */}

              <table>
                <tbody>
                  <TableRow>

                    <TablePagination
                      rowsPerPageOptions={[10, 25, 50, 100]}
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
                          !de[datim.id] ? getDataElement(datim.id) : ''
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
                                  onClick={() => !de[datim.id] ? getDataElement(datim.id) : ''}
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
                                        <TableCell><strong>Result/Target</strong></TableCell>
                                        <TableCell>{datim.extras.resultTarget ? datim.extras.resultTarget : '--'}</TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>

                                  {/* <div className={`${classes.heroContainer} ${classes.compareRowColumn}`}>
                                Description: {(datim.descriptions) ? datim.descriptions[0].description : "Not Available"}<br />

                              </div> */}
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

                                          ) : (Object.keys(emptyMap).map(

                                          ))
                                        }
                                      </TableBody>
                                    </Table>
                                  </div>
                                  {/* )}></Route> */}
                                </ExpansionPanelDetails>
                              </ExpansionPanel>

                              {/* </div> */}




                              {/* PDH row */}
                              {/* 
                          <div className={PDH ? classes.compareRowColumn : classes.hide}>


                            {datim.pdh.length === 0 ? 'No matching PDH data element' : pdhDataElements.map(pdhDataElement => {
                              if ((datim.pdh).includes(pdhDataElement.uid)) {
                                return (
                                  <ExpansionPanel className={classes.expandPanel} key={Math.random()}>
                                    <ExpansionPanelSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel3b-content"
                                      id="panel3b-header"

                                    > */}
                              {/* <div className={classes.compareCardSummary}>
                                        <div className={classes.compareCardText}>PDH Data Element: </div>
                                        <div className={classes.compareCardName}>{pdhDataElement.name}</div>
                                        <div className={classes.compareCardText}>PDH Data Element UID: <strong>{pdhDataElement.uid}</strong></div>
                                        <div className={classes.compareCardText}>Derived Data Element? <strong>{pdhDataElement.derived}</strong></div>
                                      </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetail}>


                                      <Route render={({ history }) => (
                                        <div className={classes.tableContainer}>
                                          {/* data element Disaggregations */}
                              {/* <strong>PDH Disaggregations</strong>:<br />

                                          <Table className={classes.table} aria-label="simple table"> */}
                              {/* <TableHead>
                                              <TableRow>
                                                <TableCell>Disaggregations Name</TableCell>
                                                <TableCell>Disaggregations Code</TableCell>
                                              </TableRow>
                                            </TableHead>
                                            <TableBody>
                                              {
                                                Object.keys(Object(pdhDataElement.combos)).map(
                                                  key => <TableRow key={Math.random()}>
                                                    <TableCell component="th" scope="row">
                                                      {Object(pdhDataElement.combos)[key].name}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                      {Object(pdhDataElement.combos)[key].code}
                                                    </TableCell>
                                                  </TableRow>

                                                )
                                              }
                                            </TableBody>
                                          </Table>
                                        </div>)}></Route>
                                    </ExpansionPanelDetails>
                                  </ExpansionPanel>
                                )
                              }

                              return true;
                            })
                            }
                          </div> */}


                              {/* MOH row */}
                              {/* <div className={MOH ? classes.compareRowColumn : classes.hide}>

                            {datim.moh.length === 0 ? 'No matching MOH data element' : mohDataElements.map(mohDataElement => {
                              if ((datim.moh).includes(mohDataElement.uid)) {
                                return (
                                  <ExpansionPanel className={classes.expandPanel} key={Math.random()}>
                                    <ExpansionPanelSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel3b-content"
                                      id="panel3b-header"

                                    >
                                      <div className={classes.compareCardSummary}>
                                        <div className={classes.compareCardText}>MOH Data Element: </div>
                                        <div className={classes.compareCardName}>{mohDataElement.name}</div>
                                        <div className={classes.compareCardText}>MOH Data Element UID: <strong>{mohDataElement.uid}</strong></div>
                                        <div className={classes.compareCardText}>Derived Data Element? <strong>{mohDataElement.derived}</strong></div>
                                      </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetail}>


                                      <Route render={({ history }) => (
                                        <div className={classes.tableContainer}>
                                          {/* data element Disaggregations */}
                              {/* <strong>MOH Disaggregations</strong>:<br />

                                          <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                              <TableRow>
                                                <TableCell>Disaggregations Name</TableCell>
                                                <TableCell>Disaggregations Code</TableCell>
                                              </TableRow>
                                            </TableHead>
                                            <TableBody>
                                              {
                                                Object.keys(Object(mohDataElement.combos)).map(
                                                  key => <TableRow key={Math.random()}>
                                                    <TableCell component="th" scope="row">
                                                      {Object(mohDataElement.combos)[key].name}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                      {Object(mohDataElement.combos)[key].code}
                                                    </TableCell>
                                                  </TableRow>

                                                )
                                              }
                                            </TableBody>
                                          </Table>
                                        </div>)}></Route>
                                    </ExpansionPanelDetails>
                                  </ExpansionPanel>
                                )
                              }

                              return true;
                            })
                            }*/}
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

                  {/* <div className={classes.fixedTop}> */}

                  {/* <Grid container alignItems="center" justify="space-between"> */}
                  <Grid item xs={6}  >
                    <h2 className={classes.comparisonPanelTitle}>INDICATOR DETAILS</h2>
                  </Grid>
                  <Grid item xs={6}  >
                    <CloseIcon onClick={toggleDetailDrawer(dataElementDetail, 'bottom', false)} className={classes.closeComparePanel}>add_circle</CloseIcon>
                  </Grid>
                  {/* </Grid> */}
                  {/* comparison panel title */}
                  {/* <Dialog fullScreen open={detailsOpen} onClose={handleDetailsClose} 
                          TransitionComponent={Transition}
                          >
                            <AppBar className={classes.detailsDialogBar}>
                              <Toolbar>
                                <IconButton edge="start" color="inherit" onClick={handleDetailsClose} aria-label="close">
                                  <CloseIcon />
                                </IconButton>
                              </Toolbar>
                              </AppBar> */}
                  {/* <Grid container alignItems="center" justify="space-between"> */}
                  <Grid item xs={6}  >
                    {dataElementDetail ?
                      <Table className={classes.comboTable} style={{ marginRight: '20px' }} aria-label="simple table">
                        <TableBody>
                          <TableRow>
                            <TableCell><strong>Indicator Name</strong></TableCell>
                            <TableCell>{dataElementDetail.names[0] ? (dataElementDetail.names[0].name) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Short Name</strong></TableCell>
                            <TableCell>{dataElementDetail.names[1] ? (dataElementDetail.names[1].name) : '--'}</TableCell>
                          </TableRow>

                          <TableRow className={classes.comboTable}>
                            <TableCell><strong>Indicator Description</strong></TableCell>
                            <TableCell>{(dataElementDetail.descriptions) ? dataElementDetail.descriptions[0].description : "--"}</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell><strong>Numerator Description</strong></TableCell>
                            <TableCell>{dataElementDetail.extras.numeratorDescription ? (dataElementDetail.extras.numeratorDescription) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Denominator Description</strong></TableCell>
                            <TableCell>{dataElementDetail.extras.denominatorDescription ? (dataElementDetail.extras.denominatorDescription) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Numerator</strong></TableCell>
                            <TableCell>{dataElementDetail.extras.numerator ? (dataElementDetail.extras.numerator) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Denominator</strong></TableCell>
                            <TableCell>{dataElementDetail.extras.denominator ? (dataElementDetail.extras.denominator) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>UID</strong></TableCell>
                            <TableCell>{dataElementDetail.id ? (dataElementDetail.id) : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Source</strong></TableCell>
                            <TableCell>{'DATIM'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Indicator Type</strong></TableCell>
                            <TableCell>{dataElementDetail.datatype ? dataElementDetail.datatype : '--'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>Indicator Groups</strong></TableCell>
                            <TableCell>
                              {
                                dataElementDetail.extras.indicatorGroups ? (dataElementDetail.extras.indicatorGroups.length > 0 ? (Object.values(dataElementDetail.extras.indicatorGroups).map(

                                  value =>

                                    value.name + ", "

                                )
                                ) : '--') : '--'
                              }
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table> : ''}
                  </Grid>
                  {/* <Grid item xs={6}  > */}
                  <ErrorBoundary>
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
                            <div><InfoIcon fontSize='default' color="disabled"></InfoIcon><i style={{ color: '#8a8987' }}>Please enter an Indicator UID</i></div>
                          </div>

                        </div>
                        <div style={{ padding: '20px', marginLeft: '170px' }}>or select a linked data element below</div>
                      </div>
                      <div>
                        <Table className={classes.comboTable} style={{ marginLeft: '20px', maxWidth: '700px' }} aria-label="simple table">
                          <TableBody>
                            <TableRow>
                              <TableCell><strong>Linked Resources</strong></TableCell>
                              <TableCell></TableCell>
                            </TableRow>

                            {dataElementDetail ? (
                              (deMappings[dataElementDetail.id]) ? Object.keys(Object(deMappings[dataElementDetail.id])).map(

                                function (key) {
                                  if (deMappings[dataElementDetail.id][key].map_type === "Derived From") {
                                    let name = ''
                                    let code = ''
                                    let source = ''
                                    let type = ''
                                    if (deMappings[dataElementDetail.id][key].to_concept_code !== dataElementDetail.id) {
                                      name = Object(deMappings[dataElementDetail.id])[key].to_concept_name
                                      code = deMappings[dataElementDetail.id][key].to_concept_code
                                      source = de[deMappings[dataElementDetail.id][key].to_concept_code].extras.source
                                      type = de[deMappings[dataElementDetail.id][key].to_concept_code].concept_class
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
                                      console.log(name + code + source + type)
                                    }
                                    return (
                                      <TableRow>
                                        <TableCell component="th" scope="row" style={{ maxWidth: '300px' }}>
                                          <Grid container alignItems="center"
                                            //justify="space-between"
                                            spacing={2}>
                                            <Grid item xs={12}  >
                                              {name}
                                            </Grid>
                                            <Grid item xs={3}  >
                                              <Chip
                                                variant="outlined"
                                                size="small"
                                                style={{ marginTop: '10px' }}
                                                label={"UID: " + code}
                                                clickable
                                              /></Grid>
                                            <Grid item xs={3}  >
                                              <Chip
                                                variant="outlined"
                                                size="small"
                                                style={{ marginTop: '10px', marginLeft: '15px', backgroundColor: '#d8ebe0' }}
                                                label={"Source: " + source}
                                                clickable
                                              /></Grid>
                                            <Grid item xs={3}  >
                                              <Chip
                                                variant="outlined"
                                                size="small"
                                                style={{ marginTop: '10px', marginLeft: '15px', backgroundColor: '#c0b3c7' }}
                                                label={"Type: " + type}
                                                clickable
                                              /></Grid>
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
                  </ErrorBoundary>
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

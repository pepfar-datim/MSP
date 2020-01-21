import React, { useState, useEffect } from 'react';

import * as headings from '../Styles/Text';

import Breadcrumb from '../Components/Breadcrumb';


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
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { Route } from 'react-router-dom';
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




const useStyles = makeStyles(theme => ({
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
    paddingBottom: '20px'
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  chipContainer: {
    marginRight: '10px'
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
    minWidth: '200px'
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
  expansionPanelSummary: {
    borderBottom: '1px solid #C1A783',
    color: '#000000'
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
    margin: '0em',
    marginRight: '2em',
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
  panelDetails: {
    flexDirection: 'column'
  },
  comparePanelContainer: {
    maxWidth: '1200px',
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
      maxWidth: "85vw"
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
    }

  }




}));



export default function Codelist() {

  //****  Added for page pagination

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setExpanded(false);
  };
  const sortJSON = function (data, key, direction) {
    return data.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      if (direction === 'asc') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
      if (direction === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
      return true;
    });
  }

  const [init, setInit]= React.useState(true);
  const queryDataElements = 'https://api.staging.openconceptlab.org/orgs/PEPFAR-Test2/sources/MER-Test2/concepts/?verbose=true&conceptClass="Data+Element"&page=' + (page + 1) + "&limit=" + (rowsPerPage * (page + 2));
  //const queryDEsMappings = 'https://api.staging.openconceptlab.org/orgs/PEPFAR-Test2/sources/MER-Test2/concepts/?verbose=true&conceptClass="Data+Element"&includeMappings=true";
  let deMappings = {};
  let codeLists = {};
  let emptyMap = {};

  //get data-elements from context
  const [{ data_Elements, pdhDataElements, mohDataElements, codeList }] = useStateValue();

  //get code list
  function getCodeListMap(codeListJson) {
    var codeListMap = codeListJson.map(function (codeList) {
      //let codeLists = [];
      codeList.periods.map(function (period) {
        const year = "20" + period.substring(2, 4)
        if (!codeLists[year]) {
          let codeListArray = [];
          codeListArray.push(codeList.full_name);
          codeLists[year] = codeListArray;
        }
        else {
          let codeListArray = Array.from(codeLists[year]);
          codeListArray.push(codeList.full_name);
          codeLists[year] = codeListArray;
        }
      });
      return codeLists;
    }
    );
    )
    return codeLists;
  }
  useEffect(() => {
    getCodeListMap(codeList);

  })


  const [dataElementsInitial, setDataElementsInitialData] = useState([]);
  var [dataElements, setDataElementsData] = useState([]);
  const [error, setError] = useState(null)


  const loadDataElementsData = async () => {
    console.log("queryDataElements :" + queryDataElements);
    try {
      const response = await fetch(queryDataElements);
      if (!response.ok) {
        console.log(response);
        throw new Error(
          `Error when retrieving data elements ${response.status} ${response.statusText}`
        );
      }
      const jsonData = await response.json();
      if (!jsonData.length || jsonData.length === 0) {
        console.log("jsonData is empty");
        throw new Error(
          `Warning data elements data from OCL is emtpy. `
        );
      }
      setDataElementsInitialData(jsonData);
      var sortedData = sortJSON(jsonData, 'display_name', 'asc');

      //filter by default filters

      const temp = [];
      getCodeListMap(codeList);
      sortedData.map(data_Element => {
        const fy = data_Element.extras["Applicable Periods"].map(period =>
          "20" + period.substring(2, 4)
        );
        const ds = data_Element.extras["dataSets"].map(dataSet =>
          dataSet.name.split(": ")[1].includes(codeLists[values.fiscal][0]) ? codeLists[values.fiscal] : ""
        );
        if (
          fy.includes(new Date().getFullYear()) &&
          ds.includes(codeLists[values.fiscal][0])
        ) {
          temp.push(data_Element);
        }
      });
      setDataElementsData(temp);
    } catch (e) {
      console.log("error:" + e.message);
      setError(e.message);
    }
  }

  useEffect(() => {
    loadDataElementsData();
  }, [queryDataElements]);
  ///////////

  const [search, setSearch] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [comparePanel, setComparePanel] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [dropDownName, setDropDownName] = React.useState("");



  //initial filter state
  const [values, setValues] = React.useState({
    fiscal: new Date().getFullYear(),
    type: "",
    dataSet: "facility",
    source: "",
    frequency: ""
  });

  //clear all filter values
  // const clearValues = event => {
  //   setValues(()=>({
  //     fiscal: "",
  //     source: "",
  //     type: "", 
  //     dataSet: "",
  //     frequency: ""
  //   }));

  //   setDataElements(data);
  // }

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
    setExpanded(false);




  };


  //when value has changed, call useEffect function
  useEffect(() => {


    const tempDataElement = [];
    dataElements = dataElementsInitial;
    dataElements.map(data_Element => {
      const fy = data_Element.extras["Applicable Periods"].map(period =>
        "20" + period.substring(2, 4)
      );
      const ds = data_Element.extras["dataSets"].map(dataSet =>
        dataSet.name.split(": ")[1]
        // dataSet.name.includes("Facility") ? "facility" : "community"
      );

      if (
        fy.includes(values.fiscal) &&
        // (values.fiscal ==='2019' ? true : period === values.fiscal) &&
        //  (values.source ===''? true : data_Element.source === values.source) &&
        //  (values.type ==='' ? true: data_Element.type === values.type)&&
        //  (values.dataSet ===''? true : data_Element.dataSet === values.dataSet)
        ds.includes(values.dataSet.split(": ")[1])
        //(values.dataSet ==='Facility Based Code List'? true : data_Element.dataSet === values.dataSet) 
        //&&
        //  (values.frequency ==='' ? true: data_Element.frequency=== values.frequency)
      ) {
        tempDataElement.push(data_Element);
        return true;
      }

      return true;
    });

    setDataElementsData(tempDataElement);


  }, [values]);



  async function getMappings(id) {
    const queryMapping = 'https://api.staging.openconceptlab.org/orgs/PEPFAR-Test2/sources/MER-Test2/concepts/' + id + '/?includeMappings=true';

    try {
      const response = await fetch(queryMapping);
      if (!response.ok) {
        console.log(response);
        throw new Error(
          `Error when retrieving data element mappings ${response.status} ${response.statusText}`
        );
      }

      const jsonData = await response.json();
      // if (!jsonData.length || jsonData.length === 0) {
      //   console.log("jsonData is empty");
      //   throw new Error(
      //     `Warning data elements mapping data from OCL is emtpy. `
      //   );
      //}
      if (!deMappings[id]) {
        deMappings[id] = jsonData;
      }
      return deMappings;
    } catch (e) {
      console.log("error:" + e.message);
      setError(e.message);
    }


  };



  const [selectedDataElement, setSelectedDataElement] = React.useState([]);
  //implement comparison checkbox
  const handleCompareCheckbox = dataElement => event => {
    event.stopPropagation();
    //remove the element from the selected data element when unclick
    if (selectedDataElement.includes(dataElement.display_name)) {
      const newSelectedDataElement = selectedDataElement.filter(data => {
        return data !== dataElement.display_name;
      });
      setSelectedDataElement(newSelectedDataElement);
    } else {
      //add the element from the selected data element when click
      const newSelectedDataElement = [...selectedDataElement, dataElement.display_name];
      setSelectedDataElement(newSelectedDataElement);
    }


  };


  //check all, add/remove all data elements to/from the selected data element
  const selectAll = event => {
    if (selectedDataElement.length < dataElements.length) {
      const tempDataElement = [];
      dataElements.map(dataElement => {
        tempDataElement.push(dataElement.display_name);
        return true;
      })

      setSelectedDataElement(tempDataElement);
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
  const popOpen = Boolean(anchorEl);
  const popId = popOpen ? 'popover' : undefined;
  const popHandleClose = () => {
    setAnchorEl(null);
  };



  //download dropdown menu
  const [download, setDownload] = React.useState({
    HTML: true,
    JSON: false,
    CSV: false,
  });
  const handleDownloadChange = name => event => {
    setDownload({ ...download, [name]: event.target.checked });
  };
  //compare dropdown menu
  const [compare, setCompare] = React.useState({
    DATIM: true,
    PDH: false,
    MOH: false,
  });
  const handleCompareChange = name => event => {
    setCompare({ ...compare, [name]: event.target.checked });
  };

  const { HTML, JSON, CSV } = download;
  const { DATIM, PDH, MOH } = compare;




  //setup the comparison panel
  const [selectedDatim, setSelectedDatim] = React.useState([]);

  //when open the drawer
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setComparePanel({ ...comparePanel, [side]: open });

    const selectDataTemp = [];

    //get data element details of the selected data elements

    // eslint-disable-next-line array-callback-return
    console.log("toggleDrawer dataElements")
    console.log(dataElements)
    dataElements.map(dataElement => {
      console.log(dataElement)
      if (selectedDataElement.includes(dataElement.display_name)) {
        selectDataTemp.push(dataElement);
      }

    }

    )
    setSelectedDatim(selectDataTemp);


  };


  //set initial panel state and panel handle change function
  const [panel, setPanel] = React.useState(0);
  const handleChange = (event, newPanel) => {
    setPanel(newPanel);
  };





  //layout below

  return (
    <div>


      {/* <div>
        { 
          data &&
          data.length > 0 &&
          data.map(dataTemp => 
        <div key={dataTemp.id}>id:{dataTemp.external_id} -  name: {dataTemp.display_name}</div>)
        } 
      </div> */}



      <div className={classes.heroContainer}>
        <div className={classes.container}>
          <Breadcrumb></Breadcrumb>

          {/* hero section */}
          <Grid container alignItems="center" >
            <Grid item xs={12} md={7} >
              <headings.H1>Data Elements</headings.H1>
            </Grid>


            <Grid item xs={12} md={5} justifycontent="flex-end" >

              {/* search bar */}
              {/* <form 
       className={classes.searchForm}
       onSubmit={e => {
          e.preventDefault();
          const filteredDataElements = data_Elements.filter(dataElement => {
            if(search!==''){
            return (
              Object.values(dataElement).indexOf(search)>-1
            )}else{
              return(
                Object.values(dataElement)
              )
            }
          });

          setDataElements(filteredDataElements);
         
        }}>
       
      <TextField
       
        type="text"
        value={search}
        label="Search"
        variant="outlined"
        onChange={e =>{
          setSearch(e.target.value);
        }}
        InputLabelProps={{
          className: classes.floatingLabelFocusStyle
          }}
        className={classes.inputField}
        InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
       
      >
      
      
      </TextField>
       
     
      </form> */}

            </Grid>
          </Grid>


        </div>
      </div>









      <div className={classes.container}>
        <Grid container>


          {/* filters */}
          <Grid item xs={12} md={3}>
            <Paper className={classes.sidebar}>
              <div className={`${classes.container} ${classes.sidebarContainer}`}>


                <h4 className={classes.sidebarTitle}>Data Element Filters</h4>


                <form autoComplete="off">



                  {/* source filter */}


                  {/* <Grid item xs={12} className={classes.filter} >
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
    <option value={""} />
    <option value={'DATIM'}>DATIM</option>
    <option value={'PDH'} disabled>PDH</option>
    <option value={'MOH'} disabled>MOH</option>
  </Select>
</FormControl>
</Grid> */}


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
                        {/* <option value={""} /> */}
                        {

                          Object.keys(getCodeListMap(codeList)).map(

                              key => <option key={Math.random()} >{key}</option>
                          )
                        }
                        {/* <option value={'2020'}>2020</option>
                        <option value={'2019'} >2019</option>
                        <option value={'2018'}>2018</option> */}
                      </Select>
                    </FormControl>
                  </Grid>



                  {/* type filter */}
                  {/* <Grid item xs={12} className={classes.filter}  >
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="type">Type</InputLabel>
  <Select
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
    <option value={""} />
    <option value={'Results'}>Results</option>
    <option value={'Target'}>Target</option>
    <option value={'SIMS'}>SIMS</option>
  </Select>
</FormControl>
</Grid> */}




                  {/* data set filter */}
                  {/* <Grid item xs={12} className={advanced ? classes.filter : classes.hide}> */}
                  <Grid item xs={12} className={classes.filter}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="dataSet">Code List</InputLabel>
                      <Select
                        native
                        value={values.dataSet}
                        onChange={handleFilterChange}
                        className={classes.select}
                        inputProps={{
                          name: 'dataSet',
                          id: 'dataSet',
                          classes: {
                            icon: classes.selectIcon
                          }
                        }}

                      >
                        {/* <option value={""} /> */}
                        {Object.values(codeLists[values.fiscal]).map(

                          key => <option key={Math.random()} >{key}</option>
                        )
                        }
                        {/* <option value={'facility'}>Facility Based Code List</option>
                        <option value={'community'}>Community Based Code List</option> */}
                      </Select>
                    </FormControl>
                  </Grid>



                  {/* frequency filter */}
                  {/* <Grid item xs={12} className={advanced ? classes.filter : classes.hide} >
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
    <option value={""} />
    <option value={'quarterly'}>Quarterly</option>
    <option value={'semiAnnual'}>Semi-Annual</option>
    <option value={'annual'}>Annual</option>
  </Select>
</FormControl>
</Grid> */}


                </form>

                {/* filter functions */}
                {/* <Button onClick={displayAdvanced} className={classes.toggleFilters}>
      {advanced ? 'Less Filters' : 'More Filters'}
</Button> */}
                {/* <Button variant="outlined" onClick={clearValues} className={classes.filterButton}>
       Clear Filters
</Button> */}







              </div>

            </Paper>
          </Grid>

          <Grid item xs={12} md={9} className={classes.dataElementContent}>

            {/* dashboard, including download, compare, select all buttons */}
            <div className={classes.tabDashboard}>
              <div>
                <Button variant="outlined" className={classes.actionButton} onClick={dropDownMenu("download")} id="downloadButton">
                  {/* Download selected data elements */} Download Full Code List
</Button>
                {/* <Button variant="outlined" className={classes.actionButton} onClick={dropDownMenu("compare")} id="comparisonButton">
Compare selected data elements
</Button> */}
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
                        <FormLabel component="legend" className={classes.formLegend}>Data Format</FormLabel>
                        <FormControlLabel
                          control={<Checkbox checked={HTML} style={{ color: '#D55804' }} onChange={handleDownloadChange('HTML')} value="HTML" />}
                          label="HTML"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={CSV} style={{ color: '#D55804' }} onChange={handleDownloadChange('CSV')} value="CSV" />}
                          label="CSV"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox checked={JSON} style={{ color: '#D55804' }} onChange={handleDownloadChange('JSON')} value="JSON" />
                          }
                          label="JSON"
                        />
                        <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={() => console.log(download, dataElements)}>
                          Download DATA
          </Button>
                      </FormGroup>
                    </FormControl> :


                    //  compare popover panel
                    <FormControl component="fieldset" className={classes.popOver}>

                      <FormGroup>

                        <FormLabel component="legend" className={classes.formLegend}>Data Sources</FormLabel>
                        <FormControlLabel
                          control={<Checkbox checked={DATIM} style={{ color: '#D55804' }} onChange={handleCompareChange('DATIM')} value="DATIM" />}
                          label="DATIM" disabled
                        />
                        <FormControlLabel
                          control={<Checkbox checked={PDH} style={{ color: '#D55804' }} onChange={handleCompareChange('PDH')} value="PDH" />}
                          label="PDH"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox checked={MOH} style={{ color: '#D55804' }} onChange={handleCompareChange('MOH')} value="MOH" />
                          }
                          label="MOH"
                        />
                        <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={toggleDrawer('bottom', true)} >
                          COMPARE SOURCES
         </Button>
                      </FormGroup>
                    </FormControl>

                }




              </Popover>



            </div>

            {/* data elements */}
            {dataElements.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(dataElement => (
              <div key={dataElement.display_name}>
                <ExpansionPanel className={classes.dataelementContainer}
                  TransitionProps={{ unmountOnExit: true, mountOnEnter: true }}
                  onClick={() => getMappings(dataElement.id)}

                // defaultExpanded=false

                //expanded={false}
                >
                  {/* data elements summary */}
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.expansionPanelSummary}
                  >
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={handleCompareCheckbox(dataElement)}
                      onFocus={event => event.stopPropagation()}
                      control={<Checkbox />}
                      checked={selectedDataElement.includes(dataElement.display_name) ? true : false}
                    // label="I acknowledge that I should stop the click event propagation"
                    />
                    <Grid container alignItems="center" justify="space-between">




                      <Grid item xs={12} md={9} >
                        <Typography className={classes.heading}>
                          <strong>{dataElement.display_name}</strong>: {dataElement.category}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={3}>
                        <Typography>
                          <strong>Data Element UID</strong>: {dataElement.external_id}
                        </Typography></Grid>

                    </Grid>

                  </ExpansionPanelSummary>



                  {/* data elements details */}
                  <ExpansionPanelDetails
                    className={classes.expansionPanelDetails}
                  >
                    <Grid container>
                      <Grid item xs={12} className={classes.expansionPanelLeft}>
                        <Typography>

                          <strong>Description</strong>: {dataElement.descriptions[0].description}<br />
                          {/* <strong>Code</strong>: <NavLink to="/indicator" activeClassName="sidebarActive" className={classes.buttonNav}>
          {dataElement.indicatorCode}
          </NavLink> */}



                        </Typography>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                  <ExpansionPanel className={classes.dataElementContainer}
                    TransitionProps={{ unmountOnExit: true, mountOnEnter: true }}
                    onClick={() => getMappings(dataElement.id)}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={classes.expansionPanelSummary}
                    >
                      <Typography className={classes.heading}><strong>Disaggregations</strong></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expansionPanelDetails}>

                      <div className={classes.tableContainer} ></div>
                      <Grid item xs={12} className={classes.comboTable}>

                        <Route render={() => (
                          <div className={classes.tableContainer}>
                            {/* data element Disaggregations */}
                            {/* <strong>Disaggregations</strong>:<br /> */}

                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Disaggregations Name</TableCell>
                                  <TableCell>Disaggregations Code</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {
                                  (deMappings[dataElement.id]) ? Object.keys(Object(deMappings[dataElement.id].mappings)).map(

                                    key => <TableRow key={Math.random()}>
                                      <TableCell component="th" scope="row">
                                        {Object(deMappings[dataElement.id].mappings)[key].to_concept_name}
                                      </TableCell>
                                      <TableCell component="th" scope="row">
                                        {Object(deMappings[dataElement.id].mappings)[key].to_concept_code}
                                      </TableCell>
                                    </TableRow>

                                  ) : Object.keys(emptyMap).map(

                                  )
                                }
                              </TableBody>
                            </Table>

                            {/* open the formula panel */}
                            {/* <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.formulaButton}
        >
          <Typography className={classes.heading}>Formula</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails  className={classes.expansionPanelDetails}>

          <div className={classes.tableContainer} >
       
          {/* indicator tabs */}
                            {/*       <Tabs value={panel} onChange={handleChange} className={classes.tabContainer}  classes={{ indicator: classes.bigIndicator }}>
          <Tab label="HUMAN READABLE FORMAT" {...a11yProps(0)} />
          <Tab label="UID FORMAT" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={panel} index={0} className={classes.tabPanel}>
        <Table className={classes.table} aria-label="simple table">
        <TableBody>
        <TableRow key={Math.random()}>
           <TableCell component="th" scope="row">
          Numerator
           </TableCell> 
           <TableCell component="th" scope="row">
        {dataElement.Numerator}
           </TableCell> 
           </TableRow>

           <TableRow key={Math.random()}>
           <TableCell component="th" scope="row">
           Denominator
           </TableCell> 
           <TableCell component="th" scope="row">
           {dataElement.Denominator}
           </TableCell> 
           </TableRow>


          </TableBody>
        </Table>
        </TabPanel>

        <TabPanel value={panel} index={1} className={classes.tabPanel}>
        <Table className={classes.table} aria-label="simple table">
        <TableBody>
        <TableRow key={Math.random()}>
           <TableCell component="th" scope="row">
          Numerator
           </TableCell> 
           <TableCell component="th" scope="row">
        {dataElement.uidNumerator}
           </TableCell> 
           </TableRow>

           <TableRow key={Math.random()}>
           <TableCell component="th" scope="row">
           Denominator
           </TableCell> 
           <TableCell component="th" scope="row">
           {dataElement.uidDenominator}
           </TableCell> 
           </TableRow>


          </TableBody>
        </Table>
        </TabPanel>

        </div>
      
        </ExpansionPanelDetails>
      </ExpansionPanel> */}
                          </div>
                        )} />


                      </Grid>





                    </ExpansionPanelDetails>
                  </ExpansionPanel>



                </ExpansionPanel>
              </div>

            ))}
            <table>
              <tbody>
                <TableRow>

                  <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    labelDisplayedRows={({ from, to, count }) => `Displaying rows ${from}-${to}`}
                    // page={0}
                    // rowsPerPage={10}
                    // count={100}
                    // onChangePage={() => {}}
                    count={dataElements.length}
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

                  <div className={classes.fixedTop}>
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
                  {
                    selectedDatim.map(datim => {
                      return (
                        <div className={classes.compareRow} key={Math.random()}>
                          <div className={classes.compareRowColumn}>

                            <ExpansionPanel defaultExpanded className={classes.expandPanel}>
                              <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3b-content"
                                id="panel3b-header"

                              >
                                <div className={classes.compareCardSummary}>
                                  <div className={classes.compareCardText}>DATIM Data Element: </div>
                                  <div className={classes.compareCardName}>{datim.name}</div>
                                  <div className={classes.compareCardText}>DATIM UID: <strong>{datim.uid}</strong></div>
                                </div>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails className={classes.panelDetail}>


                                <Route render={({ history }) => (
                                  <div className={classes.tableContainer} key={Math.random()}>
                                    {/* data element Disaggregations */}
                                    <strong>Disaggregations</strong>:<br />

                                    <Table className={classes.table} aria-label="simple table">
                                      <TableHead>
                                        <TableRow>
                                          <TableCell>Disaggregations Name</TableCell>
                                          <TableCell>Disaggregations Code</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {
                                          Object.keys(Object(datim.combos)).map(
                                            key => <TableRow key={Math.random()}>
                                              <TableCell component="th" scope="row">
                                                {Object(datim.combos)[key].name}
                                              </TableCell>
                                              <TableCell component="th" scope="row">
                                                {Object(datim.combos)[key].code}
                                              </TableCell>
                                            </TableRow>

                                          )
                                        }
                                      </TableBody>
                                    </Table>
                                  </div>)}></Route>
                              </ExpansionPanelDetails>
                            </ExpansionPanel>
                          </div>




                          {/* PDH row */}

                          <div className={PDH ? classes.compareRowColumn : classes.hide}>


                            {datim.pdh.length === 0 ? 'No matching PDH data element' : pdhDataElements.map(pdhDataElement => {
                              if ((datim.pdh).includes(pdhDataElement.uid)) {
                                return (
                                  <ExpansionPanel className={classes.expandPanel} key={Math.random()}>
                                    <ExpansionPanelSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel3b-content"
                                      id="panel3b-header"

                                    >
                                      <div className={classes.compareCardSummary}>
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
                                          <strong>PDH Disaggregations</strong>:<br />

                                          <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
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
                          </div>



                          {/* MOH row */}
                          <div className={MOH ? classes.compareRowColumn : classes.hide}>

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
                                          <strong>MOH Disaggregations</strong>:<br />

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
                            }
                          </div>
                        </div>

                      )
                    })

                  }









                </Grid>


              </Grid>
            </Drawer>







          </Grid>
        </Grid>

      </div>


    </div>



  );

}




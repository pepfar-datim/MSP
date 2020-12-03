/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { getConfig } from '../config.js';
import { useHistory, useLocation } from "react-router";
import LinearProgress from '@material-ui/core/LinearProgress';
import Breadcrumb from './../Components/Breadcrumb';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: '#fcfcfc'
  },
  hide: {
    display: 'none'
  },
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    paddingTop: '30px',
    paddingLeft: '15px',
    paddingRight: '15px',
    flex: 1,
    marginBottom: '80px'
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
    minWidth: '200px'
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
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: '0 !important'
  },
  closeComparePanel: {
    float: 'right',
    margin: '1em',
    cursor: 'pointer',
    //padding: '10px',
    border: '1px solid #111111',
    //borderRadius: '50%',
    marginTop: 0
  },
  actionButton: {
    marginLeft: '20px',
    marginTop: '20px',
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
    paddingTop: '20px',
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
    textAlign: 'left',
    alignItems: 'center',
    borderBottom: 0,
    justifyContent: 'center',
    backgroundColor: '#062133'
  },
  compareRow: {
    //width: '100%',
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
    margin: '1em',
    marginBottom: '80px'
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
    padding: '6px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    border: '2px solid #D55804',
    /*borderColor: `'#D55804' !important`,
    borderWidth: '2px',*/
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
    },
    gridList: {
      width: 300
    }

  }




}));
export default function Compare() {
  //const BrowserHistory = require('react-router/lib/BrowserHistory').default;
  const classes = useStyles();
  const domain = getConfig().domain;
  const org = getConfig().org;
  const version = getConfig().source;
  let history = useHistory()
  const params = new URLSearchParams(useLocation().search)

  let deMappings = {}
  let de = {}
  let dataElements = {}
  const [selectedDatim, setSelectedDatim] = React.useState([])
  const [mappings, setMappings] = React.useState([])
  const [dataElementMatrix, setDataElementMatrix] = React.useState({})

  useEffect(() => {
    async function loadData() {
      let tempDEs = []
      for (let i = 1; i <= [...params.keys()].length; i++) {
        if (params.get('id' + i)) {
          await getMappings(params.get('id' + i))
        }
        if (de[params.get('id' + i)]) {
          tempDEs.push(de[params.get('id' + i)])
        }

      }

      
      if (tempDEs.length > 1) {
        if (tempDEs[0].concept_class != tempDEs[1].concept_class) {
          setErrorDisplay('Unable To Compare Data Elements to Indicators')
          deMappings = {}
          throw new Error('Unable To Compare Data Elements to Indicators')
        }
      }
      setSelectedDatim(tempDEs);
      setMappings(deMappings);

      Object.values(tempDEs).map(
        value => {
          if (dataElements['Short Name']) {
            let shortNames = Array.from(dataElements['Short Name'])
            shortNames.push(value.names[1] ? (value.names[1].name) : "--")
            dataElements['Short Name'] = shortNames
          } else {
            let shortNames = []
            shortNames.push(value.names[1] ? (value.names[1].name) : "--")
            dataElements['Short Name'] = shortNames
          }
          if (dataElements['Code']) {
            let codes = Array.from(dataElements['Code'])
            codes.push(value.names[2] ? (value.names[2].name) : "--")
            dataElements['Code'] = codes
          } else {
            let codes = []
            codes.push(value.names[2] ? (value.names[2].name) : "--")
            dataElements['Code'] = codes
          }
          if (dataElements['Description']) {
            let descriptions = Array.from(dataElements['Description'])
            descriptions.push(value.descriptions ? value.descriptions.description : "--")
            dataElements['Description'] = descriptions
          } else {
            let descriptions = []
            descriptions.push(value.descriptions ? value.descriptions.description : "--")
            dataElements['Description'] = descriptions
          }
          if (dataElements['UID']) {
            let ids = Array.from(dataElements['UID'])
            ids.push(value.id ? value.id : "--")
            dataElements['UID'] = ids
          } else {
            let ids = []
            ids.push(value.id ? value.id : "--")
            dataElements['UID'] = ids
          }
          if (dataElements['Source']) {
            let ids = Array.from(dataElements['Source'])
            ids.push(value.extras ? value.extras.source : "--")
            dataElements['Source'] = ids
          } else {
            let ids = []
            ids.push(value.extras ? value.extras.source : "--")
            dataElements['Source'] = ids
          }
          if (dataElements['Type']) {
            let ids = Array.from(dataElements['Type'])
            ids.push(value.concept_class ? value.concept_class : "--")
            dataElements['Type'] = ids
          } else {
            let ids = []
            ids.push(value.concept_class ? value.concept_class : "--")
            dataElements['Type'] = ids
          }
          if (dataElements['Indicator']) {
            let ids = Array.from(dataElements['Indicator'])
            ids.push(value.extras.indicator ? value.extras.indicator : "--")
            dataElements['Indicator'] = ids
          } else {
            let ids = []
            ids.push(value.extras.indicator ? value.extras.indicator : "--")
            dataElements['Indicator'] = ids
          }
          if (dataElements['Data Type']) {
            let types = Array.from(dataElements['Data Type'])
            types.push(value.datatype ? value.datatype : "--")
            dataElements['Data Type'] = types
          } else {
            let types = []
            types.push(value.datatype ? value.datatype : "--")
            dataElements['Data Type'] = types
          }
          if (dataElements['Domain Type']) {
            let types = Array.from(dataElements['Domain Type'])
            types.push(value.extras.domainType ? value.extras.domainType : "--")
            dataElements['Domain Type'] = types
          } else {
            let types = []
            types.push(value.extras.domainType ? value.extras.domainType : "--")
            dataElements['Domain Type'] = types
          }
          if (dataElements['Value Type']) {
            let types = Array.from(dataElements['Value Type'])
            types.push(value.extras.valueType ? value.extras.valueType : "--")
            dataElements['Value Type'] = types
          } else {
            let types = []
            types.push(value.extras.valueType ? value.extras.valueType : "--")
            dataElements['Value Type'] = types
          }
          if (dataElements['Aggregation Type']) {
            let types = Array.from(dataElements['Aggregation Type'])
            types.push(value.extras.aggregationType ? value.extras.aggregationType : "--")
            dataElements['Aggregation Type'] = types
          } else {
            let types = []
            types.push(value.extras.aggregationType ? value.extras.aggregationType : "--")
            dataElements['Aggregation Type'] = types
          }
          if (dataElements['Applicable Periods']) {
            let types = Array.from(dataElements['Applicable Periods'])
            types.push(
              value.extras['Applicable Periods'] ? (value.extras['Applicable Periods'].length > 0 ? (Object.keys(value.extras['Applicable Periods']).map(

                key =>
                key != value.extras['Applicable Periods'].length - 1 ?
                value.extras['Applicable Periods'][key] + ", "
                : value.extras['Applicable Periods'][key]
              )
              ) : "--") : "--")
            dataElements['Applicable Periods'] = types
          } else {
            let types = []
            types.push(
              value.extras['Applicable Periods'] ? (value.extras['Applicable Periods'].length > 0 ? (Object.keys(value.extras['Applicable Periods']).map(

                key =>
                key != value.extras['Applicable Periods'].length - 1 ?
                value.extras['Applicable Periods'][key] + ", "
                : value.extras['Applicable Periods'][key]
              )
              ) : "--") : "--")
            dataElements['Applicable Periods'] = types
          }
          if (dataElements['Display Name']) {
            let types = Array.from(dataElements['Display Name'])
            types.push(value.display_name)
            dataElements['Display Name'] = types
          } else {
            let types = []
            types.push(value.display_name)
            dataElements['Display Name'] = types
          }
        }
      )
      setDataElementMatrix(dataElements)
    }
    loadData();

  }, [])

  const loadMappings = async function () {
    let tempDEs = []
    for (let i = 1; i <= [...params.keys()].length; i++) {
      if (params.get('id' + i)) {
        await getMappings(params.get('id' + i))
      }
      if (de[params.get('id' + i)]) {
        tempDEs.push(de[params.get('id' + i)])
      }
      setSelectedDatim(tempDEs)
    }
  }
  const table = function () {
    //!deMappings[datim.id] ? getMappings(datim.id) : ''
    return (
      <div className={classes.compareRowColumn}>
        {deloading ?
          <div>
            <LinearProgress mode="indeterminate" />
            <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>Loading data elements ...</div>
          </div> :
          (
            <div className={classes.compareRowColumn} key={Math.random()}>
              
              <ExpansionPanel className={classes.expandPanel}>
                <ExpansionPanelSummary
                  //expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3b-content"
                  id="panel3b-header"
                // onClick={() =>loadMappings()}
                >
{ selectedDatim.length > 0 ?
                  <Table className={classes.comboTable} aria-label="simple table">
                    {Object.keys(dataElementMatrix) == 2 ?
                      <colgroup>
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '45%' }} />
                        <col style={{ width: '45%' }} />
                      </colgroup> :
                      <colgroup>
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '30%' }} />
                        <col style={{ width: '30%' }} />
                        <col style={{ width: '30%' }} />
                      </colgroup>}
                    <TableBody>
                      <TableRow><TableCell></TableCell>
                        {dataElementMatrix['Display Name'] ? (dataElementMatrix['Display Name']).map(
                          name =>
                            <TableCell>
                              <div className={`${classes.compareTitleColumn} ${classes.fixedTop}`}>
                                {name}
                              </div></TableCell>   
                        ) : ''}
                      </TableRow>
                      {Object.keys(dataElementMatrix).map(
                        key =>
                          <TableRow>
                            <TableCell><strong>{key}</strong></TableCell>
                            {Object.values(dataElementMatrix[key]).map(value =>
                              <TableCell>{value}</TableCell>
                            )}
                          </TableRow>
                      )
                      }
                      <TableRow key={Math.random()} style={{ verticalAlign: 'top' }}>
                        <TableCell></TableCell>
                        <TableCell style={{ textAlign: 'right' }}><h3><strong>Disaggregations</strong></h3></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow><TableCell></TableCell>
                        {dataElementMatrix['Display Name'] ? (dataElementMatrix['Display Name']).map(
                          name =>
                            <TableCell>
                              <div className={`${classes.compareTitleColumn} ${classes.fixedTop}`}>
                                {name}
                              </div></TableCell>
                        ) : ''}
                      </TableRow>
                      <TableRow key={Math.random()} style={{ verticalAlign: 'top' }}>
                        <TableCell></TableCell>
                        {selectedDatim.map(datim =>
                          <TableCell>
                            <TableRow >
                              <TableCell><strong>Name</strong></TableCell>
                              <TableCell><strong>Code</strong></TableCell>
                            </TableRow>
                            {(mappings[datim.id]) ? Object.keys(Object(mappings[datim.id])).map(

                              key =>
                                Object(mappings[datim.id])[key].map_type === 'Has Option' ? (


                                  <TableRow key={Math.random()} >
                                    <TableCell component="th" scope="row">
                                      {Object(mappings[datim.id])[key].to_concept_name}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                      {Object(mappings[datim.id])[key].to_concept_code}
                                    </TableCell>
                                  </TableRow>

                                ) : ''
                            ) : ''}
                          </TableCell>
                        )}
                      </TableRow>
                    </TableBody>
                  </Table>: ''}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.panelDetail}>


                </ExpansionPanelDetails>
              </ExpansionPanel> 
            </div>
          )}
      </div>
    )
  }
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  const [errorDisplay, setErrorDisplay] = useState(null)
  const [error, setError] = useState(null)
  const [deloading, setDELoading] = useState(false);

  const sortJSONByKey = function (data, key, direction) {
    if (data)
      return data.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        if (direction === 'asc') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (direction === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        return true;
      });
  }

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const goBack = () => {
    // if (params.get('dataElementDetail')) {
    //   history.push('/dataElementDetail?id=' + params.get('id1'))
    // } else {
    history.goBack()
    //}
  }
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
  // render() {

  async function getMappings(id) {
    setDELoading(true)
    let queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/' + id + '/?includeMappings=true&includeInverseMappings=true';
    console.log(" queryByDataElement " + queryMapping)

    try {
      const response = await fetch(queryMapping);
      if (!response.ok) {
        console.log(response);
        setErrorDisplay("Failed to fetch")
        throw new Error(
          `Error when retrieving data element mappings for ${id} ${response.status} ${response.statusText}`
        );
      }

      const jsonData = await response.json();
      let sortedData = sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
      if (!deMappings[id]) {
        deMappings[id] = sortedData;
      }
      if (!de[id]) {
        de[id] = jsonData
      }
      setDELoading(false)
      // if the data element has linkages, retrieve those as well
      // Object.keys(Object(deMappings[id])).map(

      //   async function (key) {
      //     if (Object(deMappings[id])[key].map_type === 'Derived From') {
      //       const derivationId = Object(deMappings[id])[key].to_concept_code
      //       if (derivationId === id) {
      //         let from_concept_url = Object(deMappings[id])[key].from_concept_url
      //         if (from_concept_url.endsWith('/')) {
      //           from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
      //         }
      //         let arr = from_concept_url.split('/')
      //         derivationId = arr[arr.length - 1]
      //       }
      //       if (!deMappings[derivationId]) {
      //         queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/' + derivationId + '/?includeMappings=true&includeInverseMappings=true';
      //         response = await fetch(queryMapping);
      //         if (!response.ok) {
      //           console.log(response);
      //           setErrorDisplay("Failed to fetch")
      //           throw new Error(
      //             `Error when retrieving data element mappings for ${derivationId} ${response.status} ${response.statusText}`
      //           );
      //         }
      //         jsonData = await response.json()
      //         sortedData = sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
      //         deMappings[derivationId] = sortedData
      //         if (!de[derivationId]) {
      //           de[derivationId] = jsonData
      //         }
      //       }
      //     }
      //   }
      // )
    } catch (e) {
      console.log("error:" + e.message);
      setError(e.message);
      setErrorDisplay(e.message);
      setDialogMessage(e.message)
    }


  };


  return (
    <ErrorBoundary>
      <div className={classes.container} >

        <div className={classes.fixedTop}>
          <Grid container >
            <Grid xs={4}>
              <Breadcrumb></Breadcrumb>
            </Grid>
            <Grid xs={4}>
              <h2 className={classes.comparisonPanelTitle}>COMPARE DATA ELEMENTS</h2>                        </Grid>
            <Grid xs={4}>
              <Button onClick={goBack} color="primary" variant="outlined" className={`${classes.actionButton} ${classes.closeComparePanel}`}
                id="backButton"> Back</Button>
            </Grid>
          </Grid>
        </div>
        {errorDisplay !== null ?
          <div className={classes.errorMessage}>{errorDisplay}</div>
          : null}

        {/* datim row */}

        <div className={classes.compareRow} >

          {
            table()
          }

        </div>
      </div>
    </ErrorBoundary>
  );
}
//}
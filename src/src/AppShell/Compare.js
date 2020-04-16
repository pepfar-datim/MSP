import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Route, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { getConfig } from '../config.js';
import { useHistory, useLocation } from "react-router";

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
    textAlign: 'center',
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
  const [selectedDatim, setSelectedDatim] = React.useState([])
  const [mappings, setMappings] = React.useState([])

  useEffect(() => {
    async function loadData() {
      let tempDEs = []
      for (let i = 1; i <= [...params.keys()].length; i++) {
        if(params.get('id' + i)){
        await getMappings(params.get('id' + i))
        }
        if (de[params.get('id' + i)]) {
          tempDEs.push(de[params.get('id' + i)])
        }

      }
      Object.keys(deMappings).map(
        key => {
          console.log(key)
        })
      setSelectedDatim(tempDEs);
      setMappings(deMappings);
    }
    loadData();

  }, [])


  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  const [errorDisplay, setErrorDisplay] = useState(null)
  const [error, setError] = useState(null)


  const sortJSONByKey = function (data, key, direction) {
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
    console.log("params.get('dataElementDetail') " + params.get('dataElementDetail'))
    if(params.get('dataElementDetail')){
      history.push('/codelist?dataElementid=' + params.get('id1'))
    }else{
    history.goBack()
    }
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
    //setExpanded(true);
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
                  `Error when retrieving data element mappings for ${derivationId} ${response.status} ${response.statusText}`
                );
              }
              jsonData = await response.json()
              sortedData = sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
              deMappings[derivationId] = sortedData
              if (!de[derivationId]) {
                de[derivationId] = jsonData
              }
            }
          }
        }
      )
    } catch (e) {
      console.log("error:" + e.message);
      setError(e.message);
      setErrorDisplay(e.message);
      setDialogMessage(e.message)
    }


  };
  return (
      <ErrorBoundary>
          <Grid container >
            <Grid item xs={12}>

              {/* <div className={classes.fixedTop}> */}
              <div >
                {/* <NavLink to="/codelist"> */}
                <Button onClick={goBack} color="primary" variant="outlined" className={`${classes.actionButton} ${classes.closeComparePanel}`}
                  id="backButton"> Back</Button>
                {/* </NavLink> */}
                <h2 className={classes.comparisonPanelTitle}>DATA ELEMENT COMPARISON</h2>
                {/* comparison panel title */}
                {/* <div className={classes.compareTitle}>
                  {DATIM ? <div className={classes.compareTitleColumn}>DATIM</div> : ''}
                  {PDH ? <div className={classes.compareTitleColumn}>PDH</div> : ''}
                  {MOH ? <div className={classes.compareTitleColumn}>MOH</div> : ''}
                </div> */}
              </div>

              {errorDisplay !== null ?
                <div className={classes.errorMessage}>{errorDisplay}</div>
                : null}

              {/* datim row */}

              <div className={classes.compareRow} >

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
                                  <TableCell>{datim.names[1] ? (datim.names[1].name) : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Code</strong></TableCell>
                                  <TableCell>{datim.names[2] ? (datim.names[2].name) : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow className={classes.comboTable}>
                                  <TableCell><strong>Description</strong></TableCell>
                                  <TableCell>{(datim.descriptions) ? datim.descriptions[0].description : "N/A"}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>UID</strong></TableCell>
                                  <TableCell>{datim.id ? (datim.id) : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Source</strong></TableCell>
                                  <TableCell>{datim.extras.source ? (datim.extras.source) : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Data Type</strong></TableCell>
                                  <TableCell>{datim.datatype ? (datim.datatype) : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Domain Type</strong></TableCell>
                                  <TableCell>{datim.extras.domainType ? (datim.extras.domainType) : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Value Type</strong></TableCell>
                                  <TableCell>{datim.extras.valueType ? (datim.extras.valueType) : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Aggregation Type</strong></TableCell>
                                  <TableCell>{datim.extras.aggregationType ? (datim.extras.aggregationType) : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Applicable Periods</strong></TableCell>
                                  <TableCell>
                                    {
                                      datim.extras['Applicable Periods'] ? (datim.extras['Applicable Periods'].length > 0 ? (Object.keys(datim.extras['Applicable Periods']).map(

                                        key =>

                                          datim.extras['Applicable Periods'][key] + ", "

                                      )
                                      ) : 'N/A') : 'N/A'
                                    }
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Result/Target</strong></TableCell>
                                  <TableCell>{datim.extras.resultTarget ? datim.extras.resultTarget : 'N/A'}</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>

                            {/* <div className={`${classes.heroContainer} ${classes.compareRowColumn}`}>
                Description: {(datim.descriptions) ? datim.descriptions[0].description : "Not Available"}<br />

              </div> */}
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails className={classes.panelDetail}>


                            <Route render={({ history }) => (
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
                                      (mappings[datim.id]) ? Object.keys(Object(mappings[datim.id])).map(

                                        key =>
                                          <TableRow key={Math.random()}>
                                            <TableCell component="th" scope="row">
                                              {Object(mappings[datim.id])[key].to_concept_name}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                              {Object(mappings[datim.id])[key].to_concept_code}
                                            </TableCell>
                                          </TableRow>
                                      ) : ''
                                    }
                                  </TableBody>
                                </Table>
                              </div>
                            )}></Route>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Grid container >
                          <div></div>
                        </Grid>
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

              </div>
            </Grid>


          </Grid>
      </ErrorBoundary>
  );
}
//}
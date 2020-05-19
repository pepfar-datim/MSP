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
          await getDataElement(params.get('id' + i))
        }
        if (de[params.get('id' + i)]) {
          tempDEs.push(de[params.get('id' + i)])
        }

      }

      setSelectedDatim(tempDEs);
      Object.values(tempDEs).map(
        value => {
          if (dataElements['Indicator Name']) {
            let shortNames = Array.from(dataElements['Indicator Name'])
            shortNames.push(value.names[0] ? (value.names[0].name) : '--')
            dataElements['Indicator Name'] = shortNames
          } else {
            let shortNames = []
            shortNames.push(value.names[0] ? (value.names[0].name) : '--')
            dataElements['Indicator Name'] = shortNames
          }
          if (dataElements['Short Name']) {
            let codes = Array.from(dataElements['Short Name'])
            codes.push(value.names[1] ? (value.names[1].name) : '--')
            dataElements['Short Name'] = codes
          } else {
            let codes = []
            codes.push(value.names[1] ? (value.names[1].name) : '--')
            dataElements['Short Name'] = codes
          }
          if (dataElements['Indicator Description']) {
            let descriptions = Array.from(dataElements['Indicator Description'])
            descriptions.push(value.descriptions ? value.descriptions[0].description : "--")
            dataElements['Indicator Description'] = descriptions
          } else {
            let descriptions = []
            descriptions.push(value.descriptions ? value.descriptions[0].description : "--")
            dataElements['Indicator Description'] = descriptions
          }
          if (dataElements['Numerator Description']) {
            let ids = Array.from(dataElements['Numerator Description'])
            ids.push(value.extras ? value.extras.numeratorDescription : "--")
            dataElements['Numerator Description'] = ids
          } else {
            let ids = []
            ids.push(value.extras.numeratorDescription ? value.extras.numeratorDescription : "--")
            dataElements['Numerator Description'] = ids
          }
          if (dataElements['Denominator Description']) {
            let ids = Array.from(dataElements['Denominator Description'])
            ids.push(value.extras ? value.extras.denominatorDescription : "--")
            dataElements['Denominator Description'] = ids
          } else {
            let ids = []
            ids.push(value.extras ? value.extras.denominatorDescription : "--")
            dataElements['Denominator Description'] = ids
          }
          if (dataElements['Numerator']) {
            let types = Array.from(dataElements['Numerator'])
            types.push(value.extras ? value.extras.numerator : "--")
            dataElements['Numerator'] = types
          } else {
            let types = []
            types.push(value.extras ? value.extras.numerator : "--")
            dataElements['Numerator'] = types
          }
          if (dataElements['Denominator']) {
            let types = Array.from(dataElements['Denominator'])
            types.push(value.extras ? value.extras.denominator : "--")
            dataElements['Denominator'] = types
          } else {
            let types = []
            types.push(value.extras ? value.extras.denominator : "--")
            dataElements['Denominator'] = types
          }
          if (dataElements['UID']) {
            let types = Array.from(dataElements['UID'])
            types.push(value.id ? value.id : "--")
            dataElements['UID'] = types
          } else {
            let types = []
            types.push(value.id ? value.id : "--")
            dataElements['UID'] = types
          }
          if (dataElements['Source']) {
            let types = Array.from(dataElements['Source'])
            types.push('DATIM')
            dataElements['Source'] = types
          } else {
            let types = []
            types.push('DATIM')
            dataElements['Source'] = types
          }
          if (dataElements['Indicator Type']) {
            let types = Array.from(dataElements['Indicator Type'])
            types.push(value.datatype)
            dataElements['Indicator Type'] = types
          } else {
            let types = []
            types.push(value.datatype)
            dataElements['Indicator Type'] = types
          }
          if (dataElements['Indicator Groups']) {
            let types = Array.from(dataElements['Indicator Groups'])
            types.push(
              value.extras['indicatorGroups'] ? (value.extras['indicatorGroups'].length > 0 ? (Object.values(value.extras['indicatorGroups']).map(

                key =>

                  key.name + ", "

              )
              ) : '--') : '--')
              dataElements['Indicator Groups'] = types
          } else {
            let types = []
            types.push(
              value.extras['indicatorGroups'] ? (value.extras['indicatorGroups'].length > 0 ? (Object.values(value.extras['indicatorGroups']).map(

                key =>

                  key.name + ", "

              )
              ) : '--') : '--')
            dataElements['Indicator Groups'] = types
          }
        }
      )
      setDataElementMatrix(dataElements)
    }
    loadData();

  }, [])

  const loadMappings = async function (){
    let tempDEs = []
    for (let i = 1; i <= [...params.keys()].length; i++) {
      if (params.get('id' + i)) {
        await getDataElement(params.get('id' + i))
      }
      if (de[params.get('id' + i)]) {
        tempDEs.push(de[params.get('id' + i)])
      }
      setSelectedDatim(tempDEs)
}
  }
  const table = function () {
    return (
      <div className={classes.compareRowColumn} key={Math.random()}>
        <ExpansionPanel className={classes.expandPanel}>
          <ExpansionPanelSummary
            //expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3b-content"
            id="panel3b-header"
         // onClick={() =>loadMappings()}
          >

            <Table className={classes.comboTable} aria-label="simple table">
              <TableBody>
                <TableRow><TableCell></TableCell>
                  {dataElementMatrix['Indicator Name'] ? (dataElementMatrix['Indicator Name']).map(
                    name =>

                      // {/* <div className={classes.compareCardSummary}> */}
                      // {/* <div className={classes.compareTitle}> */}
                      // {/* <div className={classes.compareCardText}>DATIM Data Element: </div> */}
                      <TableCell>
                        <div className={`${classes.compareTitleColumn} ${classes.fixedTop}`}>
                          {name}
                        </div></TableCell>
                    //   {/* <div className={classes.compareCardText}>DATIM UID: <strong>{datim.external_id}</strong></div> */}
                    // {/* </div> */}    
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
              </TableBody>
            </Table>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.panelDetail}>


          {/* <div className={classes.tableContainer} key={Math.random()}>
                             <strong>Disaggregations</strong>:<br />

                           <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell></TableCell>
                                  <TableCell>
                                   <TableCell>Name</TableCell>
                                  <TableCell>Code</TableCell>
                                  </TableCell>
                                  <TableCell>
                                   <TableCell>Name</TableCell>
                                  <TableCell>Code</TableCell>
                                  </TableCell>
                                 </TableRow>
                           </TableHead>
                               <TableBody >
                               <TableRow><TableCell style={{width: '100px'}}></TableCell>
                               {Object.values(de).map(datim => 
                                <TableCell>
                                  {(mappings[datim.id]) ? Object.keys(Object(mappings[datim.id])).map(

                                    key =>
                                   
                                      {Object(mappings[datim.id])[key].map_type === 'Has Option' ? (
                                        <TableRow key={Math.random()}>
                                          <TableCell component="th" scope="row">
                                            {Object(mappings[datim.id])[key].to_concept_name}
                                          </TableCell>
                                          <TableCell component="th" scope="row">
                                            {Object(mappings[datim.id])[key].to_concept_code}
                                          </TableCell>
                                        </TableRow>
                                      ) : ''}
                                      
                                  ) : ''}
                                  </TableCell>
                               )}
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div> */}


          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
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
    if (params.get('indicatorDetail')) {
      history.push('/indicators?indicatorid=' + params.get('id1'))
    } else {
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
              `Error when retrieving indicator ${response.status} ${response.statusText}`
            );
          }
    
          const jsonData = await response.json();
          //const jsonData = JSON.parse(response)
          console.log("jsonData " + jsonData)
          de[id] = jsonData;
          return de[id]
        } catch (e) {
          console.log("error:" + e.message);
          setError(e.message);
          setDialogMessage(e.message)
          setDialogOpen(true)
          throw new Error(
            `Error when retrieving indicator  ${e.message}`
          );
        }
    
    
      };

  
  return (
    <ErrorBoundary>
      <Grid container >
        <Grid item xs={12}>

          <div className={classes.fixedTop}>
              {/* <NavLink to="/indicators"> */}
              <Button onClick={goBack} color="primary" variant="outlined" className={`${classes.actionButton} ${classes.closeComparePanel}`}
                id="backButton"> Back</Button>
              {/* </NavLink> */}
              <h2 className={classes.comparisonPanelTitle}>INDICATOR COMPARISON</h2>
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
        </Grid>


      </Grid>
    </ErrorBoundary>
  );
}
//}
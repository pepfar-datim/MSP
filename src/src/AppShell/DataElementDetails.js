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

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      backgroundColor: '#fcfcfc'
    },
    hide: {
      display: 'none'
    },
    container: {
      maxWidth: '1800px',
      margin: '0 auto',
      paddingTop: '30px',
      paddingLeft: '15px',
      paddingRight: '15px',
      height: '2000px'
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
      marginTop: '20px'
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
let deMappings = {}
let de = {}
export default function DataElementDetails() {
    const classes = useStyles();
    const domain = getConfig().domain;
    const org = getConfig().org;
    const version = getConfig().source;
    let history = useHistory()
    const params = new URLSearchParams(useLocation().search)
    const [showLinked, setShowLinked] = React.useState(false);
    const [deloading, setDELoading] = useState(false);


    const [dataElementDetail, setDataElementDetail] = React.useState()
    const [dataElementMapping, setDataElementMapping] = React.useState()
    const [dataElements, setDataElements] = React.useState()

    useEffect(() => {
        async function loadData() {

            await getMappings(params.get('id'))

            if (de[params.get('id')]) {
                setDataElementDetail(de[params.get('id')]);
                setDataElementMapping(deMappings[params.get('id')]);
            }
        }
        loadData();

    }, [])

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
                    `Error when retrieving data element mappings ${response.status} ${response.statusText}`
                );
            }

            const jsonData = await response.json();
            let sortedData = sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
            if (!deMappings[id]) {
                deMappings[id] = sortedData;
                //setDataElementMapping(deMappings[id]);
            }
            if (!de[id]) {
                de[id] = jsonData
            }
            // if the data element has linkages, retrieve those as well
            await getDerivatives(id)
            console.log("*********** getDerivatives done" )
            setDELoading(false)
            
        } catch (e) {
            console.log("error:" + e.message);
            setError(e.message);
            //setErrorDisplay(e.message);
        }
    };
    async function getDerivatives(id) {
        let UIDs = ''
        Object.keys(Object(deMappings[id])).map(

            async function (key) {
                let derivationId = ''
                //console.log(deMappings[id])
                if (Object(deMappings[id])[key].map_type === 'Derived From' || Object(deMappings[id])[key].map_type === 'Replaces') {
                    derivationId = Object(deMappings[id])[key].to_concept_code
                    if (derivationId === id) {
                        let from_concept_url = Object(deMappings[id])[key].from_concept_url
                        if (from_concept_url.endsWith('/')) {
                            from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
                        }
                        let arr = from_concept_url.split('/')
                        derivationId = arr[arr.length - 1]
                        //derivationId = Object(deMappings[id])[key].from_concept_code
                    }
                }
                if(derivationId){
                UIDs = UIDs + '"' + derivationId + '"OR'
                }
            }
        )
        UIDs = UIDs.substring(0, UIDs.length - 2)
                if (UIDs) {
                    let queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?includeMappings=true&includeInverseMappings=true&verbose=true&q=' + UIDs;
                    console.log(" queryByDataElement " + queryMapping)
                    let response = await fetch(queryMapping);
                    if (!response.ok) {
                        console.log(response);
                        setErrorDisplay("Failed to fetch")
                        throw new Error(
                            `Error when retrieving data element mappings ${response.status} ${response.statusText}`
                        );
                    }
                    let jsonData = await response.json()
                    //console.log(jsonData)
                    // let sortedData = {}
                    // if(jsonData.mappings){
                    // sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
                    // }
                    // deMappings[derivationId] = sortedData
                    //setDataElementMapping(deMappings[derivationId]);
                        console.log("do i ever come here ??????????????????")
                        setDataElements(jsonData)
                    }
                
    }

    const sortJSONByKey = function (data, key, direction) {
        return data.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            if (direction === 'asc') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
            if (direction === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
            return true;
        });
    }

    const [compareInputText, setCompareInputText] = useState(""); // set the search DE to compare

    const handleCompareInputChange = () => {
        setCompareInputText(document.getElementById("compareSearch").value);
    };

    const performCompare = async (dataElementDetail, dataElementToCompare) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        var compareText = document.getElementById("compareSearch") ? document.getElementById("compareSearch").value : '';

        let compareLink = ''
        if (!dataElementToCompare) {
            // if (compareText !== '') {
            compareLink = '/compare?id1=' + dataElementDetail.id + '&id2=' + compareText + '&dataElementDetail=true'
            //}
        } else {
            compareLink = '/compare?id1=' + dataElementDetail.id + '&id2=' + dataElementToCompare + '&dataElementDetail=true'
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

    const goBack = () => {
        history.push('/codelist')
    };

    return (
        <Route render={(history) => (
            <div className={classes.container}>
            {deloading ?
                <div>
                    <LinearProgress mode="indeterminate" />
                    <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>Loading data element details ...</div>
                </div> : 
                   (
            <Grid container className={classes.comparePanelContainer} justify="space-between">
                
                        <Grid item xs={6}  >
                            <h2 className={classes.comparisonPanelTitle}>DATA ELEMENT DETAILS</h2>
                        </Grid>
                        <Grid item xs={6}  >
                            <CloseIcon onClick={goBack} className={classes.closeComparePanel}>add_circle</CloseIcon>
                        </Grid>
                        <Grid item xs={6}  >
                            {dataElementDetail && dataElementMapping ?
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
                                        {/* <TableRow>
                                <TableCell><strong>UID</strong></TableCell>
                                <TableCell>{dataElement.id ? (dataElement.id) : '--'}</TableCell>
                              </TableRow> */}
                                        {/* <TableRow>
                                <TableCell><strong>Source</strong></TableCell>
                                <TableCell>{dataElement.extras.source ? (dataElement.extras.source) : '--'}</TableCell>
                              </TableRow> */}
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
                                {/* {dataElementDetail ? (
                            (dataElementMapping) ? Object.keys(Object(dataElementMapping)).map(
                              key =>  */}
                                <Table className={classes.comboTable} style={{ marginLeft: '20px', maxWidth: '700px' }} aria-label="simple table">
                                    <TableBody>

                                        {showLinked ?
                                            <TableRow>
                                                <TableCell><strong>Linked Resources</strong></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow> : ''}
                                        {dataElementDetail ? console.log(dataElementDetail.id) : ''}
                                        {dataElementDetail ? (
                                            dataElementMapping ? Object.keys(Object(dataElementMapping)).map(

                                                function (key) {
                                                    if (dataElementMapping[key].map_type === "Derived From") {
                                                        setShowLinked(true)
                                                        let name = ''
                                                        let code = ''
                                                        let source = ''
                                                        let type = ''
                                                        let derives = ''
                                                        if (dataElementMapping[key].to_concept_code !== dataElementDetail.id) {
                                                            name = Object(dataElementMapping)[key].to_concept_name
                                                            code = dataElementMapping[key].to_concept_code
                                                            derives = 'Derived From'
                                                            if (de[dataElementMapping[key].to_concept_code]) {
                                                                source = de[dataElementMapping[key].to_concept_code].extras.source
                                                                type = de[dataElementMapping[key].to_concept_code].concept_class
                                                            }
                                                        }
                                                        else {
                                                            let from_concept_url = dataElementMapping[key].from_concept_url
                                                            if (from_concept_url.endsWith('/')) {
                                                                from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
                                                            }
                                                            let arr = from_concept_url.split('/')
                                                            let derivationId = arr[arr.length - 1]
                                                            //derivationId = dataElementMapping[key].from_concept_code
                                                            console.log(dataElements)
                                                            //console.log(de)
                                                            console.log(derivationId)
                                                            let derived = {}
                                                            Object.values(Object(dataElements)).map(
                                                                value => {
                                                                if(value.id === derivationId){
                                                                    derived = value
                                                                }
                                                            }
                                                            )
                                                            console.log(derived)
                                                            name = derived.display_name
                                                            code = derived.id
                                                            source = derived.extras.source
                                                            type = derived.concept_class
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
                                            (dataElementMapping) ? Object.keys(Object(dataElementMapping)).map(

                                                function (key) {
                                                    if (dataElementMapping[key].map_type === "Replaces") {
                                                        let name = ''
                                                        let code = ''
                                                        let source = ''
                                                        let type = ''
                                                        let replaces = ''
                                                        if (dataElementMapping[key].to_concept_code !== dataElementDetail.id) {
                                                            name = Object(dataElementMapping)[key].to_concept_name
                                                            code = dataElementMapping[key].to_concept_code
                                                            replaces = 'Replaces'
                                                            if (de[dataElementMapping[key].to_concept_code]) {
                                                                source = de[dataElementMapping[key].to_concept_code].extras.source
                                                                type = de[dataElementMapping[key].to_concept_code].concept_class
                                                            }
                                                        }
                                                        else {
                                                            let from_concept_url = dataElementMapping[key].from_concept_url
                                                            if (from_concept_url.endsWith('/')) {
                                                                from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
                                                            }
                                                            let arr = from_concept_url.split('/')
                                                            let derivationId = arr[arr.length - 1]
                                                            //derivationId = dataElementMapping[key].from_concept_code
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
  </Grid> ) }
  </div>

        )
        } />)
}
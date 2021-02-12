import React, { useState, useEffect } from 'react';
/* eslint-disable */

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { getConfig } from '../config.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputBase from '@material-ui/core/InputBase';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import GetAppIcon from '@material-ui/icons/GetApp';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import { TiArrowSortedDown } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti';
import Popover from '@material-ui/core/Popover';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MdList } from 'react-icons/md';
import { MdFunctions } from 'react-icons/md';
import { Route, useLocation, useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { BsCheck } from 'react-icons/bs';
import Breadcrumb from './../Components/Breadcrumb';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

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

const ExportButtonLabel = styled.p`
    margin:0;
    padding:0;
    font-size: 0.8em;  
    font-weight: bold;
`;

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
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
        // paddingTop: '20px',
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
        //borderBottom: '1px solid #062133',
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',

        '&:nth-child(even)': {
            backgroundColor: '#eeeeee'
        }
    },
    compareRowColumn: {
        flex: 1,
        margin: '1em',
        backgroundColor: '#ffffff',
        borderRadius: '10px'
        // marginBottom: '80px'
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
        //padding: '6px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        border: '#404040',
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
            marginBottom: '30px',
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
let derivedCoC = {}
let pdhDerivatives = {}

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
    const [dropDownName, setDropDownName] = React.useState("");

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
            setDELoading(false)

        } catch (e) {
            console.log("error:" + e.message);
            //setError(e.message);
            setErrorDisplay(e.message);
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
                if (derivationId) {
                    UIDs = UIDs + derivationId + '+OR+'
                }
            }
        )
        UIDs = UIDs.substring(0, UIDs.length - 4)
        if (UIDs) {
            let queryMapping = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/?includeMappings=true&includeInverseMappings=true&verbose=true&q=&q=' + UIDs;
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

    const goBack = () => {
        history.goBack()
    };

    const [errorDisplay, setErrorDisplay] = useState(null)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const popOpen = Boolean(anchorEl);
    const divRef = React.useRef();
    const popId = popOpen ? 'popover' : undefined;
    const popHandleClose = () => {
        setAnchorEl(null);
        console.log("anchorEl ") + anchorEl
    };
    //set dropdown popup
    const dropDownMenu = buttonName => event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setDropDownName(buttonName);
    };
    const [exportDataElement, setExportDataElement] = React.useState("");
    const [exportSource, setExportSource] = React.useState("");
    const [exportType, setExportType] = React.useState("");

    // set export popup
    function exportMenu(event, buttonName, id, source, type) {
        //event = event || window.event;
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setDropDownName(buttonName);
        setExportDataElement(id)
        console.log("ExportDataElement id " + exportDataElement)
        setExportSource(source)
        setExportType(type)
    };

    const handleFormat = buttonName => event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setDropDownName(buttonName);
        console.log("in handleFormulahandleFormatView")
    };
    const [exportValue, setExportValue] = React.useState('HTML');
    const handleExportChange = event => {
        setExportValue(event.target.value);
    };

    const performExport = event => {
        let downloadURL = "";
        if (exportValue.trim() === 'OCL') {
            downloadURL = 'https://api.' + domain + '/orgs/' + org + '/sources/MER/concepts/' + exportDataElement;
        }
        else {
            if (exportType === 'data element') {
                downloadURL = 'https://datim.org/api/dataElements/' + exportDataElement + '.' + exportValue.trim() + '?fields=*'
            }
            else {
                downloadURL = 'https://datim.org/api/categoryOptionCombos/' + exportDataElement + '.' + exportValue.trim() + '?fields=*'
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

    //set initial panel state and panel handle change function
    const [panel, setPanel] = React.useState(0);
    const handleChange = (event, newPanel) => {
        setPanel(newPanel);
    };
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogMessage, setDialogMessage] = React.useState('');
    const handleDialogClose = () => {
        setDialogOpen(false);
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
    const [moreAttributes, setMoreAttributes] = React.useState(false);
    const [moreDescription, setMoreDescription] = React.useState(false);

    const [listView, setListView] = React.useState(true);

    function showMoreAttributes() {
        setMoreAttributes(true)
    }
    function showLessAttributes() {
        setMoreAttributes(false)
    }
    function showMoreDescription() {
        setMoreDescription(true)
    }
    function showLessDescription() {
        setMoreDescription(false)
    }

    const handleListView = () => {
        setListView(true)
    };
    const handleFormulaView = () => {
        setListView(false)
    };

    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };
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
    async function getReferenceIndicator(id){
        let refIndicatorQuery = 'https://api.' + domain + '/orgs/' + org + '/sources/MER' + version + '/concepts/' + id ;

        try {
           const proxyurl = "https://cors-anywhere.herokuapp.com/"
            const response = await fetch(proxyurl + refIndicatorQuery)
            if (!response.ok) {
                console.log(response);
                setErrorDisplay("Failed to fetch")
                throw new Error(
                    `Error when retrieving reference indicator ${response.status} ${response.statusText}`
                );
            }

            const jsonData = await response.json();
             let uuid = jsonData.uuid
            // let downloadLink = document.createElement('a');
            // downloadLink.href = refIndicatorQuery;
            // downloadLink.click();
            // revokeDownloadLink(downloadLink.href);
             history.push("/referenceIndicator/" + id + "++" + uuid)

        } catch (e) {
            console.log("error:" + e.message);
            //setError(e.message);
            //setErrorDisplay(e.message);
        }
    }
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
                                {errorDisplay}
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

    return (
        <Route render={(history) => (
            <div className={classes.container} >
                <div className={classes.fixedTop}>
                    {/* <NavLink to="/indicators"> */}
                    <Grid container >
                        <Grid item={true} xs={4}>
                            <Breadcrumb></Breadcrumb>
                        </Grid>
                        <Grid item={true} xs={4}>
                            {/* <h2 className={classes.comparisonPanelTitle}>DATA ELEMENT DETAILS</h2>    */}</Grid> 
                        <Grid item={true} xs={4}>
                            <Button onClick={goBack} color="primary" variant="outlined" className={`${classes.actionButton} ${classes.closeComparePanel}`}
                                id="backButton"> Back</Button>
                        </Grid>
                    </Grid>

                    {/* </NavLink> */}


                </div>
                {deloading ?
                    <div>
                        <LinearProgress mode="indeterminate" />
                        <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>Loading data element details ...</div>
                    </div> :
                    (
                        <div className={classes.compareRow} >
                            <div className={classes.compareRowColumn}>
                                <Grid container >
                                    <Grid item xs={9}></Grid>
                                    <Grid item xs={3}>
                                        {/* <div className={classes.tabDashboard}> */}
                                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'right' }} >
                                            <div style={{ marginTop: '25px', marginRight: '20px' }} onClick={(event) => exportMenu(event, 'export', dataElementDetail.id, dataElementDetail.source, 'data element')}>
                                                <Tooltip disableFocusListener title="Download">
                                                    <i>
                                                        {/* <Button variant="outlined" className={classes.actionButton} style={{ height: '48px', width: '80px', marginBottom: '10px' }} onClick={dropDownMenu("download")} id="downloadButton"> */}
                                                        <GetAppIcon style={{ color: '#1D5893' }} id="download-icon" />
                                                        {/* </Button> */}
                                                    </i>
                                                </Tooltip>
                                                <TiArrowSortedDown />
                                            </div>
                                            <div style={{ alignSelf: 'right', marginTop: '25px', marginRight: '20px' }} onClick={dropDownMenu('compare')}>
                                                <Tooltip disableFocusListener disableTouchListener title="Compare" >
                                                    <i >
                                                        {/* <Button variant="outlined" className={classes.actionButton} style={{ height: '48px', width: '80px', marginBottom: '10px' }}
                                                                        //onClick={toggleDrawer('bottom', true)}
                                                                        id="comparisonButton" > */}
                                                        <CompareArrowsIcon style={{ color: '#1D5893', marginLeft: '2px' }} />
                                                        {/* </Button> */}
                                                    </i>
                                                </Tooltip>
                                                <TiArrowSortedDown />
                                            </div>
                                        </div>

                                        <Popover
                                            id={popId}
                                            open={popOpen}
                                            anchorEl={anchorEl}
                                            getContentAnchorEl={null}
                                            onClose={popHandleClose}
                                            // anchorReference="anchorPosition"
                                            // anchorPosition={{ top: 170, left: 600 }}
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
                                                                Download
                                                                     </Button>
                                                        </FormGroup>
                                                    </FormControl> :
                                                    dropDownName === "format" ?
                                                        <FormControl component="fieldset" className={classes.popOver}>
                                                            <FormGroup>
                                                                <MenuItem value="All" onClick={toggleChecked}><div style={{ width: '20px' }}>{!checked ? <BsCheck style={{ marginRight: '5px' }}></BsCheck> : ''}</div>Name</MenuItem>
                                                                <MenuItem value="None" onClick={toggleChecked}><div style={{ width: '20px' }}>{checked ? <BsCheck style={{ marginRight: '5px' }}></BsCheck> : ''}</div>UID</MenuItem>
                                                            </FormGroup>
                                                        </FormControl> :
                                                        dropDownName === "compare" ?
                                                            <div style={{ margin: '10px', alignItems: 'right', width: '180px' }}>
                                                                <Grid container>
                                                                    <Grid xs={12}>
                                                                        <Paper component="form" className={classes.search}>
                                                                            <InputBase
                                                                                className={classes.input}
                                                                                //inputProps={{ 'aria-label': 'search data elements' }}
                                                                                id="compareSearch"
                                                                                key="compareSearch"
                                                                                onKeyDown={handleKeyPressCompare}
                                                                                onChange={handleCompareInputChange}
                                                                                value={compareInputText}
                                                                                placeholder="Data Element UID"
                                                                            />
                                                                        </Paper>
                                                                    </Grid>
                                                                    <Grid xs={6}></Grid>
                                                                    <Grid xs={6}>
                                                                        <Button type="button" className={classes.margin} aria-label="search" onClick={() => performCompare(dataElementDetail, null)} variant="outlined" color="primary" size="small">
                                                                            Compare
                                                                                </Button>
                                                                    </Grid>
                                                                </Grid>
                                                            </div> :
                                                            <FormControl component="fieldset" className={classes.popOver}>
                                                                <FormGroup>
                                                                    <FormLabel component="legend" className={classes.formLegend}>From DATIM (Acount Required)</FormLabel>
                                                                    <RadioGroup aria-label="export" name="exportRadio" value={exportValue} onChange={handleExportChange}>
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="HTML" />} label="HTML" />
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="CSV" />} label="CSV" />
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="JSON" />} label="JSON" />
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="XML" />} label="XML" />
                                                                    </RadioGroup>
                                                                    <FormLabel component="legend" className={classes.formLegend}>From Open Concept Lab (OCL)</FormLabel>
                                                                    <RadioGroup aria-label="export" name="exportRadio" value={exportValue} onChange={handleExportChange}>
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="OCL" />} label="JSON" />
                                                                    </RadioGroup>
                                                                    <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={performExport}>
                                                                        Download
                                                                     </Button>
                                                                </FormGroup>
                                                            </FormControl>
                                            }
                                        </Popover>
                                        {/* </div> */}
                                    </Grid>

                                    {dataElementDetail ?
                                        <div style={{ marginTop: '20px' }}>
                                            <i style={{ color: '#a6a6a6', marginRight: '5px', marginLeft: '25px' }}>Source:</i> {dataElementDetail.extras.source}
                                            <i style={{ color: '#a6a6a6', marginRight: '5px', marginLeft: '15px' }}>Type:</i> {dataElementDetail.concept_class}
                                            <i style={{ color: '#a6a6a6', marginRight: '5px', marginLeft: '15px' }}>UID:</i> {dataElementDetail.id}
                                        </div>
                                        : ''}

                                     <div style={{ fontSize: '24px', marginLeft: '25px', marginTop: '15px', marginRight: '20px' }}>
                                        {dataElementDetail ? dataElementDetail.display_name : ""}
                                    </div>
                                    <div style={{ color: '#808080', marginLeft: '25px', marginBottom: '15px', marginRight: '20px' }}>
                                        {dataElementDetail ? console.log(dataElementDetail): ''}
                                        {dataElementDetail ? dataElementDetail.descriptions.length > 0 ? dataElementDetail.descriptions[0].description.length > 190 ? !moreDescription ? dataElementDetail.descriptions[0].description.substring(0, 190) : dataElementDetail.descriptions[0].description : dataElementDetail.descriptions[0].description : 'No description' : ''}
 
                                        {dataElementDetail ? dataElementDetail.descriptions.length > 0 ? dataElementDetail.descriptions[0].description.length > 190 ? !moreDescription ?
                                            <div><Link href="#" onClick={showMoreDescription} style={{ textDecorationLine: 'underline' }}>more<TiArrowSortedDown /></Link></div> :
                                            <div><Link href="#" onClick={showLessDescription} style={{ textDecorationLine: 'underline' }}>less<TiArrowSortedUp /></Link></div>
                                            : '' : '' : ''}
                                        {/* {moreAttributes ?
                                                
                                            } */}
                                    </div>
                                    <div style={{ marginLeft: '25px', marginRight: '20px' }}>
                                        {dataElementDetail && dataElementMapping ?
                                            <Table className={classes.comboTable} style={{ marginRight: '20px', width: '650px' }} aria-label="simple table" size="small">
                                                <TableBody>
                                                    {
                                                        dataElementDetail.extras['Applicable Periods'] ? dataElementDetail.extras['Applicable Periods'].length > 0 ?
                                                            <TableRow> <TableCell><strong>Applicable Periods</strong></TableCell>
                                                                <TableCell> {(Object.keys(dataElementDetail.extras['Applicable Periods']).map(

                                                                    key =>
                                                                        key != dataElementDetail.extras['Applicable Periods'].length - 1 ?
                                                                            dataElementDetail.extras['Applicable Periods'][key] + ", "
                                                                            : dataElementDetail.extras['Applicable Periods'][key]

                                                                )
                                                                )}
                                                                </TableCell>
                                                            </TableRow> : '' : ''
                                                    }
                                                    {
                                                        dataElementDetail.extras['Reporting frequency'] ?
                                                            <TableRow><TableCell><strong>Reporting frequency</strong></TableCell>
                                                                <TableCell>{dataElementDetail.extras['Reporting frequency']}</TableCell></TableRow>
                                                            : ''
                                                    }
                                                    {dataElementDetail.extras.resultTarget ?
                                                        <TableRow>
                                                            <TableCell><strong>Result/Target</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.resultTarget}</TableCell>
                                                        </TableRow> : ''
                                                    }

                                                    {dataElementDetail.extras.indicator ?
                                                        <TableRow>
                                                            <TableCell><strong>Reference Indicator</strong></TableCell>
                                                            <TableCell><Link href="#"
                                                                component="button"
                                                                onClick={() => getReferenceIndicator(dataElementDetail.extras.indicator)}
                                                            >
                                                                {dataElementDetail.extras.indicator}</Link></TableCell>
                                                        </TableRow> : ''
                                                    }
                                                    {dataElementDetail ? dataElementDetail.extras ? dataElementDetail.extras.source === 'PDH' ?
                                                        < TableRow >
                                                            <TableCell><strong>PDH Indicator</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.pdh_indicator_code ? dataElementDetail.extras.pdh_indicator_code : '--'}</TableCell>
                                                        </TableRow>
                                                        :
                                                        dataElementDetail.extras.codelists ? (dataElementDetail.extras.codelists.length > 0 ?
                                                            <TableRow>
                                                                <TableCell><strong>Code List Membership</strong></TableCell>
                                                                <TableCell>
                                                                    <ul style={{ listStyleType: 'disc', margin: 10, padding: 0 }}>
                                                                        {(Object.keys(dataElementDetail.extras.codelists).map(

                                                                            key =>

                                                                                <li>{dataElementDetail.extras.codelists[key].name}</li>

                                                                        )
                                                                        )}
                                                                    </ul>
                                                                </TableCell>
                                                            </TableRow> : '') : ''

                                                        : '' : ''}
                                                    {dataElementDetail ? dataElementDetail.extras ? dataElementDetail.extras.source === 'PDH' ?
                                                        dataElementDetail.extras.pepfarSupportType ?
                                                            < TableRow >
                                                                <TableCell><strong>PEPFAR Support Type</strong></TableCell>
                                                                <TableCell>{dataElementDetail.extras.pepfarSupportType}</TableCell>
                                                            </TableRow> : ''
                                                        :
                                                        <TableRow>
                                                            <TableCell><strong>Other Names</strong></TableCell>
                                                            <TableCell>
                                                                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                                                                    <li>
                                                                        {dataElementDetail.names[2] ? <i style={{ color: '#a6a6a6', marginRight: '25px' }}>Code</i> : ''} {dataElementDetail.names[2] ? (dataElementDetail.names[2].name) : '--'}
                                                                    </li>
                                                                    <li>
                                                                        {dataElementDetail.names[2] ? <i style={{ color: '#a6a6a6', marginRight: '25px' }}>Short</i> : ''} {dataElementDetail.names[1] ? (dataElementDetail.names[1].name) : '--'}
                                                                    </li>
                                                                </ul>
                                                            </TableCell>
                                                        </TableRow>
                                                        : '' : ''}
                                                    {dataElementDetail.retired ?
                                                        <TableRow>
                                                            <TableCell><strong>Retired</strong></TableCell>
                                                            <TableCell>{dataElementDetail.retired}</TableCell>
                                                        </TableRow>
                                                        : ''}
                                                    {dataElementDetail.datatype ?
                                                        <TableRow>
                                                            <TableCell><strong>Data Type</strong></TableCell>
                                                            <TableCell>{dataElementDetail.datatype}</TableCell>
                                                        </TableRow> : ''}
                                                    {dataElementDetail ? dataElementDetail.extras ? dataElementDetail.extras.source !== 'PDH' ?
                                                        <TableRow>
                                                            <TableCell><strong>Domain Type</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.domainType ? (dataElementDetail.extras.domainType) : '--'}</TableCell>
                                                        </TableRow>
                                                        : '' : '' : ''}
                                                    {dataElementDetail ? dataElementDetail.extras ? dataElementDetail.extras.source !== 'PDH' ?
                                                        <TableRow>
                                                            <TableCell><strong>Value Type</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.valueType ? (dataElementDetail.extras.valueType) : '--'}</TableCell>
                                                        </TableRow>
                                                        : '' : '' : ''}
                                                    {dataElementDetail ? dataElementDetail.extras ? dataElementDetail.extras.source !== 'PDH' ?
                                                        <TableRow>
                                                            <TableCell><strong>Aggregation Type</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.aggregationType ? (dataElementDetail.extras.aggregationType) : '--'}</TableCell>
                                                        </TableRow>
                                                        : '' : '' : ''}
                                                    {!moreAttributes ?
                                                        <TableRow><TableCell style={{ width: '200px' }}><Link href="#" onClick={showMoreAttributes}>more<TiArrowSortedDown /></Link></TableCell><TableCell></TableCell></TableRow>
                                                        :
                                                        [
                                                            dataElementDetail.extras.pdh_rule_begin_period ?
                                                                <TableRow>
                                                                    <TableCell><strong>PDH Rule Begin Period</strong></TableCell>
                                                                    <TableCell>{dataElementDetail.extras.pdh_rule_begin_period}</TableCell>
                                                                </TableRow> : '',
                                                            dataElementDetail.extras.standardized_disaggregate ?
                                                                <TableRow>
                                                                    <TableCell><strong>Standardized Disaggregate</strong></TableCell>
                                                                    <TableCell>{dataElementDetail.extras.standardized_disaggregate}</TableCell>
                                                                </TableRow> : '',
                                                            dataElementDetail.extras.pdh_derivation_rule_id ?
                                                                <TableRow>
                                                                    <TableCell><strong>PDH Derivation Rule Id</strong></TableCell>
                                                                    <TableCell>{dataElementDetail.extras.pdh_derivation_rule_id}</TableCell>
                                                                </TableRow> : '',
                                                            dataElementDetail.extras.numeratorDenominator ?
                                                                <TableRow>
                                                                    <TableCell><strong>Numerator/Denominator</strong></TableCell>
                                                                    <TableCell>{dataElementDetail.extras.numeratorDenominator}</TableCell>
                                                                </TableRow> : '',
                                                            dataElementDetail.extras.pepfarSupportType ?
                                                                <TableRow>
                                                                    <TableCell><strong>PEPFAR Support Type</strong></TableCell>
                                                                    <TableCell>{dataElementDetail.extras.pepfarSupportType}</TableCell>
                                                                </TableRow> : ''
                                                        ]
                                                    }
                                                    {!moreAttributes ? '' :
                                                        <TableRow><TableCell style={{ width: '200px' }}><Link href="#" onClick={showLessAttributes}>less<TiArrowSortedUp /></Link></TableCell><TableCell></TableCell></TableRow>
                                                    }
                                                </TableBody>
                                            </Table> : ''}
                                    </div>
                                </Grid>
                            </div>
                            <div className={classes.compareRowColumn}>
                                {/* <div className={classes.heroContainer}>
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

                                            </div> */}
                                {/* {showLinked ? <div style={{ padding: '20px', marginLeft: '170px' }}>or select a linked data element below</div> : ''} */}
                                <div style={{ margin: '15px' }}>
                                    {/* <ErrorBoundary> */}
                                    <Tabs value={panel} onChange={handleChange} className={classes.tabContainer} classes={{ indicator: classes.bigIndicator }}>
                                        <Tab label="DISAGGREGATIONS" {...a11yProps(0)} />
                                        <Tab label="LINKAGES" {...a11yProps(1)} />
                                        {dataElementDetail ? dataElementDetail.extras.source === 'IHUB' ? <Tab label="DERIVATIONS" {...a11yProps(2)} /> : '' : ''}
                                    </Tabs>
                                    <TabPanel value={panel} index={0} className={classes.tabPanel}>
                                        <Grid container >
                                            <Grid item xs={9}></Grid>
                                            {
                                                listView ?
                                                    <Grid item xs={3}>
                                                        <div style={{ flexDirection: 'row', display: 'flex' }} >
                                                            <Tooltip disableFocusListener disableTouchListener title="List view" placement="top-start">
                                                                <Button style={{ backgroundColor: '#fff0b3' }}>
                                                                    <MdList size={32} onClick={handleListView} style={{ backgroundColor: '#fff0b3' }} />
                                                                </Button>
                                                            </Tooltip>
                                                            <Tooltip disableFocusListener disableTouchListener title="Formula view" placement="top-start">
                                                                <Button>
                                                                    <MdFunctions size={32} onClick={handleFormulaView} />
                                                                    <TiArrowSortedDown />
                                                                </Button>
                                                            </Tooltip>
                                                        </div>
                                                    </Grid>
                                                    :
                                                    <Grid item xs={3}>
                                                        <div style={{ flexDirection: 'row', display: 'flex' }} >
                                                            <Tooltip disableFocusListener disableTouchListener title="List view" placement="top-start">
                                                                <Button>
                                                                    <MdList size={32} onClick={handleListView} />
                                                                </Button>
                                                            </Tooltip>
                                                            <Tooltip disableFocusListener disableTouchListener title="Formula view" placement="top-start">
                                                                <Button style={{ backgroundColor: '#fff0b3' }}>
                                                                    <MdFunctions style={{ backgroundColor: '#fff0b3' }} size={32} onClick={handleFormulaView} />
                                                                    <TiArrowSortedDown onClick={handleFormat('format')} />
                                                                </Button>
                                                            </Tooltip>
                                                        </div>
                                                    </Grid>
                                            }
                                            <Grid item xs={12} className={classes.comboTable}>
                                                {listView ?
                                                    <div>
                                                        <Table className={classes.table} aria-label="simple table" size="small">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell>Name</TableCell>
                                                                    <TableCell>Code</TableCell>
                                                                    <TableCell>Action</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {dataElementDetail ?
                                                                    (deMappings[dataElementDetail.id]) ? Object.keys(Object(deMappings[dataElementDetail.id])).map(

                                                                        key =>
                                                                        
                                                                            Object(deMappings[dataElementDetail.id])[key].map_type === 'Has Option' ? (
                                                                                <TableRow >
                                                                                    {console.log(Object(deMappings[dataElementDetail.id])[key])}
                                                                                    <TableCell>
                                                                                        {Object(deMappings[dataElementDetail.id])[key].to_concept_name_resolved}
                                                                                    </TableCell>
                                                                                    <TableCell>
                                                                                        {Object(deMappings[dataElementDetail.id])[key].to_concept_code}
                                                                                    </TableCell>
                                                                                    <TableCell>
                                                                                        {/* <Button variant="outlined" className={classes.exportButton}  id="downloadButton" color="primary">
                                                                                    <ExportButtonLabel> Export</ExportButtonLabel> */}
                                                                                        <GetAppIcon style={{ color: '#1D5893' }}
                                                                                            onClick={(event) => exportMenu(event, "coc", Object(deMappings[dataElementDetail.id])[key].to_concept_code, dataElementDetail.extras.source, 'coc')} />
                                                                                        {/* </Button> */}
                                                                                    </TableCell>
                                                                                </TableRow>
                                                                            ) : ''
                                                                    ) : ''
                                                                    : ''}
                                                            </TableBody>
                                                        </Table>
                                                    </div> :
                                                    <Grid container alignItems="center" justify="space-between">
                                                        <Grid   >
                                                            <div className={classes.tableContainer}>
                                                                {
                                                                    dataElementDetail ?
                                                                        (deMappings[dataElementDetail.id]) ? Object.keys(Object(deMappings[dataElementDetail.id])).map(

                                                                            key =>
                                                                                Object(deMappings[dataElementDetail.id])[key].map_type === 'Has Option' ? (
                                                                                    checked ? (Object(deMappings[dataElementDetail.id])[key].to_concept_code +
                                                                                        ((key == Object.keys(Object(deMappings[dataElementDetail.id]))[Object.keys(Object(deMappings[dataElementDetail.id])).length - 1]) ? '' : ' + '))
                                                                                        : (Object(deMappings[dataElementDetail.id])[key].to_concept_name + ((key == Object.keys(Object(deMappings[dataElementDetail.id]))[Object.keys(Object(deMappings[dataElementDetail.id])).length - 1]) ? '' : ' + ')))

                                                                                    : null) : null
                                                                        : null}

                                                            </div></Grid>
                                                        {/* <Grid item xs={3} >
                                                                    <FormControlLabel
                                                                        value="Start"
                                                                        control={<Switch color="primary" checked={checked} onChange={toggleChecked} />}
                                                                        label={format}
                                                                        labelPlacement="start"
                                                                    />
                                                                </Grid> */}
                                                    </Grid>
                                                }
                                            </Grid>
                                        </Grid>

                                    </TabPanel>
                                    <TabPanel value={panel} index={1} className={classes.tabPanel}>
                                        <div>
                                            <Table className={classes.comboTable} style={{ marginLeft: '20px', maxWidth: '700px' }} aria-label="simple table" size="small">
                                                <TableBody>

                                                    {showLinked ?
                                                        <TableRow>
                                                            <TableCell><strong>Linkage</strong></TableCell>
                                                            <TableCell><strong>Resource</strong></TableCell>
                                                            <TableCell></TableCell>
                                                        </TableRow> : 'No Linkages'}
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
                                                                        // if (de[dataElementMapping[key].to_concept_code]) {
                                                                        //     source = de[dataElementMapping[key].to_concept_code].extras.source
                                                                        //     type = de[dataElementMapping[key].to_concept_code].concept_class
                                                                        // }
                                                                        let derived = {}
                                                                        Object.values(Object(dataElements)).map(
                                                                            value => {
                                                                                if (value.id === code) {
                                                                                    derived = value
                                                                                }
                                                                            }
                                                                        )
                                                                        console.log(derived)
                                                                        name = derived.display_name
                                                                        source = derived.extras ? derived.extras.source : ''
                                                                        type = derived.concept_class
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
                                                                                if (value.id === derivationId) {
                                                                                    derived = value
                                                                                }
                                                                            }
                                                                        )
                                                                        console.log(derived)
                                                                        name = derived.display_name
                                                                        code = derived.id
                                                                        source = derived.extras ? derived.extras.source : ''
                                                                        type = derived.concept_class
                                                                        derives = 'Derived To'
                                                                        console.log(name + code + source + type)
                                                                    }
                                                                    return (
                                                                        <TableRow>
                                                                            <TableCell>{derives}</TableCell>
                                                                            <TableCell component="th" scope="row" >
                                                                                <Grid container alignItems="center"
                                                                                    //justify="space-between"
                                                                                    spacing={2}>

                                                                                    <Grid item xs={12}  >
                                                                                        <Link href={"/codelist/dataElementDetail?id=" + code} style={{ textDecoration: 'underline' }}> {name}</Link>
                                                                                    </Grid>
                                                                                    <Grid item xs={4} md={4} >
                                                                                        <span className={classes.chip}
                                                                                            onClick={() => copyToClipboard(code)}
                                                                                        ><i style={{ color: '#a6a6a6' }}>UID: </i> {' ' + code}</span></Grid>
                                                                                    <Grid item xs={4} md={4} >
                                                                                        <span className={classes.chip}
                                                                                        ><i style={{ color: '#a6a6a6' }}>Source: </i> {' ' + source}</span></Grid>
                                                                                    <Grid item xs={4} md={4} >
                                                                                        <span className={classes.chip}
                                                                                        ><i style={{ color: '#a6a6a6' }}>Type: </i> {' ' + type}</span>                                            </Grid>
                                                                                </Grid>
                                                                            </TableCell>
                                                                            <TableCell component="th" scope="row" style={{ alignItems: 'left' }}>
                                                                                <Tooltip disableFocusListener disableTouchListener title="Compare" >
                                                                                    <i >
                                                                                        <CompareArrowsIcon style={{ color: '#1D5893', marginLeft: '2px' }} onClick={() => performCompare(dataElementDetail, code)} />
                                                                                    </i>
                                                                                </Tooltip>
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
                                                                        // if (de[dataElementMapping[key].to_concept_code]) {
                                                                        //     source = de[dataElementMapping[key].to_concept_code].extras.source
                                                                        //     type = de[dataElementMapping[key].to_concept_code].concept_class
                                                                        // }
                                                                        let derived = {}
                                                                        Object.values(Object(dataElements)).map(
                                                                            value => {
                                                                                if (value.id === code) {
                                                                                    derived = value
                                                                                }
                                                                            }
                                                                        )
                                                                        name = derived.display_name
                                                                        source = derived.extras ? derived.extras.source : ''
                                                                        type = derived.concept_class
                                                                    }
                                                                    else {
                                                                        let from_concept_url = dataElementMapping[key].from_concept_url
                                                                        if (from_concept_url.endsWith('/')) {
                                                                            from_concept_url = from_concept_url.substring(0, from_concept_url.length - 1)
                                                                        }
                                                                        let arr = from_concept_url.split('/')
                                                                        let derivationId = arr[arr.length - 1]
                                                                        //derivationId = dataElementMapping[key].from_concept_code
                                                                        let derived = {}

                                                                        Object.values(Object(dataElements)).map(
                                                                            value => {
                                                                                if (value.id === derivationId) {
                                                                                    derived = value
                                                                                }
                                                                            }
                                                                        )
                                                                        code = derived.id
                                                                        name = derived.display_name
                                                                        source = derived.extras ? derived.extras.source : ''
                                                                        type = derived.concept_class
                                                                        replaces = 'Replaced By'
                                                                    }
                                                                    return (
                                                                        <TableRow>
                                                                            <TableCell>{replaces}</TableCell>
                                                                            <TableCell component="th" scope="row" >
                                                                                <Grid container alignItems="center"
                                                                                    //justify="space-between"
                                                                                    spacing={2}>
                                                                                    <Grid item xs={12}  >
                                                                                        <Link href={"/codelist/dataElementDetail?id=" + code} underline='always'> {name}</Link>
                                                                                    </Grid>
                                                                                    <Grid item xs={4} md={4} >
                                                                                        <span className={classes.chip}
                                                                                            onClick={() => copyToClipboard(code)}
                                                                                        ><i style={{ color: '#a6a6a6' }}>UID: </i> {' ' + code}</span></Grid>
                                                                                    <Grid item xs={4} md={4} >
                                                                                        <span className={classes.chip}
                                                                                        ><i style={{ color: '#a6a6a6' }}>Source: </i> {' ' + source}</span></Grid>
                                                                                    <Grid item xs={4} md={4} >
                                                                                        <span className={classes.chip}
                                                                                        ><i style={{ color: '#a6a6a6' }}>Type: </i> {' ' + type}</span>                                            </Grid>
                                                                                </Grid>
                                                                            </TableCell>
                                                                            <TableCell component="th" scope="row" style={{ alignItems: 'left' }}>
                                                                                <Tooltip disableFocusListener disableTouchListener title="Compare" >
                                                                                    <i >
                                                                                        <CompareArrowsIcon style={{ color: '#1D5893', marginLeft: '2px' }} onClick={() => performCompare(dataElementDetail, code)} />
                                                                                    </i>
                                                                                </Tooltip>
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
                                    </TabPanel>
                                    <TabPanel value={panel} index={2} className={classes.tabPanel} >

                                        {
                                            dataElementDetail ?
                                                (dataElementDetail.extras.source_data_elements) ? populatePDHDerivatives(dataElementDetail.extras.source_data_elements) : ''
                                                : ''
                                        }

                                        <Grid container alignItems="center" justify="space-between">
                                            <Grid item xs={6}></Grid>
                                            <Grid item xs={3}></Grid>
                                            <Grid item xs={3}>
                                                <div>
                                                    {expanded.length !== 0 ? <Button variant="outlined" color="primary" onClick={collapseAll(Object.keys(derivedCoC).concat(Object.keys(pdhDerivatives)))}>Collapse All</Button>
                                                        :
                                                        <Button variant="outlined" color="primary" onClick={expandAll(Object.keys(derivedCoC).concat(Object.keys(pdhDerivatives)))}>Expand All</Button>}
                                                </div>
                                            </Grid>
                                        </Grid>
                                        {
                                            dataElementDetail ?
                                                dataElementDetail.extras.source_data_elements ?
                                                    <TreeView
                                                        className={classes.derivatives}
                                                        defaultCollapseIcon={<ExpandMoreIcon />}
                                                        expanded={expanded}
                                                        selected={selected}
                                                        onNodeToggle={handleToggle}
                                                        onNodeSelect={handleSelect}
                                                        defaultExpandIcon={<ChevronRightIcon />}
                                                        style={{ overflow: 'scroll' }}
                                                    >
                                                        {
                                                            Object.keys(derivedCoC).map(
                                                                key =>
                                                                    <TreeItem key={key} nodeId={key} label={"Derived COC: " + key} >
                                                                        {Object.values(derivedCoC[key]).map(
                                                                            value =>
                                                                                <TreeItem nodeId={value} label={"Source Data Element: " + value}>
                                                                                    {Object.values(pdhDerivatives[value]).map(
                                                                                        coc =>
                                                                                            key === coc.derivedDisag ?
                                                                                                <TreeItem nodeId={coc.sourceDisag} label={"Source COC: " + (coc.sourceDisag.split('|')[0] + ' ............................... ' + (coc.sourceDisag.split('|')[1] == 1 ? ' ADD' : ' SUB'))}>
                                                                                                </TreeItem>
                                                                                                : ''
                                                                                    )}
                                                                                </TreeItem>
                                                                        )}

                                                                    </TreeItem>
                                                            )
                                                        }

                                                    </TreeView> : 'There are no derivations for this selection' : ''}
                                    </TabPanel>
                                    {pdhDerivatives = []}
                                    {derivedCoC = []}
                                    {/* </ErrorBoundary> */}
                                </div>
                            </div>
                        </div>
                    )}
            </ div>

        )
        } />
    )
}
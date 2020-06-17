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
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Breadcrumb from './../Components/Breadcrumb';


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
        //borderBottom: '1px solid #062133',
        flexDirection: 'row',
        overflow: 'auto',
        backgroundColor: '#f2f2f2',

        '&:nth-child(even)': {
            backgroundColor: '#eeeeee'
        }
    },
    compareRowColumn: {
        flex: 1,
        //width: '700px',
        margin: '1em',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        //overflow: 'auto'
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
    roundedCorner: {
        borderRadius: '25px',
        border: '1px solid #e6e6e6',
        padding: '20px',
        marginTop: '10px'
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
            //flexDirection: 'column'
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
let derivedCoC = {}


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
    const [numeratorMap, setNumeratorMap] = React.useState({})
    const [numeratorReadableFormulaMap, setNumeratorReadableFormulaMap] = React.useState({})
    const [denominatorMap, setDenominatorMap] = React.useState({})
    const [denominatorReadableFormulaMap, setDenominatorReadableFormulaMap] = React.useState({})

    useEffect(() => {
        async function loadData() {

            await getMappings(params.get('id'))

            if (de[params.get('id')]) {
                setDataElementDetail(de[params.get('id')]);
                //setDataElementMapping(deMappings[params.get('id')]);
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
            // let sortedData = sortJSONByKey(jsonData.mappings, 'to_concept_name', 'asc');
            // if (!deMappings[id]) {
            //     deMappings[id] = sortedData;
            //     //setDataElementMapping(deMappings[id]);
            // }
            if (!de[id]) {
                de[id] = jsonData
            }
            // if the data element has linkages, retrieve those as well
            // await getDerivatives(id)
            setDELoading(false)

        } catch (e) {
            console.log("error:" + e.message);
            //setError(e.message);
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
                if (derivationId) {
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
            compareLink = '/indicators/compareIndicators?id1=' + dataElementDetail.id + '&id2=' + compareText + '&dataElementDetail=true'
            //}
        } else {
            compareLink = '/indicators/compareIndicators?id1=' + dataElementDetail.id + '&id2=' + dataElementToCompare + '&dataElementDetail=true'
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

    const [numeratorUid, setNumeratorUid] = React.useState("");

    // set export popup
    function exportMenu(event, buttonName, id, source, type) {
        //event = event || window.event;
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setDropDownName(buttonName);
        setExportSource(source)
        setExportType(type)
    };

    function disagMenu(event, buttonName, numeratorUid) {
        //event = event || window.event;
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setDropDownName(buttonName);
        setNumeratorUid(numeratorUid)
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

    const performDownload = event => {
        let downloadURL = "";
        let uid = ""
        if(disag){
            uid = numeratorUid.split('.')[1]
        }
        else{
            uid = numeratorUid.split('.')[0]
        }
        if (exportValue.trim() === 'OCL') {
            downloadURL = 'https://api.' + domain + '/orgs/' + org + '/sources/MER/concepts/' + uid;
        }
        else {
            if (!disag) {
                downloadURL = 'https://dev-de.datim.org/api/dataElements/' + uid + '.' + exportValue.trim() + '?fields=*'
            }
            else {
                downloadURL = 'https://dev-de.datim.org/api/categoryOptionCombos/' + uid + '.' + exportValue.trim() + '?fields=*'
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

    const performExport = event => {
        let downloadURL = "";
        if (exportValue.trim() === 'OCL') {
            let UIDs = dataElementDetail.id
            downloadURL = 'https://api.' + domain + '/orgs/' + org + '/sources/MER/concepts/?paging=false&verbose=true&q=' + UIDs;
        }
        else {
            downloadURL = 'https://dev-de.datim.org/api/indicators' + '.' + exportValue.trim() + '?filter=id:in:[' + dataElementDetail.id.trim() + ']&fields=*&paging=false'
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

    const [disag, setDisag] = React.useState(false);

    const selectDe = () => {
        setDisag(false);
        setDropDownName('setDeOrDisag')
    };
    const selectDisag = () => {
        setDisag(true);
        setDropDownName('setDeOrDisag')
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

    const [numeratorTable, setNumeratorTable] = React.useState(true);
    function showNumeratorTable() {
        setNumeratorTable(true)
    }
    function hideNumeratorTable() {
        setNumeratorTable(false)
    }
    const [denominatorTable, setDenominatorTable] = React.useState(true);
    function showDenominatorTable() {
        setDenominatorTable(true)
    }
    function hideDenominatorTable() {
        setDenominatorTable(false)
    }

    const [expanded, setExpanded] = React.useState([]);
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
    function populateNumeratorMap(indicator) {
        try {
            if (indicator.extras.numerator.length > 1) {
                let numerator = indicator.extras.numerator.split(' + ').join('+').split('+')
                let numeratorReadableFormula = indicator.extras.numeratorReadableFormula.split(' + ').join('+').split('}+{')
                console.log('numeratorReadableFormula' + numeratorReadableFormula)
                Object.keys(numeratorReadableFormula).map(
                    key => {
                        console.log(key)
                        let formulaArray = []
                        let numeratorArray = []
                        let dataElementCode = ''
                        if (!numeratorReadableFormula[key].split('].[')[1]) {
                            if (key == Object.keys(numeratorReadableFormula).length - 1) {
                                dataElementCode = numeratorReadableFormula[key].split('].[')[0].substring(1, numeratorReadableFormula[key].split('].[')[0].length - 2)
                            }
                            else if(key == 0){
                                dataElementCode = numeratorReadableFormula[key].split('].[')[0].substring(2, numeratorReadableFormula[key].split('].[')[0].length - 1)
                            }
                            else {
                                dataElementCode = numeratorReadableFormula[key].split('].[')[0].substring(1, numeratorReadableFormula[key].split('].[')[0].length - 1)
                            }
                        }
                        else {
                            if (key == 0) {
                                dataElementCode = numeratorReadableFormula[key].split('].[')[0].substring(2, numeratorReadableFormula[key].split('].[')[0].length)
                            }
                            else {
                                dataElementCode = numeratorReadableFormula[key].split('].[')[0].substring(1, numeratorReadableFormula[key].split('].[')[0].length)
                            }
                        }
                        if (!numeratorReadableFormulaMap[dataElementCode]) {

                            if (numeratorReadableFormula[key].split('].[')[1]) {
                                if (key == Object.keys(numeratorReadableFormula).length - 1) {
                                    formulaArray.push(numeratorReadableFormula[key].split('].[')[1].substring(0, numeratorReadableFormula[key].split('].[')[1].length - 3))
                                }
                                else {
                                    formulaArray.push(numeratorReadableFormula[key].split('].[')[1].substring(0, numeratorReadableFormula[key].split('].[')[1].length - 1))
                                }
                            }
                            else {
                                formulaArray.push('--')
                            }
                            numeratorArray.push(numerator[key].substring(2, numerator[key].length - 1))
                        }
                        else {
                            formulaArray = Array.from(numeratorReadableFormulaMap[dataElementCode])
                            numeratorArray = Array.from(numeratorMap[dataElementCode])
                            if (numeratorReadableFormula[key].split('].[')[1]) {
                                if (key == Object.keys(numeratorReadableFormula).length - 1) {
                                    formulaArray.push(numeratorReadableFormula[key].split('].[')[1].substring(0, numeratorReadableFormula[key].split('].[')[1].length - 3))
                                }
                                else {
                                    formulaArray.push(numeratorReadableFormula[key].split('].[')[1].substring(0, numeratorReadableFormula[key].split('].[')[1].length - 1))
                                }
                            }
                            else {
                                formulaArray.push('--')
                            }
                            numeratorArray.push(numerator[key].substring(2, numerator[key].length - 1))

                        }
                        numeratorReadableFormulaMap[dataElementCode] = formulaArray;
                        numeratorMap[dataElementCode] = numeratorArray;
                        setNumeratorReadableFormulaMap[numeratorReadableFormulaMap]
                        setNumeratorMap[numeratorMap]
                    }
                )
            }
        } catch (e) {
            console.log("error:" + e.message);
            // throw new Error(
            //   `Error when retrieving data element  ${e.message}`
            // );
        }
    }

    function populateDenominatorMap(indicator) {
        try {
            if (indicator.extras.denominator.length > 1) {
                let denominator = indicator.extras.denominator.split(' + ').join('+').split('+')
                let denominatorReadableFormula = indicator.extras.denominatorReadableFormula.split(' + ').join('+').split('}+{')
                console.log('denominatorReadableFormula' + denominatorReadableFormula)
                Object.keys(denominatorReadableFormula).map(
                    key => {
                        console.log(key)
                        let formulaArray = []
                        let denominatorArray = []
                        let dataElementCode = ''
                        if (!denominatorReadableFormula[key].split('].[')[1]) {
                            if (key == Object.keys(denominatorReadableFormula).length - 1) {
                                dataElementCode = denominatorReadableFormula[key].split('].[')[0].substring(1, denominatorReadableFormula[key].split('].[')[0].length - 2)
                            }
                            else if(key == 0){
                                dataElementCode = denominatorReadableFormula[key].split('].[')[0].substring(2, denominatorReadableFormula[key].split('].[')[0].length - 1)

                            }
                            else {
                                dataElementCode = denominatorReadableFormula[key].split('].[')[0].substring(1, denominatorReadableFormula[key].split('].[')[0].length - 1)

                            }
                        }
                        else {
                            if (key == 0) {
                                dataElementCode = denominatorReadableFormula[key].split('].[')[0].substring(2, denominatorReadableFormula[key].split('].[')[0].length)
                            }
                            else {
                                dataElementCode = denominatorReadableFormula[key].split('].[')[0].substring(1, denominatorReadableFormula[key].split('].[')[0].length)
                            }
                        }
                        if (!denominatorReadableFormulaMap[dataElementCode]) {

                            if (denominatorReadableFormula[key].split('].[')[1]) {
                                if (key == Object.keys(denominatorReadableFormula).length - 1) {
                                    formulaArray.push(denominatorReadableFormula[key].split('].[')[1].substring(0, denominatorReadableFormula[key].split('].[')[1].length - 3))
                                }
                                else {
                                    formulaArray.push(denominatorReadableFormula[key].split('].[')[1].substring(0, denominatorReadableFormula[key].split('].[')[1].length - 1))
                                }
                            }
                            else {
                                formulaArray.push('--')
                            }
                            denominatorArray.push(denominator[key].substring(2, denominator[key].length - 1))
                        }
                        else {
                            formulaArray = Array.from(denominatorReadableFormulaMap[dataElementCode])
                            denominatorArray = Array.from(denominatorMap[dataElementCode])
                            if (denominatorReadableFormula[key].split('].[')[1]) {
                                if (key == Object.keys(denominatorReadableFormula).length - 1) {
                                    formulaArray.push(denominatorReadableFormula[key].split('].[')[1].substring(0, denominatorReadableFormula[key].split('].[')[1].length - 3))
                                }
                                else {
                                    formulaArray.push(denominatorReadableFormula[key].split('].[')[1].substring(0, denominatorReadableFormula[key].split('].[')[1].length - 1))
                                }
                            }
                            else {
                                formulaArray.push('--')
                            }
                            denominatorArray.push(denominator[key].substring(2, denominator[key].length - 1))

                        }
                        denominatorReadableFormulaMap[dataElementCode] = formulaArray;
                        denominatorMap[dataElementCode] = denominatorArray;
                        setDenominatorReadableFormulaMap[denominatorReadableFormulaMap]
                        setDenominatorMap[denominatorMap]
                    }
                )
            }
        } catch (e) {
            console.log("error:" + e.message);
        }
    }

    return (
        <Route render={(history) => (
            <div className={classes.container} >
                <div className={classes.fixedTop}>
                    {/* <NavLink to="/indicators"> */}
                    <Grid container >
                        <Grid xs={4}>
                            <Breadcrumb></Breadcrumb>
                        </Grid>
                        <Grid xs={4}>
                            <h2 className={classes.comparisonPanelTitle}>Indicator DETAILS</h2>                        </Grid>
                        <Grid xs={4}>
                            <Button onClick={goBack} color="primary" variant="outlined" className={`${classes.actionButton} ${classes.closeComparePanel}`}
                                id="backButton"> Back</Button>
                        </Grid>
                    </Grid>

                    {/* </NavLink> */}


                </div>
                {deloading ?
                    <div>
                        <LinearProgress mode="indeterminate" />
                        <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>Loading indicator details ...</div>
                    </div> :
                    (
                        // <Grid container className={classes.comparePanelContainer}>
                        //     <Grid item xs={11.5}>
                        <div className={classes.compareRow} >
                            <div className={classes.compareRowColumn}>
                                <Grid container >
                                    <Grid item xs={9}></Grid>
                                    <Grid item xs={3}>
                                        <div className={classes.tabDashboard}>
                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'right' }} >
                                                <div style={{ marginTop: '25px', marginRight: '20px' }} onClick={(event) => exportMenu(event, 'export', dataElementDetail.id, dataElementDetail.source, 'data element')}>
                                                    <Tooltip disableFocusListener title="Download">
                                                        <i>
                                                            {/* <Button variant="outlined" className={classes.actionButton} style={{ height: '48px', width: '80px', marginBottom: '10px' }} onClick={dropDownMenu("download")} id="downloadButton"> */}
                                                            <GetAppIcon style={{ color: '#1D5893' }} id="download-icon" />
                                                            {/* </Button> */}
                                                        </i>
                                                    </Tooltip>
                                                    {/* {dataElementDetail ? setExportDataElement(dataElementDetail.id) : ''}
                                                    {dataElementDetail ? setExportSource(dataElementDetail.extras.source) : ''}
                                                    {dataElementDetail ? setExportType(dataElementDetail.concept_class) : ''} */}
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
                                                                    <FormLabel component="legend" className={classes.formLegend}>From DATIM (Acount Required)</FormLabel>
                                                                    <RadioGroup aria-label="export" name="exportRadio" value={exportValue} onChange={handleExportChange}>
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="CSV" />} label="CSV" />
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="JSON" />} label="JSON" />
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="XML" />} label="XML" />
                                                                    </RadioGroup>
                                                                    <FormLabel component="legend" className={classes.formLegend}>From Open Concept Lab (OCL)</FormLabel>
                                                                    <RadioGroup aria-label="export" name="exportRadio" value={exportValue} onChange={handleExportChange}>
                                                                        <FormControlLabel control={<Radio style={{ color: '#D55804' }} value="OCL" />} label="JSON" />
                                                                    </RadioGroup>
                                                                    <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={performExport}>
                                                                        Download DATA
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
                                                                                    placeholder="Indicator UID"
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
                                                                </div>
                                                                :
                                                                dropDownName == 'disag' ?
                                                                <FormControl component="fieldset" className={classes.popOver}>
                                                                <FormGroup>
                                                                    <MenuItem value="All" onClick={selectDe}><div style={{ width: '20px' }}>{!disag ? <BsCheck style={{ marginRight: '5px' }}></BsCheck> : ''}</div>Data Element</MenuItem>
                                                                    <MenuItem value="None" onClick={selectDisag}><div style={{ width: '20px' }}>{disag ? <BsCheck style={{ marginRight: '5px' }}></BsCheck> : ''}</div>Disaggregate</MenuItem>
                                                                </FormGroup>
                                                            </FormControl> :
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
                                                        <Button type="submit" variant="outlined" className={classes.downloadButton} onClick={performDownload}>
                                                            Download DATA
                                                             </Button>
                                                    </FormGroup>
                                                    </FormControl>
                                                    }
                                                </Popover>
                                            </div>
                                        </div>
                                    </Grid>

                                    {dataElementDetail ?
                                        <div style={{ marginTop: '20px' }}>
                                            <i style={{ color: '#a6a6a6', marginRight: '5px', marginLeft: '25px' }}>Source:</i> DATIM
                                                    <i style={{ color: '#a6a6a6', marginRight: '5px', marginLeft: '15px' }}>Type:</i> {dataElementDetail.concept_class}
                                            <i style={{ color: '#a6a6a6', marginRight: '5px', marginLeft: '15px' }}>UID:</i> {dataElementDetail.id}
                                        </div>
                                        : ''}
                                    <div style={{ fontSize: '24px', marginLeft: '25px', marginBottom: '15px', marginTop: '15px', marginRight: '20px' }}>
                                        {dataElementDetail ? dataElementDetail.display_name : ""}
                                    </div>
                                    <div style={{ color: '#808080', marginLeft: '25px', marginBottom: '15px', marginRight: '20px' }}>
                                        {dataElementDetail ? dataElementDetail.descriptions ? dataElementDetail.descriptions[0].description.length > 200 ? !moreDescription ? dataElementDetail.descriptions[0].description.substring(0, 200) : dataElementDetail.descriptions[0].description : dataElementDetail.descriptions[0].description : '' : ''}
                                        {dataElementDetail ? dataElementDetail.descriptions ? dataElementDetail.descriptions[0].description.length > 200 ? !moreDescription ?
                                            <div><Link href="#" onClick={showMoreDescription} style={{ textDecorationLine: 'underline' }}>more<TiArrowSortedDown /></Link></div> :
                                            <div><Link href="#" onClick={showLessDescription} style={{ textDecorationLine: 'underline' }}>less<TiArrowSortedUp /></Link></div>
                                            : '' : '' : ''}
                                        {/* {moreAttributes ?
                                                
                                            } */}
                                    </div>
                                    <div style={{ marginLeft: '25px', marginRight: '20px' }}>
                                        {dataElementDetail ?
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
                                                    <TableRow>
                                                        <TableCell><strong>Reporting Frequency</strong></TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                    {dataElementDetail.extras.indicator ?
                                                        <TableRow>
                                                            <TableCell><strong>Reference Indicator</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.indicator}</TableCell>
                                                        </TableRow> : ''
                                                    }
                                                    {dataElementDetail.extras.numeratorDescription ?
                                                        <TableRow>
                                                            <TableCell><strong>Numerator Description</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.numeratorDescription}</TableCell>
                                                        </TableRow> : ''}
                                                    {dataElementDetail.extras.denominatorDescription ?
                                                        <TableRow>
                                                            <TableCell><strong>Denominator Description</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.denominatorDescription}</TableCell>
                                                        </TableRow> : ''}
                                                    {dataElementDetail.extras.indicatorGroups ? dataElementDetail.extras.indicatorGroups.length > 0 ?
                                                        <TableRow>
                                                            <TableCell><strong>Indicator Group Membership</strong></TableCell>
                                                            <TableCell>
                                                                {
                                                                    Object.keys(dataElementDetail.extras.indicatorGroups).map(

                                                                        key =>
                                                                        key != dataElementDetail.extras.indicatorGroups.length - 1 ?
                                                                        dataElementDetail.extras.indicatorGroups[key].name + ", "
                                                                        : dataElementDetail.extras.indicatorGroups[key].name 
                                                                    )
                                                                }
                                                            </TableCell>
                                                        </TableRow> : '' : ''}
                                                    {dataElementDetail.names[2] || dataElementDetail.names[1] ?
                                                        <TableRow>
                                                            <TableCell><strong>Other Names</strong></TableCell>
                                                            <TableCell>
                                                                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                                                                    <li>
                                                                        {dataElementDetail.names[2] ? <i style={{ color: '#a6a6a6', marginRight: '25px' }}>Code</i> : ''} {dataElementDetail.names[2] ? (dataElementDetail.names[2].name) : ''}
                                                                    </li>
                                                                    <li>
                                                                        {dataElementDetail.names[1] ? <i style={{ color: '#a6a6a6', marginRight: '25px' }}>Short</i> : ''} {dataElementDetail.names[1] ? (dataElementDetail.names[1].name) : ''}
                                                                    </li>

                                                                </ul>
                                                            </TableCell>
                                                        </TableRow> : ''}
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
                                                        {!moreAttributes ?
                                                        <TableRow><TableCell style={{width: '200px'}}><Link href="#" onClick={showMoreAttributes}>more<TiArrowSortedDown /></Link></TableCell><TableCell></TableCell></TableRow>
                                                        :
                                                        [
                                                        <TableRow>
                                                            <TableCell><strong>Annualized</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.annualized ? 'Yes' : 'No'}</TableCell>
                                                        </TableRow>,
                                                            dataElementDetail.extras.dimensionItemType ?
                                                        <TableRow>
                                                            <TableCell><strong>Dimension Item Type</strong></TableCell>
                                                            <TableCell>{dataElementDetail.extras.dimensionItemType}</TableCell>
                                                        </TableRow> : ''
                                                        ]
                                                    }
                                                    {!moreAttributes ? '' :
                                                        <TableRow><TableCell style={{width: '200px'}}><Link href="#" onClick={showLessAttributes}>less<TiArrowSortedUp /></Link></TableCell><TableCell></TableCell></TableRow>
                                                    }
                                                </TableBody>
                                            </Table> : ''}
                                    </div>
                                </Grid>
                            </div>
                            <div className={classes.compareRowColumn}>
                                <div style={{ margin: '15px' }}>
                                    <Tabs value={panel} onChange={handleChange} className={classes.tabContainer} classes={{ indicator: classes.bigIndicator }}>
                                        <Tab label="FORMULA" {...a11yProps(0)} />
                                        {/* <Tab label="LINKAGES" {...a11yProps(1)} /> */}
                                    </Tabs>
                                    <TabPanel value={panel} index={0} className={classes.tabPanel}>
                                        <Grid container >
                                            <Grid item xs={9}></Grid>
                                            {
                                                listView ?
                                                    <Grid item xs={3}>
                                                        <div style={{ flexDirection: 'row', display: 'flex' }} >
                                                            <Button style={{ backgroundColor: '#fff0b3' }}>
                                                                <MdList size={32} onClick={handleListView} style={{ backgroundColor: '#fff0b3' }} />
                                                            </Button>
                                                            <Button>
                                                                <MdFunctions size={32} onClick={handleFormulaView} />
                                                                <TiArrowSortedDown /></Button>
                                                        </div>
                                                    </Grid>
                                                    :
                                                    <Grid item xs={3}>
                                                        <div style={{ flexDirection: 'row', display: 'flex' }} >
                                                            <Button>
                                                                <MdList size={32} onClick={handleListView} />
                                                            </Button>
                                                            <Button style={{ backgroundColor: '#fff0b3' }}><MdFunctions style={{ backgroundColor: '#fff0b3' }} size={32} onClick={handleFormulaView} />
                                                                <TiArrowSortedDown onClick={handleFormat('format')} />
                                                            </Button>
                                                        </div>
                                                    </Grid>
                                            }
                                            <Grid item xs={12} className={classes.comboTable}>

                                                {listView ?

                                                    dataElementDetail ?
                                                        <div>
                                                            <div><strong>Data Element Formula References</strong></div>
                                                            <div><i style={{ color: '#808080', fontSize: '15px' }}>NOTE: View the full formula to see mathematical operators</i></div>
                                                            { numeratorTable ? 
                                                            [
                                                            <div style={{ marginTop: '20px' }}><strong style={{ color: '#808080', fontSize: '15px' }}><TiArrowSortedUp onClick={hideNumeratorTable}/>Numerator</strong></div>,
                                                            <Table className={classes.comboTable} aria-label="simple table" size="small" >
                                                                {dataElementDetail.extras.numeratorReadableFormula.length > 1 ?
                                                                    <TableHead>
                                                                        <TableRow>
                                                                            <TableCell>
                                                                                Data Element
                                                                                </TableCell>
                                                                            <TableCell>
                                                                                Disaggregate
                                                                                </TableCell>
                                                                            <TableCell>
                                                                                UID(s)
                                                                                </TableCell>
                                                                            <TableCell></TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    : ''}

                                                                {dataElementDetail.extras.numeratorReadableFormula.length > 1 ?
                                                                    <TableBody >
                                                                        {Object.keys(numeratorReadableFormulaMap).length == 0 ? populateNumeratorMap(dataElementDetail) : ''}
                                                                        {
                                                                            Object.keys(numeratorReadableFormulaMap).map(
                                                                                key =>

                                                                                    [
                                                                                        <TableRow >
                                                                                            <TableCell rowSpan={numeratorReadableFormulaMap[key].length}>
                                                                                                <Link href={"/codelist/dataElementDetail?id=" + numeratorMap[key][0].split('.')[0]} style={{ textDecoration: 'underline' }}>
                                                                                                    {key}
                                                                                                </Link>
                                                                                            </TableCell>
                                                                                            <TableCell >{numeratorReadableFormulaMap[key][0]}</TableCell>
                                                                                            <TableCell >{numeratorMap[key][0]}</TableCell>
                                                                                            <TableCell >
                                                                                                <Tooltip disableFocusListener title="Download">
                                                                                                    <i>
                                                                                                        <GetAppIcon style={{ color: '#1D5893' }} id="download-icon" 
                                                                                                        onClick={(event) => disagMenu(event, 'disag', numeratorMap[key][0])} />
                                                                                                    </i>
                                                                                                </Tooltip>
                                                                                            </TableCell>
                                                                                        </TableRow>,
                                                                                        <React.Fragment> {Object.keys(numeratorReadableFormulaMap[key]).map(
                                                                                            i =>
                                                                                                i > 0 ?
                                                                                                    <TableRow>
                                                                                                        <TableCell >{numeratorReadableFormulaMap[key][i]}</TableCell>
                                                                                                        <TableCell >{numeratorMap[key][i]}</TableCell>
                                                                                                        <TableCell >
                                                                                                            <Tooltip disableFocusListener title="Download">
                                                                                                                <i>
                                                                                                                    {/* <Button variant="outlined" className={classes.actionButton} style={{ height: '48px', width: '80px', marginBottom: '10px' }} onClick={dropDownMenu("download")} id="downloadButton"> */}
                                                                                                                    <GetAppIcon style={{ color: '#1D5893' }} id="download-icon" onClick={dropDownMenu('download')} />
                                                                                                                    {/* </Button> */}
                                                                                                                </i>
                                                                                                            </Tooltip>
                                                                                                        </TableCell>
                                                                                                    </TableRow>
                                                                                                    : ''
                                                                                        )
                                                                                        } </React.Fragment>

                                                                                    ]

                                                                            )
                                                                        }
                                                                    </TableBody>
                                                                    :
                                                                    <TableBody>
                                                                        <TableRow>
                                                                            <TableCell>
                                                                                dataElementDetail.extras.numeratorReadableFormula
                                                                        </TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                }
                                                            </Table> ]
                                                            :
                                                            <div style={{ marginTop: '20px' }}><strong style={{ color: '#808080', fontSize: '15px' }}><TiArrowSortedDown onClick={showNumeratorTable}/>Numerator</strong></div>
                                                            }
                                                            { denominatorTable ?
                                                            [<div style={{ marginTop: '20px' }}><strong style={{ color: '#808080', fontSize: '15px' }}><TiArrowSortedUp onClick={hideDenominatorTable}/>Denominator</strong></div>,
                                                            <Table className={classes.comboTable} aria-label="simple table" size="small" >
                                                                {dataElementDetail.extras.denominatorReadableFormula.length > 1 ?
                                                                    <TableHead>
                                                                        <TableRow>
                                                                            <TableCell>
                                                                                Data Element
                                                                                </TableCell>
                                                                            <TableCell>
                                                                                Disaggregate
                                                                                </TableCell>
                                                                            <TableCell>
                                                                                UID(s)
                                                                                </TableCell>
                                                                            <TableCell></TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    : ''}

                                                                {dataElementDetail.extras.denominatorReadableFormula.length > 1 ?
                                                                    <TableBody >
                                                                        {Object.keys(denominatorReadableFormulaMap).length == 0 ? populateDenominatorMap(dataElementDetail) : ''}
                                                                        {
                                                                            Object.keys(denominatorReadableFormulaMap).map(
                                                                                key =>

                                                                                    <TableRow >
                                                                                        <TableCell >
                                                                                            <Link href={"/codelist/dataElementDetail?id=" + denominatorMap[key][0].split('.')[0]} style={{ textDecoration: 'underline' }}>
                                                                                                {key}
                                                                                            </Link>
                                                                                        </TableCell>
                                                                                        <TableCell >
                                                                                            {Object.keys(denominatorReadableFormulaMap[key]).map(
                                                                                                i =>
                                                                                                    <TableRow >
                                                                                                        <TableCell style={{ borderBottom: "none" }}>{denominatorReadableFormulaMap[key][i]}</TableCell>
                                                                                                    </TableRow>
                                                                                            )}
                                                                                        </TableCell>
                                                                                        <TableCell>
                                                                                            {Object.keys(denominatorReadableFormulaMap[key]).map(
                                                                                                i =>
                                                                                                    <TableRow>
                                                                                                        <TableCell style={{ borderBottom: "none" }}>{denominatorMap[key][i]}</TableCell>
                                                                                                    </TableRow>
                                                                                            )}
                                                                                        </TableCell>
                                                                                        <TableCell>
                                                                                            {Object.keys(denominatorReadableFormulaMap[key]).map(
                                                                                                i =>
                                                                                                    <TableRow>
                                                                                                        <TableCell style={{ borderBottom: "none" }}>
                                                                                                            <Tooltip disableFocusListener title="Download">
                                                                                                                <i>
                                                                                                                    {/* <Button variant="outlined" className={classes.actionButton} style={{ height: '48px', width: '80px', marginBottom: '10px' }} onClick={dropDownMenu("download")} id="downloadButton"> */}
                                                                                                                    <GetAppIcon style={{ color: '#1D5893' }} id="download-icon" onClick={dropDownMenu('download')} />
                                                                                                                    {/* </Button> */}
                                                                                                                </i>
                                                                                                            </Tooltip>
                                                                                                        </TableCell>
                                                                                                    </TableRow>
                                                                                            )}
                                                                                        </TableCell>
                                                                                    </TableRow>
                                                                            )
                                                                        }
                                                                    </TableBody>
                                                                    :
                                                                    <TableBody>
                                                                        <TableRow>
                                                                            <TableCell>
                                                                                {dataElementDetail.extras.denominatorReadableFormula}
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                }
                                                            </Table> ]
                                                            :
                                                            <div style={{ marginTop: '20px' }}><strong style={{ color: '#808080', fontSize: '15px' }}><TiArrowSortedDown onClick={showDenominatorTable}/>Denominator</strong></div>
                                                            }
                                                        </div>
                                                        : ''
                                                    :
                                                    <div className={classes.roundedCorner} >
                                                        {dataElementDetail ?
                                                            <List >
                                                                <ListItem>
                                                                    <ListItemAvatar style={{ marginRight: '20px' }}>
                                                                        Numerator
                                                                            </ListItemAvatar>
                                                                    <ListItemText>
                                                                        {
                                                                            checked ? dataElementDetail.extras.numerator : dataElementDetail.extras.numeratorReadableFormula
                                                                        }
                                                                    </ListItemText>
                                                                </ListItem>
                                                                <Divider />
                                                                <ListItem>
                                                                    <ListItemAvatar style={{ marginRight: '20px' }}>Denominator</ListItemAvatar>
                                                                    <ListItemText>
                                                                        {
                                                                            checked ? dataElementDetail.extras.denominator : dataElementDetail.extras.denominatorReadableFormula
                                                                        }
                                                                    </ListItemText>
                                                                </ListItem>
                                                            </List>
                                                            : ''}
                                                    </div>
                                                }
                                            </Grid>
                                        </Grid>

                                    </TabPanel>

                                </div>
                            </div>
                        </div>
                    )}
            </ div>

        )
        } />
    )
}
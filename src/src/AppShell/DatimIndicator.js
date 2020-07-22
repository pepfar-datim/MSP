/* eslint-disable */
import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({  
     
      chip:{
        marginTop: '1px', 
        color: '#333333' ,
       /* backgroundColor: '#ffffff',*/
        fontSize: '12px'
      },

      expansionPanel:{
        /*margin: '0 -24px'*/
      },
      expansionPanelSummary: {
        borderBottom: '1px solid #C1A783',
        color: '#000000',
       
        '&:hover, &:focus':{   
          backgroundColor: '#eeeeee'
        }
      },
      expansionPanelDetails: {
        paddingTop: '30px',
        flexDirection: 'column',
        color: '#000000'
      },
      tabPanel:{      
        padding: '0 !important',       
      },
      comboTable: {
        boxShadow: 'none',
        border: 'none',
        maxWidth: '100%',
      },
      expansionPanelLeft: {
        paddingBottom: '30px'
      },
      comparePanelContainer: {       
        marginLeft: '20px',      
        paddingRight: '50px',        
        height: '90vh'
      },
      closeComparePanel: {
        float: 'right',
        marginTop: '2em',
        cursor: 'pointer',
        padding: '10px',
        border: '1px solid #111111',
        borderRadius: '50%',
        marginTop: 0
      },
      formulaButton: {
        marginTop: '1em',
        backgroundColor: '#eeeeee',
        border: 0
      },
      comparisonPanelTitle: {
        color: '#303030',
        fontSize: '30px',
        textAlign: 'left',
        fontFamily: 'EB Garamond !important',
        fontWeight: 400,
        paddingLeft: '30px',
        paddingRight: '30px',
        textTransform: 'uppercase'
      },
      tabContainer: {
        borderBottom: '1px solid #C1A783',
        width: '100%'
      },
      bigIndicator: {
        backgroundColor: '#C1A783'
      },
      detailsButton: {
        marginTop: '10px',
        marginBottom: '0px',
        '&:hover, &:focus': {
          backgroundColor: '#C1A783',
          color: '#000000'
        }
      },

    }));


//formular panel function
function FormularPanel(props) {  
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

export default function  DatimIndicator(props) {   
 
    const [datimIndicatorDetail, setDatimIndicatorDetail] = React.useState(null);
    const toggleDetailDrawer = (datimIndicator, side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {        
          return;
        }      
      setDatimIndicatorDetail(datimIndicator);      
      setDetailPanel({ ...detailPanel, [side]: open });
    };
    const [detailPanel, setDetailPanel] = React.useState({
      top: true,
      left: false,
      bottom: false,
      right: false,
    });
    const [formularPanel, setFormularPanel] = React.useState(0);     
    const handleFormularChange = (event, newFormularPanel) => {
      event.stopPropagation();
      event.preventDefault();
      setFormularPanel(newFormularPanel);
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
   const classes = useStyles();
   
   if (props.loading) {
       return (
        <div>
            <LinearProgress mode="indeterminate" />            
        </div>
       )
   } else if (!props.matchDatimIndicators || (props.matchDatimIndicators && props.matchDatimIndicators.length === 0)) {
        return (
            <div><p>No DATIM Indicator found.</p></div> 
        );
    }    

    return (
      <div>       
        {props.error ? 
          <div>{props.error}</div> : null                  
        }
        {<div style={{marginBottom: '8px'}}>Note: The result includes DATIM indicators from all periods.</div>}
        {
            props.matchDatimIndicators.map(datimIndicator => (
                <div key={datimIndicator.id}>                  
                        <Grid container alignItems="center" className={classes.expansionPanelSummary}  style={{padding: '4px'}}>       
                            <Grid item  xs={12} md={12}>         
                                <Typography className={classes.heading}>                                 
                                  <Link href={"/indicators/indicatorDetail?id=" + datimIndicator.id} style={{ textDecoration: 'underline' }}>{datimIndicator.display_name}</Link>
                                </Typography>
                            </Grid>               
                            <Grid item xs={12} md={3}  className={classes.chip}>                                        
                            
                              <Tooltip disableFocusListener title="Click to copy UID">
                                <span className={classes.chip}
                                  onClick={() => copyToClipboard(datimIndicator.id)}
                                >{"UID: " + datimIndicator.id}</span>
                              </Tooltip>
                            </Grid>
                            <Grid item xs={12} md={3} className={classes.chip}>  
                              <span>{"Source: DATIM" } </span>                                                                                     
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <span className={classes.chip}>
                                  {"Type: " + datimIndicator.concept_class}</span>
                            </Grid>
                            <Grid item xs={12} md={3} />
                          </Grid>         
                     
                </div>
            ))
        }     
      </div>
    );
}

DatimIndicator.propTypes = {
  currentIndicator: PropTypes.object,  
  matchDatimIndicators: PropTypes.array,
  error: PropTypes.string,
  classes: PropTypes.object,
  loading: PropTypes.bool
};

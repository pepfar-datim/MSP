/* eslint-disable */
import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as color_palette from '../Styles/Colors';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import DatimIndicatorDetail from './DatimIndicatorDetail';
import Grid from '@material-ui/core/Grid';

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
        {
            props.matchDatimIndicators.map(datimIndicator => (
                <div key={datimIndicator.id}>
                    <ExpansionPanel className={classes.expansionPanel}   TransitionProps={{ unmountOnExit: true, mountOnEnter: true }}  >
                        {/* DATIM indicator summary */}
                     <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.expansionPanelSummary}>
                        <Grid container alignItems="center" >       
                            <Grid item  xs={12} md={12}>         
                                <Typography className={classes.heading}> 
                                {datimIndicator.display_name}
                                </Typography>
                            </Grid>               
                            <Grid item xs={12} md={3}  className={classes.chip}>                                        
                              <span>{"UID: " + datimIndicator.id}</span>
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
                      </ExpansionPanelSummary>
                      
                      <DatimIndicatorDetail datimIndicatorDetail={datimIndicatorDetail} classes={classes} detailPanel={detailPanel} toggleDetailDrawer={toggleDetailDrawer}/> 

                      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                        <Grid container>           
                          <Grid item xs={12} >
                            <Table className={classes.comboTable} aria-label="simple table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{width: '30%'}} padding='none'><strong>Indicator Groups:</strong></TableCell>
                                        <TableCell padding='none'>                                                                                
                                        {
                                        datimIndicator.extras && datimIndicator.extras['indicatorGroups'] && datimIndicator.extras['indicatorGroups'].length > 0 ? 
                                            (Object.values(datimIndicator.extras['indicatorGroups']).map(                                     
                                                (item, index) =>                                                                           
                                                    (index < datimIndicator.extras['indicatorGroups'].length -1) ?                              
                                                        item.name +  ", " 
                                                        : item.name
                                                )
                                            ) : '--'
                                        }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell padding='none'><strong>Data Type:</strong></TableCell>
                                        <TableCell padding='none'>
                                        {datimIndicator.datatype ? datimIndicator.datatype : '--'}
                                        </TableCell>
                                    </TableRow>                                               
                                    <TableRow>
                                        <TableCell padding='none'><strong>Numerator Description:</strong></TableCell>
                                        <TableCell padding='none'>
                                        {datimIndicator.extras.numeratorDescription ? datimIndicator.extras.numeratorDescription : '--'}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell padding='none'><strong>Denominator Description:</strong></TableCell>
                                        <TableCell padding='none'>
                                        {datimIndicator.extras.denominatorDescription ? datimIndicator.extras.denominatorDescription : '--'}                                     
                                        </TableCell>
                                    </TableRow>                           
                                </TableBody>
                            </Table>
                          </Grid>                            
                          <Grid item xs={12} className={classes.expansionPanelLeft}>                        
                              <Button variant="outlined" className={classes.detailsButton} onClick={toggleDetailDrawer(datimIndicator, 'bottom', true)} color="primary">
                              View Datim indicator details
                              </Button>              
                          </Grid>
                        </Grid>

                        {/* formula  */}
                        <Grid item  xs={12} className={classes.comboTable}>                                
                        { 
                        <ExpansionPanel>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header" className={classes.formulaButton}>
                            <Typography className={classes.heading}><strong>Formula</strong></Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails  className={classes.expansionPanelDetails}>
                            <div className={classes.tableContainer} >                     
                              <Tabs value={formularPanel} onChange={handleFormularChange} className={classes.tabContainer}  classes={{ indicator: classes.bigIndicator }}>
                                <Tab label="INDICATOR FORMULA" {...formularProps(0)} />
                                <Tab label="INDICATOR TABLE" {...formularProps(1)} />                    
                              </Tabs>                
                              <FormularPanel value={formularPanel} index={0} className={classes.tabPanel}>                
                                <Grid container alignItems="center" justify="space-between">
                                    <Grid   item xs={10}>
                                      <div className={classes.tableContainer}>
                                        <strong>Numerator: </strong>
                                        {
                                          checked ? datimIndicator.extras.numerator : datimIndicator.extras.numeratorReadableFormula
                                        }<br></br><br></br>
                                        <strong>Denominator: </strong>
                                        {
                                          checked ? datimIndicator.extras.denominator : datimIndicator.extras.denominatorReadableFormula
                                        }
                                      </div></Grid>
                                    <Grid item xs={2} >
                                      <FormControlLabel
                                        value="Start"
                                        control={<Switch color="primary" checked={checked} onChange={toggleChecked} />}
                                        label={format}
                                        labelPlacement="start"
                                      />
                                    </Grid>
                                  </Grid>
                              </FormularPanel>
                              {/* formula for Indicator Table empty for now */ }
                              <FormularPanel value={formularPanel} index={1} className={classes.tabPanel}>                
                                <div></div>     
                              </FormularPanel>                  
                            </div>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                        }        
                      </Grid>
                    </ExpansionPanelDetails>                       
                  </ExpansionPanel>
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

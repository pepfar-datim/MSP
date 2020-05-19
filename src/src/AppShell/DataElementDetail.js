import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';


export default function  DataElementDetail(props) { 
      
    return(
        <Drawer anchor="bottom" open={props.detailPanel.bottom}   onClose={props.toggleDetailDrawer(props.dataElementDetail,'bottom', false)}>
            <Grid container className={props.classes.comparePanelContainer}>
            <Grid item xs={12}>               
                <div >
                <CloseIcon onClick={props.toggleDetailDrawer(props.dataElementDetail,'bottom', false)} className={props.classes.closeComparePanel}>add_circle</CloseIcon>
                <h2 className={props.classes.comparisonPanelTitle}>DATA ELEMENT DETAILS</h2>
                {/* comparison panel title */}
                </div>                          
                    {props.dataElementDetail ? 
                    <Table className={props.classes.comboTable} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell><strong>Display Name</strong></TableCell>
                                <TableCell>{props.dataElementDetail.display_name ? (props.dataElementDetail.display_name) : 'N/A'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>UID</strong></TableCell>
                                <TableCell>{props.dataElementDetail.external_id ? (props.dataElementDetail.external_id) : 'N/A'}</TableCell>
                            </TableRow> 
                            {
                                props.dataElementDetail.retired && props.dataElementDetail.retired !== "" && props.dataElementDetail.retired === "true" ?
                                    <TableRow>
                                        <TableCell><strong>Retired</strong></TableCell>
                                        <TableCell>{props.dataElementDetail.retired}</TableCell>
                                    </TableRow> 
                                : null
                            }
                            <TableRow>
                                <TableCell><strong>Source</strong></TableCell>
                                <TableCell>{props.dataElementDetail.extras && props.dataElementDetail.extras.source ? (props.dataElementDetail.extras.source) : 'N/A'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Type</strong></TableCell>
                                <TableCell>{props.dataElementDetail.concept_class && props.dataElementDetail.extras.source ? (props.dataElementDetail.concept_class) : 'N/A'}</TableCell>
                            </TableRow>
                            <TableRow className={props.classes.comboTable}>
                            <TableCell><strong>Description</strong></TableCell>
                            <TableCell>{(props.dataElementDetail.descriptions && props.dataElementDetail.descriptions.length > 0) ? props.dataElementDetail.descriptions[0].description : "N/A"}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell><strong>Short Name</strong></TableCell>
                            <TableCell>{props.dataElementDetail.names && props.dataElementDetail.names[1] ? (props.dataElementDetail.names[1].name) : 'N/A'}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell><strong>Code</strong></TableCell>
                            <TableCell>{props.dataElementDetail.names && props.dataElementDetail.names[2] ? (props.dataElementDetail.names[2].name) : 'N/A'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Indicator</strong></TableCell>
                                <TableCell>{props.dataElementDetail.indicator ? (props.dataElementDetail.extras.indicator) : 'N/A'}</TableCell>
                            </TableRow> 
                            <TableRow>
                                <TableCell><strong>Applicable Periods</strong></TableCell>
                                <TableCell>
                                    {
                                    props.dataElementDetail.extras && props.dataElementDetail.extras['Applicable Periods'] ? (props.dataElementDetail.extras['Applicable Periods'].length > 0 ? (Object.keys(props.dataElementDetail.extras['Applicable Periods']).map(
                                        (key, index) =>                                       
                                            (index < props.dataElementDetail.extras['Applicable Periods'].length -1) ?                              
                                                props.dataElementDetail.extras['Applicable Periods'][key] + ", " : props.dataElementDetail.extras['Applicable Periods'][key] 
                                    )
                                    ) : 'N/A') : 'N/A'
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell><strong>Result/Target</strong></TableCell>
                            <TableCell>{props.dataElementDetail.extras && props.dataElementDetail.extras.resultTarget ? props.dataElementDetail.extras.resultTarget : 'N/A'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Domain Type</strong></TableCell>
                                <TableCell>{props.dataElementDetail.extras && props.dataElementDetail.extras.domainType ? (props.dataElementDetail.extras.domainType) : 'N/A'}</TableCell>
                            </TableRow>                                                                                    
                            <TableRow>
                                <TableCell><strong>Value Type</strong></TableCell>
                                <TableCell>{props.dataElementDetail.extras && props.dataElementDetail.extras.valueType ? (props.dataElementDetail.extras.valueType) : 'N/A'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Aggregation Type</strong></TableCell>
                                <TableCell>{props.dataElementDetail.extras && props.dataElementDetail.extras.aggregationType ? (props.dataElementDetail.extras.aggregationType) : 'N/A'}</TableCell>
                            </TableRow>                                                        
                        </TableBody>
                    </Table> : ''}
                </Grid>
            </Grid>                                      
        </Drawer>
    );
}

DataElementDetail.propTypes = {
    dataElementDetail: PropTypes.object,
    classes: PropTypes.object,
    detailPanel: PropTypes.object,
    toggleDetailDrawer: PropTypes.func
  };
  
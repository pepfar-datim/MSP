import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
 

export default function  DatimIndicatorDetail(props) {       
    return(
        <Drawer anchor="bottom" open={props.detailPanel.bottom} onClose={props.toggleDetailDrawer('bottom', false)}>
            <Grid container className={props.classes.comparePanelContainer} >                
                <Grid item xs={9}>
                <h2 className={props.classes.comparisonPanelTitle}>DATIM INDICATOR DETAILS</h2>
                </Grid>
                <Grid item xs={1}>
                <CloseIcon onClick={props.toggleDetailDrawer(props.datimIndicatorDetail, 'bottom', false)} className={props.classes.closeComparePanel}>add_circle</CloseIcon>
                </Grid>
                <Grid item xs={2} />
                
                <Grid item xs={9}>
                {props.datimIndicatorDetail ?
                    <Table className={props.classes.comboTable} style={{ marginRight: '20px' }} aria-label="simple table">
                    <TableBody>
                        <TableRow>
                        <TableCell><strong>Indicator Name</strong></TableCell>
                        <TableCell>{props.datimIndicatorDetail.names[0] ? (props.datimIndicatorDetail.names[0].name) : '--'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell><strong>Short Name</strong></TableCell>
                        <TableCell>{props.datimIndicatorDetail.names[1] ? (props.datimIndicatorDetail.names[1].name) : '--'}</TableCell>
                        </TableRow>
                        <TableRow className={props.classes.comboTable}>
                        <TableCell><strong>Indicator Description</strong></TableCell>
                        <TableCell>{(props.datimIndicatorDetail.descriptions) ? props.datimIndicatorDetail.descriptions[0].description : "--"}</TableCell>
                        </TableRow>

                        <TableRow>
                        <TableCell><strong>Numerator Description</strong></TableCell>
                        <TableCell>{props.datimIndicatorDetail.extras.numeratorDescription ? (props.datimIndicatorDetail.extras.numeratorDescription) : '--'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell><strong>Denominator Description</strong></TableCell>
                        <TableCell>{props.datimIndicatorDetail.extras.denominatorDescription ? (props.datimIndicatorDetail.extras.denominatorDescription) : '--'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell><strong>Numerator</strong></TableCell>
                        <TableCell>{props.datimIndicatorDetail.extras.numerator ? (props.datimIndicatorDetail.extras.numerator) : '--'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell><strong>Denominator</strong></TableCell>
                        <TableCell>{props.datimIndicatorDetail.extras.denominator ? (props.datimIndicatorDetail.extras.denominator) : '--'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell><strong>UID</strong></TableCell>
                        <TableCell>{props.datimIndicatorDetail.id ? (props.datimIndicatorDetail.id) : '--'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell><strong>Source</strong></TableCell>
                        <TableCell>{'DATIM'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell><strong>Indicator Type</strong></TableCell>
                        <TableCell>{props.datimIndicatorDetail.datatype ? props.datimIndicatorDetail.datatype : '--'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell><strong>Indicator Groups</strong></TableCell>
                        <TableCell>                              
                        {
                        props.datimIndicatorDetail.extras && props.datimIndicatorDetail.extras['indicatorGroups'] && props.datimIndicatorDetail.extras['indicatorGroups'].length > 0 ? 
                            (Object.values(props.datimIndicatorDetail.extras['indicatorGroups']).map(                                     
                                (item, index) =>                                                                           
                                    (index < props.datimIndicatorDetail.extras['indicatorGroups'].length -1) ?                              
                                        item.name +  ", " 
                                        : item.name
                                )
                            ) : '--'
                        }
                        </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table> : ''}
                </Grid>                                
            </Grid>
        </Drawer>
    );
}

DatimIndicatorDetail.propTypes = {
    datimIndicatorDetail: PropTypes.object,
    classes: PropTypes.object,
    detailPanel: PropTypes.object,
    toggleDetailDrawer: PropTypes.func
  };
  
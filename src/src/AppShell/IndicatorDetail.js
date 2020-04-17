import React, { } from 'react';
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
import TableRow from '@material-ui/core/TableRow';

import LinearProgress from '@material-ui/core/LinearProgress';
import {convertMarkdown} from '../util.js';


import Grid from '@material-ui/core/Grid';

const ExpandTitle = styled.p`
    margin:0;
    padding:0;
    font-size: 1.2em;
    color: ${color_palette.SECONDARY_RED};
    font-weight: bold;
`;


export default function  IndicatorDetail(props) {   
  let versionText = "";  
  props.versionMap.map(   
      item => {         
        if (props.currentIndicator.periodYear && item.year === props.currentIndicator.periodYear) {  
          versionText = item.fromToText;
        }
  });  
    return (
      <div>       
        {props.indicatorDetailLoading ? 
          <div><LinearProgress mode="indeterminate" /></div> : null                  
        }

        {/* Indicator description */}        
        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <ExpandTitle>Details</ExpandTitle>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
            <div className={props.classes.numeratorTitle} style={{textAlign: 'left'}}><strong>Description</strong></div>
              <div >             
                <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.description)}} />         
              </div>            
              <Table  className={props.classes.comboTable} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell style={{width: '30%'}} padding='none'><strong>Reporting Level</strong></TableCell>
                        <TableCell padding='none'>
                          {props.currentIndicator.level === '' ?  <div dangerouslySetInnerHTML={{__html: convertMarkdown('N/A')}} /> : (<div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.level)}} />)}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell padding='none'><strong>Reporting frequency</strong></TableCell>
                      <TableCell padding='none'>
                      {props.currentIndicator.frequency === '' ?  <div dangerouslySetInnerHTML={{__html: convertMarkdown('N/A')}} /> : (<div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.frequency)}} />)}
                       </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell padding='none'><strong>How to calculate annual total</strong></TableCell>
                      <TableCell padding='none'>{props.currentIndicator.how_to_calculate_annual_total === '' ?  <div dangerouslySetInnerHTML={{__html: convertMarkdown('N/A')}} /> : 
                      (<div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.how_to_calculate_annual_total)}} />)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell padding='none'><strong>Change from previous version</strong> <br/>({versionText})</TableCell>
                      <TableCell padding='none'>{props.currentIndicator.changeFromPreviousVersion === '' ?  <div dangerouslySetInnerHTML={{__html: convertMarkdown('N/A')}} /> : 
                      (<div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.changeFromPreviousVersion)}} />)}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>                    
            </div>
           
          </ExpansionPanelDetails>
        </ExpansionPanel>
       

        {/* Indicator numerator */}   
            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header" >
                <ExpandTitle>Numerator/Denominator/Disaggregates</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={props.classes.panelDetails}>
              <div className={props.classes.numeratorTitle} ><strong>Numerator</strong></div>  
              <Grid container className={props.classes.numeratorGridContainer}>                                        
                <Grid item xs={12} className={props.classes.numeratorGrid} >
                <div><strong>Numerator:</strong> <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.numerator)}} /> 
               </div>               
                <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.numerator_description)}} />
                </Grid>
                <Grid item xs={12} className={props.classes.numeratorGridCentered} >
                <div><strong>Disaggregates</strong> </div>              
                </Grid>
                <Grid item xs={12} className={props.classes.numeratorGrid} >                  
                <div><div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.numerator_disaggregation_groups)}} /> </div>               
                </Grid>
              </Grid>

              <div className={props.classes.numeratorTitle} ><strong>Denominator</strong></div>  
              <Grid container className={props.classes.numeratorGridContainer}>                                        
                <Grid item xs={12} className={props.classes.numeratorGrid} >
                <div><strong>Denominator:</strong> {props.currentIndicator.denominator}</div>               
                </Grid>
                <Grid item xs={12} className={props.classes.numeratorGridCentered} >
                <div><strong>Disaggregates</strong> </div>              
                </Grid>
                <Grid item xs={12} className={props.classes.numeratorGrid} >                  
                <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.denominator_disaggregation_groups)}} />              
                </Grid>
              </Grid>   
                <div>{
                props.currentIndicator && props.currentIndicator.disaggregate_descriptions_and_definitions !== "" ?              
                <div>
                  <div className={props.classes.numeratorTitle}><strong>Disaggregate descriptions and definitions</strong></div>
                <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.disaggregate_descriptions_and_definitions)}} /> 
                </div>
              : null }                    
              </div>              
              </ExpansionPanelDetails>
            </ExpansionPanel>
                  
            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
                <ExpandTitle>Additional Attributes</ExpandTitle>
                    {/*<ExpandSubTitle>Standard definition of DSD and TA-SDI used.</ExpandSubTitle>*/}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>    
                <div>
                {props.currentIndicator && props.currentIndicator.PEPFAR_support_definition !== "" ?  
                  <div>
                    <div className={props.classes.leftAlignedTitle}>PEPFAR-support definition</div>
                      <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.PEPFAR_support_definition)}}/>
                  </div>  : null }
                {props.currentIndicator && props.currentIndicator.how_to_use !== "" ?  
                  <div>
                  <div className={props.classes.leftAlignedTitle}>How to use</div>
                  <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.how_to_use)}} />
                </div>  : null }
                {props.currentIndicator && props.currentIndicator.how_to_collect !== "" ?  
                <div>
                  <div className={props.classes.leftAlignedTitle}>How to collect</div>
                  <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.how_to_collect)}}/>
                </div>  : null }
                {props.currentIndicator && props.currentIndicator.how_to_review !== "" ?  
                 <div>
                 <div className={props.classes.leftAlignedTitle}>How to review data quality</div>
                 <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.how_to_review)}} />
               </div>  : null }
               {props.currentIndicator && props.currentIndicator.guiding_narrative_questions !== "" ?  
                 <div>
                 <div className={props.classes.leftAlignedTitle}>Guiding narrative questions</div>
                 <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.guiding_narrative_questions)}}/>
               </div>  : null }
              </div>              
              </ExpansionPanelDetails>
            </ExpansionPanel>                     
        </div>
    );
}

IndicatorDetail.propTypes = {
  currentIndicator: PropTypes.object,
  classes: PropTypes.object,
  indicatorDetailLoading: PropTypes.bool
};




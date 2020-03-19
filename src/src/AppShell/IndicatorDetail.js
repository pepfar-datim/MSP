import React, { } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as color_palette from '../Styles/Colors';
import styled from 'styled-components';

import LinearProgress from '@material-ui/core/LinearProgress';

import {convertMarkdown} from '../util.js';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Grid from '@material-ui/core/Grid';

const ExpandTitle = styled.p`
    margin:0;
    padding:0;
    font-size: 1.2em;
    color: ${color_palette.SECONDARY_RED};
    font-weight: bold;
`;
const ExpandSubTitle = styled.span`
    margin-left: 1em;
    font-size: 1em;
    padding-top: 5px;
    font-weight: 300;
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
        <ExpansionPanel defaultExpanded={false}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <ExpandTitle>Description/Details</ExpandTitle>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <p className={props.classes.childContent}>
                {props.currentIndicator.description}
              </p>
              <p>
                <strong>Reporting level</strong>: {props.currentIndicator.level} <br/>
                <strong>Reporting frequency</strong>: {props.currentIndicator.frequency} <br/>
                <strong>How to calculate annual total</strong>:  {props.currentIndicator.how_to_calculate_annual_total} 
              </p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Indicator changes */}
        <ExpansionPanel defaultExpanded={false}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <ExpandTitle>Indicator changes</ExpandTitle>
              <ExpandSubTitle> Guidance Version: {versionText} </ExpandSubTitle>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>                        
                <div><strong>Change from previous version</strong>: {props.currentIndicator.changeFromPreviousVersion}</div>                        
            </ExpansionPanelDetails>
            </ExpansionPanel>

        {/* Indicator numerator */}   
            <ExpansionPanel defaultExpanded={false}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header" >
                <ExpandTitle>Numerator/Denominator/Disaggregates</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={props.classes.panelDetails}>
              <div className={props.classes.numeratorTitle} ><strong>Numerator</strong></div>  
              <Grid container className={props.classes.numeratorGridContainer}>                                        
                <Grid item xs={12} className={props.classes.numeratorGrid} >
                <div><strong>Numerator:</strong> {props.currentIndicator.numerator}</div>
                <p>{props.currentIndicator.numerator_description}</p>
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
                <p>[denominator description missing in OCL]</p>
                </Grid>
                <Grid item xs={12} className={props.classes.numeratorGridCentered} >
                <div><strong>Disaggregates</strong> </div>              
                </Grid>
                <Grid item xs={12} className={props.classes.numeratorGrid} >                  
                <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.denominator_disaggregation_groups)}} />              
                </Grid>
              </Grid>   
              <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.disaggregate_descriptions_and_definitions)}} /> 
                                                
              </ExpansionPanelDetails>
            </ExpansionPanel>
                  
            <ExpansionPanel>
              <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
                <ExpandTitle>Other/Quality Assurance</ExpandTitle>
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




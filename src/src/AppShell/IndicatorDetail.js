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
    return (
      <div>       
        {props.indicatorDetailLoading ? 
          <div><LinearProgress mode="indeterminate" /></div> : null                  
        }
      {/* Indicator description */}        
        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <ExpandTitle>Description</ExpandTitle>
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
        <ExpansionPanel defaultExpanded={true}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <ExpandTitle>Indicator changes</ExpandTitle>
              <ExpandSubTitle> Guidance Version: {props.currentIndicator.guidance_version}</ExpandSubTitle>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>                        
                <div><strong>Change from previous version</strong>: {props.currentIndicator.changeFromPreviousVersion}</div>                        
            </ExpansionPanelDetails>
            </ExpansionPanel>

        {/* Indicator numerator */}   
            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header" >
                <ExpandTitle>Numerator</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={props.classes.panelDetails}>
                    <p className={props.classes.childContent}><strong>Numerator</strong>: {props.currentIndicator.numerator}</p>
                    <p className={props.classes.childContent}><strong>Numerator Description</strong>: {props.currentIndicator.numerator_description}</p>
                    <p className={props.classes.childContent}><strong>Disaggregate Groups</strong></p>              
                    <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.numerator_disaggregation_groups)}} />                                           
              </ExpansionPanelDetails>
            </ExpansionPanel>

        {/* Indicator denominator */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                <ExpandTitle>Denominator</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={props.classes.panelDetails}>
                    <p className={props.classes.childContent}><strong>Denominator</strong>: {props.currentIndicator.denominator}</p>
                    <p className={props.classes.childContent}><strong>Denominator Description</strong>: {props.currentIndicator.numerator_description}</p>
                    <p className={props.classes.childContent}><strong>Disaggregate Groups</strong>:                
                      <span dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.denominator_disaggregation_groups)}} />
                    </p>
              </ExpansionPanelDetails>
            </ExpansionPanel>

        {/* Indicator disaggregate */}
        {props.currentIndicator && props.currentIndicator.disaggregate_descriptions_and_definitions !== "" ? 
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <ExpandTitle>Disaggregate descriptions & definitions</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>                                    
                  <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.disaggregate_descriptions_and_definitions)}} />                         
              </ExpansionPanelDetails>
            </ExpansionPanel>
            : null }

        {/* Indicator pepfar definition */}
        {props.currentIndicator && props.currentIndicator.PEPFAR_support_definition !== "" ?  
            <ExpansionPanel>
              <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
                <ExpandTitle>PEPFAR-support definition</ExpandTitle>
                    {/*<ExpandSubTitle>Standard definition of DSD and TA-SDI used.</ExpandSubTitle>*/}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>                          
                <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.PEPFAR_support_definition)}}/>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        : null }
        {/* Indicator how to use */}
        {props.currentIndicator && props.currentIndicator.how_to_use !== "" ?  
            <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <ExpandTitle>How to use</ExpandTitle>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.how_to_use)}} />
            </ExpansionPanelDetails>
            </ExpansionPanel>
        : null }
        {/* Indicator how to collect */}
        {props.currentIndicator && props.currentIndicator.how_to_collect !== "" ?  
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <ExpandTitle>How to collect</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.how_to_collect)}}/>
            </ExpansionPanelDetails>
            </ExpansionPanel>
        : null }
        {/* Indicator how to review quality */}
        {props.currentIndicator && props.currentIndicator.how_to_review !== "" ?  
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <ExpandTitle>How to review data quality</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.how_to_review)}} />
            </ExpansionPanelDetails>
            </ExpansionPanel>
          : null }
        {/* Indicator guiding narrative questions */}
        {props.currentIndicator && props.currentIndicator.guiding_narrative_questions !== "" ?  
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <ExpandTitle>Guiding narrative questions</ExpandTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <div dangerouslySetInnerHTML={{__html: convertMarkdown(props.currentIndicator.guiding_narrative_questions)}}/>
            </ExpansionPanelDetails>
            </ExpansionPanel>
        : null }              
        
        </div>
    );
}

IndicatorDetail.propTypes = {
  currentIndicator: PropTypes.object,
  classes: PropTypes.object,
  indicatorDetailLoading: PropTypes.bool
};




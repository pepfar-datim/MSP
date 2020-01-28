import React, { Component } from 'react';
import * as headings from '../Styles/Text';
import Breadcrumb from '../Components/Breadcrumb';
import Grid from '@material-ui/core/Grid';


class About extends Component {

  render() {

    const styles = {                                                  
        divider:{
            width: '70px',
            height: '3px',
            marginTop: '1em',
            backgroundColor: '#C1A783'
          },                
      };

    return (
        <div style={{ maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '50px',
        paddingLeft: '15px',
        paddingRight: '15px'}}>
        <Breadcrumb></Breadcrumb>
        <headings.H1>About the Metadata Sharing Platform</headings.H1>
        <div style={styles.divider}/>
        <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
               
                <div>
                  <p>
                  MSP was launched in 2020 to provide users within the U.S. President’s Emergency Plan for AIDS Relief (PEPFAR) data exchange and interoperability community access to metadata for indicators defined in the Monitoring, Evaluation, and Reporting (MER) Indicator Reference Guide.  
                  </p>
                  <p>
                  Over the years the U.S. government remains steadfast in its commitment to the global HIV/AIDS epidemic by investing in PEPFAR programs that continue to save lives, prevents millions from being infected with HIV, and work geared towards controlling the global spread of the disease. As these efforts increase and data is collected in the Data for Accountability Transparency Impact Monitoring (DATIM) system, there is a need to collect data once and reuse multiple times. To meet this need, it is crucial that users within the community can understand the data including the metadata. However, as more countries shifts to the control phase of the disease and reporting needs increase, DATIM's metadata continues to become more and more complex. This then makes it a challenge to interpret and analyze data across interdependent and interconnected systems. Ensuring that users have visibility into the full “data lineage” across systems is now a priority within the community to address the demands on the availability and use.
                  </p>
                  <p>
                  Built on the Open Concept Lab (OCL) open-source terminology service, MSP’s goal is to bridge the gap between these interconnected and interdependent systems by providing both technical and non-technical users with
                  </p>
                  <ul>                    
                    <li>access to the full MER metadata which includes code lists, indicators, disaggregates and calculations in one central repository,</li>
                    <li>a unified view of the MER indicators and their metadata with the linkages across multiple data sources,  </li>
                    <li>view on how metadata changes over-time, and</li>
                    <li>full MER Indicator Reference Guide narrative</li>
                  </ul>
                  
                  <p>
                  MSP is currently work-in-progress and being managed by the Regenstrief Institute as part of a joint effort with PEPFAR. If you have any questions or comments, please <a href="https://github.com/pepfar-datim/MSP/issues" title="submit an issue"> create and submit an issue here</a>.
                  </p>
                  </div>
            </Grid>
           
        </Grid>
        </div>
    );
  }
}

export default About;
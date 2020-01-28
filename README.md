# Metadata Sharing Platform
>The Metadata Sharing Platform (MSP) is an open-source tool offered by the U.S. President's Emergency Plan for AIDS Relief (PEPFAR) for users within the Data Exchange and Interoperability community with access to the MER Indicator metadata across multiple sources. 

## Background
Over the years the U.S. government remains steadfast in its commitment to the global HIV/AIDS epidemic by investing in PEPFAR programs that continue to save lives, prevents millions from being infected with HIV, and work geared towards controlling the global spread of the disease. As these efforts increase and data is collected in the Data for Accountability Transparency Impact Monitoring (DATIM) system, there is a need to collect data once and reuse multiple times. To meet this need, it is crucial that users within the community can understand the data including the metadata. However, as more countries shifts to the control phase of the disease and reporting needs increase, DATIM's metadata continues to become more and more complex. This then makes it a challenge to interpret and analyze data across interdependent and interconnected systems. Ensuring that users have visibility into the full “data lineage” across systems is now a priority within the community to address the demands on the availability and use.

Built on the Open Concept Lab (OCL) open-source terminology service, MSP’s goal is to bridge the gap between these interconnected and interdependent systems by providing both technical and non-technical users with
* access to the full MER metadata which includes code lists, indicators, disaggregates and calculations in one central repository
*	a unified view of the MER indicators and their metadata with the linkages across multiple data sources
*	view on how metadata changes over-time
* full MER Indicator Reference Guide narrative

MSP is currently work-in-progress and being managed by the Regenstrief Institute as part of a joint effort with PEPFAR. If you have any questions or comments, please create and submit an issue [here](https://github.com/pepfar-datim/MSP/issues).

<!--
## Deployment
##Build With 
## Release
The current release of MSP is v1.0.0. Updates and release notes are available here.
-->

## Production Build

```
export OCL_DOMAIN=qa.openconceptlab.org #default
docker-compose up
```

## License
This project is licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License.You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.


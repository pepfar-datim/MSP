

const OCL_DOMAIN = (window.OCL_DOMAIN) || 'staging.openconceptlab.org';

const config = { 
  "domain": OCL_DOMAIN, 
  "org": "PEPFAR-Test7", 
  "source": "",
  "defaultYear": "2020" ,
  "versionMap": [
    {
      "year": "2020",
      "version": "v2.4",
      "fromToText": "from MER 2.3 to 2.4",
      "fromText": "MER 2.3",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"https://www.state.gov/wp-content/uploads/2019/10/PEPFAR-MER-Indicator-Reference-Guide-Version-2.4-FY20.pdf"
    },
    {
      "year": "2019",
      "version": "v2.3",
      "fromToText": "from MER 2.2 to 2.3",
      "fromText": "MER 2.2",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"https://datim.zendesk.com/hc/en-us/article_attachments/360012244672/MER_Indicator_Reference_Guide__Version_2.3_FY19_.pdf"
    },
    {
      "year": "2018",
      "version": "v2.2",
      "fromToText": "from MER 2.1 to 2.2",
      "fromText": "MER 2.1",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"https://datim.zendesk.com/hc/en-us/article_attachments/360042160071/MER.2.0.Indicator.Reference.Guide.v2.2.pdf"                 
    },
    {
      "year": "2017",
      "version": "v2.1",
      "fromToText": "from MER 2.0 to 2.1",
      "fromText": "MER 2.0",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":""
    },
    {
      "year": "2016",
      "version": "v2.0",
      "fromToText": "from MER 1.0 to 2.0",
      "fromText": "MER 1.0",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":""
    }
  ],
  "MER_Update_CSV_URL": 'https://docs.google.com/spreadsheets/d/1Z7cMxLdyq9ZgFFOOHLMtJnVrkRk-qBO3BPOV6clsCOM/edit#gid=0'
}

export function getConfig() {
  return config;
}



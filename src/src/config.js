

const OCL_DOMAIN = (window.OCL_DOMAIN) || 'staging.openconceptlab.org';

const config = { 
  "domain": OCL_DOMAIN, 
  "org": "PEPFAR-Test7", 
  "source": "",
  "defaultYear": "2020" ,
  "versionMap": [
    {"year": "2020","version": "v2.4","fromToText": "from MER 2.3 to 2.4"},
    {"year": "2019","version": "v2.3","fromToText": "from MER 2.2 to 2.3"},
    {"year": "2018","version": "v2.2","fromToText": "from MER 2.1 to 2.2"},
    {"year": "2017","version": "v2.1","fromToText": "from MER 2.0 to 2.1"},
    {"year": "2016","version": "v2.0","fromToText": "from MER 1.0 to 2.0"}
  ]
}



export function getConfig() {
  return config;
}



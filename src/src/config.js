

const OCL_DOMAIN = (window.OCL_DOMAIN) || 'staging.openconceptlab.org';

const config = { 
  "domain": OCL_DOMAIN, 
  "org": "PEPFAR-Test3", 
  "source": "MER-Test3",
  "defaultYear": "2020" }



export function getConfig() {
  return config;
}





const OCL_DOMAIN = (window.OCL_DOMAIN) || 'staging.openconceptlab.org';

const config = { 
  "domain": OCL_DOMAIN, 
  "org": "PEPFAR-Test10b", 
  "source": "",
  "defaultYear": "2021" ,
  "versionMap": [
    {
      "year": "2021",
      "version": "v2.5",
      "fromToText": "from MER 2.4 to 2.5",
      "fromText": "MER 2.4",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"/assets/FY21%20MER%20Reference%20Guide%20v2_5%20(2020-Sep).pdf"
    },
    {
      "year": "2020",
      "version": "v2.4",
      "fromToText": "from MER 2.3 to 2.4",
      "fromText": "MER 2.3",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"/assets/FY20%20MER%20Reference%20Guide%20v2_4%20(2019-Sep).pdf"
    },
    {
      "year": "2019",
      "version": "v2.3",
      "fromToText": "from MER 2.2 to 2.3",
      "fromText": "MER 2.2",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"/assets/FY19%20MER%20Reference%20Guide%20v2_3%20(2018-Sep).pdf"
    },
    {
      "year": "2018",
      "version": "v2.2",
      "fromToText": "from MER 2.1 to 2.2",
      "fromText": "MER 2.1",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"/assets/FY18%20MER%20Reference%20Guide%20v2_2%20(2017-Oct).pdf"                 
    },
    {
      "year": "2017",
      "version": "v2.1",
      "fromToText": "from MER 2.0 to 2.1",
      "fromText": "MER 2.0",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"/assets/FY17%20MER%20Reference%20Guide%20v2_1%20(2017-Jan).pdf"
    },
    {
      "year": "2016",
      "version": "v2.0",
      "fromToText": "from MER 1.1 to 2.0",
      "fromText": "MER 1.1",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"/assets/FY16%20MER%20Reference%20Guide%20v2_0%20(2016-Oct).pdf"
    },
    {
      "year": "2010",
      "version": "v1.1",
      "fromToText": "from MER 1.0 to 1.1",
      "fromText": "MER 1.0",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"/assets/FY10%20MER%20Reference%20Guide%20v1_1%20(2009-Aug).pdf"
    },
    {
      "year": "2007",
      "version": "v1.0",
      "fromToText": "from MER 1.0 to 1.0",
      "fromText": "MER 1.0",
      "updateChangeDescription":"Through the past 3 years of quarterly, site-level monitoring, PEPFAR programs have used data to improve implementation. Changes to the MER highlight key program areas (e.g., index testing services) that should be taken to scale.",
      "guidanceDownloadURL":"/assets/FY08%20MER%20Reference%20Guide%20v1_0%20(2007-Jul).pdf"
    }
  ],
  "MER_Update_CSV_URL": 'https://docs.google.com/spreadsheets/d/1Z7cMxLdyq9ZgFFOOHLMtJnVrkRk-qBO3BPOV6clsCOM/edit#gid=0',
  "indicatorGroups" :
  {
    "COP 19 indicators": "icbFhgXLSXL",
    "COP 20 datapack indicators": "NuL7T5sfV0x",
    "FY18 Achievement": "sXizYxLtf81",
    "FY19 Results Analytic Indicators": "KUluDIqOAss",
    "FY19 Results Cleaning Favorite Indicators": "AXmrYBXFigK",
    "FY19 Targets Cleaning Favorite Indicators": "HRglkige9Jn",
    "FY20 Results Analytic Indicators": "BsAbiNUPOCf",
    "FY20 Results Cleaning Favorite Indicators": "R3iYN82Bh69",
    "FY21 Target Cleaning Favorite Indicators": "m1XZHdoIsFG",
    "GEND_GBV": "zk2Spl7JNh2",
    "HRH_CURR": "XecPVEg7Jdp",
    "HTC": "q30RiWAM3VW",
    "HTS_TST": "AgMcHnlM9vm",
    "MOH Alignment": "ZBps2hfKxrO",
    "OVC_SERV": "rEMeS5Yexdi",
    "PMTCT": "jIrXUvd7aBw",
    "TB_STAT": "Brg88UUSyAs",
    "TX_CURR": "IQ542pKJisF",
    "TX_NEW": "nzmvCIy9ICt",
    "TX_RET": "dN2yET6t9GT",
    "TX_TB": "kuB9tpIjGOG",
    "VMMC_CIRC": "WLNDIuK80xm",
    "World AIDS Day 2017": "jSDu6DQxV44",
    "World AIDS Day 2018": "CHfoV0KkCmm",
    "World AIDS Day 2019": "FqdBaEo00Hd"
  }
}

export function getConfig() {
  return config;
}



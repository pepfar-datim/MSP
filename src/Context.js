

export const initialState = {
    title: 'Welcome to the OCL Metadata Browser',
    group: 'testing',
    user: '',
    password: '',
    indicatorName: '',
    currentIndicator: [],
    matchDataElements:[],
    data_Elements:  [
      { name: 'VMMC_CIRC (N, DSD, Age/Sex/HIVStatus/ScreenResult/ScreenVisitType)', 
        source: 'DATIM',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'quarterly',
        indicator:'VMMC_CIRC',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'On ART screened for cervical cancer', 
        description: 'Number of HIV-positive women on ART screened for cervical cancer, Facilis hac ornare voluptatibus consequatur corporis, sollicitudin libero, netus quisquam eget sequi modi montes litora parturient at', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'XWK6yAwhol8',
        version: '2020-v2',
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'positive',
          },
          {
            name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'wIDT7S8yul9',
            ageGroup: '15-19',
            visitType: 'followUp',
            visitResult: 'negative',

          },
          {
            name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'wIDT7S8yul9',
            ageGroup: '20-24',
            visitType: 'rescreened',
            visitResult: 'suspected',

          }
      ],
      pdh:['gPKbuvvpose', 'a9FUCU6f7WU'],
      moh:['gPKbuvvpose', 'a9FUCU6f7WU']
      },
      { name: 'VMMC_CIRC (N, DSD, Age/Sex/HIVStatus/ScreenResult/)', 
      source: 'DATIM',
      type: 'Results',
      fiscal: '2020', 
      dataSet: 'facility',
      frequency: 'quarterly',
      indicator:'VMMC_CIRC',
      indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
      category: 'On ART screened for cervical cancer', 
      description: 'Number of HIV-positive women on ART screened for cervical cancer, Facilis hac ornare voluptatibus consequatur corporis, sollicitudin libero, netus quisquam eget sequi modi montes litora parturient at', 
      shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
      uid: 'XWK6yAwhol8', 
      version: '2020-v2',
      readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
      readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
      uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
      uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )', 
      indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
      combos:[
        { 
          name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
          code:'nI9rG3vPWQz',
          uid: 'dh4TQ68p2SC',
          ageGroup: '15-19',
          visitType: 'firstTime',
          visitResult: 'positive',
        },
        {
          name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
          code:'nI9rG3vPWQz',
          uid: 'wIDT7S8yul9',
          ageGroup: '15-19',
          visitType: 'followUp',
          visitResult: 'negative',

        },
        {
          name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
          code:'nI9rG3vPWQz',
          uid: 'wIDT7S8yul9',
          ageGroup: '20-24',
          visitType: 'rescreened',
          visitResult: 'suspected',

        }
    ],
    pdh:['gPKbuvvpose'],
      moh:[]
      },
      { name: 'VMMC_CIRC (N, DSD, Age/Sex/HIVStatus/ScreenResult/fs)', 
    source: 'DATIM',
    type: 'Results',
    fiscal: '2020', 
    dataSet: 'facility',
    frequency: 'quarterly',
    indicator:'VMMC_CIRC',
    indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
    category: 'On ART screened for cervical cancer', 
    description: 'Number of HIV-positive women on ART screened for cervical cancer, Facilis hac ornare voluptatibus consequatur corporis, sollicitudin libero, netus quisquam eget sequi modi montes litora parturient at', 
    shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
    uid: 'XWK6yAwhol8', 
    version: '2020-v1',
    readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
    readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
    uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
    uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
    indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
    combos:[
      { 
        name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
        code:'nI9rG3vPWQz',
        uid: 'dh4TQ68p2SC',
        ageGroup: '15-19',
        visitType: 'firstTime',
        visitResult: 'positive',
      },
      {
        name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
        code:'nI9rG3vPWQz',
        uid: 'wIDT7S8yul9',
        ageGroup: '15-19',
        visitType: 'followUp',
        visitResult: 'negative',

      },
      {
        name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
        code:'nI9rG3vPWQz',
        uid: 'wIDT7S8yul9',
        ageGroup: '20-24',
        visitType: 'rescreened',
        visitResult: 'suspected',

      }
  ],
      pdh:['a9FUCU6f7WU'],
      moh:[]
      },
      { name: 'VMMC_CIRC (N, DSD, Age/Sex/HIVStatus/ScreenResult/dfas)', 
        source: 'DATIM',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'quarterly',
        indicator:'VMMC_CIRC',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'On ART screened for cervical cancer', 
        description: 'Number of HIV-positive women on ART screened for cervical cancer, Facilis hac ornare voluptatibus consequatur corporis, sollicitudin libero, netus quisquam eget sequi modi montes litora parturient at', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'XWK6yAwhol8', 
        version: '2020-v1',
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'positive',
          },
          {
            name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'wIDT7S8yul9',
            ageGroup: '15-19',
            visitType: 'followUp',
            visitResult: 'negative',

          },
          {
            name: '15-19, Female, Positive, Cervical Cancer Screened - Follow Up, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'wIDT7S8yul9',
            ageGroup: '20-24',
            visitType: 'rescreened',
            visitResult: 'suspected',

          }
      ],
      pdh:['gPKbuvvpose', 'a9FUCU6f7WU'],
      moh:['a9FUCU6f7WU']
      },

      { name: 'CXCA_SCRN (N, TA, Age/Sex/HIVStatus/ScreenResult/ScreenVisitType)', 
        source: 'DATIM',
        type: 'Target',
        fiscal: '2019', 
        dataSet: 'facility',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'On ART eligible for treatment',
        description: 'Voluptatum nisl nobis! Feugiat et facilisi vehicula quos. Doloribus exercitationem cursus diamlorem, suscipit cupidatat egestas, architecto', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'D8gXql7mhrZ', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2019-v1',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['gPKbuvvpose', 'a9FUCU6f7WU'],
      moh:[]
      },


      { name: 'CXCA_TX (N, DSD, Age/Sex/HIVStatus/TreatmentType/ScreenVisitType)', 
        source: 'DATIM',
        type: 'SIMS',
        fiscal: '2018',
        dataSet: 'community',
        frequency: 'quarterly',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'On ART eligible for treatment ',
        description: 'Voluptatibus velit per, taciti senectus incidunt. Tellus donec commodi nunc, donec convallis', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'Z6qsl1ezjTS', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2018-v2',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['gPKbuvvpose'],
      moh:[]
      },

      { name: 'CXCA_TX (N, TA, Age/Sex/HIVStatus/TreatmentType/ScreenVisitType)', 
        source: 'PDH',
        type: 'SIMS',
        fiscal: '2019',  
        dataSet: 'community',
        frequency: 'annual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Services Offered',
        description: 'Nec cubilia maiores, porro accumsan voluptatem proident reprehenderit quisquam! Tellus est rutrum, justo', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'mFvVvrRvZgo', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2019-v1',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['a9FUCU6f7WU'],
      moh:['a9FUCU6f7WU']
      },

      { name: 'EMR_SITE (N, NoApp, Service Delivery Area)', 
        source: 'MOH',
        type: 'Results',
        fiscal: '2020',
        dataSet: 'community',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Providing voluntary FPS',
        description: 'Feugiat inventore penatibus odio proin, facere sit culpa mi, mauris! Sem, morbi, optio vel cras fugit nesciunt tellus', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'Duf3Ks5vfNL', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2020-v1',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['gPKbuvvpose', 'a9FUCU6f7WU'],
      moh:['gPKbuvvpose']
      },

      { name: 'FPINT_SITE (N, NoApp, Serv Del Point)', 
        source: 'PDH',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'community',
        frequency: 'annual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'GBV Care',
        description: 'Ipsam dis adipiscing mauris, eleifend laboris distinctio natoque nostrum incididunt? Natoque, fusce', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'GT81rJIJrrd', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2020-v1',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['gPKbuvvpose', 'a9FUCU6f7WU'],
      moh:[]
      },

      { name: 'GEND_GBV (N, DSD, Age/Sex/PEP)', 
        source: 'MOH',
        type: 'Target',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'GBV Care',
        description: 'Morbi minima blandit maecenas, pharetra corporis excepturi vel lacinia a. Class laborum, pretium ad', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'OZ9CHCMYJMS', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2020-v1',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['a9FUCU6f7WU'],
      moh:['gPKbuvvpose', 'a9FUCU6f7WU']
      },

      { name: 'GEND_GBV (N, TA, Age/Sex/PEP)', 
        source: 'DATIM',
        type: 'Results',
        fiscal: '2018', 
        dataSet: 'community',
        frequency: 'quarterly',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'GBV Care', 
        description: 'Fugiat sed tempora in itaque curae cursus ad, deleniti voluptatibus dictum sagittis quod corporis', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'pKH3YTAShEe', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2018-v3',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['a9FUCU6f7WU'],
      moh:[]
      },

      { name: 'GEND_GBV (N, TA, Age/Sex/ViolenceType) v2', 
        source: 'PDH',
        type: 'Results',
        fiscal: '2019', 
        dataSet: 'community',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Health Workers', 
        description: 'Semper repudiandae expedita et, hendrerit. Repellendus hendrerit! Maiores sagittis, condimentum mus mus quod', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'yoxGr2OW5vT', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2018-v2',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['a9FUCU6f7WU'],
      moh:[]
      },

      { name: 'HRH_CURR (N, DSD, CadreCategory/FinancialSupport/Expenditure)', 
        source: 'PDH',
        type: 'Target',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'annual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Number of contacts', 
        description: 'Officia quidem. Mollitia illum dolores pede sed ante tellus urna leo magnis deserunt molestiae', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'fpW7iq7zFNN', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2019-v2',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['gPKbuvvpose'],
      moh:['gPKbuvvpose']
      },

      { name: 'HTS_INDEX_FAC (N, DSD, Age Aggregated/Sex/Contacts)', 
        source: 'PDH',
        type: 'Results',
        fiscal: '2020', 
        dataSet: 'community', 
        frequency: 'quarterly',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'Number of contacts ', 
        description: 'Mollit similique sed sem enim, quaerat modi litora! Impedit volutpat! Consequatur lectus nonummy, orci quisquam', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'wJSHzXjl3ev', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2019-v1',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['gPKbuvvpose', 'a9FUCU6f7WU'],
      moh:[]
      },

      { name: 'HTS_RECENT (D, DSD, Age/Sex/HIVIndication)', 
        source: 'DATIM',
        type: 'Target',
        fiscal: '2020', 
        dataSet: 'facility',
        frequency: 'semiAnnual',
        indicatorCode:'CXCA_SCRN (including CXCA_SCRN_POS)',
        category: 'HTS recently tested', 
        description: 'Facere eveniet, labore convallis anim numquam, adipiscing aliquip, odit labore quae incidunt eiusmod libero', 
        shortName: 'CXCA_SCRN (N, DSD, Age/Sex/HIV/Scrn/Visit)', code: 'CXCA_SCRN_N_DSD_Age_Sex_HIV_Scrn_Visit',
        uid: 'fSXIwl6nGZV', 
        readableNumerator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised',
        readableDenominator:'VMMC_CIRC (N, DSD, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, DSD, TechFollowUp>14days/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp/Sex): Voluntary Circumcised + VMMC_CIRC (N, TA, TechFollowUp>14days/Sex): Voluntary Circumcised',
        uidNumerator:'( #{cObJTp3DWdY} + #{oIOtyrMpzGE} )',
        uidDenominator:'( #{cObJTp3DWdY} + #{tUWykiXBnjC} + #{oIOtyrMpzGE} + #{ZaVDy67viEs} )',
        indicatorChanges: 'New Indicator', reportFrequency: 'Semi-Annually', reportingLevel: 'Facility',
        version: '2018-v2',
        combos:[
          { 
            name: '15-19, Female, Positive, Cervical Cancer Screened - First Time, Cervical Cancer - Suspected',
            code:'nI9rG3vPWQz',
            uid: 'dh4TQ68p2SC',
            ageGroup: '15-19',
            visitType: 'firstTime',
            visitResult: 'negative',
          }
      ],
      pdh:['a9FUCU6f7WU'],
      moh:[]
      },
    ],
    indicators: [
      {
        name: 'VMMC_CIRC',
        frequency: 'Quarterly',
        level: 'Facility',
        type:'Target',
        group: 'prevention',
        fiscal: '2020',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'N/A': []
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }

      },


      {
        name: 'TX_NEW',
        frequency: 'Quarterly',
        level: 'Facility',
        type:'Results',
        group: 'prevention',
        fiscal: '2020',

        changes: [
          'Age/sex disaggregates updated.',
          'Pregnancy disaggregation removed due to confusion with this disaggregation and PMTCT_ART. However, the breastfeeding disaggregate was retained.'
        ],
        description: 'Number of adults and children newly enrolled on antiretroviral therapy (ART)',
        howtoCalculate:'Sum results across quarters',

        numerators:{
           name: 'Number of adults and children newly enrolled on antiretroviral therapy (ART)',
           description: 'The indicator measures the ongoing scale-up and uptake of ART programs.',
           
        },
        disaggregate: {
          'Age/Sex [Required]': ['<1 F/M, 1-4 F/M, 5-9 F/M, 10-14 F/M, 15-19 F/M, 20-24 F/M, 25-29 F/M, 30-34 F/M, 35-39 F/M, 40-44 F/M, 45- 49 F/M, 50+ F/M, Unknown Age F/M'],
          'Breastfeeding status at ART initiation [Required]': ['Breastfeeding at initiation of ART'],
          'Key Population Type [Optional]': [
            'People who inject drugs (PWID)', 
            'Men who have sex with men (MSM)',
            'Transgender people (TG)',
            'Female sex workers (FSW)',
            'People in prison and other closed settings' 
          ]         
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for PLHIV receiving ART includes:':[
            'Ongoing procurement of critical commodities, such as ARVs, or funding for salaries of HCW who deliver HIV treatment services.',
            'Staff who are responsible for the completeness and quality of routine patient records (paper or electronic) can be counted here.',
            'Staff who exclusively fulfill MOH and donor reporting requirements cannot be counted.'
          ],
          'Ongoing support for PLHIV receiving ART service delivery improvement includes:':[
            'clinical mentoring and supportive supervision of staff at HIV sites providing ART',
            'support for quality improvement activities',
            'patient tracking system support',
            'routine support of ART M&E and reporting',
            'commodities consumption forecasting and supply management'
          ]
        },
        howToUse: [
          'The indicator measures the ongoing scale-up and uptake of ART programs. This measure is critical to monitor along with number of patients currently on ART in relation to the number of PLHIV that are estimated to be eligible for treatment to assess progress in the program’s response to the epidemic in specific geographic areas and populations as well as at the national level. This is particularly critical in the context of current revisions to country-specific ART eligibility.',
          'Reporting the number of new patients enrolled on ART at both the national and overall PEPFAR program levels is critical to monitoring the HIV services cascade, specifically the successful linkage between HIV diagnosis and initiating ART. Disaggregation of new on ART by age/sex at ART initiation, pregnancy status at ART initiation, and breastfeeding status at ART initiation is important to understand the percentage of new ART initiations coming from priority populations.'
        ],
        howToCollect:[
          'Facility ART registers/databases, program monitoring tools, or drug supply management systems.',
          '1. The numerator can be generated by counting the number of adults and children who are newly enrolled in ART in the reporting period, in accordance with the nationally approved treatment protocol (or WHO/UNAIDS standards).',
          '2.Patients who known to transfer in from another facility, or who temporarily stopped therapy and have started again should not be counted as new patients.',
          '3. NEW is a state defined by an individual initiating ART during the reporting period. It is expected that the characteristics of new clients are recorded at the time they newly initiate life-long ART. For example, patients who receive post-exposure prophylaxis (PEP), short term ART only for prevention (PrEP), or ART starter pack alone should not be used to count individuals reached with this indicator.',
          'BF disaggregation: Women who initiate ART while breastfeeding should be counted under this indicator but not in PMTCT_ART.',
          'Key population disaggregation* see Appendix A to support the identification of key populations at ART initiation. However, reporting of key population disaggregation should be consistent with what is described under the KP_PREV “How to review for data quality” section on mutual exclusivity of an individual who falls under multiple KP categories (e.g., FSW who injects drugs). In such instances, the individual should only be reported in ONE KP disaggregation category with which s/he is most identified in order to avoid double- counting.',
          'NOTE: both KP-specific and clinical partners have the option to complete these disaggs, but only if safe to maintain these files and to report.'
        ],
        howToReview:[
          'Numerator ≥ subtotal of each disaggregation: The total number of adults and children newly enrolled on ART should be greater or equal to the sum of all of the age/sex disaggregations and pregnancy/ breastfeeding status.',
          'Confirm that TX_CURR ≥ TX_NEW.'
        ],
        questions:{
          'If TX_NEW does NOT equal HTS_TST_POS, explain why.':[],
          'If TX_NEW result is markedly different from targets, explain why.':[]
        }
      },
      {
        name: 'PMTCT_STAT (including PMTCT_STAT_POS)',
        frequency: 'Quarterly',
        level: 'Facility',
        type:'Target',
        group: 'testing',
        fiscal: '2019',


        changes: [
          'Age disaggregates updated.',
          'Removal of separate age-only disaggregate to reduce reporting redundancy.',
          'Addition of “Recent Negative at Entry” disaggregate to account for clients at ANC1 who recently tested negative and are currently ineligible for testing (according to national guidelines) at ANC1.',
          'Language added to clarify that subsequent testing events during pregnancy and breastfeeding will now be reported under a new HTS modality: Post ANC1: Pregnancy/L&D/BF (see HTS_TST reference sheet for additional information).'
        ],
        description: 'Percentage of pregnant women with known HIV status at antenatal care (includes those who already knew their HIV status prior to ANC)',
        howtoCalculate:'Assuming site level records avoid double counting (as described above) across the annual reporting cycle, sum numerator and denominator across all reporting periods for the annual result.',
        
        numerators:{
           name: 'Number of pregnant women with known HIV status at first antenatal care visit (ANC1) (includes those who already knew their HIV status prior to ANC1)',
           description: 'The numerator is the sum of the following two data elements: 1)The number of women with a previously known HIV status (both known HIV positive and known negative) attending their first ANC visit (ANC1) for a new pregnancy over the last reporting period. 2)The number of women attending ANC1 who were tested for HIV and received results ',
           
        },
        disaggregate: {
          'Status and Age (Required)': [
            'Known Positives: <10, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age', 
            'Newly Tested Positives: <10, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'New Negatives: <10, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Recent Negatives at Entry: <10, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'Number of new ANC clients in reporting period',
          description: 'N/A',
          groups: 'Age(Required): <10, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45- 49, 50+, Unknown Age',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Status and Age:': [
            'Known Positive at entry: Number of pregnant women attending ANC for a new pregnancy who were tested and confirmed HIV-positive at any point prior to the current pregnancy should be reported as known positive at entry. Pregnant women with known HIV status attending ANC for a new pregnancy may not need retesting if they are already on ART, or they may be required to be retested prior to initiating ART based on national guidelines. Known positives who are re-tested and confirmed to be HIV positive prior to initiating ART should still be documented as known positive at entry.',
            'Newly Tested Positive: The number of women attending ANC1 who were tested for HIV and received a positive result. Women who tested negative prior to this pregnancy and are tested again at ANC1 for this new pregnancy should be counted in this indicator.',
            'New Negatives: The number of women attending ANC1 who were tested for HIV and received a negative result. Women who are tested negative prior to this pregnancy and are tested again at ANC1 should be counted in this indicator.',
            'Recent Negative at entry: Number of pregnant women attending ANC for a new pregnancy who recently tested HIV negative and are not eligible – according to country clinical guidelines - for another HIV test at ANC1. For example, women who tested negative within three months of attending ANC1 may not be recommended for testing per country clinical guidelines. This is expected to be a less utilized disaggregate.'
          
          ]
        },
        pepfarDef:{
          'Provision of key staff or commodities for PMTCT includes:':[
            'test kits',
            'ARVs',
            'lab commodities',
            'funding for salaries of health care workers'
          ],
          'Ongoing support for PMTCT service delivery improvement includes:':[
            'training of PMTCT service providers',
            'clinical mentoring and supportive supervision of PTMCT service sites',
            'infrastructure/renovation of facilities',
            'support for PMTCT service data collection',
            'reporting, data quality',
            'QI/QA of PMTCT services support',
            'ARV consumption forecasting and supply management',
            'support of lab clinical monitoring of patients',
            'supporting patient follow- up/retention',
            'support of mother mentoring programs'
          ]
        },
        howToUse: [
          'Track progress toward ensuring that all pregnant women who attend PEPFAR-supported antenatal care (ANC) know their HIV status and those newly testing positive are initiated on ART.'
        ],
        howToCollect:[
          'The data source is the ANC register. There is a risk of double counting as a pregnant woman could be tested multiple times during one pregnancy; therefore, partners should ensure a data collection and reporting system is in place to minimize double counting, including a longitudinal ANC register (meaning a register that is able to record all information about one pregnancy in one location, with rows or columns that allow for recording information on multiple visits during that pregnancy). Subsequent testing during pregnancy and breastfeeding will be counted in the new HTS modality: Post ANC1: Pregnancy/L&D/BF. ',
          'There is also a risk of undercounting if those women who already knew their HIV status prior to attending ANC are not documented. Therefore the ANC register should at a minimum should document both “previously known positive” and “newly tested positive”. It may be appropriate to report “known negative” women under the “Recent Negative” disaggregate if national guidelines do not require retesting women known to be HIV negative (often women tested in the last 3 months, however exact timing depends on local guidelines). ',
          'Women reported under the “Newly Tested Positive” and “New Negative” disaggregates will auto-populate the HTS_TST ANC1 modality.',
          'Women who are tested later in pregnancy, during L&D, and/or during breastfeeding should be reported under the HTS_TST Post ANC1: Pregnancy/L&D/BF modality.'
        ],
        howToReview:[
          'The percentage should never be above 100% at a site, and therefore review of the method of data collection and correction of any errors at sites with greater than 100% coverage is important to ensuring data quality for this indicator.',
          'Retesting of HIV-negative women during pregnancy, at L&D and through the postpartum period is an important program strategy is collected under the HTS_TST Post ANC1: Pregnancy/L&D/BF modality. Please see the HTS_TST reference sheet for more information on collecting this information.'
        ],
        questions:{
          'Provide context for poor performance in PMTCT_STAT coverage (Numerator/Denominator = STAT coverage) by geographic area, age, or partner/implementing mechanism, including any planned activities/remedial actions.':[],
          'For areas where age disaggregates are NOT completely reported, describe challenges for collecting and/or plan and timeline for collection.':[]
        }
      },
      {
        name: 'HTS_SELF',
        frequency: 'Quarterly',
        level: 'Community',
        type:'Results',
        group: 'treatment',
        fiscal: '2020',

        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'HTS_TST',
        frequency: 'Quarterly',
        level: 'Facility',
        type:'Target',
        group: 'viral',
        fiscal: '2020',

        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'OVC_HIVSTAT',
        frequency: 'Annually',
        level: 'Facility',
        type:'Results',
        group: 'health-system',
        fiscal: '2019',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'PMTCT_EID',
        frequency: 'Annually',
        level: 'Community',
        type:'Target',
        group: 'host-country',
        fiscal: '2018',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'PMTCT_FO',
        frequency: 'Monthly',
        level: 'Facility',
        type:'Results',
        group: 'health-system',
        fiscal: 2019,


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'PMTCT_HEI_POS',
        frequency: 'Semi-Annually',
        level: 'Community',
        type:'Target',
        group: 'testing',
        fiscal: '2020',


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'PMTCT_STAT',
        frequency: 'Semi-Annually',
        level: 'Facility',
        type:'Results',
        group: 'prevention',
        fiscal: 2018,


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      },
      {
        name: 'TB_STAT',
        frequency: 'Quarterly',
        level: 'Facility',
        type:'Target',
        group: 'treatment',
        fiscal: 2019,


        changes: [
          'Age disaggregations updated.',
          'Age disaggregations added to the “HIV Status and Outcome” disaggregate in order for VMMC results to auto-populate into HTS_TST.'
        ],
        description: 'Number of males circumcised as part of the voluntary medical male circumcision (VMMC) for HIV prevention program within the reporting period',
        howtoCalculate:'Sum results across quarters',
        
        numerators:{
           name: 'Number of males circumcised',
           description: 'The numerator can be generated by counting the number of males circumcised.',
           
        },
        disaggregate: {
          'Age (Required)': ['0-60 days, 2 months - 4 years, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'],
          'HIV Status and Outcome by Age (Required)': [
            'Underlined portions auto-populate into the VMMC HTS_TST modality.', 
            'Number of HIV-positive clients (tested HIV positive at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of HIV-negative clients (tested HIV negative at VMMC site) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age',
            'Number of clients with indeterminate HIV status or not tested for HIV at site (regardless of previous documentation) by: <1 1-4, 5-9, 10-14, 15-19, 20-24, 25- 29, 30-34, 35-39, 40-44, 45-49, 50+, Unknown Age'
           ],
          'Circumcision Technique (Required)': ['Surgical VMMC', 'Device-based VMMC'],
          'Circumcision Technique/Follow-up Status (Sub-disaggregation of the VMMC circumcision technique disaggregation) (Required)': [
            'Surgical VMMC: Followed-up within 14 days of surgery',
            'Surgical VMMC: Did not follow-up within 14 days of surgery or did not follow-up within the reporting period',
            'Device-based VMMC: Followed-up within 14 days of device placement.',
            'Device-based VMMC: Did not follow-up within 14 days of device placement or did not follow-up within the reporting period'
          ]
        },

        denominator:{
          name: 'N/A',
          description: 'N/A',
          groups: 'N/A',
          disaggregates: 'N/A'
        },
        disaggregateDefination:{
          'Age/Sex': ['Age is defined as the age of the patient at the date of initiation on ART, not the age at the date of reporting.']
        },
        pepfarDef:{
          'Provision of key staff or commodities for VMMC include:':[
            'medical instruments, supplies',
            'medicines needed for the VMMC procedure',
            'funding for salaries for HCW who deliver VMMC services'
          ],
          'Ongoing support for VMMC service delivery improvement includes:':[
            'training of VMMC service providers',
            'clinical mentoring and supportive supervision of HCW at VMMC sites',
            'infrastructure/facility renovation',
            'support of VMMC service-related data collection, reporting, and data quality assessments (DQA)',
            'CQI/EQA of VMMC services at point of service delivery',
            'commodities consumption forecasting and supply chain management support'
          ]
        },
        howToUse: [
          'This indicator tracks the number of male circumcisions conducted during the reporting period and assists in potentially determining coverage of circumcision in the population over time. The total number of males circumcised indicates a change in the supply of and/or demand for VMMC services.',
          'Additionally, disaggregations are required and are used to evaluate whether prioritized services have been successful at reaching the intended population (by age, HIV status, and circumcision technique), targets have been achieved, and whether modeling inputs should be adjusted. An additional level of disaggregation below the circumcision technique level is required for follow-up status, since post-operative clinical assessments are part of good clinical care and low follow-up rates may indicate a problem in program quality.'
        ],
        howToCollect:[
          'The numerator can be generated by counting the number of males circumcised as part of the VMMC for HIV prevention program. This information can generally be found in VMMC Register, or client medical records maintained by each program/site/service provider.'
        ],
        howToReview:[
          'Disaggregations for HIV status and outcome and circumcision technique should be equal to (but not exceed) the numerator.',
          'The circumcision technique by follow-up status disaggregate should be less or equal to the circumcision technique disaggregate.'
        ],
        questions:{
          'Is the age distribution of males 60% or more 15+ years of age?':[
            'Is this age distribution getting older as compared to previous quarters?'
          ],
          'If OU is using compression collar type device for VMMC':[
            'Are they adhering to WHO Guidelines for tetanus immunization?',
            'Were there any tetanus AEs reported?'
          ],
          'What proportion of clients are returning for follow-up (should be at least 80%)?':[],
          'What barriers are there to further scaling up VMMC services?':[]
        }
      }
        
    ],
    newIndicators:[
      {
        name: 'AGYW_PREV',
        content:['AGYW_PREV is a semi-annual indicator introduced for reporting beginning in FY19. AGYW_PREV is a DREAMS-specific indicator to measure how many adolescent girls and young women (AGYW) are being served in the DREAMS program and whether all AGYW in DREAMS have received the intended layered services and interventions to ensure that they remain HIV-free.']
      },
      {
        name:'CXCA_SCRN',
        content:['CXCA_SCRN is a semi-annual indicator introduced for reporting beginning in Q4 of FY18. CXCA measures the percentage of HIV-positive women on ART screened for cervical cancer.']
      },
      {
        name:'CXCA_TX',
        content:['CXCA_TX is a semi-annual indicator introduced for reporting beginning in Q4 of FY18. CXCA_TX measures the percentage of cervical cancer screen-positive women who are also HIV-positive and on ART that were eligible for and received cryotherapy, thermocoagulation or LEEP.']
      },
      {
        name:'HTS_INDEX',
        content:['HTS_INDEX is now a standalone indicator to monitor and help guide PEPFAR programming for index testing services. Reporting for HTS_INDEX will begin in Q1 of FY19. HTS_INDEX is the first MER indicator to monitor PEPFAR programming related to HIV index testing services (often referred to as partner notification or contact tracing services). This indicator includes a cascade that will help to better understand the scale and fidelity of the index testing services provided by PEPFAR-supported programs.']
      },
      {
        name: 'HTS_RECENT',
        content:['HTS_RECENT is a quarterly indicator introduced for reporting beginning in Q1 of FY19. Testing individuals that are newly diagnosed with HIV-1 for recent infection is an emerging programmatic area of emphasis for PEPFAR. HTS_RECENT measures the percentage of newly diagnosed HIV-positive persons aged ≥15 years with a test for recent infection result of ‘recent infection’ during the reporting period.',
        'As countries progress toward epidemic control, surveillance of newly diagnosed persons will ensure that interventions target those at highest risk of acquiring or transmitting HIV infection. One approach is to identify recent HIV infections, defined as those acquired within approximately the last one year. Incorporation of rapid tests for recent HIV-1 infection into routine HIV testing services will enable the establishment of a surveillance system to quickly detect, monitor, characterize, and intervene on recent infections among newly diagnosed HIV cases. Data collected from a recent infection surveillance system can also be used to fine-tune a country’s programmatic response through prioritized programming and resource allocation.']
      },
      {
        name:'PREP_CURR',
        content:['PrEP_CURR is a semi-annual indicator introduced for reporting beginning in FY19. PrEP_CURR measures the number of individuals receiving oral PrEP during the reporting period and is an important addition to the MER to help PEPFAR programs understand how many clients are being sustained on PrEP after initiation.']
      },
      {
        name: 'TX_ML',
        content:['TX_ML is a semi-annual indicator introduced for reporting beginning in FY19. TX_ML is intended to drive improved tracing of patients to ensure patient outcomes are accurately documented. It is the first PEPFAR indicator to collect information on mortality among patients on ART and in care. The indicator also strives to better understand the magnitude of previously undocumented patient transfers.']
      }
    ],
    newDisaggregations:[
      {
        name: 'HTS_TST',
        content:['A new facility-based testing modality has been introduced: Post ANC1: Pregnancy/L&D/BF. Please refer to the HTS_TST indicator reference sheet for additional details.']
      },
      {
        name: 'PP_PREV',
        content:['A new, optional priority populations type disaggregate was added to this indicator to capture the specific priority populations accessing prevention services. Age/sex-specific priority populations were not added to this disaggregate group (e.g., AGYW) because these can be calculated using the mandatory age/sex disaggregates collected within the indicator.']
      },
      {
        name: 'TX_TB',
        content:['The denominator has been updated to include a new disaggregate for “positive result returned."']
      }
    ],
    reportFrequencyChanges:[
      {
        name: 'PREP_NEW',
        content:['The reporting frequency moves from quarterly to semi-annually in FY19 to align the prevention indicators.']
      },
      {
        name:'TB_ART',
        content:['The reporting frequency moves from semi-annually to quarterly in FY19 to align with the ART-related indicators and TB_STAT.']
      },
      {
        name:'TB_STAT',
        content:['The reporting frequency moves from semi-annually to quarterly in FY19 to align with HTS_TST.']
      },
      {
        name:'TX_PVLS',
        content:['The reporting frequency moves from annually to quarterly in FY19 to ensure that the treatment cascade can be reviewed quarterly and to emphasize the importance of regularly monitoring viral load coverage and suppression.']
      }
    ],
    modifyExistIndicators:[
      {
        name: 'HRH_CURR',
        content:['The reporting of HRH_CURR by the number of full-time equivalents is no longer required. HRH_CURR has been simplified to collect the total number of staff (regardless of FTE). In addition, a new data element has been added to capture the amount of funding spent on health care workers by cadre and support type.']
      },
      {
        name:'PMTCT_EID',
        content:['The denominator has been updated to include HIV+ pregnant women identified after ANC1, including those women who test positives later in pregnancy, at labor and delivery, and throughout the breastfeeding period. The positive results for these women will be captured under the newly added HTS modality, Post ANC1: Pregnancy/L&D/BF and will be summed with the positives (new and known) from ANC1 (i.e., PMTCT_STAT_POS) to obtain the total denominator.']
      }
    ],
    modifyExistDisaggregations:[
      {
        name:'OVC_HIVSTAT',
        content:['The status type disaggregates have been modified. The sub-disaggregate under “No status reported” formerly called “Test not indicated” will now be “Test not required based on risk assessment” to simplify the language.']
      },
      {
        name:'OVC_SERV',
        content:['Age/sex and program status (i.e., active or graduated) disaggregations have been combined.']
      },
      {
        name:'PMTCT_ART',
        content:['Age disaggregations were added to the “maternal regimen type” disaggregate to align with PMTCT_STAT. Age disaggregations were not previously collected for PMTCT_ART.']
      },
      {
        name:'PREP_NEW',
        content:['The KP type disaggregation for this indicator has been updated. “Other key population” has been removed and replaced with “people who inject drugs” and “people in prisons and other closed settings” so that all key population disaggregate group options align between HTS_TST, TX_NEW, PrEP_CURR, and PrEP_NEW .']
      },
      {
        name:'TB_ART',
        content:['Age/sex and “ART status” disaggregations have been combined.']
      },
      {
        name:'TB_PREV',
        content:['Age/sex and “Type of TB preventive therapy by ART Start” disaggregations have been combined for both the numerator and the denominator.']
      },
      {
        name:'TB_STAT',
        content:['Age/sex disaggregations were updated from coarse-only to fine age bands to allow TB_STAT to auto-populate HTS_TST via the TB modality and to align with the age bands for TB_ART.']
      },
      {
        name:'TX_TB',
        content:['Age/sex and “ART Status” disaggregations have been combined for the numerator. Age/sex and “Start of ART by Screen Results” disaggregations have been combined for the denominator.']
      },
      {
        name:'VMMC_CIRC',
        content:['Age disaggregations were added to the “HIV Status and Outcome” disaggregate in order for VMMC HTS results to auto-populate into the HTS_TST indicator. Note that the age disaggregations align with HTS_TST to allow for auto-population. This means the <4 disaggregations differ slightly from the indicator itself.']
      }
    ],
    retiredIndicators:[
      {
        name:'TX_RET',
        content:['Indicator has been removed in order to incorporate the new TX_ML indicator and strengthen reporting on TX_PVLS.']
      }
    ],
    retiredDisaggregations:[
      {
        name:'OVC_SERV',
        content:['The reporting of HRH_CURR by the number of full-time equivalents is no longer required. HRH_CURR has been simplified to collect the total number of staff (regardless of FTE). In addition, a new data element has been added to capture the amount of funding spent on health care workers by cadre and support type.']
      },
      {
        name:'PMTCT_STAT',
        content:['The age-only disaggregate was removed to minimize duplicative reporting. Age is already captured under the status and age disaggregate group.']
      },
      {
        name:'TX_NEW',
        content:['The “confirmed diagnosis of TB” disaggregate was removed as TB_ART results have moved to quarterly reporting.']
      }
    ],
    pdhDataElements:[
      {
        name:'PMTCT_STAT_POS(N, DSD): Known Results Positive',
        uid:'gPKbuvvpose',
        derived:'Yes',
        combos:[
          {
            name:'10-14, Known at Entry Positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'<10, Known at Entry Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'15-19, Newly Identified Positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'25-49, Known at Entry Positive',
            code:'jgc1Z16F7yq'
          },
          {
            name:'20-24, Newly Identified Positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'20-24, Newly Identified Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'unknown age, Known at Entry Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'50+, known at entry positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'unknown age, newly identified positive',
            code:'Jgc1Z16F7yq'
          },
          {
            name:'20-24, Known at entry positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'10-14, Newly Identified Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'25-49, Newly Identified Positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'15-19, Known at Entry Positive',
            code:'Jgc1Z16F7yq'
          },
          {
            name:'<10, Newly Identified Positive',
            code:'M2MLpBcykcG'
          }
        ]
      },
      {
        name:'PMTCT_STAT_POS(N, DSD, Age/Sex/KnownNewResult) TARGET: Known Results Positive',
        uid:'a9FUCU6f7WU',
        derived:'Yes',
        combo:[
          {
            name:'10-14, Known at Entry Positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'<10, Known at Entry Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'15-19, Newly Identified Positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'25-49, Known at Entry Positive',
            code:'jgc1Z16F7yq'
          },
          {
            name:'20-24, Newly Identified Positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'20-24, Newly Identified Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'unknown age, Known at Entry Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'50+, known at entry positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'unknown age, newly identified positive',
            code:'Jgc1Z16F7yq'
          },
          {
            name:'20-24, Known at entry positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'10-14, Newly Identified Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'25-49, Newly Identified Positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'15-19, Known at Entry Positive',
            code:'Jgc1Z16F7yq'
          },
          {
            name:'<10, Newly Identified Positive',
            code:'M2MLpBcykcG'
          }
        ]
      }
    ],
    mohDataElements:[
      {
        name:'PMTCT_STAT_POS(N, DSD): Known Results Positive',
        uid:'gPKbuvvpose',
        derived:'Yes',
        combos:[
          {
            name:'10-14, Known at Entry Positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'<10, Known at Entry Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'15-19, Newly Identified Positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'25-49, Known at Entry Positive',
            code:'jgc1Z16F7yq'
          },
          {
            name:'20-24, Newly Identified Positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'20-24, Newly Identified Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'unknown age, Known at Entry Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'50+, known at entry positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'unknown age, newly identified positive',
            code:'Jgc1Z16F7yq'
          },
          {
            name:'20-24, Known at entry positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'10-14, Newly Identified Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'25-49, Newly Identified Positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'15-19, Known at Entry Positive',
            code:'Jgc1Z16F7yq'
          },
          {
            name:'<10, Newly Identified Positive',
            code:'M2MLpBcykcG'
          }
        ]
      },
      {
        name:'PMTCT_STAT_POS(N, DSD, Age/Sex/KnownNewResult) TARGET: Known Results Positive',
        uid:'a9FUCU6f7WU',
        derived:'Yes',
        combo:[
          {
            name:'10-14, Known at Entry Positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'<10, Known at Entry Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'15-19, Newly Identified Positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'25-49, Known at Entry Positive',
            code:'jgc1Z16F7yq'
          },
          {
            name:'20-24, Newly Identified Positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'20-24, Newly Identified Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'unknown age, Known at Entry Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'50+, known at entry positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'unknown age, newly identified positive',
            code:'Jgc1Z16F7yq'
          },
          {
            name:'20-24, Known at entry positive',
            code:'INzvF9tuFrB'
          },
          {
            name:'10-14, Newly Identified Positive',
            code:'M2MLpBcykcG'
          },
          {
            name:'25-49, Newly Identified Positive',
            code:'ixhvyKCAZWz'
          },
          {
            name:'15-19, Known at Entry Positive',
            code:'Jgc1Z16F7yq'
          },
          {
            name:'<10, Newly Identified Positive',
            code:'M2MLpBcykcG'
          }
        ]
      }
    ]
  };
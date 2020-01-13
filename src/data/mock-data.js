export const mockData = [
  {
    key: "0",
    field: "TEMPLATE",
    previousAnswer: "Text",
    previousUser: "Name",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      registration: "",
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculationDetail: "",
    },
    referenceData: {
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: []
  },
  {
    key: "A2300",
    field: "A2300",
    previousAnswer: "",
    previousUser: "",
    previousDateTime: "",
    sourceData: {
      registration: "",
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculationDetail: "",
    },
    referenceData: {
      financialImpact: true,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: []
  },
  {
    key: "A0310A",
    field: "A0310A",
    previousAnswer: "3. Annual Assessment",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      registration: "",
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculationDetail: "",
    },
    referenceData: {
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: []
  },
  {
    key: "A0310B",
    field: "A0310B",
    previousAnswer: "99. None of the above",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      registration: "",
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculationDetail: "",
    },
    referenceData: {
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: []
  },
  {
    key: "A0310E",
    field: "A0310E",
    previousAnswer: "0. No",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      registration: "",
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculationDetail: "",
    },
    referenceData: {
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: []
  },
  {
    key: "A0310F",
    field: "A0310F",
    previousAnswer: "99. None of the above",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      registration: "",
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculationDetail: "",
    },
    referenceData: {
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: []
  },
  {
    key: "C0200",
    field: "C0200",
    previousAnswer: "3. Correct",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    flags: [],
    sourceData: {
      calculatedResponse: "0. None",
      results: [
        {
          key: "1",
          dta: "Repitition of Three Words",
          dataResponse: "Correct",
          user: "Jane Smith (RN)",
          dateTime: "10/9/2019 11:43AM",
        },
        {
          key: "2",
          dta: "Repitition of Three Words",
          dataResponse: "Correct",
          user: "John Doe (MD)",
          dateTime: "10/11/2019 01:25PM",
        },
        {
          key: "3",
          dta: "Repitition of Three Words",
          dataResponse: "Missed by 2-5 years",
          user: "Jim Henry (CNA)",
          dateTime: "10/13/2019 04:42PM",
        },
      ],
      diagnosis: ["Diagnosis 1", "Diagnosis 2"],
      procedure: ["Procedure A"],
      rehabOptimaTherapy: [
        {
          key: "1",
          question: "Rehab Optima question",
          answer: "15",
          user: "Joe Rehab (RN)",
          dateTime: "10/9/2019 11:43AM",
        },
      ],
      calculationDetail: "This field is calculated by ... ",
    },
    referenceData: {
      financialImpact: true,
      financialDescription: "This is how I impact payment",
      qmImpact: true,
      qmItems: [],
      caaImpact: true,
      caaItems: [],
    },
    noteData: [
      {
        key: 1,
        user: "User Name",
        dateTime: "1/2/2020 4:34",
        note: "Some general note",
      },
      {
        key: 2,
        user: "Different User",
        dateTime: "1/4/2020 4:34",
        note: "Some general note 2",
      },
    ],
    historyData: [
      {
        key: "0",
        before: "0. No",
        after: "1. Yes",
        user: "John Smith",
        dateTime: "1/1/2020 12:34",
        comment: "Commit history comment",
      },
      {
        key: "1",
        before: "",
        after: "0. No",
        user: "John Smith",
        dateTime: "1/1/2020 12:34",
        comment: "Commit history comment",
      },
    ],
  },
]

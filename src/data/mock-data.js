export const mockData = [
  {
    key: "0",
    field: "TEMPLATE",
    previousAnswer: "Text",
    previousUser: "Name",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      registration: "",
      calculatedResponse: "",
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
    historyData: [],
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
    historyData: [],
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
    historyData: [],
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
    historyData: [],
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
    historyData: [],
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
      diagnosis: [""],
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
    historyData: [],
  },
  {
    key: "C0100",
    field: "C0100",
    previousAnswer: "99. None of the above",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      registration: "",
      results: "error",
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
    historyData: [],
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
          dataResponse: "0.None",
          user: "Jane Smith (RN)",
          dateTime: "1/10/2020 11:43AM",
        },
        {
          key: "2",
          dta: "Repitition of Three Words",
          dataResponse: "1. One",
          user: "John Doe (MD)",
          dateTime: "1/8/2020 01:25PM",
        },
        {
          key: "3",
          dta: "Repitition of Three Words",
          dataResponse: "2. Two",
          user: "Jim Henry (CNA)",
          dateTime: "1/7/2020 04:42PM",
        },
      ],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [
        // {
        //   key: "1",
        //   question: "Rehab Optima question",
        //   answer: "15",
        //   user: "Joe Rehab (RN)",
        //   dateTime: "10/9/2019 11:43AM",
        // },
      ],
      calculationDetail: `## This 'Is' Markdown \n\n This is still markdown \n\n ## This is More Markdown \n\n Even more Markdown`,
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
    intelligenceData: [
      {
        key: "0",
        rule: "Rule Name",
        description: "Rule Description",
      },
    ],
  },
  {
    key: "C0300A",
    field: "C0300A",
    previousAnswer: "99. None of the above",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      registration: "",
      results: "danger",
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
    historyData: [],
    intelligenceData: [
      {
        key: "0",
        rule: "Rule Name",
        description: "Rule Description",
      },
    ],
  },
  {
    key: "C0300B",
    field: "C0300B",
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
    historyData: [],
  },
  {
    key: "C0300C",
    field: "C0300C",
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
    historyData: [],
  },
  {
    key: "C0400A",
    field: "C0400A",
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
    historyData: [],
  },
  {
    key: "C0400B",
    field: "C0400B",
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
    historyData: [],
  },
  {
    key: "C0400C",
    field: "C0400C",
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
    historyData: [],
  },
  {
    key: "C0500",
    field: "C0500",
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
    historyData: [],
  },
  {
    key: "C0600",
    field: "C0600",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C0700",
    field: "C0700",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C0800",
    field: "C0800",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C0900A",
    field: "C0900A",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C0900B",
    field: "C0900B",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C0900C",
    field: "C0900C",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C0900D",
    field: "C0900D",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C0900Z",
    field: "C0900Z",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C1000",
    field: "C1000",
    previousAnswer: "3. Severely impaired",
    previousUser: "Robin Miller",
    previousDateTime: "1/17/2020 1:41PM",
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
    historyData: [],
  },
  {
    key: "C1310A",
    field: "C1310A",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C1310B",
    field: "C1310B",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C1310C",
    field: "C1310C",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "C1310D",
    field: "C1310D",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130A1",
    field: "GG0130A1",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130A2",
    field: "GG0130A2",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130A3",
    field: "GG0130A3",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130B1",
    field: "GG0130B1",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130B2",
    field: "GG0130B2",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130B3",
    field: "GG0130B3",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130C1",
    field: "GG0130C1",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130C2",
    field: "GG0130C2",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "GG0130C3",
    field: "GG0130C3",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "I0020",
    field: "I0020",
    previousAnswer: "",
    previousUser: "",
    previousDateTime: "",
    sourceData: {
      registration: "",
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculatedResponse: "",
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
    historyData: [],
  },
  {
    key: "I0020B",
    field: "I0020B",
    previousAnswer: "",
    previousUser: "",
    previousDateTime: "",
    sourceData: {
      registration: "",
      results: [],
      diagnosis: ["G31.9: Degenerative disease of nervous system, unspecified"],
      procedure: [],
      rehabOptimaTherapy: [],
      calculatedResponse: "G31.9",
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
    historyData: [],
  },
  {
    key: "I0100",
    field: "I0100",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "I0200",
    field: "I0200",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "I0300",
    field: "I0300",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "I0400",
    field: "I0400",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "I8000A",
    field: "I8000A",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0100A",
    field: "K0100A",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0100B",
    field: "K0100B",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0100C",
    field: "K0100C",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0100D",
    field: "K0100D",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0100Z",
    field: "K0100Z",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0200A",
    field: "K0200A",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0200B",
    field: "K0200B",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0300",
    field: "K0300",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0310",
    field: "K0310",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0510A1",
    field: "K0510A1",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
  {
    key: "K0510A2",
    field: "K0510A2",
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
      financialImpact: false,
      financialDescription: "This is how I impact payment",
      qmImpact: false,
      qmItems: [],
      caaImpact: false,
      caaItems: [],
    },
    noteData: [],
    historyData: [],
  },
]

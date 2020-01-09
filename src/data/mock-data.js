export const mockData = [
  {
    key: "1",
    field: "A0310A",
    previousAnswer: "3. Annual Assessment",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    sourceData: {
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculationDetail: "calculation detail",
    },
  },
  {
    key: "2",
    field: "C0200",
    previousAnswer: "3. Correct",
    previousUser: "Ramsey Tisher",
    previousDateTime: "1/1/2020 12:30PM",
    flags: [],
    sourceData: {
      calculatedResponse: "0. None",
      results: [],
      diagnosis: [],
      procedure: [],
      rehabOptimaTherapy: [],
      calculationDetail: "calculation detail",
    },
    financialData: {
      pdpmPtOt: "",
      pdpmNursing: "",
      pdpmSlp: "",
      pdpmNta: "",
    },
    qualityMeasures: {
      independent: ["21"],
    },
    fieldHistory: [
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
    notes: [
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
  },
]

/*养老保险（endowment insurance）
医疗保险（medical insurance）
失业保险（unemploymentment insurance）
工伤保险（employment injury insurance）
生育保险（maternity insurance）
住房公积金（Housing Provident Fund）*/

export default [
  {
    "name": "北京",
    "dirname": "bj",
    "id": "1",
    "housing": {
      "company": "12%",
      "person": "12%"
    },
    "endowment": {
      "company": "20%",
      "person": "8%"
    },
    "medical": {
      "company": "10%",
      "person": "2%"
    },
    "unemployment": {
      "company": "1%",
      "person": "0.2%"
    },
    "injury": {
      "company": "0.3%",
      "person": "0"
    },
    "maternity": {
      "company": "0.8%",
      "person": "0"
    },
    "socialNum": {
      "max": "21258",
      "min": "2834"
    },
    "houseNum": {
      "max": "21258",
      "min": "1955"
    }
  },
  {
    "name": "上海",
    "dirname": "sh",
    "id": "2",
    "housing": {
      "company": "7%",
      "person": "12%"
    },
    "endowment": {
      "company": "22%",
      "person": "8%"
    },
    "medical": {
      "company": "12%",
      "person": "2%"
    },
    "unemployment": {
      "company": "2%",
      "person": "0.2%"
    },
    "injury": {
      "company": "0.5%",
      "person": "0"
    },
    "maternity": {
      "company": "0.5%",
      "person": "0"
    },

    "socialNum": {
      "max": "17817",
      "min": "3653"
    },
    "houseNum": {
      "max": "17817",
      "min": "2020"
    }
  }
]

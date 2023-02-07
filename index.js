const listOfNames = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (listOfNames) => {
  return getFirstNames(listOfNames);
};
module.exports = getPeopleInCity;
console.log(getPeopleInCity);

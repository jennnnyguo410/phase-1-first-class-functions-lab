// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0, 2)
const returnLastTwoDrivers = array => array.slice(-2)
const selectingDrivers = [].concat(returnFirstTwoDrivers, returnLastTwoDrivers)
function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer;
    };
}
const fareDoubler = fare => fare * 2
const fareTripler = fare => fare * 3

function selectDifferentDrivers(drivers, cb) {
    return cb(drivers)
}
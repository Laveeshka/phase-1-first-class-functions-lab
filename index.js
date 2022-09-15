// declare variable and assign an anonymous function to it
// the function takes in an array argument
// the function returns the first two elements of the passed array in a new array
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

// declare variable and assign an anonymous function to it
// the function takes in an array argument
// the function returns a new array consisting of the last 2 elements of the passed array
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(drivers.length - 2);
};

// An array containing two elements: the two functions that we previously defined:
// returnFirstTwoDrivers() and returnLastTwoDrivers()
// allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Declare a higher-order function
// it takes in an integer argument and returns a function that will multiply a fare for a ride accordingly
function createFareMultiplier(fare) {
    return function () {
        return fare ** 2;
    };
}

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

function selectDifferentDrivers(drivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if (func === returnLastTwoDrivers ) {
        return returnLastTwoDrivers(drivers);
    }
}
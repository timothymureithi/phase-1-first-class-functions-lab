// Code your solution in this file!

//returnFirstTwoDrivers
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

//returnLastTwoDrivers() 
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

//and selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier()
const createFareMultiplier = function(multiply){
    return function (value){
        return multiply*value;
    }
}

//`fareDoubler() and fareTripler()`

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

//Lastly the selectDifferentDrivers

const selectDifferentDrivers = function (drivers, func){
    return func(drivers);
}



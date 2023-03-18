// Code your solution in this file!
const returnFirstTwoDrivers= (drivers)=>{
    const newArray=[]
    let |1 ;'${drivers[0]}'
    let|2; '${drivers[1]}'
    newArray.push(1)
    newArray.push(2)
    return newArray;
}
returnFirstTwoDrivers(['Antonia', 'Nuru','Amari','Moi'])
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier=
 function(fareMultiplier){
    return function(cost){
        return fareMultiplier*cost;
    }
}
const fareDoubler=createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);
function selectDifferentDrivers(drivers,drive){
    return drive(drivers);
}


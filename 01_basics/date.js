/**
 *  ++++++++++++++++++++++Date++++++++++++++++++
 *  Date always calucate in miliseconds and also when we compare the also they compare after conversions 
 * # Date object it represnt a single moment in time in a plateform independent formate , object encapsulate an integral
 * number that represents milliseconds since midnight of 1 jan 1970 ( the epoch )
 *  
 */
let myDate = new Date();
console.log(myDate) //2024-01-10T18:42:57.478Z
console.log(myDate.toString()) //Thu Jan 11 2024 00:14:21 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString()) //00:15:54 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())  // Thu Jan 11 2024
console.log(myDate.getDate())

console.log(typeof myDate) // object
// Month start from 0 in java script But when format is MMDDYYYY or any other then from 01 

//++++++++++++TimeStam+++++++++++++

let myTimeStamp =Date.now();
let otherUserTimeStamp =new Date('01/12/2024')
console.log(myTimeStamp) //1704912963762
console.log(otherUserTimeStamp.getTime()) // 1673634600000
let tempDate = new Date();
tempDate.setTime(1673634600000)
// console.log(tempDate.getDate())
console.log(myTimeStamp>otherUserTimeStamp)
// we use this in making hotel booking sites 

// print a sentance of today time and day 

let newDate = new Date();

console.log(`Today Date is ${newDate.getDate()} time is ${newDate.getHours()} : ${newDate.getMinutes()} and month is ${newDate.toLocaleString('en-US',{
    month : "long"
})}`)


// toLocaleString()
let customDate=newDate.toLocaleString('en-US',{
    month : "long"
})
console.log(customDate)



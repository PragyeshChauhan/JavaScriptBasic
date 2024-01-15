/**
 * +++++++++++++++++Arrays++++++++++++++++++
 * 
 * #  It is collection of objects in single variable and also can collect heterogenous type of value 
 * # arrays in js make sallows copyings when we make copy of array 
 *      
 *      > sallows copy : Is a copy in which properties share the references 
 *      > deep copy : Is a copy in which properties do not share the references 
 */
 const array =[0,2,2,3,"Singh"]
 const array2 = new Array(1,2,3,"singh")
 
 
 
 // Array Methods 

 array.push('chauhan'); // use to add value in array 

 array.pop() // use to remove last value from array 

 array.unshift("Rishu") // add at (0th index ) start point  of the array  usually not used 

 array.shift()   // use to remove object from 0th index of array

//  console.table([array.includes('pragyesh'),'pragyesh has index '+array.indexOf('Pragyesh')])
// console.log(array.indexOf('pragyesh')) // -1 as it is not present in the array 

// const newArray =array.join(); // convert to string  ,newArray is of string type 



//  console.table([array,newArray, typeof newArray])

// slice 

let fruitArray =["apple","banana","Mango","orange"]

// positive slice

let positiveSliceArray = fruitArray.slice(1,3) // Expected : ["banana","Mango"]
let positiveSliceArray2 = fruitArray.slice(1) // Expected : ["banana","Mango","orange"]

// console.table([`fruitArray : ${fruitArray}`
// ,`positiveSliceArray : ${positiveSliceArray}`, `positiveSliceArray2 : ${positiveSliceArray2}` ])

// negative slice 

let negativeSliceArray = fruitArray.slice(-1,3) // Expected : [] startindex and endindex lie on same object 
let negativeSliceArray2 = fruitArray.slice(-1,2) // Expected : [ ] startindex > endindex
let negativeSliceArray3 = fruitArray.slice(-1,-3) // Expected : [ ] startindex > endindex
let negativeSliceArray4 = fruitArray.slice(-3,-1) // Expected : ["banana","Mango" ]

// console.table([`fruitArray : ${fruitArray}`
// ,`negativeSliceArray : ${negativeSliceArray}`, `negativeSliceArray2 : ${negativeSliceArray2}`
// ,`negativeSliceArray3 : ${negativeSliceArray3}`, `negativeSliceArray4 : ${negativeSliceArray4}` ])
/**
 * Theroy points
 * slice(startpoint ,endpoint)
 *  1. it does not modify original array 
 *  2. it cut the array from array and return the that in which startpoint object is included and endindex object is 
 *     excluded
 *  3. in case of negative entries it work  from last and include that object and exclude the endindex object 
 *    if index is negative count from the end that you last index become -1 
 *  4. if you startindex is greater or after endindex then result is empty 
 *  5. if you start and end point is lie on same object then sliced array is again empty 
 */

// splice 
/**
 * Theroy points
 * splice(startpoint , count To spliced , add on the place of Deleted object)
 *  1. it does  modify original array 
 *  2. it cut the slice from original array and take out from it and return the that in which startpoint object is included and count 
 *     start from startpointobject (when startpointobject is +ive )and inculde then object on which count end 
 *    # in case of -ive startpointobject count start from 0 index and take as 1 .
 *  3. in case of negative entries it work  from last and include that object from startpoint to   object on which count end 
 *     and count start from starting of Array mean 0 index from and start from 1 and on which  count end then it take 
 *     slice from startpoint and where is end uske bich me or jaha end hua hai wo start ke aage hi ho mean right side 
 *     if not so then it remove the startpoint object and add the object provided 
 *  4. if count is negative count not work and no object remove but if and object is provide to add it will add on startpoint
 *  4. if you startindex is greater or after count end index then result is empty 
 *  5. if you start and end point is lie on same object then spliced array is again empty 
 *  6. it behave same as take a slice from cake and put another slice if provide then only 
 */

let machineArray =["lath","printing","laptop","robotic Arms"]

// positive splice 
// let positiveSpliceArray = machineArray.splice(1,3 , "mouse") 
// Expected : [printing,laptop,robotic Arms'] , machineArray : [lath,mouse' ]
// let positiveSpliceArray2 = machineArray.splice(2,-2,"CPU") 
// Expected : positiveSpliceArray2 : [] , machineArray : [lath,printing,CPU,laptop,robotic Arms' ]
let positiveSpliceArray3 = machineArray.splice(2,3,"CPU") 
// Expected : positiveSpliceArray3 : ["laptop","robotic Arms"] , machineArray : ["lath","printing" ,"CPU"]
console.table([`machineArray : ${machineArray}`
,`positiveSpliceArray3 : ${positiveSpliceArray3}`])

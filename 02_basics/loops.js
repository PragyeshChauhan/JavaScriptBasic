// for of loop
/**
 * for (const iterator of object) {
     here object kis pe laga rahe hai 
     iterator mean variable 
 }
 * 
 */
// const array =[1,2,3,4,5,6,78]

// for (const value of array) {
//     console.log(value)
// }
//Map
// in map dublicate value are allowed but dublicate keys are not if you take dublicate key it basically replace the 
// value of original key inside map 
// can not use for in loops in Maps and maps are non itratables 
const map =new Map();
map.set("name" ," pragyesh")
map.set("age" ,58);
map.set("names","Pragyesh")
console.log(map)
// how to itrate over map for separate key and value 

// for (const [key ,value] of map) {
//     console.log(key ,": ",value)
    
// }

// foreach loop in array 
// this loop is use to do the operation inside it but it doesnt return any thing 
const array =[1,2,3,4,5,6,78,9,]
array.forEach( function ( item){
    console.log(item)
})

array.forEach((item)=>{
    console.log(item)
})

function printme(item) {
    console.log(item)
    
}
array.forEach(printme)

array.forEach((item,index,arr)=>{
console.log(`item ${item} is on index ${index} in array ${arr}`)
})

const requiredData=  array.forEach((item)=>{
   return item+1
    })
    console.log(requiredData)

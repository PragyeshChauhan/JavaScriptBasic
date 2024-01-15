const marvel_heros =["thor","ironman","captain america"];
const dc_heros =["spiderman","BatMan"];

//  marvel_heros.push(dc_heros); 
 
 // basically push full array inside array 
 //[ 'thor', 'ironman', 'captain america', [ 'spiderman', 'BatMan' ] ]

 const comic = marvel_heros.concat(dc_heros) // return new array of combining both arrays 
// console.log(comic) // [ 'thor', 'ironman', 'captain america', 'spiderman', 'BatMan' ]

// spread operator 

const all_heros= [...marvel_heros,...dc_heros];
// it spread the array to a space , ek room me glass ki bottles fod rahe hai like that only 
// console.log(all_heros)


const an_otherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array =an_otherArray.flat(Infinity) 
// flat method basically flat the array on the basis of depth provide here infinity mean 
 // jitne bhi inside array ho sab ko tod do depth 1 -> array inside array  2 -> array inside array inside array 

console.log(real_another_array);

// conversion to array 

const name = "pragyesh"
console.log(Array.isArray(name)); 

const nameArray =Array.from(name); 
/**
 * # convert to array 
 * # but if it unable to convert it to array then return empty array  
 * */
console.log(nameArray);
console.log(Array.isArray(nameArray))
console.log(Array.from({name: "pragyesh"}));// empty Array will return since it unable to convert to array 

console.log(Array.of(1,2,3,2,4,2,3,54,5)) // create new Array 



//  ******prefix Increment (++) and Post Increment (++)******
 
let a =12;
let b ; // Post incre++ : first it assign to left side varible then increase 
// b =a++
console.log(`a:${a} , b:${b}`) // a:13 , b:12

b=++a // Pre incre++  : first increase then assign the value to left side variable 

console.log(`a:${a} , b:${b}`) // a:13 , b:13

// **** equality check (==) and Comparisons (>,<,>=,<=)

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0)  // true

console.log(undefined>0) //false
console.log(undefined==0) //false
console.log(undefined>=0) //false
console.log("0">=0) //true
console.log("aman">=0) //false
/**
 *  comparisons converts null to a number , treating it as 0
    that why  null >=0 is true and null > 0 is false 
    while equality check treat null empty 
 */
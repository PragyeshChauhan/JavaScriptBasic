/**
 * 1.  Primitive Data Types  
 *     # 7 type  : String ,Number,Boolean ,null ,Symbol,BigInt,undefined
 * 
 * 2 . Reference (Non Primitive)
 *     # 3 type  : Array ,objects ,functions
 * 
 * Theroy Point
 *    #  java-script is dynamically type lang since we dont have to define the type of variable   
 */
// How to define symbole 

const id = Symbol('1230')
const anotherId =Symbol('1230')
console.table([id,anotherId])
console.log(id===anotherId) // false : every time define Symbol is return wheather value is ame or different

const bigInt =100035n
console.log(typeof (bigInt) ) // bigint: if we put n at the end of number the that number by default converted to bigint

// Reference (Non Primitive)

const heros = ["sakti", "bhakti" ,"mukti"]
let myObject ={
         name : "Pragyesh Chauhan" ,
         age : 25
}
let myFunction = function(){
    console.log(bigInt)
    return myObject
}
console.log(typeof myFunction()) // Object
console.log(typeof myFunction)  // function

/**
 * Memory
 *   1. Stack 
 *       Primitive value store in this Stack area
 *       when we take then reference from stack we always get copy not the original reference and all the modification are done '
 *       in the copied reference value
 *   2. Heap 
 *       non  Primitive value store in this area
 *       when we take then from Heap we always get the original reference and all the modification are done in 
 *      original reference value 
 * 
 * example : -
 *  */ 

let myEmail ="www.pragyesh.com@gmail.com"
let secondEmail = myEmail
secondEmail ="pragyeshchauhan01245@gmail.com"
console.log(myEmail)
console.log(secondEmail)

let user = {
    name : "Rishu Thakur",
    age : 25
}
let anotherUser =user

user.name=" Pragyesh thakur"

console.log(user)
console.log(anotherUser)

// example by draw picture : https://excalidraw.com/#json=nzPpUMX7soG6gX4x54UqX,dAqoEGPrWLz1U1AKG6dfkg 


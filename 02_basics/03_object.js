/**
 * Object
 *      1> can be declared in two way as literal or as constructor
 *      2> object create through constructor is  singleton object
 *         # Singleton : this is type of object which created when object created using constructor
 *           example : const user = Object.create // constructor way
 *         # object literals  :
 *              const user ={
 *                             name : "pragyesh",
 *                             age : 25
 *                                      }
 *      3> singleton object and non singleton objets not have any difference in case of performance
 *
 */
const user = {
  name: "pragyesh",
  age: 25,
  "city Name" :"hardoi"
};
 
// How to access the object 

// way 1
console.log(user.name)

// way 2 
console.log(user["name"])

// note : city inside user can only accessed by 2 way 
// console.log(user.city Name)
console.log(user["city Name"] )

// use Symbol as key inside object 

const mySymble =Symbol("key1")
console.log(typeof mySymble)
const user2 = {
    mySymble : "name" // not the way to use symbol 
}
console.log(typeof user2.mySymble) // string but this should we symbol
const user3 = {
    //  mySymble : "name" // not the way to use symbol 
    [mySymble] : "name", //  way to use symbol as key 
    email : "www.pragyesh.com@gmail.com" 
}
// console.log(user3[mySymble]) // only way to access the symbol

// // How to stop or restrict the changes inside the object : by the of freeze 

// Object.freeze(user3);
// // now we can modified object user3 

// user3.email ="xyz@gmail.com"

// console.log(user3.email)//www.pragyesh.com@gmail.com

// console.log(user3)


user3.greeting = function(){
  console.log(`Hello ${this.email}`)
  return this[mySymble]  // give the value to greeting variable of user3
}
console.log(user3.greeting())


// How to create Singleton object and non singleton object 

 const tinderUser = new Object(); // singleton object 

 const tinderUser2 ={}; // non singleton object

 tinderUser.id= "124560"
 tinderUser.user ="Palak"
 tinderUser.email ="palak@gmail.com"
 
 const userAddress = {
   city : "hardoi",
   street :"aloo thok hardoi "
 }

 tinderUser.Address=userAddress

 console.log(tinderUser)

 console.log(tinderUser.aman?tinderUser.aman:tinderUser.id) // conditional oprator

//  how to copy value of two or  objects in one object 
// 1. one way
const combinedobject = Object.assign({} , tinderUser ,userAddress)
// console.log(combinedobject)

//2 . second use way 

const target ={}
Object.assign(target ,combinedobject,user3)
console.log(target)

// to find all the keys of object to keys and values
// console.log(Object.keys(tinderUser)) // array of keys

// console.log(Object.values(tinderUser)) // array of values
// console.log(Object.entries(tinderUser)) // array of arrays of key-value pair as entries
/**
 * [
  [ 'id', '124560' ],
  [ 'user', 'Palak' ],
  [ 'email', 'palak@gmail.com' ],
  [ 'Address', { city: 'hardoi', street: 'aloo thok hardoi ' } ]
]
 */
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // check wheather there is any key like that 

// deStructuring of Object 

const course ={
   coursename :"javaScript",
   courseFee :1000
}

const {courseFee} =course // can fetch the property from the Object this is destructing {variableName} = object
const {courseFee :fee} =course // can rename the property 

console.log(courseFee)
console.log(fee)

 


 
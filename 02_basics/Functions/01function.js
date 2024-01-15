/**
 * function is block of code inside parnthisis {}  can be use many time
 */
function myDescription(num1 =1, num2 =2) { // we can assign default value mean agar koi value nhi passs
    // ki to num1=1 and num2=2 hoga agar pass ki to value over ride ho jayegi 
  if (num1 && num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
      return num1 + num2;
    }
  }
  if(!num1 && !num2) {  // undefined or ""  is false in js
    return `please enter the number `;
  }
  // switch(num1,num2){
  //     case (typeof(num1)=="number" && typeof(num2)=="number" ):  console.log(num1+num2)
  //     case (typeof(num1)==undefined && typeof(num2)==undefined) : console.log(`type is undefine  `)
  // }
  return `Number is not a number type`;
}
// console.log(myDescription(12, 5));


// lecture 2
//  add n number of number or price of items  : 

function priceCaluator(...num){ //rest operator
    
    let sum =0;
    // for(let i=0 ;i<num.length;i++ ){
    //      sum=sum+num[i];
    // }
    num.forEach(element => {
       sum= sum+element
    });
    console.log(num.length)
    return sum;
}
console.log(priceCaluator(1,2,2,3))






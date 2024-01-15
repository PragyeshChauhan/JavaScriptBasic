// this keywords : keyword using to refer current context 
// context : mean simple values,  what values variales are holding that it 
const user={
    userName :"pragyesh",
    price : 999,
    welcomeMessage : function () {
        console.log(`${this.userName} : welcome here ` )
        console.log(this) // whole user object inculding welcomeMessage function because this refer
        // to current context and for now context is user 
    }
}
/**
 * 
 */
// user.welcomeMessage();
// user.userName="rishu"
// user.welcomeMessage();
console.log(this) // {} give empty object 
/**
 * 1.this will empty object because this is node environment and in this environment gobal context 
 * is empty object 
 * 
 * 2. same thing when printed in object inspect then it give windows becz in that case gobal context
 *    is window and intially js can  only executed in browsers becz browers have inbuild js executable
 *    engine but now that engine is extracted from browsers and made seprate like node is one of
 *    them .  
 */
//++++++++++++++++++++++++

// this is not be work for function as for object 

function chai() {
    console.log(this) // lot of function and variable were there 
    let username ="pragyesh"
    // console.log(this.userName) // undefined , we can accessed the userName using this keyword  
}
// chai()


//++++++ how to declare arrow function

const chai2 =() => {
   
    let userName ="pragyesh"

    console.log(this.userName) // undefined , we can accessed the userName using this keyword
}
chai2()

// implicite return arrow fuction 
const addtwo = (n1,n2) => n1+n2 
console.log(addtwo(1,2))

// normal arrow function


const addmany =( ...n) =>{
 let sum= 0;
    n.forEach(element => {
     sum=sum+element
 });
 return sum;
} 
console.log(addmany(1,2,3,4,5,6,7,8,9,10))

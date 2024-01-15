// all the talk round around let, var and const 
/**
 * {
 *   this is scope      
 *                 }
 */
if(true){

    let a=30;
    const b=40;
    var c=50;
    d=100;

}
// as all the variable outside of above scope so not able to access here but see all
// are not like that 
// console.log(a) //working fine not able to access
// console.log(b)//working fine not able to access
console.log(c)// in case of var able to access the value so it is confusing and many time override 
// the value when different take same variable name in same class or module 
console.log(d)// this is also able to accesss and this not correct way to take variable or 
// define a variable 

// scope inside brower inspect and node is different

// Nested Scope

function one(){
    const username ="pragyesh"

    function two(){
        const website ="youtube"
        console.log(username); // can be acccssed parent scope  properties 
        // accessing properties of partent function is possible but reversible is not 
    }
    two()
    // console.log(website) // cant access child scope properties 
}

one();

if (true) {
    const age =25
    function addharVerification() {
        if(age>=25){
            const addhar =12*age;
            console.log(`user age is ${age} and adhaar No is ${addhar}`)
        }
    }
    // console.log(addhar)
    addharVerification()
    
}
// console.log(age); // not accessible 


//================= interesting ================

//hoisting : we can acess before declaration 

// there are different way to create or declare a function in js 

addOne(5)// here we are able to access
function addOne(n) {
return n+1;    
}

// addtwo(5) // here not able to access error : "Cannot access 'addtwo' before initialization"
const addtwo = function (n) {
    return n+2;
}

// in js there are different rule for function depending on type of function and type by which
// which function is declared 
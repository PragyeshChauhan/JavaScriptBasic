const accountId =125464
let accountEmail ="www.pragyesh.com@gmail.com"
var accountPassword ="123456"
accountCity="Hardoi"

// accountId = 3
console.log(accountId);
accountCity ="lucknow"
console.table([accountId,accountEmail,accountPassword,accountCity])
/**
 * Scope 
 * 
 * 1. var : it is global scope basically if we declare any variable with var then there is a problem occured with this that if you used 
 *       same variable Name  in future then basically it override the value of intial variable that mean you can not used the same
 *       Variable name for different values with Var scope.
 * 
 * 2. let : it is local scope and it is introduced to avoid the problem associated with the var.
 * 
 * 3. const : it is contant type of scope can-not we intialized again after intialization once.
 * 
 * Note
 *     # so Perfer not to use var
 *     # because of issue in block scope and functional scope 
 * 
 * Theroy Points :
 * 
 *1. if a variable is declared without intialization then its value is undefined
  2. variable declared with const can not we intialized again 
  3. we can declared a variable with declaring its dataType or scope in JavaScript but avoid this since it is not good pratice
     and that variable is of "any" type.
  4.  
 */

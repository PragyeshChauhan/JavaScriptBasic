
let score =true
let valueInString =String(score)
console.log(typeof score);
console.log(typeof valueInString);
console.log(valueInString);  // NaN (Not a Number) 
/**
 * NaN : its is also type of type.
 * 
 * conversion Notes 
 * 
 * for conversion from other variable to Number 
 *  1. "33"          => 33 
 *  2. "33abxc"      => NaN
 *  3. null          => 0 
 *  4. undefined     => NaN 
 *  5. true          => 1 
 * 
 * for conversion to boolean 
 *  1. 1            => true 
 *  2. 0            => false
 *  3. ""           => false 
 *  4. "someThing"  => true 
 *  5. null         => false
 *  6. undefined     => false
 * 
 * for conversion to String 
 *  1. null            => null 
 *  
 */

/**let isloggedIn 
 
let booleanConversionVariable = Boolean(isloggedIn)
console.log(typeof isloggedIn)
console.log(isloggedIn)
console.log(typeof booleanConversionVariable)
console .log(booleanConversionVariable)*/

//             ********************operations **************************

// let str = "Pragyesh"
//  let str2 =" Chauhan"
//  console.log(str +str2) // Pragyesh Chauhan

console.table(["1"+ 2 ,1+"2"]) // both case 12 
console.log("1"+2+2); // 122
// But 
console.log(1+3+"2") // 42
//this all because of predefined rules of java-script






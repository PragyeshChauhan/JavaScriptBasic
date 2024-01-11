/** 
const score = 400 // js automatically detect that this of number type 
// output : 400

const balance = new Number(100) // this is way to create variable Number Type or any type 
// output :  [Number: 100]
console.log([score,balance])

console.log(balance.toFixed(2)) // 100.00
let price =23.868
console.log(price.toPrecision(4)) // 23.9 : toPrecision(focus on how much digit) if price 123.8966 then output is 124 
// since it focus on 3 and rest decimal part will roundoff example if toPrecision(2) then output is 24 if toPrecision(4)
// then output is 23.87 , it will round off last last one 

const hundreds =1000000
console.log(hundreds.toLocaleString('en-US'))// give acc to us standard  : 1,000,000
console.log(hundreds.toLocaleString('en-IN')) // give acc to Indian standard 10,00,000

*/
/** +++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

 * this is Java-script inbuild libaray
 */
console.log(Math.ceil(Math.random()*10+1))
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min) // here +1 is done to avoid when Math.Random() give 0 in order to get
// value always greater then Minimum
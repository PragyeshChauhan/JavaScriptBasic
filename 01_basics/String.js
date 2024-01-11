/**
 * Theroy Point
 *  1. can we  written inside '' single quotes  and " "  double quotes
 *  2.  for concatination normal + sign is outdated now we use backticks for that   
 */
let name ='me'
console.log(`this is backticks use by ${name} as it is better way  `)

const gameName =new String ('Mario')
console.log(gameName.__proto__)
console.log(gameName.blink())

const anotherString =gameName.slice(-3,-1)  //start from last 
console.log(anotherString) // Ma

/**
 * ###################slice################3
 * slice(start ,End) in this start point object is include and end point object will neglected 
 * 
 * slice(start)  in this case start point object will neglected
 * 
 * Negative 
 * 
 * slice(-start ,End)  in this case it start from back side or jaha pe rukega us object se then it move forward basically 
 *  gameName.slice(-3,1) --> empty as -3 mean r and from r it goes to where as 1 is small so empty 
 *  gamename.slice(-3,-1) --> ri -3 mean r and -1 mean o but o will not include 
  * 
 */

// const array =["hi","hello","how are you "]
// let spliceArray =array.splice(0,2,"hey") 
// console.log(spliceArray)
/**
 * ####################Splice###############
 * 
 * here Splice(startpoint , kitne_hatane_hai , what_to_place)
 * it will change the original Array and return the new remove array 
 * here 
 * array = [ 'hey', 'how are you ' ]
 * spliceArray = [ 'hi', 'hello' ]
 */
// console.log(array)
const url ="hhtps://pragyesh.com/pragyesh%20chauhan"

console.log(url.replace('%20', '-'))
console.log(url.includes('.com'))

// String to Array
console.log(url.split('//'))

// console.log(url.small())

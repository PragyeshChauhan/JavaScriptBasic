//false value 

/**
 * false ,0 ,-0,BigInt 0n , "", null,undefined ,NaN 
 * except these all are truthy value 
  */
 const userName ="pragyesh chauhan"
 const user =""
 if(userName){
     console.log("username:" , userName)
 }

 if(user){ // falsy value
    console.log("username:" , userName)
 }

 //truthy values
 /**
  * "0" ,'false' or "false" ," ",[],{},function(){} , except falsey values 
  * 
  * note : false == 0  , false == '' , 0==''
  */

 // nullish coalescing operator (??) to check null and undefined

 let val1;
//  val1 = null?? 10
 val1 = null??undefined?? 10 ?? 50 //  10

 console.log(val1)

 
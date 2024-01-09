"use strict" ; // this treat that all the Js code written as per newer version of javascript

/*alert(3+3)  
  we cant use this in node.js but can use in browers in case of node there is different way to use alert */

console.log(3+
    3)  // this is correct but bad readability so focus on it also 
    
    /**
     * DateTypes
     *  
     * Primitive Data Type
     * 
     *   1. number
     *         # 2 to power 53 is range 
     *         # example let age = 25;
     *   2. bigint
     *         # use for large range of number
     *         # example let age = 2578456896543988465312;
     * 
     *   3. String
     *         # value inside double qoutes ""
     *         # example let Name = "pragyesh";
     *   4. boolean
     *         # its is two value true/false
     *         # example let isEmpty = true;
     *   5. null
     *         # standalone value something which is empty 
     *         # it is not undefined but it is empty in hindi we call it khali 
     *         # if Any api doesnt send any response then we it mean it is null 
     *   6. undefined
     *         # mean no value is assigned yet 
     *         # example let isEmpty ;
     *   7. symbol
     *         # it is used when we create number of components and we have to point some of them to be unique then we use symbol
     *         # use to mark uniqueness  ;
     *   
     *   Non - Primitive Data Type 
     *  
     *    1 Object 
     *       # null is object type 
     */
    console.table([typeof(undefined),typeof(null)]) //  null --> object type , undefined --> undefined type
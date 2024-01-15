const myObject ={
    js :"javaScript",
    swift :"swift by apple"
}
// for (const [key ,value ] of myObject) {
    // Not work for objects 
// }

// for in 

// for (const key in myObject) {
//     if (Object.hasOwnProperty.call(myObject, key)) {
//         const element = myObject[key];
//         console.log(key,": ",element)
        
//     }
// }

// array is also have key and key start from 0 

const arrray =[0,1,2,3,4,5,6]

for (const key in arrray) {
    if (Object.hasOwnProperty.call(arrray, key)) {
        const element = arrray[key];
        console.log(key,": ",element)
    }
}


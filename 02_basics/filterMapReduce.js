//filter 
// is use to apply filter on the data to achieve required data 
// filter will return the data after filter process

const course_Menu =[
    {courseName :"js",
      price :1000              
      },
    {courseName :"java",
      price :1100             
      },
      {courseName :"java",
      price :1500              
      }, 
    {courseName :"react.js",
      price :900             
      },
    {courseName :"springBoot",
      price :3000              
      },
    {courseName :"MicroServices",
      price :5000              
      },
]

// print the course between 1000 to 2000

// const requiredData=course_Menu.filter((item )=> (typeof (item.price)==="number" &&item.price>=1000  && item.price<=2000 ))

// console.log(requiredData)

//Map 
// it is same as forEach loop but it return the value 
// also modifed the original content 

// const requiredData2 = course_Menu.map((item)=>item.price+1) // [ 1001, 1101, '15001', 901, 3001, 5001 ]

// const requiredData3 = course_Menu.map((item)=>{
//     item.price =item.price+1
//     return item ;
// }); 

// console.log(requiredData3)
// console.log(course_Menu)

// Reduce 

// reduce is used to perform the operation in which you need any intial value so in this accumulator 
 
const requiredDataReduce = course_Menu.reduce((acc , item )=>{
     console.log(acc)
     return item.price+acc;
      },0)
// console.log(course_Menu)
console.log(requiredDataReduce)
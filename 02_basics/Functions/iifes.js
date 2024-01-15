// iifes : Immediately Invoked Function Expressions 
// they are use to avoid the pollution from gobal scope here pollution mean variable and all from gobal scope 


// syntax (pura fuction )(); bss yahi hai 


(function iifes() {
    // name iifes
    console.log(`dataBase for user is connected successFully`);
})(); // closing is must to use another iifes because js does know where to stop the context 

(function iifes2(username) {
    
    console.log(`dataBase for ${username} is connected successFully`);
})("pragyesh");

// can not call iifes after that

// can use arrow function inside this ? yes we can 

//how ? 

( () => {
    // without name iifes 1
    console.log(`i am a arrow function without function name  `);
})();
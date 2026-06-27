// Immediately Invoke Function Expression   (IIFE)

// syntax  
// ()() 

// IIFE             also called named IFEE function
(function print(){
    console.log("DB Connected!");
    
})();                           //;  semicolon in IFEE is mendatory at the end otherwise it will not know where to end context


//Arrow func as IFEE             without name iife function
(() => { 
    console.log("DB is Updated")
})();

//Pssing paramenters 
((name) => { 
    console.log(`DB is Updated, ${name}`)
})("Manan");

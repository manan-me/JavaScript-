//this keyword use 


const user={
    username:"Manan",

    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to the website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="Abdul MANAN"
// user.welcomeMessage()
// console.log(this);

function lasi(){
    const username="Manan"
    console.log(this.username);                //undefined
    
}
// lasi()

                               //this fnction isn't work inside functions , ___study more from sources about this
const lasi2=function(){
     const username="Manan"
    console.log(this.username);  
}
// lasi2()




///// Arrow functions

// () => {}                      syntaxex of arrow functions
// const arrow = () => {}


    
    //Basic arrow function
    // const add=(num1,num2) => {
    //     return num1+num2
    // }
    
    
    ///Implicit return
    // const add=(num1,num2) =>  num1+num2
    // const add=(num1,num2) =>  (num1+num2)               //also can add parantheses
    const add=(num1,num2) =>  ({username:"Manan"})               //to return object
    console.log(add(4,7));
    



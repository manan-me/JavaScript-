// How data is stored in memory and how it is accesed : on these two scnerios
//  data types are divided into two types

// Primitive
//7 types : string, boolean, Number ,null , undefined, symbol, BigInt


//***Important***/
/*JavaScript is a dynamically typed language.
This means types are checked at runtime, not at compile time. You don't declare variable types explicitly — JS figures it out on the fly */

let x = 42;      // number
x = "hello";     // now it's a string — no error!
x = true;        // now boolean — still fine



const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId);


const bigNumber=999999663723387247773n    // big INt

console.log(typeof bigNumber);






//Referenced or NonPrimitive Type
//Arrays , Objects , Functions


//Arrays

const Numbers=[1,5,6,3,5,7]
console.log(Numbers);


// objects
let myObj= {
                name:'Manan' ,
                rollNO:544,
                Semester:4}

console.log(myObj.name);  //or
// console.log(myObj["name"]); // Manan
                

//Functions
const myFunction=function(){
    console.log('Hello World!');
    
}

myFunction(); // Hello World!

/* // 1. Function Expression (what you wrote)
const myFunction = function() {
    console.log('Hello World!');
}

// 2. Function Declaration
function myFunction() {
    console.log('Hello World!');
}

// 3. Arrow Function (modern, very common)
const myFunction = () => {
    console.log('Hello World!');
} */



    ////////In JavaScript, all non-primitive data types are broadly called Objects.


// Array — is an Object
let arr = [1, 2, 3];

// Function — is an Object
let fn = function() {};

// Object literal — is an Object
let person = { name: 'Manan' };

// Date — is an Object
let today = new Date();


console.log(typeof arr);     // "object"
console.log(typeof fn);      // "function" (special case, still an object)
console.log(typeof person);  // "object"





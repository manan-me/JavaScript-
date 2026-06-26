// Obects declaration

// Singelton
// object.create


// symbol
const mySym=Symbol("key1")
//using symbol in object as key and print is tricky question in interview , There is  a specific syntax for it

//Object litterals
const obj1={
    mySym:"myKey1",                     //it return type string when we use it as this 
    [mySym]:"myKey1",                     //but actual syntax for symbol is this 
    name:"Manan",
    "full Name":"Abdul Manan",
    age:22,
    uni:"PUCIT",
    emailId:"bsef24m544@pucit.edu.pk",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday","Wedmesday","Thursday","Friday"]
}

//t\Two ways of access
console.log(obj1.name);
console.log(obj1["name"]);     
console.log(obj1["full Name"]); //for this kind of key we forced to use this method 

console.log(obj1[mySym]);    //accessing symbol


//change value
obj1.age=23
console.log(obj1.age);

//lock object, prevent values from change  , use freeze
// Object.freeze(obj1)/// now no changes will hapen
obj1.age=27
console.log(obj1);   //age still 23


//Add function in object

obj1.greeting=function(){
    console.log("Hey JS user");
    
}
console.log(obj1.greeting());
obj1.greeting2=function(){
    console.log(`Hey js user , ${this["full Name"]} how are you`);
    
}

console.log(obj1.greeting2());



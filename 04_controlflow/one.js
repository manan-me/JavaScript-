//control flow or logic flow

const isLoggedIn=true
if(2==="2"){                           //2 == "2"  true    but  2 === "2"    false       //
console.log("hey");

}

// 2<=2
// <,>,<=,>=,== ,!=,===

const temperature=41
if(temperature ===  50){
    console.log("Temprature iss eqeal to 50")
    
} else {
    console.log("Temprature is not 50");
    
}



// there is also scope in flowcontrol statements
const score=200
if(score<400){
    const power="fly"
    console.log(`Hey ${power}, you have score : ${score}`);
    
}
// console.log(`Hey ${power}, you have score : ${score}`);        //undefined




//////Short hand notation of control flow
////also called implicit scope

// const balance=10000

// if(balance>500) console.log("Good balance"),console.log("hey");      //one log is okay but multiple log is not good practice



// ///else if 

// if(balance<500){

// }else if (balance===500){

// }else{
    
// }



const userLoggedIn=true
const debitCard=true

if(userLoggedIn && debitCard)
{
  console.log("allow");
    
}

const loginFromGoogle=false
const loggedInFromEmail=true

if(loggedInFromEmail || loginFromGoogle){
    console.log("allow");
    
}
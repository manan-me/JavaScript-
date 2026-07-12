// Every object in JS has a hidden link → __proto__
// That link points to its parent object
// The chain keeps going UP until... it hits null
// null means: "END OF CHAIN, nothing above here"

// Visual chain 
// Your Object
//     │
//     │ __proto__
//     ▼
// Object.prototype   (has methods like toString, hasOwnProperty)
//     │
//     │ __proto__
//     ▼
//    null            ← 🛑 DEAD END — chain stops here


function mulltiplyBy5(num){
    return num*5
}

console.log(mulltiplyBy5(5));
console.log(mulltiplyBy5.length); //also act as object
console.log(mulltiplyBy5.prototype); //next object points {}
console.log(mulltiplyBy5.prototype.prototype); //reches null






function createUser(user,score){
    this.user=user

    this.score=score
}

createUser.prototype.increment=function (num){
      this.score+num
}
createUser.prototype.printMe=function(){
    console.log(`User name is ${this.user} and score is ${this.score}`);
    
}


const chai=new createUser('chai',50)
const coffe=new createUser("coffe",500)

coffe.increment()
coffe.printMe()


chai.increment()
chai.printMe()










// 
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
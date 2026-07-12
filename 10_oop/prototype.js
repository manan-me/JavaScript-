// let name='Manan       '
// let fullName='mani        '

// console.log(name.trueLength);




let hero=["thor","spider","ironman"]

let heroPower={
   thor:'Hammer',
   spider:"Wax"
   ,ironman:'NanopArticles',

   getSpiderPower:function(){
    console.log(`Spider power is ${this.spider}`);
    
   }
}

Object.prototype.manan=function(){
    console.log(`Manan is present in all objects`);
    
}
Object.prototype.mananAdd=function(num){
    console.log(`Manan have ${num} number`);
    
}

hero.manan()
heroPower.manan()
heroPower.mananAdd(5)
heroPower.mananAdd(6)

hero.mananAdd(7)


Array.prototype.printMe=function(){
    console.log(`only Hero gets the pritnMe function`);
    
}

hero.printMe()
// heroPower.printMe()


const user={
    name:'Manan',
    email:'manan@gmail.com'
}
const Teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'Js Assignment',
    fullTime:true,
    //__proto__:teachingSupport         //linkng objects
}

// Teacher.__proto__=user

// console.log(TASupport.__proto__.isAvailable);
// console.log(TASupport.isAvailable);
// console.log(Teacher.name);
// console.log(Teacher.email);



////Modern syntax
Object.setPrototypeOf(teachingSupport,TASupport)
Object.setPrototypeOf(teachingSupport,user)
    
console.log(teachingSupport.makeAssignment);
console.log(teachingSupport.email);



let anotherUserName='Manan               '
String.prototype.trueLength=function(){
    console.log(this);
    console.log(this.trim().length);
    
}

anotherUserName.trueLength()
'bas hal raha hai    '.trueLength()












// ///////////////////// Note by claude 
// Object.setPrototypeOf(teachingSupport, TASupport)  // set
// Object.setPrototypeOf(teachingSupport, user)        // OVERWRITES above ❌

// // teachingSupport now only links to user
// // TASupport link is GONE
// console.log(teachingSupport.makeAssignment)  // undefined ❌
// console.log(teachingSupport.email)           // "manan@gmail.com" ✅ (from user)



// /////////////////Claude note solution

// const user = {
//     name: 'Manan',
//     email: 'manan@gmail.com'
// }
// const Teacher = {
//     makeVideo: true
// }
// const teachingSupport = {
//     isAvailable: false
// }
// const TASupport = {
//     makeAssignment: 'Js Assignment',
//     fullTime: true
// }

// // Build the chain step by step (no circular links)
// Object.setPrototypeOf(TASupport, teachingSupport)     // TASupport → teachingSupport
// Object.setPrototypeOf(teachingSupport, user)          // teachingSupport → user
// Object.setPrototypeOf(Teacher, user)                  // Teacher → user

// console.log(TASupport.makeAssignment)   // "Js Assignment" ✅ own property
// console.log(TASupport.isAvailable)      // false ✅ from teachingSupport
// console.log(TASupport.email)            // "manan@gmail.com" ✅ from user
// console.log(Teacher.name)              // "Manan" ✅ from user













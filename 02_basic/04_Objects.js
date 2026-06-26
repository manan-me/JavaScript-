//object singelton or constructor

const obj2=new Object()       //singelton declaration
console.log(obj2);

obj2.id="f24"
obj2.name="Manan"
obj2.age=22

// console.log(obj2);

const regularUser={
    email:"abcd@gmail.com",
    fullName:{
        userFullName:{
            fistname:"Abdul",
            lastname:"Manan"
        }
    }
}

console.log(regularUser.fullName.userFullName.fistname);

//merge objects       ***************

const obj3={a:2,b:3}
const obj4={c:4,d:5}

// const obj5=Object.assign({},obj3,obj4)          //      as in assign first is target and second is source
// Mainly we use this method for addition
const obj5={...obj3,...obj4}
console.log(obj5);



/// Database return like this Array of objects
const user=[
    {
        id:1,
        email:"123@gmail.com"
    },
    {
        id:1,
        email:"123@gmail.com"
    },
    {
        id:1,
        email:"123@gmail.com"
    }
]

console.log(user[2].email);  // accesss Array of objects


console.log(obj2);

//Very important*******************
// we can get values of keys in Array then we can duse loops on that array for our work
console.log(Object.keys(obj2));                    //   [ 'id', 'name', 'age' ]
console.log(Object.values(obj2));                  //  [ 'f24', 'Manan', 22 ]
console.log(Object.entries(obj2)); // Array into array of object :   [ [ 'id', 'f24' ], [ 'name', 'Manan' ], [ 'age', 22 ] ]


console.log(obj2.hasOwnProperty("age"));    // tell wheter this is in object




////Destructurig of objects...................
const course={
    name:"CS",
    id:"1234",
    courseInstructor:"Ali"
}

//to reduce every time course.id write to access value we use destructing

// const {courseInstructor}=course
// console.log(courseInstructor);
//also
const {courseInstructor:instructor}=course
console.log(instructor);



//API in the form of jason
//JSON LOOK
// {
//     "name"="Manan",
//     "id"="123",
//     "age"="22"
// }


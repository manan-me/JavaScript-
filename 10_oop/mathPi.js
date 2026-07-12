const descriptor=Object.getOwnPropertyDescriptor(Math , 'PI')

console.log(descriptor);


//object.create(null)

const person={
    name:'Manan',
    email:'mani@gmail.com'
}
console.log(Object.getOwnPropertyDescriptor(person,"name"));

Object.defineProperty(person,'name',{
    //writable: false,
    enumerable: false,     //never loop
    //configurable: true
})

// console.log(Object.getOwnPropertyDescriptor(person,"name"));

for (const [key,value] of Object.entries(person)) {
    if(value !== 'function'){
        console.log(`${key} and value is ${value}`);
        
    }
    
}
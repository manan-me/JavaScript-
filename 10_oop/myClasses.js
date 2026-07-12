//After EA6


// class User{
//     constructor(name,email,password){
//         this.name=name
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     toUppercaseName(){
//         return this.name.toUpperCase()
//     }
// }

// const person=new User('Manan','manan@gmail.com','123')
// console.log(person.encryptPassword());
// console.log(person.toUppercaseName());


/// behind the scene (old way)


function User(name,email,password){
       this.name=name
        this.email=email
        this.password=password
}

User.prototype.encryptPassword=function(){
            return `${this.password}abc`

}
User.prototype.toUppercaseName=function(){
            return this.name.toUpperCase()

}

const old=new User('Mani','mani@gmail.com','456')
console.log(old.encryptPassword());
console.log(old.toUppercaseName());
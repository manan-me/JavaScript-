function User(name,email){
    let _name=name
    let _email=email

    Object.defineProperty(this,'name',{
        get(){
            return _name.toUpperCase()
        },
        set(value){
            _name=value
        }
    })

    Object.defineProperty(this,'email',{
        get(){
            return _email.toUpperCase()
        },
        set(value){
            _email=value
        }
    })



}

const person=new User('Manan','man@gmail.com')
console.log(person.name);
console.log(person.email);
person.name="Manan"
console.log(person.name);



///read in a good portipion about this ,getter setter in class and obj function
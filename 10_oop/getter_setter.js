class User{
    constructor(name,email){
        this.name=name
        this.email=email
    }
    set email(value){

       this._email=value
    }
    get email(){
        return this._email.toUpperCase()

    }

    set name(value){
        this._name=value
    }
    get name(){
        return this._name.toLowerCase()
    }
}

const person=new User('Manan','man@gmail.com')
console.log(person.name);
person.name='Ali'
console.log(person.name);
const User={
    _name:'manan',
    _email:"man@gmail.com",

    get name(){
        return this._name.toUpperCase()
    },
    set name(value){
        this._name=value
    }
}

const person=Object.create(User)
console.log(person.name);


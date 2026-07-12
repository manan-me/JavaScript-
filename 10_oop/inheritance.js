class User {
    constructor(userName) {
        this.userName = userName
    }
    isLogged() {
        console.log(`User named ${this.userName} is logged in`);

    }
}

class Teacher extends User {
    constructor(userName, email, password) {
        super(userName)
        this.email = email
        this.password = password
    }
    cousreAdded() {
        console.log(`This course is added by ${this.userName}`);

    }
}

const person = new Teacher('Manan', 'mani@gmail.com', '1234')
person.cousreAdded()
person.isLogged()

console.log(person instanceof Teacher);
console.log(person instanceof User);

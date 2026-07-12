class User{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(`The user named ${this.userName} is logged in`);
        
    }
    static createId(){
        return '123'
    }
}

const person=new User('Manan')
//console.log(person.createId());


class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email=email
    }
}

const senior=new Teacher('Mani','mani@gmail.com')
senior.logMe()

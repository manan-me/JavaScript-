function setName(userName){
    //comlex DB calculations
    this.userName=userName
}

function createUser(userName,email,password){
    setName.call(this,userName)
    this.email=email
    this.password=password
}

const user=new createUser('Manan',"manan@gmail.com",'123')
console.log(user);


/// This works diffrently in window enviornment vs Node enviornment
//When we uses callBack(func in func)
//use call as finction is calling but variables got vanished when it return to main
//so we have to keep hold reference using or passing our own this and also using call


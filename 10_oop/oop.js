const users={
    name:"Manan",
    loggedInCount:8,

    getUserDetails:function(){
        // console.log('User Dettails aquired');
        console.log(`User name is ${this.name} and login count is ${this.loggedInCount}`);
         console.log(this);
                
    }
}

// users.getUserDetails()
// console.log(this);



function user(name,loggedInCount){
    this.name=name
    this.loggedInCount=loggedInCount
    this.greeting=()=>{
        console.log('Asslamualaikum Habib');
        
    }
    // return this     //write or not doesn't matyter after new 
}


// let userOne=user('manan',8)
// let userTwo=user('Abdul Manan',18)
// console.log(userOne);   // name: 'Abdul Manan',
//                         // loggedInCount: 18       Over irde values of userOone passesd 

let userOne=new user('manan',8)
let userTwo=new user('Abdul Manan',18)
console.log(userOne);   //solution we use new as construcyor function to get new instance
                          
console.log(userOne.constructor);

//Read about instanceOf

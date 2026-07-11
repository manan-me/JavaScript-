//  const promiseOne=new Promise((resolve,reject)=>{
//     //Do async tasks
//     //DB Calls,Cryptography,network

//     setTimeout(()=>{
//         console.log('Hey promis is good');
//         resolve()
//     },1000)
//  })

//  promiseOne.then(()=>{
//     console.log('Promise executed');
    
//  })

//  promiseOne.catch(()=>{
//     console.log('Promise rejected');
    
//  })



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('task 2 is done');
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log('task 2 resolved');
    
// })



// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:'Manan',email:'manan@gmail.com'})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
    
// })

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error) {resolve({name:'Manan',email:'manan@gmail.com'})}
            else{
                reject('ERROR! Something Went Wrong')
            }
    },1000)
})


//not possible: const userrr= promiseFour.then((user)=>{   // we can't store a then retuirn in a variable 
promiseFour.then((user)=>{  
    console.log(user);
    return user.name
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
})
.finally(()=> console.log('Promise is either resolved or rejected'))



const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error) {resolve({name:'Hamza',email:'Hamza@gmail.com'})}
            else{
                reject('ERROR! Something Went Wrong in Promise 5')
            }
    },1000)
})

async function consumedPromise(){
    try {
        const answer=await promiseFive
    console.log(answer);
    
    } catch (error) {
        console.log(error);
        
    }
}

consumedPromise()



// async function consumedFunction(){
//     try {
//         const prom=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await prom.json()
//         console.log(data);
                  
//     } catch (error) {
//         console.log('E: ',error);
        
//     }
// }

// consumedFunction()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=> console.log(data)
)
.catch((error)=>{
    console.log(error);
    
})
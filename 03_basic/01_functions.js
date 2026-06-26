function add(num1,num2){
    console.log(num1+num2);
    
}

add(3,6);


function add(num1,num2){
    return res=num1+num2;
    
}

const result=add(2,8)
console.log(`Result is ${result}`);


// ********************Interview perspective

// function login(username){                
//     return `${username} is logged in`
// }

// console.log(login());    //undefined is logged in

function login(username="Ali"){         //default value solution for undefined       
    return `${username} is logged in`
}

console.log(login());    




///Cart func
function calculateCartItems(val1,val2,...num3){     //... rest operator
    return num3
}

console.log(calculateCartItems(230,200,500,500,970,560));
  //objects for functions


  const user={
    username:"manan",
    price:230
  }


  function handleObjects(anyobject){
    console.log(`Hey ${anyobject.username} , this product is for ${anyobject.price}`);
    
  }

//   handleObjects(user)
//other way

handleObjects({
    username:"Manan",
    price:270
})


//Array in func

const arr1=[1,2,3,4,5,6]

function return2ndValue(getAnyArray){
    return getAnyArray[1]
}


// console.log(return2ndValue(arr1));
console.log(return2ndValue([1,2,3,4,5,6]));

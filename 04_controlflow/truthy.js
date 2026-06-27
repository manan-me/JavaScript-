//suppose you query data base for user email and you get an email as

const email="h@manan.ai"

if(email){                               //checking with just email 
    console.log("got the user email");
    
}else{
    console.log("don't got the user email");
    
}



//falsy valuess

/*
false,0,-0,BIgInt 0n,"",null,undefined,NaN
*/

//Truthy Values
/*
"0",true,'false'," ",[],{},(),function(){},
*/


//for array check use length property

const arr=[]
if(arr.length===0){
    console.log("Array is empty");
    
}


//for object

const obj1={}
if(Object.keys(obj1).length === 0){
    console.log("Object is empty");
    
}




/////Nullish Coalescing Operator(??) : null   & undefined     //safety check

let val1;
// val1=5 ?? 10      //5
// val1= null  ?? 10
// val1 = undefined ??15

val1=null ?? 10 ?? null ?? 15

console.log(val1);



//////////////////ternary operator
// condition ?true:false

const coffePrice=300
coffePrice>250 ? console.log("yes") : console.log("No");


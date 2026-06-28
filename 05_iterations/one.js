//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element===5){
//         console.log("Five is best number");
        
//     }
//     console.log(i);
    
    
// }


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <5 ; j++) {
//          console.log(`Outer loop value is ${i}, and inner loop value is ${j}`);
         
//     }    
// }


const array=["Superman","Batmnan","Spider"]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
    
}


////break   and continue in looop

for (let i = 1; i <= 20; i++) {
    if(i == 5) continue;
console.log(`Value of i is ${i}`);
  if(i==7) break;
    
}
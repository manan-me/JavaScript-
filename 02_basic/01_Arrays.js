// Array

// const arr = [3, 1, 4, 1, 5];

// arr.push(9)           // add to end
// arr.pop()             // remove from end
// arr.shift()           // remove from start
// arr.unshift(0)        // add to start
// arr.includes(4)       // true
// arr.indexOf(1)        // 1
// arr.reverse()         // [5, 1, 4, 1, 3]
// arr.sort()            // sort
// arr.length            // size

const myArray=[1,2,3,4,'Ali']
const Arr1=["Hey","Hello","How"]
const Arr2=new Array(1,7,4,5,3,8,2)

// console.log(myArray[2]);


// Arr2.push("ALI")
// console.log(Arr2);
// Arr2.pop()
// console.log(Arr2);

                                 //PUSH AN POP add and remove at end
                                 //Unshift and Shift add and remove at start
// Arr2.unshift("ALI")
// console.log(Arr2);
// Arr2.shift()
// console.log(Arr2);



// console.log(Arr2.includes(3));
// console.log(Arr2.indexOf(3));
console.log(Arr2.toSorted());


const newArray=Arr2.join()          //convert array to string with "," as well as string character 1,7,4,5,3,8,2
console.log(Arr2);
console.log(Arr2[2]);
console.log(newArray);
console.log(newArray[2]);          //1,7,4,5,3,8,2     ==>> " 7 "
console.log(typeof newArray);



/// Slice ///Splice            ********Interview imporatant
let arrImp=[0,1,2,3,4,5,6,7]

console.log("A ", arrImp);

let arrSlice=arrImp.slice(1,3)

console.log("b ", arrSlice);
console.log("A ", arrImp);


let arrSplice=arrImp.splice(1,3)

console.log("c ", arrSplice);
console.log("A ", arrImp);




// A  [
//   0, 1, 2, 3,
//   4, 5, 6, 7
// ]
// b  [ 1, 2 ]
// A  [
//   0, 1, 2, 3,
//   4, 5, 6, 7
// ]
// c  [ 1, 2, 3 ]
// A  [ 0, 4, 5, 6, 7 ]
// for of looop


//Arrray specific loop

//[{},{},{}]


const arr=[1,2,3,4,5,6,7]

for (const num of arr) {
    //console.log(num);
    
    
}


const greeting="Abdul Manan"
for (const greet of greeting) {
   // console.log(`Each character is ${greet}`);
    
}


//////For of    for map
const map=new Map()
map.set("PK","Pakistan")
map.set("IN","India")
map.set("CN","China")
map.set("CN","Chinaaa")       //unque value pairs in map

//console.log(map);

for (const [key , value] of map) {    //  it will return an araay like  [ 'PK', 'Pakistan' ]
   console.log(key, `:-`, value);       // so use this :[key , value]
   
}



//For of   loop FO OBJECT


const obj1={
    game1:'PUBG',
    game2:'GTA',
    game3:'Vice city'
}

// for (const [key , value] of obj) {
//     console.log(key, `:-`, value);          //Not defined as its shows erro                                           //there are other methods for object
// }
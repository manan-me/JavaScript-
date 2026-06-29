const obj1={
    js:'JavaScript',
    cpp:'C++',
    py:'Python',
    Chash:"C sharp"
}


// for objects we mostly use for in   loop       for in loop also iused some other areas as well
for (const key in obj1) {
    //console.log(`${key} is shortcut for language called ${obj1[key]}`);
   
}


////for in   loop for array



const arr=['js','cpp','py','chash']
for (const key in arr) {
    //console.log(key);  ///differ is that  for of => gives values using key
                         ///differ is that  for in => gives indexes using key
    
    //output of this is : 0 1 2 3 
    //for values

    //console.log(arr[key]);
    
}




//// foin loop on map
const map=new Map()
map.set("PK","Pakistan")
map.set("IN","India")
map.set("CN","China")
map.set("CN","Chinaaa")      

for (const key in map) {
                                  //returns nothing for maps
    console.log(key);
    
    
}
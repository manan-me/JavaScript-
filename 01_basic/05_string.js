const name='manan'
const id='-me'

console.log(name+id+" "+50);   //outdated syntax for concatination
//new syntax  or modren syntax (String interpolation)

console.log(`Hello my name is ${name[0]} and id is ${id}`);


// another method of string declaration
const newName=new String('Manan')           //THis type gives a lot of methods just use them bu writing name and dot  as : newName.
console.log(newName[3]);
console.log(newName.__proto__);
console.log(newName.charAt(3));
console.log(newName.indexOf('n'));


const newString=newName.substring(0,3)
console.log(newString);

const newString1=newName.slice(-8,3)
console.log(newString1);

name.slice(-5);      // "Manan" (starts 5 from end)
name.slice(-5, -2);  // "Man"


const str=new String("Mani")

console.log(str.toUpperCase());
console.log(str);



const trimUse="        Hey we use trim to remove extra space        "
console.log(trimUse);                                                               //Read trim documentation from MDN.web
console.log(trimUse.trim());


const url="https//:abdulmanan-go/settings%20logout"
console.log( url.replace('%20','-'));                      //Replace used during broweser user space typed serrach as if user use setting logout      , browse place %20 so we have to replace it
console.log(url.includes('mani'));



const str12='hey how are you'
console.log(str12.split(' '));


// Array in advance
let marvelHeroes=["Thor", "Ironman" , "Spider"]
let dcHeroes=["joker", "superman" , "batman"]

// marvelHeroes.push(dcHeroes)       //Array into array    1st method
marvelHeroes=marvelHeroes.concat(dcHeroes)       //Array into array  2nd method    but we have to re store it. 
// marvelHeroes.push(...dcHeroes)       //Merged array without array into array      3rd method
console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);  //joker   in case we don't use " ... "



const anotherRealArray=[1,2,5,3,[3,4,8,[3,9,4],9,0],9,10,[2,8,9]]
const realAnotherArray=anotherRealArray.flat(Infinity)                    //also can be used with numbers
console.log(realAnotherArray);        



console.log(Array.isArray("Manan"));              //Asking question is it array
console.log(Array.from("Manan"));              //convert to Array

// *******     Interview Important      **********
console.log(Array.from({name:"Manan"}));       //When we try to convert object , it will return [], so we specically have to pass is we want keys or values array

let score1=200
let score2=300
let score3=400

console.log(Array.of(score1,score2,score3));

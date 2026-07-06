// ++++++++++++++++++++++++     Numbers     ++++++++++++++++++++++++=
const num=400
console.log(num);


const num1=new Number(400)
console.log(num1);
console.log(num1.toString().length);    //num-->string-->then we have string functions as well as length
console.log(num1.toFixed(2));


const num2=123.8946
console.log(num2.toPrecision(4));
console.log(num2.toPrecision(3));
const num3=1123.8946
console.log(num3.toPrecision(3));          //1.12e+3   use precision care fullu its very sensitive



const num4=10000000000
console.log(num4.toLocaleString());               //10,000,000,000


// ++++++++++++++++++++++++     Maths    ++++++++++++++++++++++++=
console.log(Math);
console.log(Math.abs(-87));
console.log(Math.round(5.57));
console.log(Math.ceil(5.57));
console.log(Math.floor(5.57));

const arr=[4,6,8,4,6]
console.log(Math.min(...arr));               //for passing array use spread operator " ... "
console.log(Math.max(...arr));               //for passing array use spread operator " ... "

console.log(Math.random());               //Mostly random is used in JS during projects *************
console.log((Math.random()*10)+1);        

const min=10
const max=100
console.log(Math.floor(Math.random()*(max-min+1))+min);               

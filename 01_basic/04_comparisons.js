console.log('2' > 0);
console.log('2' > 1);            



console.log(null > 0);
console.log(null == 0);          //Reason is that eqaulity check ==  amd compariosn check <,>,<=,>= 
console.log(null >= 0);                                 // work differently     comparison convert null to mostly 0 when comparing

console.log(undefined ==0);    // always give false whenever comapre and eqality check used


//****Important ****//
//Equality check and coparisons are different in javascript

// ===   strict check      it not only compare but also check data types before

console.log('2' === 0);



// // summary
// dont compare different data types and not use null coparisons as well  means avoid them
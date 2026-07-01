//reduce

const myNums=[1,2,3,4,5]

// const myNumbers=myNums.reduce((acc,currval)=>acc+currval,3)

const myNumbers=myNums.reduce(function(acc,currval){
        console.log(`Accumulator value is ${acc} and current value is ${currval}`);

    return acc+currval
    
},0)


console.log(myNumbers);




/////shoping cart 


const shoppingCart=[
     {
        itemName:'JS Course',
        price:4500
     },
     {
        itemName:'React Course',
        price:2500
     },
     {
        itemName:'C++ Course',
        price:5000
     },
     {
        itemName:'Python Course',
        price:3000
     }

]

// add all prices in shoping cart

const priceToPay=shoppingCart.reduce((acc,item)=>item.price+acc,0)
console.log(priceToPay);

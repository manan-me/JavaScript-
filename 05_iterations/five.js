const coding=['js','ruby','java','python','cpp','c#']


//for arrays we mostly use built in function "for  each"  for iteraions, although is higher order function

 
// coding.forEach( function (item) {
//     console.log(item);
    
// })  
// coding.forEach( (item) => {
    //     console.log(item);
    
    // }) 
    
    print=(item)=>{
        //console.log(item);

}
                       //MULTIPLE WAYS TO PASS A FUNCTION TO FOR EACH 
coding.forEach( print)  




//lets see whtas fro each get


coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr
}
    );
//     output:
        // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp', 'c#' ]
        // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp', 'c#' ]
        // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp', 'c#' ]
        // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp', 'c#' ]
        // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp', 'c#' ]
        // c# 5 [ 'js', 'ruby', 'java', 'python', 'cpp', 'c#' ]




//objects in array [{},{},{}]

//use for each

const myCoding=[
    {
        lanName:'JavaScript',
        LangFile:'Java'
    },
    {
        lanName:'cplusplus',
        LangFile:'c++'
    },
    {
        lanName:'python',
        LangFile:'pi'
    }
]

myCoding.forEach((item)=>{
    console.log(item.lanName);
    
})
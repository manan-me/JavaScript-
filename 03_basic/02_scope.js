// let , const        respect scope
// var  did'nt respect scope

let a=300

if(true){
    let a=10                          //scope
    console.log("INNER : ",a);
    
}

console.log(a);


//scope nested
function one(){
    let userFullName="Manan"
    function two() {
        let web="youtube"
        console.log(userFullName);
        
    }
        // console.log(web);          //isn't defined 
        two()
        

}
one()








//scope for if case

if(true){
    const username="Manan"
    if(username==="Manan"){
        const website="youtube"
        console.log(username + website);
        
    }
    // console.log(website);                    // Not defined error
    
}

// console.log(username + website ,"hey");          //not definef error
//function types  ,there we see 2 

function add(num){
    return num+2
}
add(6)


const addTwo=function(num){
    return num+2
}

addTwo(6);
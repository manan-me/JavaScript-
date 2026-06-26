const date=new Date()
console.log(date);                                            // 2026-06-26T04:41:13.246Z

console.log(date.toDateString());                             // Fri Jun 26 2026         

console.log(date.toISOString());                              // 2026-06-26T04:41:13.246Z

console.log(date.toJSON());                                   // 2026-06-26T04:41:13.246Z

console.log(date.toLocaleDateString());                       // 6/26/2026

console.log(date.toLocaleTimeString());                       // 9:41:13 AM

console.log(date.toLocaleString());                           // 6/26/2026, 9:41:13 AM  

console.log(date.toUTCString());                              // Fri, 26 Jun 2026 04:41:13 GMT

console.log(date.toTimeString());                             // 09:41:13 GMT+0500 (Pakistan Standard Time)

console.log(date.getTimezoneOffset());                        // -300

console.log(typeof date);                                     // object


// const myCreatedDate=new Date(2026,0,28,5)                    //1/28/2026, 5:00:00 AM    mm/dd/yyyy
// const myCreatedDate=new Date('2026 1 28')
 const myCreatedDate=new Date("4-28-2026")
// const myCreatedDate=new Date("4-28-2026")
console.log(myCreatedDate.toLocaleString());                 


const myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


// Date.now()  // gives ms passed since Jan 1, 1970 00:00:00
//             // right now → something like 1750000000000


let newDateFunctions=new Date()
console.log(newDateFunctions.getMonth()+1);
console.log(newDateFunctions.getDay());


newDateFunctions.toLocaleString("default", {
    dayPeriod:"long"
})



                                                          
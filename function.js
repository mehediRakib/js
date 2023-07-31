// Here I am talking about function.
//1. How to Declare Function. and then we must call it from out side the function body
function nam(){
    console.log("This is a Function");
}
nam();

// another example of Function

function toadd()
{
    let a=50;
    let b=39;
    console.log(a+b);
}
toadd();

/*
Function naming convention: It define that as function means do something so  the function name must be like that.
it would be a verb.
*/

/*
Function signature: to make  a function we need some key word.. the all keyword with function body called function signature.
*/

//Example of Regular Fucntion:

function toshow(){
   let a =5;
   let b=14;
   let name="This is a normal regular function";
   console.log(a+b);
   console.log(name);
}
toshow();// here we call the function for perform the function body

//Arrow
/**
 
 Arrow is function define type which is very much use in Node js . 
 */
// In array function we dont need to define the function key word.. just started from the function name.

toadd=()=>{
    let a=10;
    let b=15;
    console.log(a+b);
}
toadd();

//or we can define it by this way
let a =10;
let b=14;
toadd=()=>a+b
console.log(toadd());

toadd=(a,b)=> console.log(a+b);
toadd(10,20);

// another example of arrow function
hello=(value)=>{
return "Comilla"+value;
}
//hello('University');
console.log(hello('University'));


/*

use async keyword in function
// we know that a wevpage consist of lots of code.and javascript program run one by one line..if a line need more time to execute
,javascript compiler avoid it and go through the next line.. but it makes hessel to perform the website properly. for solve this 
problem we use async keyword in function.
So async function ensure that the line define by async keyword executed properly until it has completed and then go for next..
*/
 
async function fun(){
    await fetch("https://dummy.restapiexample.com/api/v1/employee/1")// It is commonly used to make HTTP requests, such as fetching data                                                        // from APIs or loading resources like JSON, text, HTML, etc., from a remote server.                                                        
}
fun();
// for arrow function
fun2=async()=>{
    await fetch("https://dummy.restapiexample.com/api/v1/employee/2")// Fetch: It is commonly used to make HTTP requests, such as fetching data                                                        // from APIs or loading resources like JSON, text, HTML, etc., from a remote server.                                                          
}
fun2();




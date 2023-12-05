// ES5 is old and ES6 is updated or new version of js 

// menas many new features came into ES6 of js

// ES5 we can declare only variable using var keyword 
var a = 10;     //function scope 
console.log(a)

var a = 20;
var b = "Sachin"
console.log(a)
console.log(b)


// ES6  let and const comes into ES6 where let is variable and const is constent 
// let and const 
// arrow function 
//classes
//modules 
//promises

let c = 10;             // block scope 
// console.log(`the value of c outside the bloxk ${c}`)
console.log("the value of c outside the bloxk "  + c)

// let c ="Sachin";   // you can not redecalre same let variable in same scope 
// console.log(c)

 const x = ()=>{
let c  = 20;
console.log(`the value of c is in function x ${c}`)
 }
 x()


const d = 100             //block scope   you can not redeclare cost variable 
console.log(d)


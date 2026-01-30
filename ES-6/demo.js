// document.writeln("Hello, ES6 Module!");

// var is function scoped and can be reassigned , modified
// let is block scoped and can be reassigned 
// const is block scoped and cannot be reassigned
// objects stores key value pairs and are mutable , even if declared with const , their properties can be modified
// class contains properties and methods , blue print for creating objects

// const student = {
//     name: "John",
//     age: 22,
//     course: "Computer Science",
//     greet : function(){
//         console.log("Hello, " + this.name)
//     }
// }
// student.greet() // Calling object method

// console.log(student.name) // Accessing object property
// student.name = "Doe" // Modifying object property
// console.log(student.name) // Accessing modified property

//store a user's age (the value may change later)
// var a = 20
// console.log(a)

//store value of pI
// const PI = 3.14
// console.log(PI)

//Loop counter variable
// for(let i = 0 ; i < 5 ; i++){
//     console.log(i)
// }

//lexical scope this order example
// let a = 5 
// function outer(){
//     let b= 10
//     function inner(){
//         let c= 15;
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

// let n = 7;
// for(let i = 0 ; i <n ; i++){
//     if(n%i == 0){
//         console.log("Not prime");
//         break;
//     }
//     else{
//         console.log("Prime");
//         break;
//     }
// }

const student={
   name : ["John", "Doe"],
   marks : [85, 90],
}
// Template Literals 
// insert variables into string easily 
// write multi line strings , avoid complex string concatination (+) 


let msg = `hello my name is
Priyanshu Tewatiya`
// console.log(msg)

let name = "Priyanshu"
let lname = "Tewatiya"

// console.log(`My name is ${name} ${lname}`)

// const add = function(a,b){
//       return a + b
// }
// console.log(`The sum of 5 and 3 is ${add(5,3)}`)

// Arrow Functions  =>  not use Function keyword
// shorter syntax
// lexically binds this value     , implict return for single expression

// let add = (a,b) => a + b
// console.log(add(5,1))

// let a = 9
// let b = 10
// console.log(`the sum of ${a} and ${b} is ${a+b}`)


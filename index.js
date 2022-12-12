// Pure Functions - return value depends on only the arguments given to it.

// function getRectArea(width, height){
//     return width * height;
// }

// console.log(getRectArea(4, 5));

// Higher order functions - has the ability to accept a function as parameter and which will be called by the function itself

// function calculator(a, b, operation){
//     return operation(a, b);
// }

// function add(a, b){
//     return a + b;
// }
// function sub(a, b){
//     return a - b;
// }
// function mul(a, b){
//     return a * b;
// }
// function div(a, b){
//     return a / b;
// }

// console.log(calculator(50, 10, sub));


// Function currying
// - given a str, remove white spaces, capital Letters and add '.' at the end of the string


// function formatString(str){
//     let strWithoutSpace = str.replaceAll(' ', '');
//     console.log(strWithoutSpace);
//     return function(){
//         let strWithoutCapLtr = strWithoutSpace.toLowerCase();

//         return function(){
//             return strWithoutCapLtr + '.';
//         }
//     }
// }

// console.log(formatString(' Hello World ')()());

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(1)(2)(3));
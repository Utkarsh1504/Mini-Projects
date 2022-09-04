// a();
// b();  difference b/w function statement and function expression

// Function Statements aka Function Declaration
function a() {
  console.log("this is function statement");
}
a();

// Function Expression
let b = function () {
  console.log("this is a function expression");
}
b();

// Anonymous Function
// function() {
//   console.log("this is a anonymous function and this is used as a value");
// }

// Named Function Expression
let c = function greet() {
  console.log("Namastey JS");
  console.log("this is named function expression")
}
c();
// xyz(); will give error

// Difference b/w Parameter & Arguments ?
let d = function greetName(name) { // name: is parameter
  console.log(`Hey! ${name}, Nice to meet you.`);
}
d("Shaurya"); // "Shaurya": is argument
// greetName("Devansh") will give error greet function is defined in global space

// First Class Functions
// the ability of functions to be used as values is known as first class function

function xyz() {
  str = "The ability of functions to be used as values and can passed as an arguments to some another functions and also can be returned from functions";
  return str;
}

const e = function firstClassFunc(param1, param2) {
  console.log(`What's a first class function? - ${param1}`);
  console.log(param2);
}
e(xyz(), "Functions are first class citizens");


// Arrow Functions
console.log("in some next video");

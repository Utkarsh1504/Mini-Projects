// function x() {
//   console.log("Hello");
// }

// function y(x) {
//   x();
// }
// // here x is `callback-function`
// // and y is `higher-order-function`


const radius = [3, 1, 2, 4];

const calcArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.floor(Math.PI * radius[i] * radius[i]));
  }
  return output;
}

console.log(calcArea(radius));


const calcCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.floor(2 * Math.PI * radius[i]));
  }
  return output;
}

console.log(calcCircumference(radius));
// so writing this function again and again is not best way to solve this. instead we can do better using higher order functions


// modular, reusable code

const area = function (radius) {
  return Math.PI * radius * radius;
}

const diameter = function (radius) {
  return 2 * radius;
}

// now this is a generic function just put the logic and get the calculation according to logic function whether it is area, circumference
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}

const areaOfCircle = calculate(radius, area);
console.log(areaOfCircle);
console.log(calculate(radius, diameter));
// const output = radius.map(area);
// console.log(output);
// so this is much better codef


// const arr = [5, 1, 3, 2, 6];
// // task 1: double the array element: [10, 2, 6, 4, 12]

// function double(x) {
//   return x * 2;
// }
// const doubleArr = arr.map(double);
// console.log(doubleArr);
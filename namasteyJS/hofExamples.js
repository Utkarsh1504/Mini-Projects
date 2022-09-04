const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - [101, 1, 11, 10, 110]

// map function
function double(x) {
  return x * 2;
}

const ans1 = arr.map(double);
const ans2 = arr.map(function triple(x) {
  return x * 3;
});
const ans3 = arr.map((x) => { // arrow functions
  return Number(x).toString(2);
});
console.log(ans1);
console.log(ans2);
console.log(ans3);

// filter function

// filter odd values
function isOdd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 == 0;
}

const output = arr.filter(isOdd);
const outputEven = arr.filter(isEven);

// value greater than 4
const output1 = arr.filter((x) => {
  return x > 4;
});
console.log(output);
console.log(outputEven);
console.log(output1);


// Reduce function
// non-functional way

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// functional way
const sum = arr.reduce(function (accu, curr) {
  accu += curr;
  return accu;
}, 0);

// finding maximum in an array
const max = arr.reduce((accu, curr) => {
  if (accu < curr) {
    accu = curr;
  }
  return accu;
}, 0);

console.log(findSum(arr));
console.log(sum);
console.log(max);

// we have given array of objects
const users = [
  { firstName: "Utkarsh", lastName: "Mishra", age: 21 },
  { firstName: "Shaurya", lastName: "Yadav", age: 20 },
  { firstName: "Devansh", lastName: "Khajuria", age: 20 },
  { firstName: "Aishwarya", lastName: "Bharadwaj", age: 22 },
];

// list of full names of user
const fullName = users.map((x) => {
  return x.firstName + " " + x.lastName;
})
console.log(fullName);

// age {20: 2, 21: 1, 22: 1}
const numPersonOfAge = users.reduce((accu, curr) => {
  if (accu[curr.age]) {
    accu[curr.age] = ++accu[curr.age];
  } else {
    accu[curr.age] = 1;
  }
  return accu;
}, {});
console.log(numPersonOfAge);

// firstName of persons whose age is less than 21

const output = users.filter((x) => x.age < 21).map((x) => x.firstName);

// reduce

const output1 = users.reduce((acc, curr) => {
  if (curr.age < 21) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);
console.log(output1);

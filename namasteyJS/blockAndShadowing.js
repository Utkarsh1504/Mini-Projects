// // block scoping
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// console.log(a); // 10
// console.log(b); // Error

// var a = 100;
// {
//     // this is a block
//     // compound statement
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a); // 10
// }
// console.log(a); // 10

// shadowing
// let b = 100;
// {
//     // this is a block
//     // compound statement
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(b); // 20
// }
// console.log(b); // 100
// console.log(a) // 10 var is accessible in global scope

// Illegal Shadowing
// let a = 20;
// {
//     var a = 20; // SyntaxError: 'a' has already been declared
// }

var a = 20;
{
    let a = 30;
    console.log(a);
}
console.log(a);
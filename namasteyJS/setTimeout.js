// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namastey JS");
// }
// x();
// output: Namastey JS
//         1

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namastey JS");
// }
// x();
// output: Namastey JS
// 6
// 6
// 6
// 6
// 6

// // using let

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namastey JS");
// }
// x();

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Namastey JS");
}

x();
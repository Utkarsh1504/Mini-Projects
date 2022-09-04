// What is a Callback function in JS
// JavaScript is a synchronous and single-threaded language
// but using Callback function we can peform asynchronous things in JS as well


// Blocking the main thread
// Power of callbacks

setTimeout(function () { // here setTimeout accepts a Callback function
  console.log("timer")
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() { // y is Callback function
  console.log("y");
})

// Deep about Event Listeners
// Scope Demp with Event Listeners
// Garbage Collection & removeEventListeners

function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    // count++;
    console.log(++count);
    // console.log("Button Clicked");
  });
}
attachEventListener();

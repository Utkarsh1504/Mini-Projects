console.log("Start");

setTimeout(function cb() {
  console.log("callback");
}, 0);

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires");

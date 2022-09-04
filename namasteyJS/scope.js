function a() {
    var b = 10;
    c();
    function c() {
        console.log(b); // b is accessible here
    }
}

a(); 
console.log(b) // b is not accessible here
"use strict";
function factorial(n) {
    if (n < 0) {
        console.log("Factorial cannot be computed for negative numbers");
        return;
    }
    let fact = 1;
    for (let i = n; i >= 1; i--) {
        fact = fact * i;
    }
    console.log(fact);
}
factorial(6);
factorial(0);
factorial(-5);

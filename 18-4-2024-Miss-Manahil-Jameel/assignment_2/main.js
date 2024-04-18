"use strict";
// check if the number is prime number or not
function checkIfPrim(number) {
    let isprime = true;
    for (let index = 2; index < number; index++) {
        if (number % index === 0) {
            isprime = false;
            break;
        }
        else {
            isprime = true;
        }
    }
    return isprime;
}
console.log(checkIfPrim(13));

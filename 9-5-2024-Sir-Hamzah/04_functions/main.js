let num1 = 5;
let num2 = 4;
function getSum(...numbers) {
    let sum = numbers.reduce((a, b) => a + b);
    return sum;
}
console.log(getSum(num1, num2));
console.log(getSum(num1, num2, 5, 7));
export {};

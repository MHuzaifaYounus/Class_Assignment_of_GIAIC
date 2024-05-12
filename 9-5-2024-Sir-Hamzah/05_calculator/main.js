let num2 = 4;
let num1 = 6;
let operator = "-";
function getResult(num1, num2, operator) {
    let result = eval(num1 + operator + num2);
    return result;
}
console.log(getResult(num1, num2, operator));
// updating the operator 
operator = "+";
// updated result 
console.log(getResult(num1, num2, operator));
export {};

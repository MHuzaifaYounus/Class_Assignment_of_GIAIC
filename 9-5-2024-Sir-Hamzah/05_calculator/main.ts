let num2:number = 4
let num1:number = 6
let operator:string = "-"
function getResult(num1:number,num2:number,operator:string) {
    let result = eval(num1 + operator +  num2)
    return result
}
console.log(getResult(num1,num2,operator));
// updating the operator 
operator = "+"
// updated result 
console.log(getResult(num1,num2,operator));
 

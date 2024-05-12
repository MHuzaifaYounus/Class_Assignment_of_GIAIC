import inquirer from "inquirer"
let dynamicNum = Math.floor((Math.random()*10)+1);
console.log(dynamicNum);
let input = await inquirer.prompt({
    name:"number",
    type:"number",
    message:"Select the number between 1 and 10",
})


if (dynamicNum == input.number) {
    console.log(`${input.number} is  equal to the Dynamic Number`);    
}
else if (dynamicNum < input.number) {
    console.log(`${input.number} is  Greater Than the Dynamic Number`);    
}
else if (dynamicNum > input.number) {
    console.log(`${input.number} is  Less Than the Dynamic Number`);    
}

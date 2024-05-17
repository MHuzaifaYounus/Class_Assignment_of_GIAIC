// question1
let fruits:string[] = ["apple", "banana", "mango", "orange"]
// question2
let numbers:number[]= [10,20,30,40]
// question3
let thirdFruit:string = fruits[2] 
console.log(`mango: ${thirdFruit}`);
// question4
numbers[1] = 25
console.log(numbers);
// question5
fruits.push("grape")
console.log(fruits);
// question6
let lastFruit =  fruits.pop()
console.log(lastFruit);
// question7
let firstFruit = fruits.shift()
console.log(firstFruit);
// question8
fruits.unshift("kiwi")
console.log(fruits);
// question9
fruits.splice(1,2)
console.log(fruits);
// question10
fruits.splice(2,0,"pineapple","pear")
console.log(fruits);
// question11
let citrusFruits:string[] = fruits.slice(0,2)
console.log("firts two fruits",citrusFruits);
// question12
let lastTwoFruit:string[] = fruits.slice(fruits.length - 2, fruits.length + 1)
console.log("last two fruits",lastTwoFruit);


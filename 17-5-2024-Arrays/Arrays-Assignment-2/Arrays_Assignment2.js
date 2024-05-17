// question1
var fruits = ["apple", "banana", "mango", "orange"];
// question2
var numbers = [10, 20, 30, 40];
// question3
var thirdFruit = fruits[2];
console.log("mango: ".concat(thirdFruit));
// question4
numbers[1] = 25;
console.log(numbers);
// question5
fruits.push("grape");
console.log(fruits);
// question6
var lastFruit = fruits.pop();
console.log(lastFruit);
// question7
var firstFruit = fruits.shift();
console.log(firstFruit);
// question8
fruits.unshift("kiwi");
console.log(fruits);
// question9
fruits.splice(1, 2);
console.log(fruits);
// question10
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
// question11
var citrusFruits = fruits.slice(0, 2);
console.log("firts two fruits", citrusFruits);
// question12
var lastTwoFruit = fruits.slice(fruits.length - 2, fruits.length + 1);
console.log("last two fruits", lastTwoFruit);

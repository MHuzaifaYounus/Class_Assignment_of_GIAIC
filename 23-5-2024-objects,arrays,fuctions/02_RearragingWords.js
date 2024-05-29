"use strict";
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
let filteredArray = [];
filteredArray.push(scrambledArray[7]); // I
let secondAndThird = scrambledArray.splice(4, 2);
filteredArray.push(secondAndThird[0], secondAndThird[1]); // am a
let forthAndFifth = scrambledArray.splice(0, 2);
filteredArray.push(forthAndFifth[0], forthAndFifth[1]); // student of
filteredArray.push(scrambledArray[2]); // GIAIC
console.log(filteredArray.join(" ")); // I am a student of GIAIC

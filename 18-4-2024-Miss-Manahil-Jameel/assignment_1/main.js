"use strict";
// Write a function that counts the vowels in the string
function getVowels(str) {
    let count = 0;
    let vowles = "aeiouAEIOU";
    for (let index = 0; index < str.length; index++) {
        if (vowles.includes(str[index])) {
            console.log(str[index], count += 1);
        }
    }
    console.log(`There are ${count} Vowels in this String `);
}
getVowels("huzaifa");

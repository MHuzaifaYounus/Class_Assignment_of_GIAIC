"use strict";
let inventory = [];
let product1 = {
    name: "Laptop",
    model: 2022,
    cost: 50000,
    quantity: 31
};
let product2 = {
    name: "PC",
    model: 2002,
    cost: 2500,
    quantity: 3
};
let product3 = {
    name: "Gaming Console",
    model: 2024,
    cost: 20300,
    quantity: 273
};
inventory.push(product1, product2, product3);
console.log(inventory[2].quantity);
console.log(inventory[1].name);
console.log(inventory[0].name);
console.log(inventory[0].cost);
console.log(inventory[0].model);

"use strict";
let product = {
    name: "T-Shirts",
    price: 200,
    color: "white",
    inventory: {
        stock: 19,
        colorOptions: ["red", "green", "yellow", "black"],
        changeColor: (newColor) => {
            // change the color property 
            product.color = newColor;
            // change the price based on the new color
            if (newColor == 'red') {
                // increases price 10% if red is selected
                product.price += product.price * 0.1;
            }
            else if (newColor == 'black') {
                // increases price 15% if black is selected
                product.price += product.price * 0.15;
            }
            else if (newColor == 'green') {
                // decreases price 4% if green is selected
                product.price -= product.price * 0.04;
            }
            else if (newColor == 'yellow') {
                // decreases price 20% if yellow is selected
                product.price -= product.price * 0.2;
            }
            else {
                // if color is not in the list
                console.log(`${newColor} color is not available`);
            }
            console.log(`Your Product Price is Changed To ${product.price}`);
        }
    }
};
// log color options
console.log(product.inventory.colorOptions);
// changing color to red
product.inventory.changeColor('red');

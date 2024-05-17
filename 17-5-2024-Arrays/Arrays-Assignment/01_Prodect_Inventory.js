var products = [
    {
        name: "caps",
        price: 300,
        inventory: {
            stock: 92,
            colorOptions: ["black", "red", "blue", "white"]
        }
    },
    {
        name: "shirts",
        price: 800,
        inventory: {
            stock: 32,
            colorOptions: ["black", "blue", "white"]
        }
    },
    {
        name: "paints",
        price: 500,
        inventory: {
            stock: 32,
            colorOptions: ["black", "blue", "white"]
        }
    }
];
function changeColor(product, newColor) {
    product["color"] = newColor;
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
        console.log("".concat(newColor, " color is not available"));
    }
}
changeColor(products[0], "black");
changeColor(products[1], "black");
changeColor(products[2], "black");
products.forEach(function (product) {
    console.log("Product Name: ".concat(product["name"]));
    console.log("Product Price: ".concat(product["price"]));
    console.log("Product Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions, "\n"));
});

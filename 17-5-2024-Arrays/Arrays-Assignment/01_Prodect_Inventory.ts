// type alias for products
type Product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOptions: string[]
    }
}
// array containing three products
let products:Product[]= [
    {
        name: "caps",
        price: 300,
        inventory: {
            stock: 92,
            colorOptions: ["black","red","blue","white"]
        }
    },
    {
        name: "shirts",
        price: 800,
        inventory: {
            stock: 32,
            colorOptions: ["black","blue","white"]
        }
    },
    {
        name: "paints",
        price: 500,
        inventory: {
            stock: 32,
            colorOptions: ["black","blue","white"]
        }
    }
]
// function that change color of the product and change the price of the product depends on the new color 
function changeColor(product:Product,newColor:string) {
    product["color"] = newColor
    if (newColor == 'red') {
        // increases price 10% if red is selected
        product.price +=  product.price * 0.1
    }
    else if (newColor == 'black') {
        // increases price 15% if black is selected
        product.price +=  product.price * 0.15
    }
    else if (newColor == 'green') {
        // decreases price 4% if green is selected
        product.price -=  product.price * 0.04
    }
    else if (newColor == 'yellow') {
        // decreases price 20% if yellow is selected
        product.price -=  product.price * 0.2
    }
    else{
        // if color is not in the list
        console.log(`${newColor} color is not available`);
    }
}
// changing the colors of the products
changeColor(products[0],"black")
changeColor(products[1],"black")
changeColor(products[2],"black")

// Iterating array to print details of each product
products.forEach((product) => { 
    console.log(`Product Name: ${product["name"]}`);
    console.log(`Product Price: ${product["price"]}`);
    console.log(`Product Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions}\n`);
 })




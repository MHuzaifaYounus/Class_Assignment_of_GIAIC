import inquirer from "inquirer";
let friends = ["mursaleen", "areeb", "huzaifa", "anus", "adeel", "aman", "arham", "abdullah"];
let input = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter name of a person:",
});
switch (input.name) {
    case "mursaleen":
        console.log("Mursaleen is Your Friend");
        break;
    case "areeb":
        console.log("Areeb is Your Friend");
        break;
    case "anus":
        console.log("Anus is Your Friend");
        break;
    case "adeel":
        console.log("Adeel is Your Friend");
        break;
    default:
        console.log(`${input.name} is not your friend`);
        break;
}

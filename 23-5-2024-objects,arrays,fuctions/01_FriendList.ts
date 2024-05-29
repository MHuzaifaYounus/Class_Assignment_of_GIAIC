type Friend = {
    firstName :string,
    lastName : string,
    id?:number
}
type People = {
    friends : Friend[]
}
let people:People = {
    friends : []
}

let friend1:Friend = {
    firstName : "Areeb",
    lastName : "Ahmed",
    id:232
}
let friend2:Friend = {
    firstName : "Anus",
    lastName : "Shakeel",
}
let friend3:Friend = {
    firstName : "Adil",
    lastName : "Arif",
    id:234
}
people.friends.push(friend1,friend2,friend3)
console.log(people);

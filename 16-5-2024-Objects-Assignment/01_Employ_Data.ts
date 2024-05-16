// Part 1: Employee Data
type Employee = {
    name:string,
    department:string,
    role:"Manager" | "Engineer"| "Intern",
    contact?:{
        phoneNum?:number,
        email?:string
    }
    skills?:string[]
}
let employeeData:Employee= {
    name:"Areeb",
    department:"IT Management",
    role:"Intern",
    contact:{
        phoneNum:+923205647635,
        email:"areeb123@gmail.com"
    },
    skills:["Typescript","Javascript","Python"]
}
console.log(employeeData)
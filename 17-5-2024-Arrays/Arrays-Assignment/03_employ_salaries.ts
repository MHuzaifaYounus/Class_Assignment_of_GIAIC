// type alias for employee
type Employee  = {
    name:string,
    hoursWorked:number,
    hourlyRate:number,
    salary:number,
}
// array which include employees and their data
let employees:Employee[] = [
    {
        name:"Areeb",
        hoursWorked:3,
        hourlyRate:5000,
        salary:0
    },
    {
        name:"Anus",
        hoursWorked:12,
        hourlyRate:1000,
        salary:0
    },
    {
        name:"Adeel",
        hoursWorked:20,
        hourlyRate:1000,
        salary:0
    }
]
// function that calculate salaray of each employee in the employees array
function calculateSalary() {
    employees.forEach((employee) => {
        // calculating salary
        employee.salary = employee.hourlyRate * employee.hoursWorked
        // adding 10% bonus to the salary if employee works for 20 hours or more
        if (employee.hoursWorked >= 20) {
            let bonus = employee.salary * 0.1
            employee.salary += bonus
        }
     })
}

calculateSalary()
// output 
console.log(employees);

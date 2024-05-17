var employees = [
    {
        name: "Areeb",
        hoursWorked: 3,
        hourlyRate: 5000,
        salary: 0
    },
    {
        name: "Anus",
        hoursWorked: 12,
        hourlyRate: 1000,
        salary: 0
    },
    {
        name: "Adeel",
        hoursWorked: 20,
        hourlyRate: 1000,
        salary: 0
    }
];
function calculateSalary() {
    employees.forEach(function (employee) {
        employee.salary = employee.hourlyRate * employee.hoursWorked;
        if (employee.hoursWorked >= 20) {
            var bonus = employee.salary * 0.1;
            employee.salary += bonus;
        }
    });
}
calculateSalary();
console.log(employees);

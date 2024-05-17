var students = [
    {
        name: "Huzaifa",
        grades: [80, 79, 84, 92, 91, 78]
    },
    {
        name: "Areeb",
        grades: [70, 59, 64, 72, 71, 58]
    },
    {
        name: "Adeel",
        grades: [60, 59, 64, 72, 61, 58]
    }
];
function calculateAverageGrade(studentGrade) {
    var average = studentGrade.reduce(function (a, b) { return a + b; }) / studentGrade.length;
    return Math.floor(average);
}
students.forEach(function (student) {
    console.log("Student Name: ".concat(student.name, ", Average Grade: ").concat(calculateAverageGrade(student.grades)));
});

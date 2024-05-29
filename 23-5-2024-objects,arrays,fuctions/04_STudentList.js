var students = [
    {
        name: "Alice",
        isSenior: true,
        completedAssignment: true
    },
    {
        name: "Bob",
        isSenior: false,
        completedAssignment: false
    },
    {
        name: "areeb",
        isSenior: true,
        completedAssignment: false
    },
    {
        name: "anus",
        isSenior: true,
        completedAssignment: true
    }
];
function getSeniorsWithCompletedAssignments() {
    var seniors = [];
    students.forEach(function (student) {
        if (student.isSenior) {
            if (student.completedAssignment) {
                seniors.push(student.name);
            }
        }
    });
    return seniors;
}
function UpdateList() {
    students.forEach(function (student) {
        if (student.isSenior) {
            if (student.completedAssignment == false) {
                var index = students.indexOf(student);
                students.splice(index, 1);
            }
        }
    });
    return students;
}
console.log(UpdateList());

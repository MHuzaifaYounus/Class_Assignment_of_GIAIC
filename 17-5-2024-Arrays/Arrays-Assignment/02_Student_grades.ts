// type alias for student
type Student = {
    name:string,
    grades:number[],
}
// arrays of students
let students:Student[]= [
    {
        name:"Huzaifa",
        grades:[80,79,84,92,91,78]
    },
    {
        name:"Areeb",
        grades:[70,59,64,72,71,58]
    },
    {
        name:"Adeel",
        grades:[60,59,64,72,61,58]
    }
]
// function that calculates the average grade of student
function calculateAverageGrade(studentGrade:number[]) {
    let average = studentGrade.reduce((a,b) => a+b ) / studentGrade.length
    return Math.floor(average)
}

// iterating arrray to print name and average grade of each student
students.forEach((student) => { 
    console.log(`Student Name: ${student.name}, Average Grade: ${calculateAverageGrade(student.grades)}`);
 })

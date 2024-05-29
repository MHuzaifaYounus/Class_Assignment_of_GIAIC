interface Student {
    name:string,
    isSenior:boolean,
    completedAssignment:boolean
}
let students:Student[] = [
    {
        name:"Alice",
        isSenior:true,
        completedAssignment:true
    },
    {
        name:"Bob",
        isSenior:false,
        completedAssignment:false
    },
    {
        name:"areeb",
        isSenior:true,
        completedAssignment:false
    },
    {
        name:"anus",
        isSenior:true,
        completedAssignment:true
    }
]
// This function is useful when we need to check which senior students have completed their assignments.
function getSeniorsWithCompletedAssignments():string[]{
    let seniors:string[] = []
    students.forEach((student) => { 
        if(student.isSenior){
            if(student.completedAssignment){
                seniors.push(student.name)
            }
        }
     })
     return seniors
     
}

// This function is useful when we need to remove those students from our class who are seniors but still they are not completing their assignments.
function UpdateList(){
    students.forEach((student) => { 
        if(student.isSenior){
            if(student.completedAssignment == false){
                let index = students.indexOf(student)
                students.splice(index,1)
            }
        }
     })
    return students
}
console.log(UpdateList());


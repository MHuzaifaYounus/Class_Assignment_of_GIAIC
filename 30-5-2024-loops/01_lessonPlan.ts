type Lesson = {
    name:string,
    status:boolean
}

let myWork:Lesson[] = [] 
for (let index = 1; index <= 10; index++) {
    let lesson:Lesson = {
        name:`Lesson ${index}`,
        status:true,
    }
    index % 2 === 0 ? lesson.status = false : lesson.status = true

    myWork.push(lesson)
}
console.log(myWork);

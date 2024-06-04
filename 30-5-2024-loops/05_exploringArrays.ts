let myArray:number[] = []
for(let i = 1;i <= 10;i++){
    myArray.push(i)
}
console.log("Array : ",myArray);


console.log("For loop logs");
for (let index = 0; index < myArray.length; index++) {
   console.log(index , ":" , myArray[index]);
   
    
}
console.log("For...of loop logs");
for (const iterator of myArray) {
    console.log(iterator);
    
}
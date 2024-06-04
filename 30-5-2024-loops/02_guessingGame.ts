let guesses:number = 10
let randomNum:number = Math.floor(Math.random() * 100) + 1
let tracked:boolean = false
let userGuess:number[] = [50,25,15,10,5,75,60,65,70,95,2,4,92,94,97,99,30,40,45,35]
let i = 0
console.log(randomNum);
while(tracked == false){
    if(userGuess[i] == randomNum){
        console.log(`Congrats: ${userGuess[i]} is the Random number`);
        tracked = true
    }
    else if(userGuess[i] < randomNum){
        console.log(`${userGuess[i]} is less than the actual number`);
        
    }
    else if(userGuess[i] > randomNum){
        console.log(`${userGuess[i]} is grater than the actual number`);

    }
    else{
        console.log(`Opps! , ${userGuess[i]} is not in the list`)
        break
    }
    i++
}

 
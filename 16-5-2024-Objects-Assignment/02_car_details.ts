// Part 2: Car Details
type Car = {
  engine:{
    horsepower:number
  }  
  getHorsepower:()=>number
}
let car:Car= {
    engine:{
        horsepower:298,
    },
    getHorsepower:() => car.engine.horsepower
}

console.log(car.getHorsepower());

"use strict";
let car = {
    engine: {
        horsepower: 298,
    },
    getHorsepower: () => car.engine.horsepower
};
console.log(car.getHorsepower());

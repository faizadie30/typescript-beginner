"use strict";
class Vehicle {
    start() {
        console.log("zekzekzek");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let startCar = new Car();
console.log("Vehicle:", startCar.wheels);
startCar.start();

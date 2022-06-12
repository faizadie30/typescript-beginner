abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log("zekzekzek");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

let startCar = new Car();
console.log("Vehicle:", startCar.wheels);
startCar.start();

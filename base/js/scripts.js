class Car {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }
  accelerate(amount) {
    this.speed += amount;
  }
  brake(amount) {
    this.speed -= amount;
  }
  status() {
    return this.brand + " running at " + this.speed + " km/h";
  }
}

const renault = new Car("Renault");
renault.accelerate(100);
renault.brake(50);
console.log(renault.status());

const ferrari = new Car("Ferrari");
ferrari.accelerate(50);
ferrari.brake(25);
console.log(ferrari.status());

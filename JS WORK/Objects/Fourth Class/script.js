// What is Constructor In JavaScript:
// Constructor is multiple collection of objects and it's means it is the blue the print and create mulitple objects
//It shoult have first letter in capital
// function Car(name, color, model) {
//   this.name = name;
//   this.car = color;
//   this.model = model;
// }

// const car1 = new Car("Honda Civic", "Red", 2024);
// const car2 = new Car("Land Curzor", "white", 2022);

// console.log(car1);
// console.log(car2);

// You Can Add funtion and function means here methods to it

function Car(name, color, model) {
  this.nuum = name;
  this.col = color;
  this.mod = model;
  this.start = function () {
    console.log(`The ${name} car is started ......`);
  };
}

var car1 = new Car("Honda", "white", 2022);
car1.start();

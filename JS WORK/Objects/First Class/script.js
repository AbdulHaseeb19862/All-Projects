// What is Object: Object is a collection of related data to the variable of we call properties and to function we call to it methods.

// Another Definition of Object: Object is the key values pairs.

// How can make Object

const car = {
  name: "Honda Civic",
  model: "2013",
  price: "30 Lack",
};

// How can Access the data

// Accessing the data with dot

// console.log("The Name of the Car : " + car.name);
// console.log("The Model of the Car : " + car.model);

// Addition of the data

// car.discount = "25 Lack";
// console.log("The Discount Of Price : " + car.discount);

// Accessing the data without the dot

console.log("The Name of the Car : " + car["name"]);
console.log("The Model of the Car : " + car["model"]);

// Adding the data without dot
car["numberPalit"] = "Islamabad";
console.log("The Car number palit is " + car["numberPalit"]);

const car = {
  name: "Honda Civic",
  model: "2024",
  start: function () {
    console.log("The Car Has been Started........");
  },
};

// 1st Method in operator
// console.log("model" in car);// it will return true
// console.log("owner" in car); // It will return false

// 2nd Method hasOwnProperty

// console.log(car.hasOwnProperty("model")); // It will return true
// console.log(car.hasOwnProperty("owner")); // It will return false

// Method 3: Using typeof to Check for Methods

// console.log(typeof car.start === "function"); // It will return true and chect it function the function is available here or not

// console.log(typeof car.stop === "function"); //It will return false

//  Method 4: Using undefined Check
// You can also check for a property or method by comparing it to undefined.

// if (car.model === undefined) {
//   alert("The model is not defined in car object");
// } else {
//   alert("Yes the model is defined in car object");
// }

// Difference Between in and hasOwnProperty()
// The key difference is that the in operator checks both the object's properties and its prototype chain, whereas hasOwnProperty() only checks the object's own properties.

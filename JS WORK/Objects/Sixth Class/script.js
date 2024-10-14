// function Car(color, model, owner) {
//   this.color = color;
//   this.model = model;
//   this.owner = owner;
// }

// Car.prototype.carInfo = function () {
//   console.log(
//     `The Car Owner is ${this.owner} and Color is ${this.color} and the Car Model is ${this.model}`
//   );
// };

// const car1 = new Car("white", "Toyota", "Haseeb Bangash");
// const car2 = new Car("black", "Aqua", "Adnan Bangash");
// car1.carInfo();
// car2.carInfo();

//  About Animal Prototype

// function Animal(type) {
//   this.type = type;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.type} is making a noise`);
// };

// const dog = new Animal("Dog");
// const cat = new Animal("Cat");
// dog.speak();
// cat.speak();

// With Array And How can you use it
// const number = [1, 2, 3, 4, 5];
// const names = ["Haseeb", "Mohib", "Bangash"];

// Array.prototype.first = function () {
//   return this[0];
// };
// console.log(number.first());
// console.log(names.first());

// Real-World Example: Bank Account with Prototype

function BankAccount(accountHolder, balance) {
  this.accountHolder = accountHolder;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(
    `${this.accountHolder} and deposited : ${amount} and New balance is : ${this.balance}`
  );
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient Balance");
  } else {
    this.balance -= amount;
    console.log(
      `${this.accountHolder} and withdraw : ${amount} and New balance is : ${this.balance}`
    );
  }
};

const bilal = new BankAccount("Bilal Khan", 50000);
const sohail = new BankAccount("Sohail Khan", 40000);
bilal.deposit(30000);
sohail.withdraw(20000);

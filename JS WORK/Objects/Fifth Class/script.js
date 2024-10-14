//  Wheny you create a constructor funtion, you can also define methods inside the constructor. These methods will then be available to all objects created from that constructor.

// In Simple Words
// In simple terms, constructors can be used not only for defining properties but also for defining (methods) that all objects can share.

// How can we do it

function Car(color, model, owner) {
  this.color = color;
  this.model = model;
  this.owner = owner;
  this.start = function () {
    console.log(`${model} and the Car Color is ${color} and owner is ${owner}`);
  };
}

const car1 = new Car("White", "Corola", "Haseeb Bangash");
const car2 = new Car("White", "Land Cruzer", "Rizwan Ullah");
const car3 = new Car("white", "Aqua", "Adnan Bangash");
car1.start();
car2.start();
car3.start();

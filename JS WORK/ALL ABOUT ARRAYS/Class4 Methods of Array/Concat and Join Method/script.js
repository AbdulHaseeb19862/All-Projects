// concat():
// The concat() method joins two or more arrays into one new array.

// join():
// The join() method combines all elements of an array into a single string, with a specified separator (default is a comma).

// First Way
// let arr1 = ["Aliyan", "Shayan", "Shamshir"];
// document.write(arr1 + "<br>");
// var b = arr1.concat("Haseeb", "Bangash");
// document.write(b);

// Second Way
// let a = ["Aliyan", "Shayan", "Shamshir"];
// let b = ["Haseeb Bangash", "Abdul Haseeb"];
// let c = a.concat(b);
// document.write(c);

// Join() method here

let a = ["Aliyan", "Shayan", "Shamshir"];
let b = a.join(" ");
document.write(b);

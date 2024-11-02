// Some ():
// some(): Checks if at least one element in an array passes a specific test (returns true or false).

// let ages = [10, 4, 5, 18, 20];
// document.write(ages, "<br><br>");
// let b = ages.some((age) => {
//   return age >= 18;
// });
// document.write(b, "<br><br>");

// Every () :

// every(): Checks if all elements in an array pass a specific test (returns true or false).
let ages = [100, 20, 50, 18, 20];
document.write(ages, "<br><br>");
let b = ages.every((age) => {
  return age >= 18;
});
document.write(b, "<br><br>");

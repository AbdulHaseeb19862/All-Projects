// find()
// find(): Returns the first element in an array that meets a specific condition. If no element matches, it returns undefined.
// let ages = [10, 2, 17, 18, 30, 50];
// document.write(ages, "<br><br>");
// let b = ages.find((age) => age >= 18);
// document.write(b, "<br><br>");

// findInex()
// findIndex(): Returns the index of the first element that meets a specific condition. If no element matches, it returns -1.
let ages = [10, 2, 17, 18, 30, 50];
document.write(ages, "<br><br>");
let b = ages.findIndex((age) => age >= 18);
document.write(b, "<br><br>");

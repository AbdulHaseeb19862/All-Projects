// slice():
// Purpose: The slice() method is used to extract a section of an array and returns a new array. It does not modify the original array.
// Parameters:
// start: The index where extraction begins (inclusive).
// end: The index where extraction ends (exclusive). If not provided, it slices till the end of the array.

// First Way
// let fruits = ["apple", "banana", "cherry", "date"];
// let result = fruits.slice(1, 3);
// document.write(result + "<br>");

// Second Way
// let fruits = ["apple", "banana", "cherry", "date"];
// let result = fruits.slice(-2, -1);
// document.write(result);

// splice():
// Purpose: The splice() method is used to add, remove, or replace elements in an array. It modifies the original array.
// Parameters:
// start: The index where changes will begin.
// deleteCount: The number of elements to remove.
// items to add: New elements to add at the start index (optional).

//First Way

// let fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(2, 2, "Water Melon", "Orange");
// document.write(fruits);

// Second Way
// let fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(-2, 1, "Water Melon");
// document.write(fruits);

// This is simple program

// const arry1 = [12, 43, 64, 95];
// var sum = 0;
// for (var i = 0; i < arry1.length; i++) {
//   console.log(arry1[i]);
//   sum = sum + arry1[i];
// }
// console.log("The Total is ", sum);

let arr1 = new Array(5);
for (var i = 0; i < arr1.length; i++) {
  let value = prompt("Enter The value :");
  arr1[i] = value;
  console.log("The value you have entered", value);
}

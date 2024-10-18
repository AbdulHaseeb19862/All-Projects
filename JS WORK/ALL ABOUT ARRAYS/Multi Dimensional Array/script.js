const arr1 = [
  ["Harry", 30, "Male"],
  ["Mohib", 40, "Male"],
  ["Jalil Bangash", 20, "Male"],
  ["Haseeb", 23, "Male"],
];
document.write("<table border='1px' cellspacing='0'> ");
for (var a = 0; a < arr1.length; a++) {
  document.write("<tr>");
  for (var b = 0; b < arr1.length - 1; b++) {
    document.write("<td>" + arr1[a][b] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

// Children => it's only return element name or tag name example like p and h1

// const parentNode = document.getElementById("parentNode");
// console.log(parentNode.children);

// for (var i = 0; i < parentNode.children.length; i++) {
//   parentNode.children[i].style.color = "red";
//   parentNode.children[i].style.border = "1px solid black";
// }

// Second Example of ChildrenNodes => it's return everthing with tag comment and text everythings
const parentNode = document.getElementById("parentNode");
// console.log(parentNode.childNodes);

for (var i = 0; i < parentNode.childNodes.length; i++) {
  if (parentNode.childNodes[i].nodeType === 1) {
    parentNode.childNodes[i].style.color = "blue";
    parentNode.childNodes[i].style.border = "1px solid brown";
  }
}

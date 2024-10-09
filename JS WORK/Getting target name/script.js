const nodeNameElement = document.getElementById("nodeName");
const nodeValueElement = document.getElementById("nodeValue");

const clickAbleElements = document.querySelectorAll("#clickable");
clickAbleElements.forEach((element) => {
  element.addEventListener("click", function (event) {
    var haseeb = event.target;
    console.log(haseeb);
    nodeNameElement.textContent = "Node Name: " + element.nodeName;
    nodeValueElement.textContent =
      "Node Value: " +
      (element.firstChild ? element.firstChild.nodeValue : "null");
    console.log(nodeValueElement);
  });
});

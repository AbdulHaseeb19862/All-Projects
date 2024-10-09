const button = document.querySelector("button");
button.addEventListener("click", function () {
  var para = document.getElementsByTagName("p");
  Array.from(para).forEach((par) => {
    par.classList.add("styled");
  });
});

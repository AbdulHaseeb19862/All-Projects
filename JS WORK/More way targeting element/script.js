const list = document.getElementById("lists");
const firstChild = list.firstElementChild;
const lastChild = list.lastElementChild;
var current = firstChild;

const firstBtn = document.getElementById("firstBtn");
firstBtn.addEventListener("click", function () {
  current.style.background = "";
  current.style.color = "";
  current = firstChild;
  current.style.background = "black";
  current.style.color = "white";
});

const lastBtn = document.getElementById("lastBtn");
lastBtn.addEventListener("click", function () {
  current.style.background = "";
  current.style.color = "";
  current = lastChild;
  current.style.background = "black";
  current.style.color = "white";
});

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", function () {
  current.style.background = "";
  current.style.color = "";
  if (current.nextElementSibling) {
    current = current.nextElementSibling;
  }
  current.style.background = "black";
  current.style.color = "white";
});

const previousBtn = document.getElementById("previousBtn");
previousBtn.addEventListener("click", function () {
  current.style.background = "";
  current.style.color = "";
  if (current.previousElementSibling) {
    current = current.previousElementSibling;
  }
  current.style.background = "black";
  current.style.color = "white";
});

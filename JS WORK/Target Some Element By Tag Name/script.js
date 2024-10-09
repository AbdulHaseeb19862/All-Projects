const li = document.getElementsByTagName("li");

document.getElementById("highlightEven").onclick = function () {
  for (var i = 0; i < li.length; i++) {
    if ((i + 1) % 2 === 0) {
      li[i].classList.add("styled");
    }
  }
};

document.getElementById("highlightOdd").onclick = function () {
  for (var i = 0; i < li.length; i++) {
    if ((i + 1) % 2 !== 0) {
      li[i].classList.add("style");
    }
  }
};

document.getElementById("reset").onclick = function () {
  for (var i = 0; i < li.length; i++) {
    li[i].classList.remove("styled");
    li[i].classList.remove("style");
  }
};

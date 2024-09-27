const textPara = document.getElementById("text");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

textPara.style.border = "1px solid black";
textPara.style.color = "red";
textPara.style.fontSize = "20px";

button1.addEventListener("click", function () {
  textPara.style.color = textPara.style.color === "red" ? "black" : "red";
});

button2.addEventListener("click", function () {
  textPara.style.fontSize =
    textPara.style.fontSize === "20px" ? "30px" : "20px";
});

button3.addEventListener("click", function () {
  textPara.style.border =
    textPara.style.border === "1px solid black"
      ? "3px dashed black"
      : "1px solid black";
});

// You can do like this
// function swapImage(imgsrc) {
//   const swipeImage = document.getElementById("swipeImage");
//   swipeImage.src = imgsrc;
// }

// this is the second way to do it

const swapImage1 = document.getElementById("swapImage1");
const swapImage2 = document.getElementById("swapImage2");
const swapImage3 = document.getElementById("swapImage3");

// for image 1
swapImage1.addEventListener("click", function () {
  const swipeImage = document.getElementById("swipeImage");
  const url = swapImage1.src;
  swipeImage.src = url;
});

// for image 2
swapImage2.addEventListener("click", function () {
  const swipeImage = document.getElementById("swipeImage");
  const url = swapImage2.src;
  swipeImage.src = url;
});

// for image 3
swapImage3.addEventListener("click", function () {
  const swipeImage = document.getElementById("swipeImage");
  const url = swapImage3.src;
  swipeImage.src = url;
});

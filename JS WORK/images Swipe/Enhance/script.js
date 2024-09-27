// You can do like this
function swapImage(imgsrc, thumbnail) {
  const swipeImage = document.getElementById("swipeImage");
  swipeImage.src = imgsrc;

  const thumbnails = document.querySelectorAll(".image-gallery img");
  thumbnails.forEach((img) => img.classList.remove("active"));

  thumbnail.classList.add("active");
}

// this is the second way to do it

// const swapImage1 = document.getElementById("swapImage1");
// const swapImage2 = document.getElementById("swapImage2");
// const swapImage3 = document.getElementById("swapImage3");

// // for image 1
// swapImage1.addEventListener("click", function () {
//   const swipeImage = document.getElementById("swipeImage");
//   const src = swapImage1.src;
//   swipeImage.src = src;
// });

// // for image 2
// swapImage2.addEventListener("click", function () {
//   const swipeImage = document.getElementById("swipeImage");
//   const src = swapImage2.src;
//   swipeImage.src = src;
// });

// // for image 3
// swapImage3.addEventListener("click", function () {
//   const swipeImage = document.getElementById("swipeImage");
//   const src = swapImage3.src;
//   swipeImage.src = src;
// });

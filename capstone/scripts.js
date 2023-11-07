const mountainImage = document.getElementById("mountain");
const hoverArea = document.getElementById("hover-area");
const pixelMeImage = document.getElementById("pixel-me");
const helloTextImage = document.getElementById("hello-text");
const testImage = document.getElementById("test-image"); 
const codingImage = document.getElementById("coding-image"); 
const uxImage = document.getElementById("ux-image"); 

uxImage.addEventListener("mouseover", function () {
    uxImage.src =  "/images/ux-image-fire.png"
});
  
  uxImage.addEventListener("mouseout", function () {
    uxImage.src = "/images/ux-image.jpg" 
});

testImage.addEventListener("mouseover", function () {
  testImage.src =  "/images/test-image-fire.png";
});

testImage.addEventListener("mouseout", function () {
  testImage.src = "/images/test-image.jpg"; 
});

codingImage.addEventListener("mouseover", function () {
    codingImage.src = "/images/code-image-fire.png"
});
  
codingImage.addEventListener("mouseout", function () {
    codingImage.src = "/images/code-image.jpg";
});

hoverArea.addEventListener("mouseover", function () {
  mountainImage.src = "/images/mountain-hover.png";
});

hoverArea.addEventListener("mouseout", function () {
  mountainImage.src = "/images/mountain-default.png";
});


pixelMeImage.addEventListener("click", function () {
  if (helloTextImage.style.display === "none") {
    helloTextImage.style.display = "block";
  } else {
    helloTextImage.style.display = "none";
  }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

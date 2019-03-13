var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomiseButton = document.getElementById("randomiseButton");
var defaultButton= document.getElementById("defaultButton");
var color1random = '#'+Math.floor(Math.random()*16777215).toString(16);
var color2random = '#'+Math.floor(Math.random()*16777215).toString(16);

function changeBackgroundGradient() {
  body.style.background =
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  css.textContent = body.style.background + ";";
};

color1.addEventListener("input", changeBackgroundGradient);

color2.addEventListener("input", changeBackgroundGradient);

function randomGradient() {
  body.style.background =
  "linear-gradient(to right, "
  + color1random
  + ", "
  + color2random
  + ")";
};

// button.addEventListener("click", function() {
//   console.log("button click")
// });

let buttonClicks = 0;

randomiseButton.onclick = function() {
  randomGradient();
   buttonClicks++;
};

defaultButton.addEventListener("click", function() {
  body.style.background =
  "linear-gradient(to right, "
  + "red"
  + ", "
  + "yellow"
  + ")";
});

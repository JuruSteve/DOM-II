// Your code goes here
// CLICK
const topImg = document.querySelector("header img");
// console.log(topImg);
topImg.addEventListener("click", function() {
  topImg.width = 200;
});

// MOUSEOVER
const headers = document.querySelectorAll(".container h2");
// console.log(headers);
headers.forEach(function(elem) {
  elem.addEventListener("mouseover", function(e) {
    e.target.style.color = "blue";
  });
});

// DBLCLICK
topImg.addEventListener("dblclick", function(e) {
  e.target.width = "600";
});

// FOCUS
const headerForm = document.createElement("input");
headerForm.type = "text";
headerForm.style.width = "150px";
headerForm.style.height = "50px";
headerForm.placeholder = "Focus event";
const header = document.querySelector(".home header");
header.prepend(headerForm);
headerForm.addEventListener("focus", function(e) {
  console.log(e.target);
  e.target.style.marginLeft = "350px";
});
// console.log(pTags);

// BLUR
headerForm.addEventListener("blur", function(e) {
  e.target.style.backgroundColor = "palegoldenrod";
  e.target.style.color = "white";
});
// SCROLL
const img = document.querySelector("img");
// console.log(img);
window.addEventListener("scroll", function(e) {
  img.style.border = "4px solid black";
});

// LOAD
const container = document.querySelectorAll("section");
container.forEach(function(elem) {
  elem.style.backgroundColor = "palegoldenrod";
});

// COPY
const introP = document.querySelector(".intro p");
// console.log(introP);
introP.addEventListener("copy", function(e) {
  e.target.style.backgroundColor = "goldenrod";
});

// KEYDOWN
const home = document.querySelector(".home");
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// console.log(home);
home.addEventListener("keydown", function(e) {
  e.currentTarget.style.backgroundColor = getRandomColor();
});

// KEYUP
home.addEventListener("keyup", function(e) {
  e.currentTarget.style.backgroundColor = "white";
});

// PREVENTDEFAULT()
const navEls = document.querySelector(".nav a");
navEls.addEventListener("click", function(e) {
  console.log(e.target);
  e.preventDefault();
});
// console.log(nav);

// STOP PROPOGATION
const navContainer = document.querySelector(".nav-container");
const navLogo = document.querySelector(".container h1");

navContainer.addEventListener("click", function(e) {
  e.target.style.backgroundColor = "green";
});

navLogo.addEventListener("click", function(e) {
  e.target.style.backgroundColor = "crimson";
  e.stopPropagation();
});
// console.log(navLogo);

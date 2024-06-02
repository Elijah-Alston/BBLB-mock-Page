

const hamburger = document.querySelector("hamburger-button");
const navMenu = document.querySelector("nav-ul");


hamburger.addEventListener("click",() => {

hamburger.classList.toggle("active");
navMenu.classList.toggle("nav-open");


})

function menu(){

  const navMenu = document.getElementById("nav-ul").classList;
  navMenu.toggle("nav-open");

  const hamburger = document.getElementById("ham-butt").classList;
  hamburger.toggle("active");


 


}



const nav = document.querySelector(".nav-ul");
const menu = document.querySelector(".menu");
const navLi = document.querySelectorAll(".ul-li");

menu.addEventListener("click", ()=> nav.classList.toggle("menuNav"));

navLi[0].addEventListener("click", ()=> nav.classList.toggle("menuNav"));
navLi[1].addEventListener("click", ()=> nav.classList.toggle("menuNav"));
navLi[2].addEventListener("click", ()=> nav.classList.toggle("menuNav"));
navLi[3].addEventListener("click", ()=> nav.classList.toggle("menuNav"));
navLi[4].addEventListener("click", ()=> nav.classList.toggle("menuNav"));
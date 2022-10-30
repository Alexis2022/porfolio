const nav = document.querySelector(".nav-ul");
const menu = document.querySelector(".menu");
const navLi = document.querySelectorAll(".ul-li");

menu.addEventListener("click", ()=> nav.classList.toggle("menuNav"));

navLi.forEach(element =>{
    element.addEventListener("click", ()=> nav.classList.toggle("menuNav"));
});
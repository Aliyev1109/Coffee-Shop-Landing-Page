
const menuBars = document.querySelector(".menu-bars");
const menu = document.querySelector(".menu");

menuBars.addEventListener("click",()=>{
    menu.classList.toggle("active");
});

const menuClose = document.querySelector(".menu-close");

menuClose.addEventListener("click",()=>{
    menu.classList.remove("active");
});
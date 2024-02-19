// --------nav-bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulist");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
    navMenu.classList.toggle("active");
}
// ----------year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year







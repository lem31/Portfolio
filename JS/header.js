//DROPDOWN NAV FUNCTION

const hamburger = document.querySelector(".hamburger-icon");
const navUl = document.querySelector(".nav-ul");
const nav = document.querySelector("nav");
const logo = document.querySelector(".My-logo");
const header = document.querySelector("header");

window.addEventListener("resize", displayHamburger);
window.addEventListener("resize", closeNav);

window.addEventListener("load", displayHamburger);

function displayHamburger() {
  if (window.innerWidth > 750) {
    hamburger.style.display = "none";
    nav.style.display = "flex";
    nav.style.gridArea = "1/3/3/3";
    nav.style.marginTop = "0";
    nav.style.marginLeft = "0";
    logo.style.gridArea = "1/1/1/1";
    logo.style.justifySelf = "start";
  } else if (window.innerWidth <= 750) {
    nav.style.display = "none";
    hamburger.style.display = "flex";
    hamburger.style.gridArea = "1/1/2/2";
    nav.style.gridArea = "1/1/2/2";
    nav.style.marginTop = "3rem";
    nav.style.marginLeft = "-2rem";
    logo.style.gridArea = "1/2/2/3";
    header.style.gridTemplateColumns = "1fr 1fr 1fr";
    logo.style.justifySelf = "center";
  } else {
    hamburger.style.display = "none";
    nav.style.display = "flex";
  }
}

function openNav() {
  nav.style.display = "block";
  navUl.style.display = "block";
  nav.style.position = "absolute";
}

function closeNav() {
  if (window.innerWidth <= 750) {
    nav.style.display = "none";
    navUl.style.display = "none";
  } else {
    nav.style.display = "flex";
    navUl.style.display = "flex";
    nav.style.position = "relative";
  }
}

hamburger.addEventListener("click", () => {
  if (nav.style.display === "block" && navUl.style.display === "block") {
    closeNav();
  } else {
    openNav();
  }
});

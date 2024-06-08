const h1Container = document.querySelector(".h1-container");
const h1 = h1Container.querySelector("h1");
const bioImage = document.querySelector(".bio-img");
const bioText = document.querySelector(".bio-text");
const bioWrapper = document.querySelector(".bio-wrapper");
const btnContainer = document.querySelector(".buttons-container");

//H1 HOME BIO EFFECT

h1Container.style.transformStyle = "preserve-3d";
bioImage.style.opacity = "0";
bioText.style.opacity = "0";

h1.addEventListener("mouseenter", () => {
  h1.style.transform = "rotateY(90deg)";
  h1.style.transition = "transform 1.5s";
});

afterTransition = () => {
  if (h1.style.transform === "rotateY(90deg)") {
    bioImage.style.opacity = "1";
    bioText.style.opacity = "1";
    bioWrapper.style.height = "20rem";
  }
};

h1Container.addEventListener("mouseleave", () => {
  h1.style.transform = "rotateY(0deg)";
  h1.style.transition = "transform 1s";
  bioImage.style.opacity = "0";
  bioText.style.opacity = "0";
  bioWrapper.style.height = "8rem";
});

h1.addEventListener("transitionend", afterTransition);

//ENJOY SECTION FUNCTION

const enjoySection = document.querySelector(".I-enjoy");
const enjoyBtn = document.getElementById("enjoy-btn");
const footer = document.querySelector("footer");

enjoyBtn.addEventListener("click", () => {
  enjoySection.style.display = "flex";
  fadeImages();
  enjoySection.style.paddingTop = "4rem";
  footer.style.marginTop = "12rem";
  btnContainer.style.opacity = "0";
});

const imgOne = document.getElementById("img-1");
const imgTwo = document.getElementById("img-2");
const imgThree = document.getElementById("img-3");
const imgFour = document.getElementById("img-4");

function fadeImages() {
  setTimeout(() => {
    imgOne.style.display = "flex";
    imgTwo.style.display = "none";
    imgThree.style.display = "none";
    imgFour.style.display = "none";
  }, 2000);

  setTimeout(() => {
    imgOne.style.display = "none";
    imgThree.style.display = "none";
    imgFour.style.display = "none";
    imgTwo.style.display = "flex";
  }, 3000);

  setTimeout(() => {
    imgTwo.style.display = "none";
    imgOne.style.display = "none";
    imgFour.style.display = "none";
    imgThree.style.display = "flex";
  }, 4000);

  setTimeout(() => {
    imgThree.style.display = "none";
    imgOne.style.display = "none";
    imgTwo.style.display = "none";
    imgFour.style.display = "flex";
  }, 5000);

  setTimeout(fadeImages, 11000);
}

//CLOSE ENJOY SECTION FUNCTION

const closeBtn = document.querySelector(".x-btn");

function closeSection() {
  if (enjoySection.style.display === "flex") {
    enjoySection.style.display = "none";
  } else {
    enjoySection.style.display = "flex";
    clearTimeout(fadeImages);
  }

  footer.style.marginTop = "0";
  btnContainer.style.opacity = "1";
}
const closeButtons = document.querySelectorAll(".x-btn");
closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeSection);
});

const downArrow = document.querySelector(".down-arrow-img");

//CONTACT LINK EFFECT

const contactLink = document.querySelector(".contact-link");

contactLink.addEventListener("click", (event) => {
  event.preventDefault();
  downArrow.style.opacity = "1";
  downArrow.classList.add("pulsate");
  setTimeout(() => {
    downArrow.style.opacity = "0";
    downArrow.classList.remove("pulsate");
  }, 3000);
  window.scrollTo(0, document.body.scrollHeight);
});

//MY STRENGTHS SECTION FUNCTION

const strengthsSection = document.querySelector(".strengths-section");
const myStrengthsBtn = document.getElementById("strengths-btn");

myStrengthsBtn.addEventListener("click", displayMyStrengths);

function displayMyStrengths() {
  strengthsSection.style.display = "flex";
  footer.style.marginTop = "28rem";
  btnContainer.style.opacity = "0";
}

//CLOSE STRENGTHS SECTION FUNCTION

const closeStrengthsBtn = document.querySelector(".x-btn-strengths");

function closeStrengthsSection() {
  if (strengthsSection.style.display === "flex") {
    strengthsSection.style.display = "none";
  } else {
    strengthsSection.style.display = "flex";
  }
  footer.style.marginTop = "0";
  btnContainer.style.opacity = "1";
}

closeStrengthsBtn.addEventListener("click", closeStrengthsSection);

//MOTIVATION SECTION FUNCTION

const motivationSection = document.querySelector(".motivation-section");
const motivationBtn = document.getElementById("motivation-btn");

motivationBtn.addEventListener("click", displayMotivation);

function displayMotivation() {
  motivationSection.style.display = "flex";
  footer.style.marginTop = "28rem";
  btnContainer.style.opacity = "0";
}

//CLOSE MOTIVATION SECTION FUNCTION

const closeMotivationBtn = document.querySelector(".x-btn-motivation");

function closeMotivationSection() {
  if (motivationSection.style.display === "flex") {
    motivationSection.style.display = "none";
  } else {
    motivationSection.style.display = "flex";
  }
  footer.style.marginTop = "0";
  btnContainer.style.opacity = "1";
}

closeMotivationBtn.addEventListener("click", closeMotivationSection);

//TECH SKILLS SECTION FUNCTION

const techSkillsSection = document.querySelector(".Tech-Skills-Section");
const techSkillsBtn = document.getElementById("tech-skills-btn");

techSkillsBtn.addEventListener("click", displayTechSkills);

function displayTechSkills() {
  techSkillsSection.style.display = "flex";
  footer.style.marginTop = "28rem";
  btnContainer.style.opacity = "0";
}

//CLOSE TECH SKILLS SECTION FUNCTION

const closeTechSkillsBtn = document.querySelector(".x-btn-Tech-Skills");

function closeTechSkillsSection() {
  if (techSkillsSection.style.display === "flex") {
    techSkillsSection.style.display = "none";
  } else {
    techSkillsSection.style.display = "flex";
  }

  footer.style.marginTop = "0";
  btnContainer.style.opacity = "1";
}

closeTechSkillsBtn.addEventListener("click", closeTechSkillsSection);

//STATUS SECTION FUNCTION

const statusSection = document.querySelector(".Status-section");
const statusBtn = document.getElementById("status-btn");

statusBtn.addEventListener("click", displayStatus);

function displayStatus() {
  statusSection.style.display = "flex";
  footer.style.marginTop = "28rem";
  btnContainer.style.opacity = "0";
}

//CLOSE STATUS SECTION FUNCTION

const closeStatusBtn = document.querySelector(".x-btn-Status");

function closeStatusSection() {
  if (statusSection.style.display === "flex") {
    statusSection.style.display = "none";
  } else {
    statusSection.style.display = "flex";
  }
  footer.style.marginTop = "0";
  btnContainer.style.opacity = "1";
}

closeStatusBtn.addEventListener("click", closeStatusSection);

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

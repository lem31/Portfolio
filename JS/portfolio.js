//VIDEO DISPLAY AND PLAY WHEN HOVERING ON IMAGE- PORTFOLIO PAGE

const video = document.querySelector(".snow-v-cays-video ");
const image = document.querySelector(".snow-v-cays-img");

image.addEventListener("mouseenter", () => {
  video.play();
  video.style.zIndex = "2";
  image.style.opacity = "0";
});

video.addEventListener("mouseleave", () => {
  video.style.zIndex = "-1";
  image.style.opacity = "1";
  video.currentTime = 0;
});

const video2 = document.querySelector(".museum-video  ");
const image2 = document.querySelector(".museum-img");

image2.addEventListener("mouseenter", () => {
  video2.play();
  video2.style.zIndex = "2";
  image2.style.opacity = "0";
});

video2.addEventListener("mouseleave", () => {
  video2.style.zIndex = "-1";
  image2.style.opacity = "1";
  video.currentTime = 0;
});

const video3 = document.querySelector(".film-video ");
const image3 = document.querySelector(".Film-site-img");

image3.addEventListener("mouseenter", () => {
  video3.play();
  video3.style.zIndex = "2";
  image3.style.opacity = "0";
});

video3.addEventListener("mouseleave", () => {
  video3.style.zIndex = "-1";
  image3.style.opacity = "1";
  video.currentTime = 0;
});

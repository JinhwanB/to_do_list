const body = document.querySelector("body");

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = Math.floor(Math.random() * images.length);

const backImg = `img/${chosenImage}.jpg`;

const backgroundImg = " url('" + backImg + "')";

body.style.backgroundImage = backgroundImg;

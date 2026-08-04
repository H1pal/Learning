const images = [
  "bg01.png",
  "bg02.png",
  "bg03.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.querySelector("#main_container")
.style.backgroundImage = `url(./assets/${chosenImage})`;
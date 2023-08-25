document.addEventListener("DOMContentLoaded", function () {
  const minStars = 100;
  const maxStars = 500;
  const numberOfStars = getRandomNumber(minStars, maxStars);

  const nightSky = document.querySelector(".night-sky");

  for (let i = 0; i < numberOfStars; i++) {
    createStar(nightSky);
  }
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStar(container) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${getRandomNumber(0, 100)}%`;
  star.style.left = `${getRandomNumber(0, 100)}%`;
  container.appendChild(star);
}

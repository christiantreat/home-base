document.addEventListener("DOMContentLoaded", function () {
  const minStars = 100;
  const maxStars = 500;
  const numberOfStars = getRandomNumber(minStars, maxStars);

  const nightSky = document.querySelector(".night-sky");

  for (let i = 0; i < numberOfStars; i++) {
    createStar(nightSky);
  }

  // Store the initial scroll position
  let prevScrollY = window.scrollY;

  // Listen for the scroll event
  window.addEventListener("scroll", function () {
    // Calculate the difference in scroll position
    const deltaY = window.scrollY - prevScrollY;

    // Update stars' positions based on scroll direction
    const stars = document.querySelectorAll(".star");
    stars.forEach(function (star) {
      const currentTop = parseInt(star.style.top, 10);
      star.style.top = `${currentTop + deltaY}px`;
    });

    // Update the previous scroll position
    prevScrollY = window.scrollY;
  });
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStar(container) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${getRandomNumber(0, 100)}%`;
  star.style.left = `${getRandomNumber(0, 100)}%`;

  const animationDelay = getRandomNumber(0, 4); // Adjust the range for desired delay
  star.style.animationDelay = `-${animationDelay}s`; // Negative delay for variation
  container.appendChild(star);
}

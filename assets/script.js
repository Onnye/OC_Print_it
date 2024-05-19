const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

leftArrow.addEventListener("click", () => {
  console.log("Left arrow clicked");
  updateSlide("previous");
});

rightArrow.addEventListener("click", () => {
  console.log("Right arrow clicked");
  updateSlide("next");
});

function updateSlide(action) {
  if (action === "previous") {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }
  } else if (action === "next") {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }
  const currentSlide = slides[currentIndex];
  bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
  bannerText.innerHTML = currentSlide.tagLine;
}

function createDots() {
  for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
  }
}

createDots();

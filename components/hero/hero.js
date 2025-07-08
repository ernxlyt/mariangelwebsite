// Hero slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

// Initialize slideshow
if (slides.length > 0) {
  showSlide(0);
  startSlideshow();

  // Pause on hover
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    heroSlider.addEventListener("mouseenter", stopSlideshow);
    heroSlider.addEventListener("mouseleave", startSlideshow);
  }
}

// Global functions for slider controls
window.changeSlide = (direction) => {
  stopSlideshow();
  if (direction === 1) {
    nextSlide();
  } else {
    prevSlide();
  }
  setTimeout(startSlideshow, 3000);
};

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    window.changeSlide(-1);
  } else if (e.key === "ArrowRight") {
    window.changeSlide(1);
  }
});
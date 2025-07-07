// Hero slider functionality
let currentSlide = 0
const slides = document.querySelectorAll(".slide")
const totalSlides = slides.length

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"))
  slides[index].classList.add("active")
}

function changeSlide(direction) {
  currentSlide += direction

  if (currentSlide >= totalSlides) {
    currentSlide = 0
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }

  showSlide(currentSlide)
}

// Auto-advance slides
function autoAdvanceSlides() {
  changeSlide(1)
}

// Start auto-advance
setInterval(autoAdvanceSlides, 5000)

// Initialize first slide
if (slides.length > 0) {
  showSlide(0)
}

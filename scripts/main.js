// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling function
  window.scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".service-card, .course-card, .gallery-card, .brand-logo, .about-content, .agency-header, .courses-header"
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });

  // Parallax effect for hero section
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      const heroSlider = hero.querySelector(".hero-slider");
      if (heroSlider) {
        heroSlider.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  // Add loading animation to images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    if (img.complete) {
      img.style.opacity = "1";
    } else {
      img.style.opacity = "0";
      img.style.transition = "opacity 0.3s ease";
    }
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll(".service-card, .course-card, .gallery-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add CSS for ripple effect
  const style = document.createElement("style");
  style.textContent = `
    .btn-primary, .btn-secondary {
      position: relative;
      overflow: hidden;
    }
    
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// Performance optimization
window.addEventListener("load", () => {
  // Preload critical images
  const criticalImages = [
    "/placeholder.svg?height=800&width=1200", 
    "/placeholder.svg?height=500&width=400"
  ];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});

// Debounce function for performance
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
  // Add any scroll-based animations here
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

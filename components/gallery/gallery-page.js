// Gallery Page JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Gallery filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      const filter = button.dataset.filter

      // Filter items with animation
      galleryItems.forEach((item, index) => {
        const shouldShow = filter === "all" || item.classList.contains(filter)

        if (shouldShow) {
          setTimeout(() => {
            item.style.display = "block"
            setTimeout(() => {
              item.classList.add("visible")
            }, 50)
          }, index * 100)
        } else {
          item.classList.remove("visible")
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Initial animation for gallery items
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible")
          }, index * 100)
          galleryObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  galleryItems.forEach((item) => {
    galleryObserver.observe(item)
  })

  // Load more functionality
  const loadMoreBtn = document.getElementById("loadMoreBtn")
  const currentPage = 1
  const itemsPerPage = 6

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      loadMoreBtn.classList.add("loading")

      // Simulate loading
      setTimeout(() => {
        // Here you would typically fetch more items from an API
        // For demo purposes, we'll just show a message
        loadMoreBtn.classList.remove("loading")
        loadMoreBtn.textContent = "No hay más proyectos"
        loadMoreBtn.disabled = true
      }, 2000)
    })
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Parallax effect for floating shapes
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const shapes = document.querySelectorAll(".shape")

    shapes.forEach((shape, index) => {
      const speed = 0.5 + index * 0.1
      const yPos = -(scrolled * speed)
      shape.style.transform = `translateY(${yPos}px)`
    })
  })

  // Add hover effects to gallery cards
  const galleryCards = document.querySelectorAll(".gallery-card")

  galleryCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Keyboard navigation for filters
  document.addEventListener("keydown", (e) => {
    if (e.key >= "1" && e.key <= "5") {
      const index = Number.parseInt(e.key) - 1
      const button = filterButtons[index]
      if (button) {
        button.click()
      }
    }
  })

  // Enhanced circle animations
  function createFloatingCircles() {
    const sections = document.querySelectorAll(".gallery-main, .contact-main, .gallery-hero")

    sections.forEach((section) => {
      for (let i = 0; i < 3; i++) {
        const circle = document.createElement("div")
        circle.className = "floating-circle"
        circle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: radial-gradient(circle, rgba(28, 195, 75, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatRandom ${Math.random() * 10 + 5}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
                pointer-events: none;
                z-index: 1;
            `
        section.appendChild(circle)
      }
    })
  }

  // Add floating circles animation keyframes
  const circleStyle = document.createElement("style")
  circleStyle.textContent = `
    @keyframes floatRandom {
        0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.1;
        }
        25% {
            transform: translateY(-30px) translateX(20px) scale(1.2);
            opacity: 0.2;
        }
        50% {
            transform: translateY(-15px) translateX(-25px) scale(0.8);
            opacity: 0.15;
        }
        75% {
            transform: translateY(-40px) translateX(10px) scale(1.1);
            opacity: 0.25;
        }
    }
`
  document.head.appendChild(circleStyle)

  // Initialize floating circles
  createFloatingCircles()
})
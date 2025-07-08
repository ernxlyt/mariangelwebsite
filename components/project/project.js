// Project Page JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Lightbox functionality
  const lightbox = document.getElementById("lightbox")
  const lightboxImage = document.getElementById("lightboxImage")
  const lightboxCaption = document.getElementById("lightboxCaption")

  const images = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      caption: "Vista principal del Residencial Aurora",
    },
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      caption: "Interiores de lujo con acabados premium",
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      caption: "Amenidades exclusivas para residentes",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      caption: "Vista aérea del complejo residencial",
    },
    {
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
      caption: "Lobby principal con diseño contemporáneo",
    },
    {
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
      caption: "Terraza con vista panorámica",
    },
  ]

  let currentImageIndex = 0

  // Open lightbox
  window.openLightbox = (index) => {
    currentImageIndex = index
    showLightboxImage(index)
    lightbox.classList.add("open")
    document.body.style.overflow = "hidden"
  }

  // Close lightbox
  const closeLightbox = () => {
    lightbox.classList.remove("open")
    document.body.style.overflow = "auto"
  }

  // Change lightbox image
  const changeLightboxImage = (direction) => {
    currentImageIndex += direction

    if (currentImageIndex >= images.length) {
      currentImageIndex = 0
    } else if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1
    }

    showLightboxImage(currentImageIndex)
  }

  function showLightboxImage(index) {
    const image = images[index]
    lightboxImage.src = image.src
    lightboxCaption.textContent = image.caption

    // Add fade effect
    lightboxImage.style.opacity = "0"
    setTimeout(() => {
      lightboxImage.style.opacity = "1"
    }, 100)
  }

  // Keyboard navigation for lightbox
  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("open")) {
      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          changeLightboxImage(-1)
          break
        case "ArrowRight":
          changeLightboxImage(1)
          break
      }
    }
  })

  // Close lightbox when clicking outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })

  // Counter animation for stats
  function animateCounter(element, target, duration = 2000) {
    let start = 0
    const increment = target / (duration / 16)
    const isDecimal = target.toString().includes(".")

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        element.textContent = target
        clearInterval(timer)
      } else {
        if (isDecimal) {
          element.textContent = start.toFixed(1)
        } else {
          element.textContent = Math.floor(start)
        }
      }
    }, 16)
  }

  // Animate counters when they come into view
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = Number.parseFloat(entry.target.dataset.target)
        animateCounter(entry.target, target)
        counterObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all stat numbers
  document.querySelectorAll(".stat-number[data-target]").forEach((el) => {
    counterObserver.observe(el)
  })

  // Parallax effect for hero background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroBackground = document.querySelector(".hero-background img")

    if (heroBackground) {
      const rate = scrolled * 0.5
      heroBackground.style.transform = `translateY(${rate}px)`
    }
  })

  // Smooth reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  // Apply reveal animation to elements
  const revealElements = document.querySelectorAll(".stat-card, .sidebar-card, .project-card, .gallery-item")
  revealElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
    revealObserver.observe(el)
  })

  // Timeline animation
  const timelineItems = document.querySelectorAll(".timeline-item")
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateX(0)"
          }, index * 200)
          timelineObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  timelineItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateX(-20px)"
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    timelineObserver.observe(item)
  })

  // Gallery hover effects
  const galleryItems = document.querySelectorAll(".gallery-item")
  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Project card hover effects
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Breadcrumb navigation
  const breadcrumbLinks = document.querySelectorAll(".breadcrumb a")
  breadcrumbLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const href = link.getAttribute("href")
      if (href.startsWith("#")) {
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        window.location.href = href
      }
    })
  })

  // Sticky sidebar behavior
  const sidebar = document.querySelector(".details-sidebar")
  if (sidebar) {
    const sidebarTop = sidebar.offsetTop

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset

      if (scrollTop > sidebarTop - 100) {
        sidebar.style.position = "sticky"
        sidebar.style.top = "100px"
      } else {
        sidebar.style.position = "static"
      }
    })
  }

  // Service tags animation
  const serviceTags = document.querySelectorAll(".service-tag")
  serviceTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`
    tag.classList.add("animate-in")
  })

  // Add CSS for service tag animation
  const style = document.createElement("style")
  style.textContent = `
    .service-tag {
      opacity: 0;
      transform: translateY(20px);
      animation: tagSlideIn 0.5s ease forwards;
    }
    
    @keyframes tagSlideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `
  document.head.appendChild(style)
})

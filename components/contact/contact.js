// Contact Form JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const submitBtn = contactForm.querySelector(".submit-btn")
  const successMessage = document.getElementById("successMessage")

  // Form validation rules
  const validationRules = {
    firstName: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
      message: "El nombre debe tener al menos 2 caracteres y solo contener letras",
    },
    lastName: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
      message: "El apellido debe tener al menos 2 caracteres y solo contener letras",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Por favor ingresa un email válido",
    },
    phone: {
      pattern: /^[+]?[1-9][\d]{0,15}$/,
      message: "Por favor ingresa un número de teléfono válido",
    },
    service: {
      required: true,
      message: "Por favor selecciona un servicio",
    },
    message: {
      required: true,
      minLength: 10,
      message: "El mensaje debe tener al menos 10 caracteres",
    },
    privacy: {
      required: true,
      message: "Debes aceptar la política de privacidad",
    },
  }

  // Validate individual field
  function validateField(field, rules) {
    const value = field.value.trim()
    const fieldGroup = field.closest(".form-group")
    const errorElement = fieldGroup.querySelector(".form-error")

    // Clear previous errors
    fieldGroup.classList.remove("error")
    errorElement.textContent = ""

    // Required validation
    if (rules.required && !value) {
      showFieldError(fieldGroup, errorElement, "Este campo es obligatorio")
      return false
    }

    // Skip other validations if field is empty and not required
    if (!value && !rules.required) {
      return true
    }

    // Min length validation
    if (rules.minLength && value.length < rules.minLength) {
      showFieldError(fieldGroup, errorElement, rules.message)
      return false
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
      showFieldError(fieldGroup, errorElement, rules.message)
      return false
    }

    // Checkbox validation
    if (field.type === "checkbox" && rules.required && !field.checked) {
      showFieldError(fieldGroup, errorElement, rules.message)
      return false
    }

    return true
  }

  function showFieldError(fieldGroup, errorElement, message) {
    fieldGroup.classList.add("error")
    errorElement.textContent = message
  }

  // Real-time validation
  Object.keys(validationRules).forEach((fieldName) => {
    const field = contactForm.querySelector(`[name="${fieldName}"]`)
    if (field) {
      field.addEventListener("blur", () => {
        validateField(field, validationRules[fieldName])
      })

      field.addEventListener("input", () => {
        const fieldGroup = field.closest(".form-group")
        if (fieldGroup.classList.contains("error")) {
          validateField(field, validationRules[fieldName])
        }
      })
    }
  })

  // Form submission
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Validate all fields
    let isValid = true
    Object.keys(validationRules).forEach((fieldName) => {
      const field = contactForm.querySelector(`[name="${fieldName}"]`)
      if (field && !validateField(field, validationRules[fieldName])) {
        isValid = false
      }
    })

    if (!isValid) {
      // Scroll to first error
      const firstError = contactForm.querySelector(".form-group.error")
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    // Show loading state
    submitBtn.classList.add("loading")
    submitBtn.disabled = true

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Collect form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Here you would typically send the data to your server
      console.log("Form data:", data)

      // Show success message
      contactForm.style.display = "none"
      successMessage.classList.add("show")

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: "smooth", block: "center" })

      // Send confirmation email (simulate)
      setTimeout(() => {
        // You could show additional confirmation here
      }, 1000)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Hubo un error al enviar el formulario. Por favor intenta nuevamente.")
    } finally {
      submitBtn.classList.remove("loading")
      submitBtn.disabled = false
    }
  })

  // Character counter for textarea
  const messageField = contactForm.querySelector('[name="message"]')
  if (messageField) {
    const maxLength = 500
    const counter = document.createElement("div")
    counter.className = "char-counter"
    counter.style.cssText = `
      text-align: right;
      font-size: 0.8rem;
      color: var(--text-gray);
      margin-top: 5px;
    `

    messageField.parentNode.appendChild(counter)

    function updateCounter() {
      const remaining = maxLength - messageField.value.length
      counter.textContent = `${remaining} caracteres restantes`
      counter.style.color = remaining < 50 ? "#ff6b6b" : "var(--text-gray)"
    }

    messageField.addEventListener("input", updateCounter)
    updateCounter()
  }

  // Auto-resize textarea
  if (messageField) {
    messageField.addEventListener("input", function () {
      this.style.height = "auto"
      this.style.height = this.scrollHeight + "px"
    })
  }

  // FAQ accordion functionality
  const faqLinks = document.querySelectorAll(".faq-links a")
  faqLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      // Here you could implement FAQ modal or expand functionality
      console.log("FAQ clicked:", link.textContent)
    })
  })

  // Social media tracking
  const socialIcons = document.querySelectorAll(".social-icon")
  socialIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      // Track social media clicks
      console.log("Social media clicked:", icon.href)
    })
  })

  // Form field animations
  const formInputs = contactForm.querySelectorAll("input, select, textarea")
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentNode.classList.add("focused")
    })

    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentNode.classList.remove("focused")
      }
    })

    // Check if field has value on load
    if (input.value) {
      input.parentNode.classList.add("focused")
    }
  })

  // Add floating label effect
  const style = document.createElement("style")
  style.textContent = `
    .form-group.focused label {
      transform: translateY(-25px) scale(0.9);
      color: var(--primary-green);
    }
    
    .form-group label {
      transition: all 0.3s ease;
      transform-origin: left top;
    }
  `
  document.head.appendChild(style)
})

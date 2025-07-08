// Gallery data
const galleryData = [
  {
    title: "Campaña Digital Luxury Homes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description:
      "Desarrollamos una estrategia integral de marketing digital para un desarrollo de lujo, implementando automatización con IA y campañas segmentadas que resultaron en un incremento del 500% en leads cualificados.",
    stats: [
      { number: "500%", label: "Incremento en leads" },
      { number: "2.5M", label: "Impresiones totales" },
    ],
    tags: ["Marketing Digital", "IA", "Luxury Real Estate", "Lead Generation"],
  },
  {
    title: "Automatización IA Residencial",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    description:
      "Implementación de chatbots inteligentes y sistemas de automatización que redujeron el tiempo de respuesta en un 80% y mejoraron la experiencia del cliente significativamente.",
    stats: [
      { number: "80%", label: "Reducción tiempo respuesta" },
      { number: "24/7", label: "Atención automatizada" },
    ],
    tags: ["Inteligencia Artificial", "Chatbots", "Automatización", "CRM"],
  },
  {
    title: "Redes Sociales Premium",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    description:
      "Estrategia completa de redes sociales que generó más de 2 millones de impresiones mensuales y posicionó la marca como líder en el sector inmobiliario premium.",
    stats: [
      { number: "2M+", label: "Impresiones mensuales" },
      { number: "45%", label: "Engagement rate" },
    ],
    tags: ["Social Media", "Branding", "Content Marketing", "Instagram"],
  },
  {
    title: "Landing Page Conversión",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description:
      "Diseño y optimización de landing pages con técnicas de psicología del consumidor que lograron una tasa de conversión del 45%, superando los estándares de la industria.",
    stats: [
      { number: "45%", label: "Tasa de conversión" },
      { number: "3x", label: "ROI mejorado" },
    ],
    tags: ["Landing Pages", "UX/UI", "Conversion Rate", "A/B Testing"],
  },
];

let currentGalleryIndex = 0;

function openGallery(index) {
  currentGalleryIndex = index;
  showGallerySlide(index);
  const modal = document.getElementById("galleryModal");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  const modal = document.getElementById("galleryModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function changeGalleryImage(direction) {
  currentGalleryIndex += direction;

  if (currentGalleryIndex >= galleryData.length) {
    currentGalleryIndex = 0;
  } else if (currentGalleryIndex < 0) {
    currentGalleryIndex = galleryData.length - 1;
  }

  showGallerySlide(currentGalleryIndex);
}

function showGallerySlide(index) {
  const slideContent = document.getElementById("gallerySlideContent");
  const project = galleryData[index];

  slideContent.innerHTML = `
    <div class="gallery-slide">
      <div class="gallery-slide-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="gallery-slide-content">
        <h2>${project.title}</h2>
        <p class="project-description">${project.description}</p>
        
        <div class="project-stats">
          ${project.stats
            .map(
              (stat) => `
            <div class="stat-item">
              <span class="stat-number">${stat.number}</span>
              <span class="stat-label">${stat.label}</span>
            </div>
          `,
            )
            .join("")}
        </div>
        
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

// Close gallery when clicking outside
window.addEventListener("click", (event) => {
  const galleryModal = document.getElementById("galleryModal");
  if (event.target === galleryModal) {
    closeGallery();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  const galleryModal = document.getElementById("galleryModal");
  if (galleryModal && galleryModal.style.display === "block") {
    if (event.key === "ArrowLeft") {
      changeGalleryImage(-1);
    } else if (event.key === "ArrowRight") {
      changeGalleryImage(1);
    } else if (event.key === "Escape") {
      closeGallery();
    }
  }
});

// Global functions
window.openGallery = openGallery;
window.closeGallery = closeGallery;
window.changeGalleryImage = changeGalleryImage;
// Course modal functionality
const courseData = {
  "marketing-inmobiliario": {
    title: "Marketing Inmobiliario con IA",
    price: "$299",
    duration: "8 semanas",
    description:
      "Aprende a dominar las herramientas de inteligencia artificial específicamente diseñadas para el sector inmobiliario.",
    modules: [
      "Introducción a la IA en el sector inmobiliario",
      "Herramientas de automatización",
      "Chatbots y atención al cliente",
      "Análisis predictivo de mercado",
      "Personalización de experiencias",
      "Casos de estudio reales",
      "Implementación práctica",
      "Medición de resultados",
    ],
    benefits: [
      "Acceso de por vida al contenido",
      "Certificado de finalización",
      "Grupo privado de estudiantes",
      "Sesiones de Q&A en vivo",
      "Plantillas y herramientas incluidas",
    ],
  },
  "leads-digitales": {
    title: "Generación de Leads Digitales",
    price: "$199",
    duration: "6 semanas",
    description:
      "Sistemas automatizados y estrategias probadas para captar clientes potenciales de manera consistente.",
    modules: [
      "Fundamentos de generación de leads",
      "Creación de funnels de conversión",
      "Landing pages de alta conversión",
      "Email marketing automatizado",
      "Publicidad digital efectiva",
      "Seguimiento y nurturing",
      "Análisis y optimización",
      "Escalamiento de resultados",
    ],
    benefits: [
      "Plantillas de funnels probados",
      "Scripts de email marketing",
      "Acceso a herramientas premium",
      "Soporte técnico incluido",
      "Actualizaciones gratuitas",
    ],
  },
  "redes-sociales": {
    title: "Redes Sociales para Inmobiliarias",
    price: "$149",
    duration: "4 semanas",
    description:
      "Construye una marca personal sólida y genera engagement auténtico en todas las plataformas digitales.",
    modules: [
      "Estrategia de marca personal",
      "Creación de contenido viral",
      "Instagram para inmobiliarias",
      "LinkedIn profesional",
      "TikTok y tendencias",
      "Programación y automatización",
      "Engagement y comunidad",
      "Monetización de audiencia",
    ],
    benefits: [
      "Calendario de contenido",
      "Plantillas de posts",
      "Guías de cada plataforma",
      "Herramientas de diseño",
      "Comunidad exclusiva",
    ],
  },
}

function openCourseModal(courseId) {
  const modal = document.getElementById("courseModal")
  const modalContent = document.getElementById("modalContent")
  const course = courseData[courseId]

  if (course) {
    modalContent.innerHTML = `
            <div class="course-modal-content">
                <div class="course-modal-header">
                    <h2>${course.title}</h2>
                    <div class="course-meta">
                        <span class="course-price">${course.price}</span>
                        <span class="course-duration">${course.duration}</span>
                    </div>
                    <p class="course-description">${course.description}</p>
                </div>
                
                <div class="course-content-grid">
                    <div class="course-modules">
                        <h3>Módulos del curso</h3>
                        <ul>
                            ${course.modules.map((module) => `<li>${module}</li>`).join("")}
                        </ul>
                    </div>
                    
                    <div class="course-benefits">
                        <h3>Beneficios incluidos</h3>
                        <ul>
                            ${course.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
                        </ul>
                    </div>
                </div>
                
                <div class="course-cta">
                    <button class="btn-primary">
                        Inscribirse ahora
                        <span class="btn-arrow">→</span>
                    </button>
                </div>
            </div>
        `

    modal.style.display = "block"
  }
}

function closeCourseModal() {
  const modal = document.getElementById("courseModal")
  modal.style.display = "none"
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("courseModal")
  if (event.target === modal) {
    closeCourseModal()
  }
}

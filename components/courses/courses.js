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
};

function openCourseModal(courseId) {
  const modal = document.getElementById('courseModal');
  const modalContent = document.getElementById('modalContent');
  const course = courseData[courseId];
  
  if (!course) return;
  
  const html = `
    <button class="close" onclick="closeCourseModal()">&times;</button>
    <div class="course-modal-title">${course.title}</div>
    <div class="course-modal-price-row">
      <span class="course-modal-price">${course.price}</span>
      <span class="course-modal-duration">${course.duration}</span>
    </div>
    <div class="course-modal-desc">
      ${course.description}
    </div>
    <div class="course-modal-cols">
      <div class="course-modal-col">
        <h4>📚 Módulos del curso</h4>
        <ul>
          ${course.modules.map(module => `
            <li><span class="icon">▶</span>${module}</li>
          `).join('')}
        </ul>
      </div>
      <div class="course-modal-col">
        <h4>✨ Beneficios incluidos</h4>
        <ul>
          ${course.benefits.map(benefit => `
            <li><span class="icon">✔</span>${benefit}</li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
  
  modalContent.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  modal.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  const modal = document.getElementById("courseModal");
  if (event.target === modal) {
    closeCourseModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCourseModal();
  }
});

// Global functions
window.openCourseModal = openCourseModal;
window.closeCourseModal = closeCourseModal;
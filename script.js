    document.getElementById('year').textContent = new Date().getFullYear();

    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));

    const courseData = {
      general: {
        title: "Solicitud de información",
        subtitle: "Cuéntanos tu objetivo y te recomendamos la mejor ruta.",
        badge: "Asesoría",
        level: "Nivel: Personalizado",
        intro: "Podemos sugerir un plan por rol (administración, finanzas, operaciones, PMO) y modalidad (online o in-company).",
        list: [
          "Recomendación de curso(s) por objetivo",
          "Propuesta de horarios y duración sugerida",
          "Opcional: evaluación diagnóstica previa",
          "Opción corporativa con reporte de avance"
        ],
        note: "Sugerencia: indica el número de participantes y el objetivo (ej.: reportes, documentación, gestión de proyectos).",
        defaultSelect: "Consulta general"
      },
      corporativo: {
        title: "Propuesta corporativa",
        subtitle: "Capacitación por equipos con seguimiento y entregables.",
        badge: "Empresas",
        level: "Nivel: Por diagnóstico",
        intro: "Diseñamos un plan modular con medición de progreso y materiales de apoyo.",
        list: [
          "Levantamiento de necesidades por área",
          "Ruta por niveles (básico / intermedio / avanzado)",
          "Talleres con entregables aplicables al trabajo",
          "Reporte de asistencia y evaluación"
        ],
        note: "Indica industria, herramientas objetivo (Excel/Project/etc.) y fecha estimada de inicio.",
        defaultSelect: "Consulta general"
      },
      diagnostico: {
        title: "Diagnóstico sin costo",
        subtitle: "Determinamos nivel y objetivos en pocos minutos.",
        badge: "Evaluación",
        level: "Nivel: Medido",
        intro: "Una sesión breve para entender tu contexto y recomendar el mejor punto de entrada.",
        list: [
          "Evaluación rápida por rol",
          "Detección de brechas (productividad, formato, análisis, control)",
          "Recomendación de ruta y tiempos",
          "Sugerencia de ejercicios por semana"
        ],
        note: "Ideal si no estás seguro de si iniciar con básico o intermedio.",
        defaultSelect: "Consulta general"
      },
      faq: {
        title: "Preguntas frecuentes",
        subtitle: "Respuestas rápidas para tomar decisión.",
        badge: "FAQ",
        level: "Nivel: —",
        intro: "Algunos puntos comunes. Si necesitas algo específico, escríbenos.",
        list: [
          "¿Modalidad? Online o in-company (según disponibilidad).",
          "¿Incluye certificado? Sí, al finalizar y cumplir criterios mínimos.",
          "¿Se adapta a la empresa? Sí, con ejemplos y entregables reales.",
          "¿Requisitos? PC con Office LTSC instalado (o alternativa definida)."
        ],
        note: "Puedes solicitar una propuesta corporativa desde este mismo formulario.",
        defaultSelect: "Consulta general"
      },

      word: {
        title: "Microsoft Office LTSC Professional Plus · Word",
        subtitle: "Documentos empresariales consistentes y editables.",
        badge: "Office LTSC",
        level: "Nivel: Básico–Intermedio",
        intro: "Optimiza documentos para operación y dirección: estructura, estilos y control editorial.",
        list: [
          "Estilos, encabezados, secciones y numeración avanzada",
          "Tablas, formatos corporativos y plantillas reutilizables",
          "Referencias: índices, citas y bibliografía (según necesidad)",
          "Control de cambios, comentarios y revisión colaborativa",
          "Buenas prácticas de accesibilidad y exportación a PDF"
        ],
        note: "Ideal para áreas administrativas, legales, RR.HH. y consultoría.",
        defaultSelect: "Word LTSC"
      },
      excel: {
        title: "Microsoft Office LTSC Professional Plus · Excel",
        subtitle: "Análisis, reportes y automatización de tareas recurrentes.",
        badge: "Office LTSC",
        level: "Nivel: Intermedio–Avanzado",
        intro: "Diseñado para productividad: limpieza, modelado, fórmulas y reportes ejecutivos.",
        list: [
          "Fórmulas clave (búsqueda, lógicas, texto, fechas) y buenas prácticas",
          "Tablas y tablas dinámicas para análisis rápido",
          "Gráficos claros y consistentes para reportes",
          "Validación de datos, auditoría y control de errores",
          "Estructura de archivos y estandarización corporativa"
        ],
        note: "Enfoque en casos reales: KPI, reportes mensuales y control.",
        defaultSelect: "Excel LTSC"
      },
      access: {
        title: "Microsoft Office LTSC Professional Plus · Access",
        subtitle: "Control de datos con consultas, formularios e informes.",
        badge: "Office LTSC",
        level: "Nivel: Básico–Intermedio",
        intro: "Aprende a construir una base confiable para operaciones, inventario o seguimiento.",
        list: [
          "Diseño de tablas, tipos de datos y relaciones",
          "Consultas (selección, criterios, cálculos) y mejores prácticas",
          "Formularios para captura consistente",
          "Informes para control y auditoría",
          "Normalización básica y prevención de duplicidad"
        ],
        note: "Recomendado cuando Excel ya no escala para control multi-registro.",
        defaultSelect: "Access LTSC"
      },
      powerpoint: {
        title: "Microsoft Office LTSC Professional Plus · PowerPoint",
        subtitle: "Presentaciones con narrativa, claridad y estándar ejecutivo.",
        badge: "Office LTSC",
        level: "Nivel: Intermedio",
        intro: "Diseño aplicado: consistencia visual y estructura del mensaje para dirección y clientes.",
        list: [
          "Diseño de plantillas y patrón de diapositivas",
          "Rejillas, alineación y tipografía para orden visual",
          "Gráficos y tablas legibles; jerarquía de información",
          "Storytelling: estructura, ritmo y conclusiones",
          "Checklist de entrega y control de marca"
        ],
        note: "Ideal para ventas, dirección, consultoría y comunicación interna.",
        defaultSelect: "PowerPoint LTSC"
      },
      visio: {
        title: "Microsoft Office LTSC Professional Plus · Visio",
        subtitle: "Diagramas claros para procesos y documentación.",
        badge: "Office LTSC",
        level: "Nivel: Básico–Intermedio",
        intro: "Convierte procesos complejos en documentación que se entiende y se mantiene.",
        list: [
          "Flujogramas: símbolos, conectores y consistencia",
          "Organigramas y documentación de roles",
          "Diagramas de procesos (BPMN básico si aplica)",
          "Diagramas de red y mapas de arquitectura simple",
          "Estándares de exportación y versionado"
        ],
        note: "Útil para operaciones, TI, calidad, auditoría y capacitación interna.",
        defaultSelect: "Visio LTSC"
      },
      project: {
        title: "Microsoft Office LTSC Professional Plus · Project",
        subtitle: "Planifica, controla y comunica el avance del proyecto.",
        badge: "Office LTSC",
        level: "Nivel: Intermedio",
        intro: "Desde WBS hasta seguimiento: estructura profesional para cronogramas y reportes.",
        list: [
          "Estructura del proyecto (WBS), hitos y calendarios",
          "Dependencias, holgura y ruta crítica",
          "Asignación de recursos y carga de trabajo",
          "Líneas base y control del avance",
          "Reportes para stakeholders (estado, riesgos, próximos pasos)"
        ],
        note: "Ideal para PMs, coordinadores y áreas con entregas periódicas.",
        defaultSelect: "Project LTSC"
      },
      ingles: {
        title: "Curso de Inglés Australiano",
        subtitle: "Escucha, pronunciación y comunicación profesional.",
        badge: "Idiomas",
        level: "Nivel: A2–B2 (según evaluación)",
        intro: "Enfoque práctico con escenarios reales: reuniones, presentaciones, email y conversaciones.",
        list: [
          "Pronunciación y ritmo (enfoque australiano)",
          "Listening con situaciones de trabajo",
          "Vocabulario por contexto (oficina, proyectos, clientes)",
          "Speaking: reuniones, acuerdos, seguimiento",
          "Escritura profesional: emails y mensajes claros"
        ],
        note: "Podemos adaptar el curso a entrevistas y contexto migratorio/laboral.",
        defaultSelect: "Inglés Australiano"
      }
    };

    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalBadge = document.getElementById('modalBadge');
    const modalLevel = document.getElementById('modalLevel');
    const modalIntro = document.getElementById('modalIntro');
    const modalList = document.getElementById('modalList');
    const modalNote = document.getElementById('modalNote');

    const courseSelect = document.getElementById('course');
    const typeSelect = document.getElementById('type');

    function openModal(key){
      const data = courseData[key] || courseData.general;

      modalTitle.textContent = data.title;
      modalSubtitle.textContent = data.subtitle;
      modalBadge.textContent = data.badge;
      modalLevel.textContent = data.level;
      modalIntro.textContent = data.intro;

      modalList.innerHTML = "";
      data.list.forEach(item=>{
        const li = document.createElement('li');
        li.textContent = item;
        modalList.appendChild(li);
      });

      modalNote.textContent = data.note || "";

      if (data.defaultSelect){
        [...courseSelect.options].forEach(opt=>{
          if (opt.textContent.trim() === data.defaultSelect) courseSelect.value = opt.value;
        });
      }

      if (typeof modal.showModal === "function") modal.showModal();
      else alert("Tu navegador no soporta dialog. Abre desde un navegador moderno.");
    }

    document.querySelectorAll('[data-open-modal]').forEach(el=>{
      el.addEventListener('click', (e)=>{
        const key = e.currentTarget.getAttribute('data-open-modal');
        openModal(key);
      });
    });

    document.querySelectorAll('[data-close-modal]').forEach(el=>{
      el.addEventListener('click', ()=> modal.close());
    });

    document.querySelectorAll('[data-enroll]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        const label = e.currentTarget.getAttribute('data-enroll') || "Consulta general";
        const mapping = {
          "Word LTSC": "word",
          "Excel LTSC": "excel",
          "Access LTSC": "access",
          "PowerPoint LTSC": "powerpoint",
          "Visio LTSC": "visio",
          "Project LTSC": "project",
          "Inglés Australiano": "ingles",
          "Consulta general": "general"
        };
        openModal(mapping[label] || "general");

        const opts = [...courseSelect.options];
        const exact = opts.find(o => o.textContent.trim() === label);
        if (exact) courseSelect.value = exact.value;

        typeSelect.value = (label === "Consulta general") ? "Individual" : typeSelect.value;
      });
    });

    const leadForm = document.getElementById('leadForm');
    leadForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const fd = new FormData(leadForm);
      const payload = {
        name: fd.get('name')?.toString().trim(),
        email: fd.get('email')?.toString().trim(),
        type: fd.get('type')?.toString().trim(),
        course: fd.get('course')?.toString().trim(),
        msg: fd.get('msg')?.toString().trim()
      };

      const subject = encodeURIComponent(`[Solicitud] ${payload.course} · ${payload.type}`);
      const body = encodeURIComponent(
`Hola, me interesa recibir información.

Nombre: ${payload.name}
Correo: ${payload.email}
Tipo: ${payload.type}
Curso: ${payload.course}

Mensaje:
${payload.msg || "(sin mensaje adicional)"}

Gracias.`);

      const to = "ventas@tuempresa.com";
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    });

    document.getElementById('copyTemplate').addEventListener('click', async ()=>{
      const name = document.getElementById('name').value || "—";
      const email = document.getElementById('email').value || "—";
      const type = document.getElementById('type').value || "—";
      const course = document.getElementById('course').value || "—";
      const msg = document.getElementById('msg').value || "—";

      const text =
`Solicitud de información
- Nombre: ${name}
- Correo: ${email}
- Tipo: ${type}
- Curso: ${course}
- Mensaje: ${msg}`;

      try{
        await navigator.clipboard.writeText(text);
        const hint = document.getElementById('submitHint');
        hint.textContent = "Copiado al portapapeles. Puedes pegarlo en WhatsApp/Email/CRM.";
        setTimeout(()=> hint.textContent = "Este formulario es demostrativo (sin backend). Se generará un borrador para copiar o enviar.", 3200);
      }catch(err){
        alert("No se pudo copiar automáticamente. Copia manualmente:\n\n" + text);
      }
    });

    function openPolicy(title, items){
      courseData._policy = {
        title,
        subtitle: "Documento informativo (demo). Ajusta según tu empresa.",
        badge: "Legal",
        level: "Versión: 1.0",
        intro: "Contenido de referencia para completar con asesoría legal.",
        list: items,
        note: "Reemplaza este texto por tus políticas reales."
      };
      openModal('_policy');
    }

    document.getElementById('privacyLink').addEventListener('click', (e)=>{
      e.preventDefault();
      openPolicy("Política de Privacidad", [
        "Datos recopilados: nombre, correo y mensaje (según formulario).",
        "Finalidad: responder solicitudes y brindar información de cursos.",
        "Conservación: solo el tiempo necesario para atención comercial.",
        "Derechos: acceso, rectificación y eliminación bajo solicitud."
      ]);
    });

    document.getElementById('termsLink').addEventListener('click', (e)=>{
      e.preventDefault();
      openPolicy("Términos y Condiciones", [
        "El contenido y horarios pueden variar según modalidad y diagnóstico.",
        "El certificado se entrega al cumplir criterios mínimos de participación.",
        "La inscripción queda confirmada tras el proceso y condiciones acordadas.",
        "Materiales: uso interno del participante/empresa (según acuerdo)."
      ]);
    });

document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === "F12" ||
        (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "g" || (e.shiftKey && e.key === "I")))
    ) {
        e.preventDefault();
    }
});

const modalOverlay = document.getElementById('modalOverlay');
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

function toggleMobileMenu() {
    menuBtn?.classList.toggle('active');
    mobileNav?.classList.toggle('open');
}

menuBtn?.addEventListener('click', toggleMobileMenu);

function toggleModal() {
    modalOverlay.classList.remove('active');
}

function openWindow(targetId) {
    document.querySelectorAll('.window').forEach(win => win.style.display = 'none');
    
    const windowToOpen = document.getElementById(`${targetId}-window`);
    
    if (windowToOpen) {
        windowToOpen.style.display = 'flex';
        modalOverlay.classList.add('active');
    }
    
    menuBtn?.classList.remove('active');
    mobileNav?.classList.remove('open');
}

document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);

            if (document.getElementById(`${targetId}-window`)) {
                e.preventDefault();
                openWindow(targetId);
            }
        }
    }
});

modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) toggleModal();
});

document.addEventListener('click', function(e) {
    const socialBtn = e.target.closest('.vx-core-social-btn');
    if (socialBtn) {
        const url = socialBtn.getAttribute('data-url');
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    }
});

document.querySelectorAll('.vlk-footer-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            toggleModal();
            setTimeout(() => openWindow(targetId), 300);
        }
    });
});

document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG' || e.target.closest('img')) {
    e.preventDefault();
  }
});

(function(){
  const gate = document.getElementById('screenGate');
  const elBrowser = document.getElementById('gateBrowser');
  const elDevice = document.getElementById('gateDevice');
  const elViewport = document.getElementById('gateViewport');

  const btnBing = document.getElementById('gateGoBing');
  const btnRetry = document.getElementById('gateRetry');

  const MIN_WIDTH = 1024;

  function detectBrowser(){
    const ua = navigator.userAgent;
    if (/Edg\//.test(ua)) return "Microsoft Edge";
    if (/OPR\/|Opera/.test(ua)) return "Opera";
    if (/Chrome\//.test(ua) && !/Edg\//.test(ua)) return "Google Chrome";
    if (/Firefox\//.test(ua)) return "Mozilla Firefox";
    if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) return "Safari";
    if (/MSIE|Trident/.test(ua)) return "Internet Explorer";
    return "Desconocido";
  }

  function detectDeviceHeuristic(){
    const ua = navigator.userAgent.toLowerCase();
    const isTabletUA = /ipad|tablet|android(?!.*mobile)/.test(ua);
    const isMobileUA = /mobi|iphone|ipod|android.*mobile|windows phone/.test(ua);
    const hasTouch = (navigator.maxTouchPoints || 0) > 0;
    const coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

    if (isMobileUA) return "Móvil";
    if (isTabletUA) return "Tablet";
    if (hasTouch && coarsePointer) return "Tablet / Touch";
    return "PC / Laptop";
  }

  function viewport(){
    return { w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
             h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) };
  }

  function isAllowed(){
    return viewport().w >= MIN_WIDTH;
  }

  function lockPage(){
    gate.hidden = false;
    document.documentElement.classList.add('gate-lock');
    document.body.classList.add('gate-lock');

    btnBing?.focus({ preventScroll: true });
  }

  function unlockPage(){
    gate.hidden = true;
    document.documentElement.classList.remove('gate-lock');
    document.body.classList.remove('gate-lock');
  }

  function updateMeta(){
    const b = detectBrowser();
    const d = detectDeviceHeuristic();
    const {w,h} = viewport();

    if (elBrowser) elBrowser.textContent = b;
    if (elDevice) elDevice.textContent = d;
    if (elViewport) elViewport.textContent = `${w}px × ${h}px`;
  }

  function evaluate(){
    updateMeta();
    if (!isAllowed()) lockPage();
    else unlockPage();
  }

  function goBing(){
    try{
      history.replaceState(null, "", location.href);
      location.replace("#");
    }catch(e){
      location.href = "#";
    }

    setTimeout(() => { try { window.close(); } catch(_){} }, 250);
  }

  btnBing?.addEventListener('click', goBing);
  btnRetry?.addEventListener('click', evaluate);

  window.addEventListener('resize', evaluate, { passive: true });
  window.addEventListener('orientationchange', evaluate, { passive: true });

  window.addEventListener('pageshow', evaluate);

  if (window.matchMedia){
    const mq = window.matchMedia(`(min-width: ${MIN_WIDTH}px)`);
    if (mq && mq.addEventListener) mq.addEventListener('change', evaluate);
  }

  evaluate();
})();

const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

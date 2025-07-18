const malla = [
  // Semestre 1
  { nombre: "Introducción a la Bioingeniería Médica", semestre: 1, requisitos: [] },
  { nombre: "Fundamentos de la Estructura del Cuerpo Humano I", semestre: 1, requisitos: [] },
  { nombre: "Matemática y Computación I", semestre: 1, requisitos: [] },
  { nombre: "Física Aplicada", semestre: 1, requisitos: [] },
  { nombre: "Estructura y Reactividad Molecular", semestre: 1, requisitos: [] },
  { nombre: "Fundamentos de la Función del Cuerpo Humano I", semestre: 1, requisitos: [] },

  // Semestre 2
  { nombre: "Fundamentos de la Estructura del Cuerpo Humano II", semestre: 2, requisitos: ["Fundamentos de la Estructura del Cuerpo Humano I"] },
  { nombre: "Matemática y Computación II", semestre: 2, requisitos: ["Matemática y Computación I"] },
  { nombre: "Fundamentos de la Función del Cuerpo Humano II", semestre: 2, requisitos: ["Fundamentos de la Función del Cuerpo Humano I"] },
  { nombre: "Bioquímica I", semestre: 2, requisitos: ["Estructura y Reactividad Molecular"] },
  { nombre: "Metrología de Variables Biomédicas", semestre: 2, requisitos: [] },
  { nombre: "Inglés I", semestre: 2, requisitos: [] },

  // Semestre 3
  { nombre: "Electrónica I", semestre: 3, requisitos: ["Física Aplicada"] },
  { nombre: "Bioestadística y Metodología de la Investigación Científica", semestre: 3, requisitos: ["Matemática y Computación II"] },
  { nombre: "Bioquímica II", semestre: 3, requisitos: ["Bioquímica I"] },
  { nombre: "Biofísica", semestre: 3, requisitos: ["Bioquímica I"] },
  { nombre: "Sistemas de Señales Biomédicas", semestre: 3, requisitos: ["Matemática y Computación II"] },
  { nombre: "Inglés II", semestre: 3, requisitos: ["Inglés I"] },

  // Semestre 4
  { nombre: "Comunicación Persona-Máquina", semestre: 4, requisitos: ["Matemática y Computación II"] },
  { nombre: "Electrónica II", semestre: 4, requisitos: ["Electrónica I"] },
  { nombre: "Materiales", semestre: 4, requisitos: ["Física Aplicada", "Estructura y Reactividad Molecular"] },
  { nombre: "Instrumentación Biomédica", semestre: 4, requisitos: ["Sistemas de Señales Biomédicas"] },
  { nombre: "Taller de Investigación y Formación I", semestre: 4, requisitos: [
    "Electrónica I", "Bioestadística y Metodología de la Investigación Científica", "Bioquímica II", 
    "Biofísica", "Sistemas de Señales Biomédicas", "Inglés II"
  ]},
  { nombre: "Inglés III", semestre: 4, requisitos: ["Inglés II"] },

  // Semestre 5
  { nombre: "Fisiopatología Médica", semestre: 5, requisitos: ["Fundamentos de la Función del Cuerpo Humano II"] },
  { nombre: "Procesamiento de Señales Fisiológicas", semestre: 5, requisitos: ["Sistemas de Señales Biomédicas", "Instrumentación Biomédica"] },
  { nombre: "Ingeniería de Tejidos y Órganos", semestre: 5, requisitos: ["Bioquímica II"] },
  { nombre: "Empresa y Economía", semestre: 5, requisitos: [] },
  { nombre: "Mecánica de Sistemas", semestre: 5, requisitos: ["Física Aplicada"] },
  { nombre: "Introducción a la Fe", semestre: 5, requisitos: [] },
  { nombre: "Certificación I", semestre: 5, requisitos: [] },

  // Semestre 6
  { nombre: "Gestión Hospitalaria y Telemedicina", semestre: 6, requisitos: [] },
  { nombre: "Bioética", semestre: 6, requisitos: [] },
  { nombre: "Terapia Celular y Medicina Regenerativa", semestre: 6, requisitos: ["Fundamentos de la Función del Cuerpo Humano II"] },
  { nombre: "Bioinformática", semestre: 6, requisitos: ["Biofísica"] },
  { nombre: "Ética Cristiana", semestre: 6, requisitos: [] },
  { nombre: "Certificación II", semestre: 6, requisitos: [] },

  // Semestre 7
  { nombre: "Inteligencia Artificial", semestre: 7, requisitos: ["Bioinformática"] },
  { nombre: "Neuroingeniería", semestre: 7, requisitos: ["Fundamentos de la Función del Cuerpo Humano I", "Ingeniería de Tejidos y Órganos"] },
  { nombre: "Biomecánica", semestre: 7, requisitos: ["Fundamentos de la Estructura del Cuerpo Humano I", "Física Aplicada"] },
  { nombre: "Farmacología Molecular", semestre: 7, requisitos: ["Bioquímica II", "Fisiopatología Médica"] },
  { nombre: "Metodología de Proyectos", semestre: 7, requisitos: ["Bioestadística y Metodología de la Investigación Científica"] },
  { nombre: "Certificación III", semestre: 7, requisitos: [] },

  // Semestre 8
  { nombre: "Robótica", semestre: 8, requisitos: ["Matemática y Computación I", "Matemática y Computación II", "Fundamentos de la Función del Cuerpo Humano I"] },
  { nombre: "Imágenes Biomédicas", semestre: 8, requisitos: ["Fundamentos de la Estructura del Cuerpo Humano I", "Física Aplicada"] },
  { nombre: "Electivo I", semestre: 8, requisitos: [] },
  { nombre: "Práctica I", semestre: 8, requisitos: [
    "Inteligencia Artificial", "Neuroingeniería", "Biomecánica", 
    "Farmacología Molecular", "Metodología de Proyectos"
  ]},
  { nombre: "Nanotecnología", semestre: 8, requisitos: ["Bioquímica I", "Bioquímica II", "Materiales"] },
  { nombre: "Taller de Investigación y Formación II", semestre: 8, requisitos: [
    "Inteligencia Artificial", "Neuroingeniería", "Biomecánica", 
    "Farmacología Molecular", "Metodología de Proyectos"
  ]},

  // Semestre 9
  { nombre: "Práctica II", semestre: 9, requisitos: ["Práctica I", "Taller de Investigación y Formación II"] },
  { nombre: "Radioterapia y Bioseguridad", semestre: 9, requisitos: ["Física Aplicada"] },
  { nombre: "Electivo II", semestre: 9, requisitos: [] },
  { nombre: "Implantología y Biomateriales", semestre: 9, requisitos: ["Materiales"] },
  { nombre: "Electivo III", semestre: 9, requisitos: [] },

  // Semestre 10
  { nombre: "Proyecto de Bioingeniería Médica", semestre: 10, requisitos: [
    "Práctica II"
  ]}
];

// Estados posibles y progresión cíclica
const estados = ["pendiente", "cursando", "aprobada"];
const progreso = JSON.parse(localStorage.getItem("progresoMalla")) || {};

// Chequea si la asignatura puede desbloquearse según requisitos aprobados
function puedeDesbloquear(asig) {
  return asig.requisitos.every(req => progreso[req] === "aprobada");
}

// Renderiza toda la malla curricular en el DOM
function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let semestre = 1; semestre <= 10; semestre++) {
    const bloque = document.createElement("div");
    bloque.className = "semestre";
    bloque.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    malla.filter(a => a.semestre === semestre).forEach(asig => {
      const estado = progreso[asig.nombre] || "pendiente";
      const puede = puedeDesbloquear(asig);
      const estadoClase = puede || estado === "aprobada" ? estado : "bloqueada";

      const div = document.createElement("div");
      div.className = `asignatura ${estadoClase}`;
      div.textContent = asig.nombre;

      if (estadoClase !== "bloqueada") {
        div.addEventListener("click", () => {
          let actual = progreso[asig.nombre] || "pendiente";
          let siguiente = estados[(estados.indexOf(actual) + 1) % estados.length];
          progreso[asig.nombre] = siguiente;
          localStorage.setItem("progresoMalla", JSON.stringify(progreso));
          renderMalla();
        });
      } else {
        div.title = `Requiere: ${asig.requisitos.join(", ")}`;
      }

      bloque.appendChild(div);
    });

    contenedor.appendChild(bloque);
  }
}

// Carga inicial
renderMalla();

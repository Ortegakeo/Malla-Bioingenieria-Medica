const malla = [
  // Semestre 1
  { nombre: "Introducción a la Bioingeniería Médica", semestre: 1, semestreAcademico: "2025-1", requisitos: [] },
  { nombre: "Fundamentos de la Estructura del Cuerpo Humano I", semestre: 1, semestreAcademico: "2025-1", requisitos: [] },
  { nombre: "Matemática y Computación I", semestre: 1, semestreAcademico: "2025-1", requisitos: [] },
  { nombre: "Física Aplicada", semestre: 1, semestreAcademico: "2025-1", requisitos: [] },
  { nombre: "Estructura y Reactividad Molecular", semestre: 1, semestreAcademico: "2025-1", requisitos: [] },
  { nombre: "Fundamentos de la Función del Cuerpo Humano I", semestre: 1, semestreAcademico: "2025-1", requisitos: [] },

  // Semestre 2
  { nombre: "Fundamentos de la Estructura del Cuerpo Humano II", semestre: 2, semestreAcademico: "2025-2", requisitos: ["Fundamentos de la Estructura del Cuerpo Humano I"] },
  { nombre: "Matemática y Computación II", semestre: 2, semestreAcademico: "2025-2", requisitos: ["Matemática y Computación I"] },
  { nombre: "Fundamentos de la Función del Cuerpo Humano II", semestre: 2, semestreAcademico: "2025-2", requisitos: ["Fundamentos de la Función del Cuerpo Humano I"] },
  { nombre: "Bioquímica I", semestre: 2, semestreAcademico: "2025-2", requisitos: ["Estructura y Reactividad Molecular"] },
  { nombre: "Metrología de Variables Biomédicas", semestre: 2, semestreAcademico: "2025-2", requisitos: [] },
  { nombre: "Inglés I", semestre: 2, semestreAcademico: "2025-2", requisitos: [] },

  // Semestre 3
  { nombre: "Electrónica I", semestre: 3, semestreAcademico: "2026-1", requisitos: ["Física Aplicada"] },
  { nombre: "Bioestadística y Metodología de la Investigación Científica", semestre: 3, semestreAcademico: "2026-1", requisitos: ["Matemática y Computación II"] },
  { nombre: "Bioquímica II", semestre: 3, semestreAcademico: "2026-1", requisitos: ["Bioquímica I"] },
  { nombre: "Biofísica", semestre: 3, semestreAcademico: "2026-1", requisitos: ["Bioquímica I"] },
  { nombre: "Sistemas de Señales Biomédicas", semestre: 3, semestreAcademico: "2026-1", requisitos: ["Matemática y Computación II"] },
  { nombre: "Inglés II", semestre: 3, semestreAcademico: "2026-1", requisitos: ["Inglés I"] },

  // Semestre 4
  { nombre: "Comunicación Persona-Máquina", semestre: 4, semestreAcademico: "2026-2", requisitos: ["Matemática y Computación II"] },
  { nombre: "Electrónica II", semestre: 4, semestreAcademico: "2026-2", requisitos: ["Electrónica I"] },
  { nombre: "Materiales", semestre: 4, semestreAcademico: "2026-2", requisitos: ["Física Aplicada", "Estructura y Reactividad Molecular"] },
  { nombre: "Instrumentación Biomédica", semestre: 4, semestreAcademico: "2026-2", requisitos: ["Sistemas de Señales Biomédicas"] },
  { nombre: "Taller de Investigación y Formación I", semestre: 4, semestreAcademico: "2026-2", requisitos: ["Electrónica I", "Bioestadística y Metodología de la Investigación Científica", "Bioquímica II", "Biofísica", "Sistemas de Señales Biomédicas", "Inglés II"] },
  { nombre: "Inglés III", semestre: 4, semestreAcademico: "2026-2", requisitos: ["Inglés II"] },

  // Semestre 5
  { nombre: "Fisiopatología Médica", semestre: 5, semestreAcademico: "2027-1", requisitos: ["Fundamentos de la Función del Cuerpo Humano II"] },
  { nombre: "Procesamiento de Señales Fisiológicas", semestre: 5, semestreAcademico: "2027-1", requisitos: ["Sistemas de Señales Biomédicas", "Instrumentación Biomédica"] },
  { nombre: "Ingeniería de Tejidos y Órganos", semestre: 5, semestreAcademico: "2027-1", requisitos: ["Bioquímica II"] },
  { nombre: "Empresa y Economía", semestre: 5, semestreAcademico: "2027-1", requisitos: [] },
  { nombre: "Mecánica de Sistemas", semestre: 5, semestreAcademico: "2027-1", requisitos: ["Física Aplicada"] },
  { nombre: "Introducción a la Fe", semestre: 5, semestreAcademico: "2027-1", requisitos: [] },
  { nombre: "Certificación I", semestre: 5, semestreAcademico: "2027-1", requisitos: [] },

  // Semestre 6
  { nombre: "Gestión Hospitalaria y Telemedicina", semestre: 6, semestreAcademico: "2027-2", requisitos: [] },
  { nombre: "Bioética", semestre: 6, semestreAcademico: "2027-2", requisitos: [] },
  { nombre: "Terapia Celular y Medicina Regenerativa", semestre: 6, semestreAcademico: "2027-2", requisitos: ["Fundamentos de la Función del Cuerpo Humano II"] },
  { nombre: "Bioinformática", semestre: 6, semestreAcademico: "2027-2", requisitos: ["Biofísica"] },
  { nombre: "Ética Cristiana", semestre: 6, semestreAcademico: "2027-2", requisitos: [] },
  { nombre: "Certificación II", semestre: 6, semestreAcademico: "2027-2", requisitos: [] },

  // Semestre 7
  { nombre: "Inteligencia Artificial", semestre: 7, semestreAcademico: "2028-1", requisitos: ["Bioinformática"] },
  { nombre: "Neuroingeniería", semestre: 7, semestreAcademico: "2028-1", requisitos: ["Fundamentos de la Función del Cuerpo Humano I", "Ingeniería de Tejidos y Órganos"] },
  { nombre: "Biomecánica", semestre: 7, semestreAcademico: "2028-1", requisitos: ["Fundamentos de la Estructura del Cuerpo Humano I", "Física Aplicada"] },
  { nombre: "Farmacología Molecular", semestre: 7, semestreAcademico: "2028-1", requisitos: ["Bioquímica II", "Fisiopatología Médica"] },
  { nombre: "Metodología de Proyectos", semestre: 7, semestreAcademico: "2028-1", requisitos: ["Bioestadística y Metodología de la Investigación Científica"] },
  { nombre: "Certificación III", semestre: 7, semestreAcademico: "2028-1", requisitos: [] },

  // Semestre 8
  { nombre: "Robótica", semestre: 8, semestreAcademico: "2028-2", requisitos: ["Matemática y Computación I", "Matemática y Computación II", "Fundamentos de la Función del Cuerpo Humano I"] },
  { nombre: "Imágenes Biomédicas", semestre: 8, semestreAcademico: "2028-2", requisitos: ["Fundamentos de la Estructura del Cuerpo Humano I", "Física Aplicada"] },
  { nombre: "Electivo I", semestre: 8, semestreAcademico: "2028-2", requisitos: [] },
  { nombre: "Práctica I", semestre: 8, semestreAcademico: "2028-2", requisitos: ["Inteligencia Artificial", "Neuroingeniería", "Biomecánica", "Farmacología Molecular", "Metodología de Proyectos"] },
  { nombre: "Nanotecnología", semestre: 8, semestreAcademico: "2028-2", requisitos: ["Bioquímica I", "Bioquímica II", "Materiales"] },
  { nombre: "Taller de Investigación y Formación II", semestre: 8, semestreAcademico: "2028-2", requisitos: ["Inteligencia Artificial", "Neuroingeniería", "Biomecánica", "Farmacología Molecular", "Metodología de Proyectos"] },

  // Semestre 9
  { nombre: "Práctica II", semestre: 9, semestreAcademico: "2029-1", requisitos: ["Práctica I", "Taller de Investigación y Formación II"] },
  { nombre: "Radioterapia y Bioseguridad", semestre: 9, semestreAcademico: "2029-1", requisitos: ["Física Aplicada"] },
  { nombre: "Electivo II", semestre: 9, semestreAcademico: "2029-1", requisitos: [] },
  { nombre: "Implantología y Biomateriales", semestre: 9, semestreAcademico: "2029-1", requisitos: ["Materiales"] },
  { nombre: "Electivo III", semestre: 9, semestreAcademico: "2029-1", requisitos: [] },

  // Semestre 10
  { nombre: "Proyecto de Bioingeniería Médica", semestre: 10, semestreAcademico: "2029-2", requisitos: ["Práctica II"] }
];

const estados = ["pendiente", "cursando", "aprobada"];
let progreso = JSON.parse(localStorage.getItem("progresoMalla")) || {};

function getSemestreActual() {
  return document.getElementById("semestreActual").value;
}

function compararSemestres(a, b) {
  // a, b son strings tipo "2025-1"
  const [aY, aS] = a.split("-").map(Number);
  const [bY, bS] = b.split("-").map(Number);
  return (aY - bY) * 2 + (aS - bS);
}

function puedeDesbloquear(asig) {
  // Todos los requisitos aprobados y que se aprobaron en semestre <= semestre actual
  if (!asig.requisitos.length) return true; // sin requisitos está desbloqueada
  const actual = getSemestreActual();
  return asig.requisitos.every(req => {
    const estadoReq = progreso[req];
    const semestreReq = progreso[req + "_semestre"] || "0000-0";
    return estadoReq === "aprobada" && compararSemestres(semestreReq, actual) <= 0;
  });
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let semestre = 1; semestre <= 10; semestre++) {
    const bloque = document.createElement("div");
    bloque.className = "semestre";
    bloque.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    malla.filter(a => a.semestre === semestre).forEach(asig => {
      let estado = progreso[asig.nombre] || "pendiente";
      const puede = puedeDesbloquear(asig);
      const estadoClase = puede || estado === "aprobada" ? estado : "bloqueada";

      const div = document.createElement("div");
      div.className = `asignatura ${estadoClase}`;
      div.textContent = asig.nombre;

      if (estadoClase !== "bloqueada") {
        div.addEventListener("click", () => {
          // Cambiar estado y guardar semestre si se aprueba
          let actualEstado = progreso[asig.nombre] || "pendiente";
          let siguienteEstado = estados[(estados.indexOf(actualEstado) + 1) % estados.length];
          progreso[asig.nombre] = siguienteEstado;
          if (siguienteEstado === "aprobada") {
            progreso[asig.nombre + "_semestre"] = getSemestreActual();
          } else {
            delete progreso[asig.nombre + "_semestre"];
          }
          localStorage.setItem("progresoMalla", JSON.stringify(progreso));
          renderMalla();
          mostrarRetrasos();
        });
      } else {
        div.title = `Requiere: ${asig.requisitos.join(", ")}`;
      }

      bloque.appendChild(div);
    });

    contenedor.appendChild(bloque);
  }
}

function mostrarRetrasos() {
  const actual = getSemestreActual();
  const retrasos = [];
  const checklistItems = [];
  let totalSemestresPerdidos = 0;

  malla.forEach(asig => {
    const estado = progreso[asig.nombre] || "pendiente";
    const dictado = asig.semestreAcademico;
    const requisitos = asig.requisitos;
    const requisitosAprobados = requisitos.every(req => progreso[req] === "aprobada");

    if (requisitosAprobados && estado !== "aprobada" && compararSemestres(actual, dictado) > 0) {
      const retraso = compararSemestres(actual, dictado);
      totalSemestresPerdidos += retraso;

      const años = Math.floor(retraso / 2);
      const sems = retraso % 2;
      const tiempo = `${años > 0 ? `${años} año${años > 1 ? 's' : ''}` : ''}${sems > 0 ? ` y ${sems} semestre` : ''}`.trim();

      retrasos.push(`⏳ <b>${asig.nombre}</b> debía dictarse en <b>${dictado}</b> y se retrasa al menos ${tiempo}.`);
      checklistItems.push(`<label><input type="checkbox"> ${asig.nombre} (retraso: ${tiempo})</label>`);
    }
  });

  document.getElementById("retrasos").innerHTML = retrasos.length
    ? `<h3>🔔 Retrasos detectados:</h3><ul>${retrasos.map(r => `<li>${r}</li>`).join("")}</ul>`
    : "✅ Sin retrasos detectados.";

  document.getElementById("checklist").innerHTML = checklistItems.length
    ? `<h3>📋 Checklist:</h3>${checklistItems.join("<br>")}`
    : "";

  const totalAños = Math.floor(totalSemestresPerdidos / 2);
  const totalSems = totalSemestresPerdidos % 2;
  const tiempoTotal = totalSemestresPerdidos > 0
    ? `${totalAños > 0 ? `${totalAños} año${totalAños > 1 ? 's' : ''}` : ''}${totalSems > 0 ? ` y ${totalSems} semestre` : ''}`.trim()
    : null;

  document.getElementById("impacto").innerHTML = tiempoTotal
    ? `<h3>📊 Impacto total:</h3><p>Retrasos: ${retrasos.length} ramos<br>Tiempo perdido: ${tiempoTotal}</p>`
    : "";
}

function guardarProgreso() {
  const blob = new Blob([JSON.stringify(progreso, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "progreso_malla.json";
  a.click();
  URL.revokeObjectURL(url);
}

function cargarProgreso(event) {
  const archivo = event.target.files[0];
  if (!archivo) return;
  const lector = new FileReader();
  lector.onload = function(e) {
    try {
      progreso = JSON.parse(e.target.result);
      localStorage.setItem("progresoMalla", JSON.stringify(progreso));
      renderMalla();
      mostrarRetrasos();
    } catch {
      alert("Archivo inválido");
    }
  };
  lector.readAsText(archivo);
}

document.getElementById("btnVerRetrasos").addEventListener("click", mostrarRetrasos);
document.getElementById("btnGuardar").addEventListener("click", guardarProgreso);
document.getElementById("cargarArchivo").addEventListener("change", cargarProgreso);

renderMalla();
mostrarRetrasos();

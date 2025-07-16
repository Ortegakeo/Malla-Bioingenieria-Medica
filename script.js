const estados = ["pendiente", "cursando", "aprobada"];
let progreso = JSON.parse(localStorage.getItem("progresoMalla")) || {};

function puedeDesbloquear(asig) {
  return asig.requisitos.every(req => progreso[req] === "aprobada");
}

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
  const retrasos = document.getElementById("retrasos");
  const checklist = document.getElementById("checklist");
  const impacto = document.getElementById("impacto");
  const semestreActual = document.getElementById("semestreActual").value;
  const [anio, semestre] = semestreActual.split("-").map(Number);

  let retrasados = [];
  let requisitosPendientes = [];
  let impactoMax = 0;

  malla.forEach(asig => {
    if (asig.requisitos.length > 0 && !puedeDesbloquear(asig)) {
      const noCumple = asig.requisitos.filter(r => progreso[r] !== "aprobada");
      requisitosPendientes.push(`<li>${asig.nombre} requiere: ${noCumple.join(", ")}</li>`);

      const semestresFuturos = malla.filter(a => a.requisitos.includes(asig.nombre));
      if (progreso[asig.nombre] !== "aprobada") {
        retrasados.push(`<li>${asig.nombre} está retrasando: ${semestresFuturos.map(s => s.nombre).join(", ") || "nada (por ahora)"}</li>`);
        if (semestresFuturos.length > 0) impactoMax = Math.max(impactoMax, 1);
      }
    }
  });

  retrasos.innerHTML = `<h3>⏳ Ramos que están causando retrasos:</h3><ul>${retrasados.join("") || "<li>✅ Ningún ramo está causando retrasos</li>"}</ul>`;
  checklist.innerHTML = `<h3>📋 Requisitos no cumplidos:</h3><ul>${requisitosPendientes.join("") || "<li>✅ Todos los requisitos están cumplidos</li>"}</ul>`;
  impacto.innerHTML = `<h3>📆 Impacto total estimado:</h3><p>${impactoMax > 0 ? impactoMax + " semestre(s) de atraso potencial" : "✅ Sin impacto en el tiempo de egreso"}</p>`;
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
    } catch (error) {
      alert("Archivo inválido");
    }
  };
  lector.readAsText(archivo);
}

document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
  mostrarRetrasos();
});

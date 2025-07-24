
let quien = ['Mi perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
let accion = ['se comió', 'orinó sobre', 'aplastó', 'rompió'];
let que = ['mi tarea', 'mi teléfono', 'el coche'];
let cuando = ['antes de clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

function generarExcusa() {
  let randomQuien = quien[Math.floor(Math.random() * quien.length)];
  let randomAccion = accion[Math.floor(Math.random() * accion.length)];
  let randomQue = que[Math.floor(Math.random() * que.length)];
  let randomCuando = cuando[Math.floor(Math.random() * cuando.length)];

  let excusa = randomQuien + " " + randomAccion + " " + randomQue + " " + randomCuando + ".";
  document.getElementById("excuse").innerHTML = excusa;
}

window.onload = generarExcusa;
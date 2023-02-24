oculta("alertfechaDestino");
oculta("alertEvento");

let fechaDestino;
let evento;
const miliASegundos = 1000;
const miliAMinutos = miliASegundos * 60;
const miliAHoras = miliAMinutos * 60;
const miliADias = miliAHoras * 24;
let activo = false;

function updCountdown() {
  if (activo == false) {
    return;
  }
  const hoy = new Date();
  const cuantoTiempo = this.fechaDestino - hoy;
  const losDias = Math.floor(cuantoTiempo / miliADias);
  const lasHoras = Math.floor((cuantoTiempo % miliADias) / miliAHoras);
  const losMinutos = Math.floor((cuantoTiempo % miliAHoras) / miliAMinutos);
  const losSegundo = Math.floor((cuantoTiempo % miliAMinutos) / miliASegundos);

  document.querySelector("#days").textContent = losDias;
  document.querySelector("#hours").textContent = lasHoras;
  document.querySelector("#minutes").textContent = losMinutos;
  document.querySelector("#seconds").textContent = losSegundo;
  document.querySelector("#tableEvento").textContent = `para ${this.evento}`;
}

const comenzar = () => {
  error = false;
  oculta("alertfechaDestino");
  oculta("alertEvento");
  this.evento = document.querySelector("#evento").value;
  fDestino = document.querySelector("#fechaDestino");
  fechaok = new Date(fDestino.value);
  if (!this.evento) {
    muestra("alertEvento");
    error = true;
  }
  if (fechaok == "Invalid Date") {
    muestra("alertfechaDestino");
    error = true;
  }

  if (error) {
    return;
  }

  fechaok.setHours(0, 0, 0, 0);
  fechaok.setDate(fechaok.getDate() + 1);
  this.fechaDestino = fechaok;
  activo = true;
  this.updCountdown();
  setInterval(updCountdown, miliASegundos);
};

const detener = () => {
  activo = false;
};

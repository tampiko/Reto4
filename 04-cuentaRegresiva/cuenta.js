const fechaDestino = new Date("03/20/2023");
const divDias = document.querySelector("#days");
const divHoras = document.querySelector("#hours");
const divMinutos = document.querySelector("#minutes");
const divSegundos = document.querySelector("#seconds");
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
  const cuantoTiempo = fechaDestino - hoy;
  const REMAINING_DAYS = Math.floor(cuantoTiempo / miliADias);
  const REMAINING_HOURS = Math.floor((cuantoTiempo % miliADias) / miliAHoras);
  const REMAINING_MINUTES = Math.floor(
    (cuantoTiempo % miliAHoras) / miliAMinutos
  );
  const REMAINING_SECONDS = Math.floor(
    (cuantoTiempo % miliAMinutos) / miliASegundos
  );

  divDias.textContent = REMAINING_DAYS;
  divHoras.textContent = REMAINING_HOURS;
  divMinutos.textContent = REMAINING_MINUTES;
  divSegundos.textContent = REMAINING_SECONDS;
}

// updCountdown();

const comenzar = () => {
  activo = true;
  this.updCountdown();
  setInterval(updCountdown, miliASegundos);
};

const detener = () => {
  activo = false;
};

oculta("alertfechaDestino");

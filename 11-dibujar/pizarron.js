const $canvas = document.querySelector("#pizarron");
const contexto = $canvas.getContext("2d");
let COLOR = "black";
const GROSOR = 2;
let xAnterior = 0,
  yAnterior = 0,
  xActual = 0,
  yActual = 0;
const obtenerXReal = (clientX) =>
  clientX - $canvas.getBoundingClientRect().left;
const obtenerYReal = (clientY) => clientY - $canvas.getBoundingClientRect().top;
let haComenzadoDibujo = false; // Bandera que indica si el usuario está presionando el botón del mouse sin soltarlo
$canvas.addEventListener("mousedown", (evento) => {
  // En este evento solo se ha iniciado el clic, así que dibujamos un punto
  xAnterior = xActual;
  yAnterior = yActual;
  xActual = obtenerXReal(evento.clientX);
  yActual = obtenerYReal(evento.clientY);
  contexto.beginPath();
  contexto.fillStyle = COLOR;
  contexto.fillRect(xActual, yActual, GROSOR, GROSOR);
  contexto.closePath();
  // Y establecemos la bandera
  haComenzadoDibujo = true;
});

$canvas.addEventListener("mousemove", (evento) => {
  if (!haComenzadoDibujo) {
    return;
  }
  // El mouse se está moviendo y el usuario está presionando el botón, así que dibujamos todo

  xAnterior = xActual;
  yAnterior = yActual;
  xActual = obtenerXReal(evento.clientX);
  yActual = obtenerYReal(evento.clientY);
  contexto.beginPath();
  contexto.moveTo(xAnterior, yAnterior);
  contexto.lineTo(xActual, yActual);
  contexto.strokeStyle = COLOR;
  contexto.lineWidth = GROSOR;
  contexto.stroke();
  contexto.closePath();
});
["mouseup", "mouseout"].forEach((nombreDeEvento) => {
  $canvas.addEventListener(nombreDeEvento, () => {
    haComenzadoDibujo = false;
  });
});

limpiar = () => {
  for (var x = 0; x <= 300; x = x + 10) {
    contexto.moveTo(x, 0);
    contexto.lineTo(x, 300);
  }

  for (var y = 0; y <= 300; y = y + 10) {
    contexto.moveTo(0, y);
    contexto.lineTo(300, y);
  }

  contexto.strokeStyle = "#f212aa";
  contexto.stroke();
};

cambiaColor = (color) => {
  COLOR = color;
};


// Basado en
// https://parzibyte.me/blog/2021/09/08/dibujar-canvas-mouse-javascript/
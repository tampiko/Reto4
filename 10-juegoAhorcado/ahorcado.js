palabras = [
  "GATO",
  "LEON",
  "VACA",
  "PERRO",
  "CONEJO",
  "PAJARO",
  "BALLENA",
  "CABALLO",
  "INSECTO",
  "COCODRILO",
];

intentos = 0;

palabraSecreta = palabras[parseInt(Math.random() * 10)];
palabra = palabraSecreta;

contiene = (letra) => {
  if (intentos > 5) {
    return;
  }
  // Inicializa Palabra
  if (!letra) {
    laPalabra = [];
    for (let i = 0; i < palabra.length; i++) {
      if (i == 0 || i == palabra.length - 1) {
        if (i == 0) {
          laPalabra.push(palabra[i]);
          // console.log(`En vez de ${palabra[i]} se agerga ${palabra[i]}`);
        } else {
          laPalabra.push(palabra[i]);
          // console.log(`En vez de ${palabra[i]} se agerga ${palabra[i]}`);
        }
      } else {
        // console.log(`En vez de ${palabra[i]} se agerga _`);
        laPalabra.push("_");
      }
    }
    palabra = laPalabra.join("");
    pintaLaPalabra();
    return;
  }

  // Deshabilida Letra
  document.querySelector(`#${letra}`).classList.remove("cursor");
  document.querySelector(`#${letra}`).classList.add("disabled");
  document.querySelector(`#${letra}`).removeAttribute("onClick");

  // Busca letra en la palabra
  seEncuentra = false;
  cuantosFaltan = 0;
  console.log(`Buscando la ${letra} en ${palabraSecreta} `);
  palabraTemporal = [];
  palabraTemporal.push(palabra[0]);

  for (let i = 1; i < palabraSecreta.length - 1; i++) {
    if (palabraSecreta[i] == letra) {
      palabraTemporal.push(palabraSecreta[i]);
      seEncuentra = true;
    } else {
      if (palabra[i] != "_") {
        palabraTemporal.push(palabra[i]);
      } else {
        cuantosFaltan++;
        palabraTemporal.push("_");
      }
    }
  }
  palabraTemporal.push(palabraSecreta[palabraSecreta.length - 1]);
  this.palabra = palabraTemporal.join("");
  if (!seEncuentra) {
    intentos++;
  }
  console.log(cuantosFaltan);
  if (cuantosFaltan == 0) {
    console.log("Ganaste!");
    ganaste();
  }
  pintaLaPalabra();
};

pintaLaPalabra = () => {
  if (intentos > 5) {
    intentos = 6;
    console.log("Perdiste!");
    document.querySelector("#resultado").textContent = "Perdiste!";
    nuevaPalabra();
  }
  document.querySelector(
    "#imgAhorcado"
  ).src = `./img/el-ahorcado-0${intentos}.jpg`;
  document.querySelector("#palabraSecreta").textContent = palabra;
};
contiene();

// Confetti

ganaste = () => {
  document.querySelector("#confeti").style.display = "block";
  setTimeout(nuevaPalabra, 3000);
  // nuevaPalabra();
};

nuevaPalabra = () => {
  location.reload();
  // console.log("va de nuez");
  // document.querySelector("#confeti").style.display = "none";
  // intentos = 0;
  // palabraSecreta = palabras[parseInt(Math.random() * 10)];
  // palabra = palabraSecreta;
  // contiene();
};


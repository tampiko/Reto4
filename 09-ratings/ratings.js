xb = 0;
ps = 0;
sw = 0;

vota = (consola) => {
  switch (consola) {
    case "xb":
      xb++;
      break;
    case "ps":
      ps++;
      break;
    case "sw":
      sw++;
      break;
  }
  pintaVotos();
};

pintaVotos = () => {
  console.log("A Pintar");
  total = xb + ps + sw;
  if (total == 0) {
    porxb = 0;
    porps = 0;
    porsw = 0;
    return;
  }
  porxb = (xb / total) * 100;
  porps = (ps / total) * 100;
  porsw = (sw / total) * 100;
  asignaValores();
  document.querySelector("#xbBar").style.width = `${xb}%`;
  document.querySelector("#psBar").style.width = `${ps}%`;
  document.querySelector("#swBar").style.width = `${sw}%`;
  document.querySelector("#uxbBar").style.width = `${porxb}%`;
  document.querySelector("#upsBar").style.width = `${porps}%`;
  document.querySelector("#uswBar").style.width = `${porsw}%`;
};

reiniciar = () => {
  console.log("Limpia");
  xb = 0;
  ps = 0;
  sw = 0;
  asignaValores();
  document.querySelector("#xbBar").style.width = `0%`;
  document.querySelector("#psBar").style.width = `0%`;
  document.querySelector("#swBar").style.width = `0%`;
  document.querySelector("#uxbBar").style.width = `0%`;
  document.querySelector("#upsBar").style.width = `0%`;
  document.querySelector("#uswBar").style.width = `0%`;
  pintaVotos();
};

asignaValores = () => {
  document.querySelector("#txtxb").textContent = xb;
  document.querySelector("#txtps").textContent = ps;
  document.querySelector("#txtsw").textContent = sw;
};
pintaVotos();

console.log("Tools Loaded!");

const validaNumericos = (event) => {
  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  }
  return false;
};

const oculta = (div) => {
  console.log("Ocultando Div", div);
  document.querySelector(`#${div}`).classList.add("oculto");
};

const muestra = (div) => {
  console.log("Mostrando Div", div);
  document.querySelector(`#${div}`).classList.remove("oculto");
};

console.log("Agenta Loaded!");
oculta("alertNombre");
oculta("alertTelefono");

agenda = [];

getData = () => {
  nombre = document.querySelector("#nombre").value;
  telefono = document.querySelector("#telefono").value;
  console.log("nombre ", nombre);
  console.log("telefono ", telefono);
  if (!nombre || !telefono) {
    muestra("alertNombre");
    muestra("alertTelefono");
    return;
  }
  agenda.push({ nombre, telefono });
  limpia();
  pintaTabla();
};

pintaTabla = () => {
  cuerpo = document.querySelector("#tableBody");
  codigo = "";
  agenda.forEach((usr) => {
    codigo += `
        <tr>
            <td>${usr.nombre}</td>
            <td>${usr.telefono}</td>
        </tr>
        `;
    console.log(usr);
  });
  cuerpo.innerHTML = codigo;
};

limpia = () => {
  oculta("alertNombre");
  oculta("alertTelefono");
  document.querySelector("#nombre").value = "";
  document.querySelector("#telefono").value = "";
};

reiniciar = () => {
  limpia();
  agenda = [];
  pintaTabla();
};

pintaTabla();

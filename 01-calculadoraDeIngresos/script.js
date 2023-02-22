console.log("Script Cargado");

let pedido = [
  { nombreProducto: "agua", precio: 12 },
  { nombreProducto: "pan", precio: 23 },
  { nombreProducto: "burger", precio: 30 },
];

const clean = () => {
  console.log("limpiar");
  pedido = [];
  dibujaTabla();
  document.querySelector("#total").innerHTML = "";
  document.querySelector("#cuerpoTabla").innerHTML = "";
};

const agregaProducto = (nombreProducto, precio) => {
  console.log(nombreProducto);
  console.log(precio);
  pedido.push({ nombreProducto, precio });
  console.log(pedido);
  dibujaTabla();
};

const revisaProducto = () => {
  let nombreProducto = document.querySelector("#nombreProducto").value;
  let precio = parseFloat(document.querySelector("#precio").value);
  if (nombreProducto.length == 0) {
    console.log("vacio");
  }

  agregaProducto(nombreProducto, precio);
};

const dibujaTabla = () => {
  let body = document.querySelector("#cuerpoTabla");
  body.innerHTML = "";
  total = 0;
  for (i = 0; i < pedido.length; i++) {
    let tr = document.createElement("tr");

    let tdP = document.createElement("td");
    tdP.textContent = pedido[i].nombreProducto;
    tr.appendChild(tdP);

    let tdC = document.createElement("td");
    tdC.textContent = pedido[i].precio;
    tr.appendChild(tdC);

    body.appendChild(tr);

    total += pedido[i].precio;
  }
  let tr = document.createElement("tr");

  let tdP = document.createElement("td");
  tdP.textContent = "Total :";
  tr.appendChild(tdP);

  let tdC = document.createElement("td");
  tdC.textContent = total;
  tr.appendChild(tdC);
  let foot = document.querySelector("#total");
  foot.innerHTML = "";
  foot.appendChild(tr);
};

console.log("Script Cargado");
let pedido = [];
const clean = () => {
  pedido = [];
  dibujaTabla();
  document.querySelector("#total").innerHTML = "";
  document.querySelector("#cuerpoTabla").innerHTML = "";
};
const agregaProducto = (nombreProducto, precio) => {
  pedido.push({ nombreProducto, precio });
  dibujaTabla();
};
const revisaProducto = () => {
  error = false;
  oculta('alertNombreProducto')
  oculta('alertPrecioProducto')
  let nombreProducto = document.querySelector("#nombreProducto").value;
  let precio = document.querySelector("#precio").value;
  if (precio == 0 || precio.length == 0) {
    error = true;
    muestra('alertPrecioProducto')
  }
  if (nombreProducto.length == 0) {
    error = true;
    muestra('alertNombreProducto')
    return;
  }
  if (error) { return; }
  agregaProducto(nombreProducto, parseFloat(precio));
  document.querySelector("#nombreProducto").value = '';
  document.querySelector("#precio").value = '';
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
oculta('alertNombreProducto');
oculta('alertPrecioProducto');
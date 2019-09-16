var btnGenerar = document.getElementById("generar");
var tablaElemento = document.getElementById("table-elementos");
var txtSemilla = document.getElementById("semilla");
var txtC = document.getElementById("cAditiva");
var txtA = document.getElementById("cMultiplicativa");
var txtMod = document.getElementById("modulo");
var numberIte = document.getElementById("numberite");

function btnGenerar_Click() {
  var semilla = txtSemilla.value;
  var a = txtA.value;
  var c = txtC.value;
  var m = txtMod.value;

  if (!semilla.trim().length || !semilla) {
    alert("Debe ingresar un número entero y mayor que 0 para la semilla");
    return;
  }
  if (!a.trim().length) {
    alert("Debe ingresar un número entero y mayor que cero para la constante Multiplicativa");
    return;
  }
  if (!c.trim().length) {
    alert("Debe ingresar un número entero y mayor que cero para la constante Aditiva");
    return;
  }
  if (!m.trim().length || m.value < semilla || m.value < a || m.value < c) {
    alert("Debe ingresar un número entero mayor que: la semilla, la constante aditiva y la constante multiplicativa, para que sea el modulo");
    return;
  }
  while (tablaElemento.childElementCount > 0) {
    tablaElemento.removeChild(tablaElemento.firstElementChild);
  }
  var rndB = parseInt(semilla);
  var rndC = parseInt(c);
  var rndA = parseInt(a);
  var rndM = parseInt(m);
  for (var i = 0; i <= parseInt(numberIte.value) - 1; i++) {
    var rnd = generar(rndB, rndC, rndA, rndM);
    var ri = rndB / m;
    var item = {
      indice: i,
      rn: ri,
      valor: rnd
    };
    addRow(item.indice, item.rn, item.valor);
    rndB = rndC;
    rndC = rnd;
  }
}

function generar(s, a, c, m) {
  s = ((s * a) + c) % m;
  return String(s);
}
function addRow(index, rn, rnd) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  td1.textContent = String(index);
  td2.textContent = String(rn);
  td3.textContent = String(rnd);
  tablaElemento.appendChild(tr);
}
window.addEventListener("load", function () {
  btnGenerar.addEventListener("click", btnGenerar_Click);
});
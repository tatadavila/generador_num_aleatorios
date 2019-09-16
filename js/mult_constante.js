var btnGenerar = document.getElementById('generar');
var tablaElemento = document.getElementById('table-elementos');
var txtSemilla = document.getElementById('semilla');
var txtConstante = document.getElementById('constante');
var numberD = document.getElementById('numberD');
var numberIte = document.getElementById('numberite');

function btnGenerar_Click(event) {
  var semilla = txtSemilla.value;
  var d = numberD.value;
  var a = txtConstante.value;

  if (!semilla.trim().length || !semilla || semilla.trim().length != d) {
    alert('Debe ingresar un valor para semilla de longitud ' + d);
    return;
  }
  if (!a.trim().length || a.trim().length < d) {
    alert('Debe ingresar un valor para la constante de longitud ' + d);
    return;
  }
  if (!d.trim().length || d < 4) {
    alert('El valor de D debe ser mayor que 3');
    return;
  }
  while (tablaElemento.childElementCount > 0) {
    tablaElemento.removeChild(tablaElemento.firstElementChild);
  }
  var rndB = parseInt(txtSemilla.value);
  var rndC = parseInt(txtConstante.value);
  for (var i = 0; i <= parseInt(numberIte.value) - 1; i++) {
    var rnd = generar(rndB, rndC, numberD.value);
    cant = i;
    var item = {
      indice: i,
      rn: '0.' + rndB,
      rn2: '0.' + rndC,
      valor: rnd
    };
    addRow(item.indice, item.rn, item.rn2, item.valor);
    rndB = rndC;
    rndC = rnd;
  }
};
function generar(s, a, d) {
  s = s * a;
  var lengthS = String(s).length;
  var borde = (lengthS - d) / 2;
  borde = Math.round(borde);
  if (String(s).length > d) {
    s = String(s).substr(borde, d);
  }
  return String(s);
};
function addRow(index, rn, rn2, rnd) {
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  td1.textContent = String(index);
  td2.textContent = String(rn);
  td3.textContent = String(rn2);
  td4.textContent = String(rnd);
  tablaElemento.appendChild(tr);
};

window.addEventListener('load', function () {
  btnGenerar.addEventListener('click', btnGenerar_Click);
});
var btnGenerar = document.getElementById('generar');
var tablaElemento = document.getElementById('table-elementos');
var txtSemilla1 = document.getElementById('semilla1');
var txtSemilla2 = document.getElementById('semilla2');
var numberD = document.getElementById('numberD');
var numberIte = document.getElementById('numberite');
var datos = [];
function btnGenerar_Click(event) {
  var semilla = txtSemilla1.value;
  var d = numberD.value;
  if (!semilla.trim().length || !semilla || semilla.trim().length < 4) {
    alert('Debe ingresar un valor para la semilla 1 de mínimo 4 dígitos');
    return;
  }
  var semilla2 = txtSemilla2.value;
  if (!semilla2.trim().length || !semilla2 || semilla2.trim().length < 4) {
    alert('Debe ingresar un valor para la semilla 2 de mínimo 4 digitos');
    return;
  }
  if (semilla.trim().length != semilla2.trim().length) {
    alert('Las semillas deben ser de la misma longitud');
    return;
  }
  if (!d.trim().length || d < 4) {
    alert('El valor de D debe ser mayor que 3 y positivo');
    return;
  }
  while (tablaElemento.childElementCount > 0) {
    tablaElemento.removeChild(tablaElemento.firstElementChild);
  }
  var rndB = parseInt(txtSemilla1.value);
  var rndC = parseInt(txtSemilla2.value);
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
function generar(s, s2, d) {
  s = s * s2;
  var lengthS2 = String(s).length;
  var borde = (lengthS2 - d) / 2;
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

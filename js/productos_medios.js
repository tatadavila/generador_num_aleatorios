var btnGenerar = document.getElementById('generar');
var tablaElemento = document.getElementById('table-elementos');
var txtSemilla1 = document.getElementById('semilla1');
var txtSemilla2 = document.getElementById('semilla2');
var numberK = document.getElementById('numberK');
var numberIte = document.getElementById('numberite');
var datos = [];
function btnGenerar_Click(event) {
  var semilla = txtSemilla1.value;
  var k = numberK.value;
  if (!semilla.trim().length || !semilla) {
    alert('Debe ingresar un valor para la semilla 1');
    return;
  }
  var semilla2 = txtSemilla2.value;
  if (!semilla2.trim().length || !semilla2) {
    alert('Debe ingresar un valor para la semilla 2');
    return;
  }
  if (semilla.trim().length != semilla2.trim().length) {
    alert('Las semillas deben ser de la misma longitud');
    return;
  }
  if (!k.trim().length || !k) {
    alert('El valor de k debe ser mayor a 0 y positivo');
    return;
  }
  while (tablaElemento.childElementCount > 0) {
    tablaElemento.removeChild(tablaElemento.firstElementChild);
  }
  var rndB = parseInt(txtSemilla1.value);
  var rndC = parseInt(txtSemilla2.value);
  for (var i = 0; i <= parseInt(numberIte.value); i++) {
    var rnd = generar(rndB, rndC, numberK.value);
    cant = i;
    var item = {
      indice: i,
      rn: rndB,
      rn2: rndC,
      valor: rnd
    };
    //datos.push(item);
    addRow(item.indice, item.rn, item.rn2, item.valor);
    rndB = rndC;
    rndC = rnd;
  }
};
function generar(s, s2, k) {
  s = s * s2;
  var lengthS2 = String(s).length;
  var borde = (lengthS2 - k) / 2;
  borde = Math.round(borde);//en caso de jalar lado izquierdo desabilitar esto	
  if (String(s).length > k) {
    s = String(s).substr(borde, k);
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
/*window.onload = function (){
	btnGenerar.addEventListener('click', btnGenerar_Click);
};*/

window.addEventListener('load', function () {
  btnGenerar.addEventListener('click', btnGenerar_Click);
});

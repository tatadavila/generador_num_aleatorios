var btnGenerar = document.getElementById('generar');
var tablaElemento = document.getElementById('table-elementos');
var txtSemilla = document.getElementById('semilla');
var numberK = document.getElementById('numberK');
var numberIte = document.getElementById('numberite');
//var datos = [];
function btnGenerar_Click(event) {
  var semilla = txtSemilla.value;
  var k = numberK.value;
  if (!semilla.trim().length || !semilla || semilla.trim().length < 4) {
    alert('Debe ingresar un valor para semilla de mínimo 4 dígitos');
    return;
  }
  if (!k.trim().length || k < 4) {
    alert('El valor de D debe ser mayor que 3');
    return;
  }
  while (tablaElemento.childElementCount > 0) {
    tablaElemento.removeChild(tablaElemento.firstElementChild);
  }
  var rndB = parseInt(txtSemilla.value);
  for (var i = 0; i <= parseInt(numberIte.value); i++) {
    var rnd = generar(rndB, numberK.value);
    cant = i;
    var item = {
      indice: i,
      rn: rndB,
      valor: rnd
    };
    //datos.push(item);
    addRow(item.indice, item.rn, item.valor);
    rndB = rnd;
  }
};
function generar(s, k) {
  s = Math.pow(s, 2);
  var lengthS2 = String(s).length;
  var borde = (lengthS2 - k) / 2;
  borde = Math.round(borde);//en caso de jalar lado izquierdo desabilitar esto	
  if (String(s).length > k) {
    s = String(s).substr(borde, k);
  }
  return String(s);
};
function addRow(index, rn, rnd) {
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  td1.textContent = String(index);
  td2.textContent = String(rn);
  td3.textContent = String(rnd);
  tablaElemento.appendChild(tr);
};
/*window.onload = function (){
	btnGenerar.addEventListener('click', btnGenerar_Click);
};*/

window.addEventListener('load', function () {
  btnGenerar.addEventListener('click', btnGenerar_Click);
});

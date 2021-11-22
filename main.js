let calcular = () => {
  let fun = document.getElementById("fun").value;
  function resolverEcuacion(valor) {
    // Con la ecuación: X^3 + 4X ^2 -10
    let dat = fun.replace(/x/g, valor);
    let da = dat.replace(/["^"]/g, "**");
    return eval(da);
  }
  let iterador = 0;
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let nro = parseInt(document.getElementById("i").value);
  let xi_xi = 0;
  let ultimo_xi = 0;
  while (iterador < nro) {
    let fa = resolverEcuacion(a);
    let fb = resolverEcuacion(b);
    let xi = (a + b) / 2;
    let fxi = resolverEcuacion(xi);
    let fa_fxi = fa * fxi;
    xi_xi = Math.abs(xi - ultimo_xi);
    // creando elementos
    let $tbody = document.querySelector("#mostrar");
    let $tr = document.createElement("tr");
    $tr.setAttribute("class", "fila");
    let $td1 = document.createElement("td");
    let $td2 = document.createElement("td");
    let $td3 = document.createElement("td");
    let $td4 = document.createElement("td");
    let $td5 = document.createElement("td");
    let $td6 = document.createElement("td");
    let $td7 = document.createElement("td");
    let $td8 = document.createElement("td");
    let $td9 = document.createElement("td");
    $td1.setAttribute("class", "p-2");
    $td2.setAttribute("class", "p-2");
    $td3.setAttribute("class", "p-2");
    $td4.setAttribute("class", "p-2");
    $td5.setAttribute("class", "p-2");
    $td6.setAttribute("class", "p-2");
    $td7.setAttribute("class", "p-2");
    $td8.setAttribute("class", "p-2");
    $td9.setAttribute("class", "p-2");
    let $td1t = document.createTextNode(iterador + 1);
    let $td2t = document.createTextNode(a.toFixed(4));
    let $td3t = document.createTextNode(b.toFixed(4));
    let $td4t = document.createTextNode(fa.toFixed(4));
    let $td5t = document.createTextNode(fb.toFixed(4));
    let $td6t = document.createTextNode(xi.toFixed(4));
    let $td7t = document.createTextNode(fxi.toFixed(4));
    let $td8t = document.createTextNode(fa_fxi.toFixed(4));
    let $td9t = document.createTextNode(xi_xi.toFixed(4));
    $td1.appendChild($td1t);
    $td2.appendChild($td2t);
    $td3.appendChild($td3t);
    $td4.appendChild($td4t);
    $td5.appendChild($td5t);
    $td6.appendChild($td6t);
    $td7.appendChild($td7t);
    $td8.appendChild($td8t);
    $td9.appendChild($td9t);
    $tr.appendChild($td1);
    $tr.appendChild($td2);
    $tr.appendChild($td3);
    $tr.appendChild($td4);
    $tr.appendChild($td5);
    $tr.appendChild($td6);
    $tr.appendChild($td7);
    $tr.appendChild($td8);
    $tr.appendChild($td9);
    $tbody.appendChild($tr);
    iterador++;
    if (fa_fxi > 0) {
      a = xi;
    } else {
      b = xi;
    }
    ultimo_xi = xi;
    if (xi_xi == 0) {
      break;
    }
  }
};
let limpiar = () => {
  document.getElementById("fun").value = "";
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("i").value = "";
  document.querySelectorAll("table tbody tr").forEach(function (e) {
    e.remove();
  });
};

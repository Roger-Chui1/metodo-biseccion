let calcular = () => {
  let fun = document.getElementById("fun").value;
  let fun1 = fun.toLowerCase();
  function resolverEcuacion(valor) {
    let dat = fun1.replace(/x/g, valor);
    let da = dat.replace(/["^"]/g, "**");
    return eval(da);
  }
  let iterador = 0;
  let Xa = parseFloat(document.getElementById("a").value);
  let Xb = parseFloat(document.getElementById("b").value);
  let nro = parseInt(document.getElementById("i").value);
  let xi_xi = 0;
  while (iterador < nro) {
    let fxa = resolverEcuacion(Xa);
    let fxb = resolverEcuacion(Xb);
    let Xr = (Xa + Xb) / 2;
    let fxr = resolverEcuacion(Xr);
    let fxa_fxr = fxa * fxr;
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
    let $td2t = document.createTextNode(Xa.toFixed(6));
    let $td3t = document.createTextNode(Xb.toFixed(6));
    let $td4t = document.createTextNode(Xr.toFixed(6));
    let $td5t = document.createTextNode(fxa.toFixed(6));
    let $td6t = document.createTextNode(fxb.toFixed(6));
    let $td7t = document.createTextNode(fxr.toFixed(6));
    let $td8t = document.createTextNode(fxa_fxr.toFixed(6));
    let $td9t = document.createTextNode(xi_xi.toFixed(6));
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
    if (fxa_fxr < 0) {
      Xa = Xa;
      let Xd = Xr;
      let ultimo_xi = (Xa+Xd)/2;
      xi_xi = Math.abs(((ultimo_xi-Xd)/ultimo_xi)* 100);
    } else {
      Xa = Xr;
      let Xd = Xr;
      let ultimo_xi = (Xb+Xd)/2;
      xi_xi = Math.abs(((ultimo_xi-Xd)/ultimo_xi)* 100);
    }
    if (fxa_fxr > 0) {
      Xb = Xb;
    } else {
      Xb = Xr;
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

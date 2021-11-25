let calcular = () => {
  let fun = document.getElementById("fun").value;
  let fun1 = fun.toLowerCase();
  function resolverEcuacion(valor) {
    let dat = fun1.replace(/x/g, valor);
    let da = dat.replace(/["^"]/g, "**");
    return eval(da);
  }
  function Ecuacion(val) {
    let dat = fun1.replace(/x/g, val);
    //let da = dat.replace(/["^"]/g, "**");
    return dat;
  }

  let iterador = 0;
  let Xa = parseFloat(document.getElementById("a").value);
  let Xb = parseFloat(document.getElementById("b").value);
  let nro = parseInt(document.getElementById("i").value);
  let xi_xi = 0;
  let xi_x = 0;
  let Xr;
  while (iterador < nro) {
    let fxa = resolverEcuacion(Xa);
    let fxb = resolverEcuacion(Xb);
    Xr = (Xa + Xb) / 2;
    let fxr = resolverEcuacion(Xr);
    let fxa_fxr = fxa * fxr;

    //Procedimiento
    let FX1 = Ecuacion(Xa.toFixed(4));
    let FX2 = Ecuacion(Xb.toFixed(4));
    let FXR = Ecuacion(Xr.toFixed(4));
    let $div = document.querySelector("#reso");
    let $h3 = document.createElement("h3");
    let $p0 = document.createElement("p");
    let $p1 = document.createElement("p");
    let $p2 = document.createElement("p");
    let $p3 = document.createElement("p");
    let $h3text = document.createTextNode("Iteracion Nro " + (iterador + 1));
    let $ptext0 = document.createTextNode(
      "Xr = " +
        Xa.toFixed(4) +
        " - " +
        Xb.toFixed(4) +
        " / 2" +
        " = " +
        Xr.toFixed(4)
    );
    let $ptext1 = document.createTextNode(
      "f(Xa) = " + FX1 + " = " + fxa.toFixed(4)
    );
    let $ptext2 = document.createTextNode(
      "f(Xr) = " + FXR + " = " + fxr.toFixed(4)
    );
    let $ptext3 = document.createTextNode(
      "f(Xa) * f(Xr) = " +
        fxa.toFixed(4) +
        " * " +
        fxr.toFixed(4) +
        " = " +
        fxa_fxr.toFixed(4)
    );
    $h3.appendChild($h3text);
    $p0.appendChild($ptext0);
    $p1.appendChild($ptext1);
    $p2.appendChild($ptext2);
    $p3.appendChild($ptext3);
    $div.appendChild($h3);
    $div.appendChild($p0);
    $div.appendChild($p1);
    $div.appendChild($p2);
    $div.appendChild($p3);
    //
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
    let $td10 = document.createElement("td");
    $td1.setAttribute("class", "p-2");
    $td2.setAttribute("class", "p-2");
    $td3.setAttribute("class", "p-2");
    $td4.setAttribute("class", "p-2");
    $td5.setAttribute("class", "p-2");
    $td6.setAttribute("class", "p-2");
    $td7.setAttribute("class", "p-2");
    $td8.setAttribute("class", "p-2");
    $td9.setAttribute("class", "p-2");
    $td10.setAttribute("class", "p-2");
    let $td1t = document.createTextNode(iterador + 1);
    let $td2t = document.createTextNode(Xa.toFixed(4));
    let $td3t = document.createTextNode(Xb.toFixed(4));
    let $td4t = document.createTextNode(Xr.toFixed(4));
    let $td5t = document.createTextNode(fxa.toFixed(4));
    let $td6t = document.createTextNode(fxb.toFixed(4));
    let $td7t = document.createTextNode(fxr.toFixed(4));
    let $td8t = document.createTextNode(fxa_fxr.toFixed(4));
    let $td9t = document.createTextNode(xi_xi.toFixed(4));
    let $td10t = document.createTextNode(xi_x.toFixed(4));
    $td1.appendChild($td1t);
    $td2.appendChild($td2t);
    $td3.appendChild($td3t);
    $td4.appendChild($td4t);
    $td5.appendChild($td5t);
    $td6.appendChild($td6t);
    $td7.appendChild($td7t);
    $td8.appendChild($td8t);
    $td9.appendChild($td9t);
    $td10.appendChild($td10t);
    $tr.appendChild($td1);
    $tr.appendChild($td2);
    $tr.appendChild($td3);
    $tr.appendChild($td4);
    $tr.appendChild($td5);
    $tr.appendChild($td6);
    $tr.appendChild($td7);
    $tr.appendChild($td8);
    $tr.appendChild($td9);
    $tr.appendChild($td10);
    $tbody.appendChild($tr);
    iterador++;
    if (fxa_fxr < 0) {
      Xa = Xa;
      let Xd = Xr;
      let ultimo_xi = (Xa + Xd) / 2;
      xi_xi = Math.abs(ultimo_xi - Xd);
      xi_x = Math.abs(((ultimo_xi - Xd) / ultimo_xi) * 100);
    } else {
      Xa = Xr;
      let Xd = Xr;
      let ultimo_xi = (Xb + Xd) / 2;
      xi_xi = Math.abs(ultimo_xi - Xd);
      xi_x = Math.abs(((ultimo_xi - Xd) / ultimo_xi) * 100);
    }
    if (fxa_fxr > 0) {
      Xb = Xb;
    } else {
      Xb = Xr;
    }
  }
  document.getElementById("1").innerHTML = "f(x) = " + fun;
  document.getElementById("raiz").innerHTML =
    "Raiz de la funcion: " + Xr.toFixed(4);
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

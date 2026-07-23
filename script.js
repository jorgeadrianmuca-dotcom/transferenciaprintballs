function copiarDatos() {
  const textoLimpio = "Print Balls\nRUT: 18.145.926-3\nBanco Santander\nCuenta Corriente\nN°: 4406124110535770\nPrint.balls@gmail.com";

  if (navigator.vibrate) navigator.vibrate(40);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textoLimpio).then(mostrarMensajeExito);
  } else {
    const aux = document.createElement("textarea");
    aux.value = textoLimpio;
    document.body.appendChild(aux);
    aux.select();
    try { document.execCommand("copy"); mostrarMensajeExito(); } catch(e) {}
    document.body.removeChild(aux);
  }
}

function mostrarMensajeExito() {
  const msj = document.getElementById("mensaje-flotante");
  if (msj) {
    msj.style.display = "block";
    setTimeout(() => msj.style.display = "none", 2200);
  }
}

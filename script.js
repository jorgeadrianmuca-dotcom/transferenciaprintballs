function copiarDatos() {
  const textoLimpio = "Print Balls\nRUT: 18.145.926-3\nBanco Santander\nCuenta Corriente\nN°: 4406124110535770\nPrint.balls@gmail.com";

  if (navigator.vibrate) navigator.vibrate(40);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textoLimpio).then(mostrarMensajeExito).catch(err => {
      console.error("Error al copiar con portapapeles moderno:", err);
      copiarAlternativo(textoLimpio);
    });
  } else {
    copiarAlternativo(textoLimpio);
  }
}

function copiarAlternativo(texto) {
  const aux = document.createElement("textarea");
  aux.value = texto;
  aux.style.position = "fixed";  // Previene scroll en móviles
  document.body.appendChild(aux);
  aux.focus();
  aux.select();
  try {
    constizado = document.execCommand("copy");
    if (contizado) {
      mostrarMensajeExito();
    } else {
      alert("No se pudo copiar automáticamente. Selecciónalo manualmente.");
    }
  } catch (e) {
    console.error("Error en método alternativo:", e);
  }
  document.body.removeChild(aux);
}

function mostrarMensajeExito() {
  const msj = document.getElementById("mensaje-flotante");
  if (msj) {
    msj.style.display = "block";
    setTimeout(() => msj.style.display = "none", 2200);
  }
}

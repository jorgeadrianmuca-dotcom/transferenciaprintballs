function copiarDatos() {
  const textoLimpio = "Poké Ball Estándar\nRatio: 1x\nEspecialidad: Uso general para Pokémon salvajes comunes\nRegión: Kanto / Todas\nPrecio: $200 ₽";

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

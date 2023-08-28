/////////////////////////////////////////  OBTENER NOMBRE USUARIO  ///////////////////////////////////////
function miFuncion() {
    //Se utiliza javascript para obtener el nombre de usuario//
    var nombreUsuario = document.getElementById("nombre").value;
    if (nombreUsuario !== "") {
        //de esta manera, verificamos que el campo no esté vacío//
    alert("Bienvenido " + nombreUsuario);}
    else {
        alert("No se aceptan espacios vacíos.")
    }
}

/////////////////////////////// SELECCION DE OPCIONES Y GANADOR //////////////////////////////////////////

const opciones = ["piedra", "papel", "tijera"];

function jugar(opcionJugador) {
  const opcionComputadora = opciones[Math.floor(Math.random() * 3)];
  let resultado = "";
//Se comparan las opciones para determinar el ganador//
  if (opcionJugador === opcionComputadora) {
    resultado = "Empate";
  } else if (
    (opcionJugador === "piedra" && opcionComputadora === "tijera") ||
    (opcionJugador === "papel" && opcionComputadora === "piedra") ||
    (opcionJugador === "tijera" && opcionComputadora === "papel")
  ) {
    resultado = "¡Ganaste!";
  } else {
    resultado = "¡Perdiste!";
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}
/* Aquí, se detecta con un Event Listener qué opción clickeó (y eligió) el jugador.
Para ello, cada imagen tenía su respectivo id, por ende se busca por ID qué es lo que eligió.
 */
document.getElementById("piedra").addEventListener("click", () => jugar("piedra"));
document.getElementById("papel").addEventListener("click", () => jugar("papel"));
document.getElementById("tijera").addEventListener("click", () => jugar("tijera"));

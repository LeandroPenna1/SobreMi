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
//Se definen las opciones para el juego (piedra, papel, tijera)
const opciones = ["piedra", "papel", "tijera"];
let victoriasComputadora = 0;
let victoriasUsuario = 0;
let intentosComputadora = 0;
let intentosUsuario = 0;
function jugar(opcionJugador) {
  // Se establece la aleatoridad de la jugada de la computadora
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
    //No solo se muestra el resultado "Ganaste", si no también se recuenta la cantidad de veces
    resultado = "¡Ganaste!";
    victoriasUsuario ++;
  } else {
    //No solo se muestra el resultado "Perdiste", si no también se recuenta la cantidad de veces
    resultado = "¡Perdiste!";
    victoriasComputadora ++;
  }
  // Se actualizan los elementos en el DOM con los resultados
  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
  document.getElementById("jugadaComputadora").textContent = `La computadora eligió: ${opcionComputadora}`;
  document.getElementById("victoriasUsuario").textContent = `Victorias del usuario: ${victoriasUsuario}`;
  document.getElementById("victoriasComputadora").textContent = `Victorias de la computadora: ${victoriasComputadora}`;
   // Verificación de si se ha alcanzado la victoria al mejor de 5
  if (victoriasUsuario === 3 || victoriasComputadora === 3) {
    if (victoriasUsuario === 3) {
      alert("¡Has ganado el juego al mejor de 5!");
    } else {
      alert("La computadora ha ganado el juego al mejor de 5.");
    }
    // Reinicia marcadores y conteo de intentos
    intentosUsuario = 0;
    intentosComputadora = 0;
    victoriasUsuario = 0;
    victoriasComputadora = 0;
}
}

function reiniciarJuego() {
  // Reinicia los valores para volver a jugar
  intentosUsuario = 0;
  intentosComputadora = 0;
  victoriasUsuario = 0;
  victoriasComputadora = 0;

  document.getElementById("marcadorUsuario").textContent = `Victorias Usuario: ${victoriasUsuario}`;
  document.getElementById("marcadorComputadora").textContent = `Victorias Computadora: ${victoriasComputadora}`;
  document.getElementById("intentosUsuario").textContent = `Intentos Usuario: ${intentosUsuario}`;
  document.getElementById("intentosComputadora").textContent = `Intentos Computadora: ${intentosComputadora}`;
  document.getElementById("resultado").textContent = "Resultado: ";
  document.getElementById("jugadaComputadora").textContent = "La computadora eligió: ";
}
/* Aquí, se detecta con un Event Listener qué opción clickeó (y eligió) el jugador.
Para ello, cada imagen tenía su respectivo id, por ende se busca por ID qué es lo que eligió.
 */
document.getElementById("piedra").addEventListener("click", () => jugar("piedra"));
document.getElementById("papel").addEventListener("click", () => jugar("papel"));
document.getElementById("tijera").addEventListener("click", () => jugar("tijera"));

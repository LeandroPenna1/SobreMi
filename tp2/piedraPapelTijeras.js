/////////////////////////////////////////  OBTENER NOMBRE USUARIO  ///////////////////////////////////////
function miFuncion() {
    var nombreUsuario = document.getElementById("nombre").value;
    if (nombreUsuario !== "") {
        //de esta manera, verificamos que el campo no esté vacío//
    alert("Bienvenido " + nombreUsuario);}
    else {
        alert("No se aceptan espacios vacíos.")
    }
}


/////////////////////////////////////////  JUGADA COMPUTADORA  ///////////////////////////////////////
let jugada = "";
var y = 0;
var x = 3;
var random = Math.floor(Math.random() * (+y - +x)) + +x;
    
function obtenerJugadaComputadora() {
switch(random) {
    case 0:
        jugada = "piedra";
    break;
    case 1:
        jugada = "papel";
    break;
    case 2:
        jugada = "tijera";
    break;
    default:
        error;
    }
console.log("La computadora eligió " + jugada);
}
    
///////////////////////////////////////////  JUGADA USUARIO //////////////////////////////////////////

    /* const readlineSync = require('readline-sync');
    let eleccion = readlineSync.question("Por favor, envia tu eleccion ('Piedra', 'Papel' o 'Tijera'): \n"); */

const eleccion = document.getElementById("eleccion");
const eleccionReflejada = documen.getElementById("eleccionReflejada");
eleccion.addEventListener("input", function(event) {
    eleccionReflejada.textContent = event.target.value;
});

let eleccionMinuscula = eleccion.toLowerCase();
function obtenerJugadaUsuario() {
    var eleccionUsuario = document.getElementById("eleccion").value;
switch(eleccionMinuscula) {
    case "piedra":
    break;
    case "papel":
    break;
    case "tijera":
    break;
    default:
        console.log("Vuelve a intentarlo. Recuerda que las opciones son: 'Piedra', 'Papel' o 'Tijera'.");
        process.exit(1);
    }
console.log ("El usuario eligió " + eleccionMinuscula);
    
}
   
///////////////////////////////////////  DETERMINAR GANADOR  /////////////////////////////////////
    function determinarGanador(usuar, compu) {
        if(usuar === compu){
            console.log("El resultado fue: EMPATE.");
        } else if (usuar === "papel" && compu === "piedra"){
            console.log("El resultado fue: GANA EL USUARIO.");
        } else if (usuar === "tijera" && compu === "piedra"){
            console.log("El resultado fue: GANA LA COMPUTADORA.");
        } else if (usuar === "piedra" && compu === "papel"){
            console.log("El resultado fue: GANA LA COMPUTADORA.");
        } else if (usuar === "tijera" && compu === "papel"){
            console.log("El resultado fue: GANA EL USUARIO.");
        } else if (usuar === "piedra" && compu === "tijera"){
            console.log("El resultado fue: GANA EL USUARIO.");
        } else {
            //usuar === "papel" && compu === "tijera"
            console.log("El resultado fue: GANA LA COMPUTADORA.");
        }
            
    }


    obtenerJugadaUsuario()
    obtenerJugadaComputadora()
    determinarGanador(eleccionMinuscula, jugada)

////////////////////////////////////////    EXTRA 1     ////////////////////////////////////////////

const piedra = 0;
const papel = 1;
const tijera = 2;

////////////////////////////////////////    EXTRA 2     ////////////////////////////////////////////


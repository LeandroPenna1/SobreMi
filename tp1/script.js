/* En javascript desarrollé la función que comprende la calculadora y 2 breves funciones más para borrar los campos */
function resultado() {
    /* Se obtiene la operación que el usuario optó */
    var operador = document.getElementById("operador").value;
    /* Se obtienen y convierten los valores del primer y segundo campo que el usuario ingresó a un numero decimal. */
    var primero = parseFloat(document.getElementById("primero").value);
    var segundo = parseFloat(document.getElementById("segundo").value);
    var resultado;
    /* Se verifica que lo que el usuario ingrese sea sólo valor numérico */
    if (isNaN(primero) || isNaN(segundo)) {
        alert("Error. El contenido a ingresar debe ser SÓLO numérico.");
    } else{
    switch (operador) {
        case "suma":
            resultado = primero + segundo;
        break;
        case "resta":
            resultado = primero - segundo;
        break;
        case "multiplicar":
            resultado = primero * segundo;
        break;
        case "dividir":
            if(segundo == 0) {
                alert("ERROR. La operación es inválida ya que no se puede dividir por 0.");
            }else {
            resultado = primero / segundo;
            }
        break;
        default:
           resultado = "operador no valido"
        break;
        }
    }
    /* Se verifica la longitud del resultado y sus consecuencias con alertas */
    if(resultado > 99999999999999999999) {
        alert("El resultado es demasiado grande");
    } else if (resultado >= -10 && resultado <= 10){
        alert("El resultado es demasiado chico");
    } else{
    /* Se muestra el resultado final */
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
    }
}
/* Funciones para borrar el primer y/o el segundo campo */
function borrarPrimerCampo() {
    document.getElementById("primero").value = "";
}

function borrarSegundoCampo() {
    document.getElementById("segundo").value = "";
}
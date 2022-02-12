let num1, num2;
let operación = prompt(
    `Qué operación desea realizar?:

    1. Suma
    2. Resta
    3. Multiplicación
    4. División
    5. Potenciación
    6. Raiz Cuadrada
    7. Raiz cúbica`
);
operación = parseInt(operación);

const pedirNúmero = (posición) =>{
    return parseInt(prompt(`Dame el ${posición} número: `));
}

function suma(numero1, numero2){
    numero1 = pedirNúmero("primer");
    numero2 = pedirNúmero("segundo");
    resultado = numero1 + numero2;
    alert (`El resultado de la suma de ${numero1} y ${numero2} es: ${resultado}`)
}

function resta(numero1, numero2){
    numero1 = pedirNúmero("primer");
    numero2 = pedirNúmero("segundo");
    resultado = numero1 - numero2;
    alert (`El resultado de la resta de ${numero1} y ${numero2} es: ${resultado}`)
}

function multiplicación(numero1, numero2){
    numero1 = pedirNúmero("primer");
    numero2 = pedirNúmero("segundo");
    resultado = numero1 * numero2;
    alert (`El resultado de la multiplicación entre ${numero1} y ${numero2} es: ${resultado}`)
}

function división(numero1, numero2){
    numero1 = pedirNúmero("primer");
    numero2 = pedirNúmero("segundo");
    resultado = numero1 / numero2;
    alert (`El resultado de la división entre ${numero1} y ${numero2} es: ${resultado}`)
}

function potenciación(numero1, numero2){
    numero1 = pedirNúmero("primer");
    numero2 = pedirNúmero("segundo");
    resultado = numero1 ** numero2;
    alert (`Al elevar ${numero1} a la potencia ${numero2} obtenemos: ${resultado}`)
}

function raizCuadrada(numero){
    numero = pedirNúmero("");
    resultado = Math.sqrt(numero);
    alert (`La raiz cuadrada de ${numero} es: ${resultado}`)
}

function raizCúbica(numero){
    numero = pedirNúmero("");
    resultado = Math.cbrt(numero);
    alert (`La raiz cúbica de ${numero} es: ${resultado}`)
}

switch (operación) {
    case 1:
        suma(num1, num2);
    break;

    case 2:
        resta(num1, num2);
    break;

    case 3:
        multiplicación(num1, num2);
    break;

    case 4:
        división(num1, num2);
    break;

    case 5:
        potenciación(num1, num2);
    break;

    case 6:
        raizCuadrada(num1, num2);
    break;

    case 7:
        raizCúbica(num1, num2);
    break;

    default:
        alert("Su operación no es aceptada por el programa, inténtelo de nuevo recargando la página.");
    break;
}
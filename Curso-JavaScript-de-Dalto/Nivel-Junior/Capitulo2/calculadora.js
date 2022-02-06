let operación = prompt("Qué operación desea realizar?: ");
let num1, num2;

const pedirNúmero = (posición) =>{
    return parseInt(prompt(`Dame el ${posición} número: `));
}

if(operación == "Suma" || operación == "suma" || operación == "SUMA" || operación == "+"){
    num1 = pedirNúmero("primer");
    num2 = pedirNúmero("segundo");
    resultado = num1 + num2;
    alert (`El resultado de la suma de ${num1} y ${num2} es: ${resultado}`);
}

else if(operación == "Resta" || operación == "resta" || operación == "RESTA" || operación == "-"){
    num1 = pedirNúmero("primer");
    num2 = pedirNúmero("segundo");
    resultado = num1 - num2;
    alert (`El resultado de la resta de ${num1} y ${num2} es: ${resultado}`);
}

else if(operación == "Multiplicación" || operación == "multiplicación" || operación == "MULTIPLICACIÓN" || operación == "*"){
    num1 = pedirNúmero("primer");
    num2 = pedirNúmero("segundo");
    resultado = num1 * num2;
    alert (`El resultado de la multiplicación de ${num1} y ${num2} es: ${resultado}`);
}

else if(operación == "División" || operación == "división" || operación == "DIVISIÓN" || operación == "/"){
    num1 = pedirNúmero("primer");
    num2 = pedirNúmero("segundo");
    resultado = num1 / num2;
    alert (`El resultado de la división de ${num1} entre ${num2} es: ${resultado}`);
}

else{
    alert("Su operación no es aceptada por el programa, inténtelo de nuevo recargando la página.");
}
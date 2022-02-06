let entradaGratis = false;

const validarEntrada = (hora) =>{
    let edad = prompt("¿Cuántos años tienes?")

    if(edad<18){
        alert(`Lo siento, eres menor de edad, tienes que esperar ${18-edad} años para poder entrar`);
    }
    else{
        if(!entradaGratis && hora >= 2){
            alert("Felicitaciones! No solo puedes entrar sino que además tu entrada es gratis!");
            entradaGratis = true;
        }
        else{
            alert("Adelante, puedes entrar, pero no te olvides de pagar");
        }
    }
}

validarEntrada(prompt("¿Qué hora es? (Use formato 24 horas): "));
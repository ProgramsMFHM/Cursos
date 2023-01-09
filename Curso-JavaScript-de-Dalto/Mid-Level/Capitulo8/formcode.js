const botón = document.querySelector("#formulario-recuperación .enviar");
const mensaje = document.querySelector("#formulario-recuperación .mensaje");
const nombre = document.querySelector("#nombre");
const mail = document.querySelector("#mail");
const materia = document.querySelector("#materia");

function validar(){

    let error = [];

    if(nombre.textLength < 4 || nombre.textLength > 50){
        error = [true, "Nombre Inválido"];
    }
    else if (!mail.value.includes(`@`) || !mail.value.includes(`.`) || mail.textLength < 6 || mail.textContent > 30){
        error = [true, "Correo Inválido"];
    }
    else if(materia.textLength < 6 || materia.textContent > 30){
        error = [true, "Materia Inválida"];

    }
    else{
        error = [false];
    }

    return error;
};

botón.addEventListener("click", (evt)=>{
    
    evt.preventDefault();

    let validación = validar();

    if(validación[0]){
        mensaje.textContent = validación[1];
    }
    else{
        mensaje.textContent = "Formulario enviado";
    }
})
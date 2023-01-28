const botonenv = document.querySelector("#enviar-nota");
const modal = document.querySelector(".contenedor");
const closer = document.querySelector("#cerrar-ventana");

function abrirModal(mensaje, resultado){
    document.querySelector(".resultado").innerHTML = resultado;
    document.querySelector(".mensaje").innerHTML = `En el examen final: <span style="font-weight: bold;">${mensaje}</span>`;
    modal.style.display = "flex";
    modal.style.animation = "aparecer 0.5s forwards";
}

function crearMensaje(resultado){

    let mensaje;

    switch(resultado){
        case 1: mensaje = "Nota mínima, muy mal"; break;
        case 2: mensaje = "Muy mal rendimiento"; break;
        case 3: mensaje = "Mal rendimiento"; break;
        case 4: mensaje = "Rendimiento muy regular"; break;
        case 5: mensaje = "Rendimiento regular"; break;
        case 6: mensaje = "Rendimiento decente"; break;
        case 7: mensaje = "Rendimiento bueno"; break;
        case 8: mensaje = "Rendimiento muy bueno"; break;
        case 9: mensaje = "Rendimiento excelente"; break;
        case 10: mensaje = "Rendimiento perfecto"; break;
        default: mensaje = null;
    }

    return mensaje;
}

function comprobarAprobacion(nota1, nota2, notaExam){

    let promedio;

    promedio = Math.round((nota1 + nota2 + notaExam)/3);

    if(promedio>=7){
        return `<span class="verde">Estudiante aprobado</span>`;
    }
    else{
        return `<span class="rojo">Estudiante desaprobado</span>`;
    }

}

botonenv.addEventListener("click", (evt)=>{

    evt.preventDefault();
    
    let resultadoExamen, mensaje;

    try{
        
        resultadoExamen = parseInt(document.querySelector("#nota").value);
        
        if(isNaN(resultadoExamen)){
            throw "resultadoNaN";
        }
        
        mensaje = crearMensaje(resultadoExamen);

    }
    catch(error){

        resultadoExamen = "Error en el resultado";
        mensaje = "Valor ingresado no numérico";
        
    }

    abrirModal(mensaje, comprobarAprobacion(6, 7, resultadoExamen));
});

closer.addEventListener("click", ()=>{

    modal.style.display = "none"

});
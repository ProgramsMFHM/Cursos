const aprobados = document.getElementById("aprobados");

const desaprobados = document.getElementById("desaprobados");

async function obtenerAprobados(){
    try {
        let consulta = await fetch("./api.json");

        if(!consulta.ok) throw {status: consulta.status, statusText: consulta.statusText};  

        consulta = await consulta.json();
        aprobados.textContent = consulta.aprobados;
        desaprobados.textContent = consulta.desaprobados;
    } catch (error) {
        console.error(error);
        aprobados.textContent = "Información no encontrada";
        desaprobados.textContent = "Información no encontrada";
    }
}

obtenerAprobados();
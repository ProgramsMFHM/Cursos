const estudiantes = [ //Info Estudiantes
    {
        nombre: "Juan",
        mail: "miltonfabriciohm@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Jose",
        mail: "jose@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Ximena",
        mail: "Xime@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Juan",
        mail: "miltonfabriciohm@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Jose",
        mail: "jose@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Ximena",
        mail: "Xime@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Juan",
        mail: "miltonfabriciohm@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Jose",
        mail: "jose@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Ximena",
        mail: "Xime@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Juan",
        mail: "miltonfabriciohm@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Jose",
        mail: "jose@gmail.com",
        materia: "Fisica II"
    },
    {
        nombre: "Ximena",
        mail: "Xime@gmail.com",
        materia: "Fisica II"
    },
];

//Añadiendo al HTML

const contenedor = document.querySelector(".contenedor");

let fragmento = "";

for (const estudiante of estudiantes) {
    fragmento += `
    <div class="nombre">${estudiante.nombre}</div>
    <div class="mail">${estudiante.mail}</div>
    <div class="materia">${estudiante.materia}</div>
    <div>
        <select class="semana">
            <option>Semana 1</option>
            <option>Semana 2</option>
        </select>
    </div>`;
}

contenedor.innerHTML += fragmento;

//Proceso de elección de semanas

const enviar = document.querySelector(".env");

const semanas = document.querySelectorAll(".semana");

enviar.addEventListener("click", ()=>{
    if(confirm("¿Desea enviar formulario?")){
        for (const semana of semanas) {
            semana.outerHTML = semana.value;
        }
        document.body.removeChild(enviar);
    }
});
const contenedorMaterias = document.querySelector(".contenedorMaterias");

const infoMaterias = [
    {
        nombre: "Programación JavaScript IV",
        nota: 9
    },
    {
        nombre: "Bases de datos",
        nota: 5
    },
    {
        nombre: "Estructura de computadores",
        nota: 10
    },
    {
        nombre: "Matemática V",
        nota: 7
    },
    {
        nombre: "Cátedra Universitaria",
        nota: 4
    }
];

function solicitarMateria(id) {
    return new Promise(function (res, rej){
        if(infoMaterias[id]==undefined) {
            rej("Materia no encontrada")
        }
        else{
            setTimeout(()=>{res(infoMaterias[id])}, Math.random()*1000);
        }
    }
    )    
};

async function mostrarMaterias(){
    for (const numMateria in infoMaterias) {

        let materia;

        await solicitarMateria(numMateria).then((res)=>{
            materia = res;
        });

        contenedorMaterias.innerHTML += `
        <div class="materia">
            <div class="nombreMateria">${materia.nombre}</div>
            <div class="notaMateria">${materia.nota}</div>
        </div>
        `;
    }
};

mostrarMaterias();
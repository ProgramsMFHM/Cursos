let cantidadAlumnos = prompt("Cuantos alumnos son en total?");
let alumnos = [];

for(let i = 0; i<cantidadAlumnos; i++){
    alumnos[i] = [ prompt("Nombre del alumno "+ (i+1)) , 0];
}

const tomaAsistencia = ()=>{
    for(let i = 0; i<cantidadAlumnos; i++){
        if(prompt(`${alumnos[i][0]} Está presente?`) == "p" || prompt(`${alumnos[i][0]} Está presente?`) == "P"){
            alumnos[i][1]++;
        }
    }
}

for(let i = 0; i<30; i++){
    tomaAsistencia();
}

for(let i = 0; i<cantidadAlumnos; i++){
    if(alumnos[i][1]<12){
        alert(`${alumnos[i][0]} Está reprobado, faltó ${(30-alumnos[i][1])} día(s) durante el mes, eso es más del 10% del semestre. <br>`);
    }
    else{
        alert(`${alumnos[i][0]} Está aprobado, solo faltó ${(30-alumnos[i][1])} día(s) durante el mes, puede faltar solamente ${18-(30-alumnos[i][1])} días durante el resto del semestre. <br>`);
    }
}
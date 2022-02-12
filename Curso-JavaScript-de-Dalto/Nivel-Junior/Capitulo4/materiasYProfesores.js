class clase{
    constructor (nombreClase, nombreProfesor, alumnos){
        this.nombreClase = nombreClase;
        this.nombreProfesor = nombreProfesor;
        this.alumnos = alumnos.sort();
    }

    setNombreClase(newValue){
        this.nombreClase = newValue;
    }

    get getNombreClase(){
        return this.nombreClase;
    }

    setNombreProfesor(newValue){
        this.nombreProfesor = newValue;
    }

    get getNombreProfesor(){
        return this.nombreProfesor;
    }

    setNombreAlumnos(newValue){
        if(typeof newValue == "object"){
            this.alumnos = newValue;
        }
    }

    get getNombreAlumnos(){
        return this.alumnos;
    }
}

const imprimirClase = (clase) => {
    document.write(
    `
    Nombre de la clase: <strong>${clase.getNombreClase}</strong>. <br>
    Nombre del profesor: <strong>${clase.getNombreProfesor}</strong>. <br>
    Alumnos: <br><strong> - ${clase.getNombreAlumnos.join("<br> - ")}</strong>
    <br><br>
    `
    );
}

const hallarAlumno = (listaClases,nombreAlumno) => {

    let clasesAlumno = [];

    for(let clase of listaClases){

        if(clase.getNombreAlumnos.includes(nombreAlumno)){
            clasesAlumno.push([clase.getNombreClase, clase.getNombreProfesor]);
        }

    }

    document.write(`${nombreAlumno} se encuentra inscrit@ a las siguientes clases: <br><br>`)

    for(let clase of clasesAlumno){
        document.write(`<strong>${clase[0]}</strong> Dictada por <strong>${clase[1]}</strong>. <br>`)
    }
}

const inscribirAlumno = (clases) =>{
    let nombre = prompt("¿Cuál es tu nombre?");
    let materia = prompt(`A qué materia desea inscribirse ${nombre}?:
    
    1. Lenguaje
    2. Matemáticas
    3. Ciencias
    `);
    materia = parseInt(materia);
    materia--;
    console.log(materia)

    if(materia > (clases.length-1)){
        alert("Su elección no está en la plantilla de la universidad.")
    }
    else if(clases[materia].getNombreAlumnos.includes(nombre)){
        alert(`No puede inscribirse a la clase de ${clases[materia].getNombreClase} puesto que usted ya se encuentra inscrit@ en ella.`);
    }
    else if(clases[materia].getNombreAlumnos.length>=20){
        alert(`No puede inscribirse a la clase de ${clases[materia].getNombreClase} puesto que esta clase ya está completa.`);
    }
    else{
        nuevoArray = clasesUniversidad[materia].getNombreAlumnos.push(nombre);
        clasesUniversidad[materia].setNombreAlumnos(nuevoArray);
        alert("Inscripción realizada con éxito");
    }
}

let clasesUniversidad = [
    new clase("Lemguaje", "Cristina", ["Cofla", "Juan", "Pedro"]),
    new clase("Matemáticas", "Josefa", ["Cofla", "Juan", "Pedro"]),
    new clase("Ciencias", "Lola", ["Andrés", "Juan", "Pedro"])
];
class alumno{
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.nombre.toString()
        this.asignaturas = asignaturas;        
    }

    valorarAlumno = () => {
        console.group(this.nombre);
        for(let asignaturaActual of this.asignaturas){
            console.groupCollapsed(asignaturaActual[0]);
        
            let ganar = true;

            //Nombre
            console.log(`Nombre de la asgnatura: %c${asignaturaActual[0]}.`, "font-weight: bold;");

            //Asistencias
            if(asignaturaActual[1]>=90){
                console.log(`Porcentaje de asistencias: %c${asignaturaActual[1]}%`, "font-weight: bold; color:green");
            }
            else{
                console.log(`Porcentaje de asistencias: %c${asignaturaActual[1]}%`, "font-weight: bold; color:red");
                console.warn(`  Lo anterior es motivo para que ${this.nombre} pierda el semestre`);
                ganar = false;
            }

            //Promedio
            if(asignaturaActual[2]>=7){
                console.log(`Promedio de notas: %c${asignaturaActual[2]}`, "font-weight: bold; color:green");
            }
            else{
                console.log(`Promedio de notas: %c${asignaturaActual[2]}`, "font-weight: bold; color:red");
                console.warn(`  Lo anterior es motivo para que ${this.nombre} pierda el semestre`);
                ganar = false;
            }

            //Trabajos
            if(asignaturaActual[3]>=75){
                console.log(`Porcentaje de trabajos prácticos entregados: %c${asignaturaActual[1]}%`, "font-weight: bold; color:green");
            }
            else{
                console.log(`Porcentaje de trabajos prácticos entregados: %c${asignaturaActual[1]}%`, "font-weight: bold; color:red");
                console.warn(`  Lo anterior es motivo para que ${this.nombre} pierda el semestre`)
                ganar = false;
            }

            if(ganar){
                console.log(`${this.nombre} Ganó ${asignaturaActual[0]} este semestre %cFELICIDADES!`, "font-weight: bold; color:green");
            }
            else{
                console.warn(`${this.nombre} está en riesgo de perder ${asignaturaActual[0]} este semestre %cCuidado!`, "font-weight: bold; color:red");
            }

            console.groupEnd();
        }
        console.groupEnd();
    }
}

    agregarEstudiante = () => {
    let nombreEstudiante = prompt("¿Cuál es tu nombre?:");

    let cantidadMaterias = prompt(`${nombreEstudiante} ¿Cuántas materias cursaste durante el semestre?:`)
    cantidadMaterias = parseInt(cantidadMaterias);
    cantidadMaterias--;

    let materiasEstudiante = [];

    for (let i = 0; i <= cantidadMaterias; i++) {
    
        let materiaActual__nombre = prompt(`Cuál es el nombre de la materia ${i+1}?`);
    
        let materiaActual__asistencia = prompt(`${nombreEstudiante}, ¿Cuál fue tu porcentaje de asistancias en ${materiaActual__nombre} este semestre?`);

        let materiaActual__promedio = prompt(`${nombreEstudiante}, ¿Cuál fue tu promedio en ${materiaActual__nombre} este semestre?`);

        let materiaActual__trabajosPrácticos = prompt(`${nombreEstudiante}, ¿Cuál fue tu porcentaje de trabajos practicos entregados en ${materiaActual__nombre} este semestre?`);

        materiasEstudiante.push([materiaActual__nombre, materiaActual__asistencia, materiaActual__promedio, materiaActual__trabajosPrácticos]);
    }

    Estudiantes.push(new alumno (nombreEstudiante, materiasEstudiante));
}

const mostrarTodosLosEstudiantes = () => {
    for (let i = 0; i < Estudiantes.length; i++) {
        Estudiantes[i].valorarAlumno();
    }
}

let Estudiantes = [];
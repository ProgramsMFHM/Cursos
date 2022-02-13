let estudiar = "1.72 horas para estudiar";
let trabajosPrácticos = "1.72 horas para hacer Trabajos Prácticos";
let trabajar = "4 horas para trabajar";
let casa = "40 minutos para los trabajos de la casa";

for (let i = 0; i < 14; i++) {
    if(i==0){
        console.group("Semana1");
    }
    else if(i==7){
        console.groupEnd();
        console.group("Semana2");
    }
    else if(i==14){
        console.groupEnd();
    }

    console.groupCollapsed("Día " + (i+1));

    console.log(estudiar);
    console.log(trabajosPrácticos);
    console.log(trabajar);
    console.log(casa);

    console.groupEnd();
}
let sospechoso1, sospechoso2, cofla;
sospechoso1 = prompt("¿El sospechoso 1 mintió?:");
sospechoso2 = prompt("¿El sospechoso 2 mintió?:");
cofla = prompt("¿Cofla mintió?:");

// Sospechoso 1
if (sospechoso1 == "1"){
    alert("Maquina: sospechoso 1 mintió, proceder con la descarga.");
}
else if (sospechoso1 == "2"){
    alert("Maquina: sospechoso 1 no mintió, no proceder con la descarga.");
}
else{
    alert("Maquina: No tengo muy claro si sospechoso 1 mintió, intentemos de nuevo.");
}

// Sospechoso 2
if (sospechoso2 == "1"){
    alert("Maquina: sospehcoso 2 mintió, proceder con la descarga.");
}
else if (sospechoso2 == "2"){
    alert("Maquina: sospehcoso 2 no mintió, no proceder con la descarga.");
}
else{
    alert("Maquina: No tengo muy claro si sospehcoso 2 mintió, intentemos de nuevo.");
}

// Cofla
if (cofla == "1"){
    alert("Maquina: Cofla mintió, proceder con la descarga.");
}
else if (cofla == "2"){
    alert("Maquina: Cofla no mintió, no proceder con la descarga.");
}
else{
    alert("Maquina: No tengo muy claro si Cofla mintió, intentemos de nuevo.");
}
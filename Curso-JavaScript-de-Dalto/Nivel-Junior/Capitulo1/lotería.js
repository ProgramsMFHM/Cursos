let precio = prompt("Cuaánto cuesta un boleto de lotería?:"); precio = parseFloat(precio);

let dinero = prompt("Cuanto dinero tiene la persona que quiere comprar la lotería?:")
dinero = parseFloat(dinero);

if (dinero >= precio && dinero < (precio*2)){
    alert(`Se compra un boleto de lotería y el vueto es de $ ${dinero - precio} USD`);
}
else if (dinero >= (precio*2) && dinero <= (precio*3)){
    alert(`Se compran dos boletos de lotería y el vueto es de $ ${dinero - (precio*2)} USD`);
}
else if (dinero > (precio*3)){
    alert(`Se compran dos boletos de lotería y el vueto a regalar es de $ ${dinero - (precio*2)} USD`);
}
else{
    alert("No puede comprar ningún boleto de lotería, sorry");
}
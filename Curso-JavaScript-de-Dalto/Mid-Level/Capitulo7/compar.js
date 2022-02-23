const alto = window.screen.height;
const ancho = window.screen.width;

let respuesta = window.confirm(`La resolución de esta pantalla es de: ${alto}x${ancho}, ¿Desea comprarla?`);

if(respuesta){
    alert("Producto comprado con éxito");
}
else{
    alert("Compra cancelada");
}
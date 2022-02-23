let url = window.location.href;
let hostname = window.location.hostname;
let path = window.location.pathname;
let protocol = window.location.protocol;

let contenedor = document.getElementById("contenedor");

let html = `protocolo: <b>${protocol}</b><br>
hostname: <b>${hostname}</b><br>
path: <b>${path}</b><br>
href: <b>${url}</b><br>`

document.write(html);



const contenedor = document.querySelector(".flex-container");
const contenido = document.createDocumentFragment();

const crearLlave = (nombre, modelo, precio)=>{
    nombre = `<h2 class="key__name">${nombre}</h2>`;
    modelo = `<h3 id="${modelo}" class="key__model">${modelo}</h3>`;
    precio = `<p class="key__price">${precio}</p>`;
    img = "<img src='llave.png' class='key__image'>";

    return [nombre, img, modelo, precio];
}

for(i = 0; i < 20; i++){

    let modelo = Math.round(Math.random()*1000000); //numero

    let precio = Math.round(Math.random()*10+30);

    let llave = crearLlave(`Llave ${i+1}`, `Modelo: ${modelo}`, `Precio: <span class="price">$${precio}</span>`);

    let article = document.createElement("ARTICLE");

    article.classList.add("key", `key-${i+1}`)

    article.addEventListener("click", () => document.getElementById("key-data").value = modelo);

    article.tabIndex = i;
    
    article.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];

    contenido.appendChild(article);
}

contenedor.appendChild(contenido);
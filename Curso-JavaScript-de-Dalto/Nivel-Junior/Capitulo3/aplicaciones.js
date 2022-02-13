class aplicación{
    constructor(descargas, puntuación, peso){
        this.descargas = descargas;
        this.puntuación = puntuación;
        this.peso = peso;
        this.estado = "no instalada";
    }
    get getDescargas(){
        return this.descargas;
    }
    set setDescargas(newValue){
        this.descargas = newValue;
    }
    get getPuntuación(){
        return this.puntuación;
    }
    set setPuntuación(newValue){
        this.puntuación = newValue;
    }
    get getPeso(){
        return this.peso;
    }
    set setPeso(newValue){
        this.peso = newValue;
    }
    instalar(){
        if(this.estado == "no instalada"){
            alert("Instalando aplicación...");
            this.estado = "cerrada";
            alert("Aplicación instalada exitosamente");
        }
        else{
            alert("La aplicación ya está instalada");
        }
    }
    abrir(){
        if(this.estado == "cerrada"){
            alert("Abriendo aplicación...");
            this.estado = "abierta";
            alert("Aplicación abierta exitosamente");
        }
        else if(this.estado == "abierta"){
            alert("La aplicación ya está abierta");
        }
        else{
            alert("Esta aplicación no está instalada en su dispositivo");
        }
    }
    cerrar(){
        if(this.estado == "abierta"){
            alert("Cerrando aplicación...");
            this.estado == "cerrada";
            alert("Aplicación cerrada exitosamente");
        }
        else if(this.estado == "cerrada"){
            alert("La aplicación ya está cerrada");
        }
        else{
            alert("Esta aplicación no está instalada en su dispositivo");
        }
    }
    desinstalar(){
        if(this.estado == "abierta" || this.estado == "cerrada"){
            alert("Desinstalando aplicación...");
            this.estado == "no instalada";
            alert("Aplicación desinstalada exitosamente");
        }
        else{
            alert("Esta aplicación no está instalada en su dispositivo");
        }
    }
    mostrarInfo(){
        alert(`Información de aplicación:
        
        Descargas: ${this.descargas}.
        Puntuación: ${this.puntuación} estrellas.
        Peso: ${this.peso}.
        `)
    }
}
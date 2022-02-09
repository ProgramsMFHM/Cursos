class celular{
    constructor(color, peso, resCámara, resPantalla, ram){
        this.color = color;
        this.peso = peso;
        this.resCámara = resCámara;
        this.resPantalla = resPantalla;
        this.ram = ram;
        this.encendido = false;
    }
    get getColor(){
        return this.color;
    }    
    set setColor(newValue){
        this.color = newValue;
    }
    get getPeso(){
        return this.peso;
    }
    set setPeso(newValue){
        this.peso = newValue;
    }
    get getResCámara(){
        return this.resCámara;
    }
    set setResCámara(newValue){
        this.resCámara = newValue;
    }
    get getResPantalla(){
        return this.resPantalla;
    }    
    set setResPantalla(newValue){
        this.resPantalla = newValue;
    }
    get getRam(){
        return this.ram;
    }
    set setRam(newValue){
        this.ram = newValue;
    }
    encender(){
        if(this.encendido == false){
            alert("Celular encendido con éxito");
            this.encendido = true;
        }
        else{
            alert("El celular ya se encuentra encendido")
        }
    }
    apagar(){
        if(this.encendido == true){
            alert("Celular apagado con éxito");        
            this.encendido = false;
        }
        else{
            alert("El celular ya se encuentra apagado")
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Iniciando Reinicio...");
            this.apagar();
            this.encender();
            alert("Reinicio completado");
        }
        else{
            alert("El celular está apagado, no se puede reiniciar")
        }
    }
    tomarFoto(){
        alert(`Foto guardada con éxito; resolución: ${this.resCámara}.`);
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resCámara}.`);
    }
    mostrarInfo(){
        alert(`Información celular:

        Color: ${this.getColor}.
        Peso: ${this.getPeso}.
        Resolución de la Cámara: ${this.getResCámara}.
        Resolución de la pantalla: ${this.getResPantalla}.
        Memoria RAM: ${this.getRam}.
        `)
    }
}

class celularAltaGama extends celular{
    constructor(color, peso, resCámara, resPantalla, ram, resCámaraExtra){
        super(color, peso, resCámara, resPantalla, ram);
        this.resCámaraExtra = resCámaraExtra;
    }
    get getResCámaraExtra(){
        return this.resCámaraExtra;
    }
    set setResCámaraExtra(newValue){
        this.resCámaraExtra = newValue;
    }
    grabarVideoLento(){
        alert(`Grabando video superlento en ${this.resCámara}.`);
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial...");
        alert("Acceso permitido");
    }
    mostrarInfo(){
        alert(`Información celular:

        Color: ${this.getColor}.
        Peso: ${this.getPeso}.
        Resolución de la Cámara: ${this.getResCámara}.
        Resolución de la cámara extra: ${this.getResCámaraExtra}.
        Resolución de la pantalla: ${this.getResPantalla}.
        Memoria RAM: ${this.getRam}.
        `)
    }
}

const celular1 = new celular("Rojo", "150g", "5 Pulgadas", "full HD", "2GB");
const celular2 = new celular("Negro", "200g", "5.3 Pulgadas", "full HD", "4GB");
const celular3 = new celular("Blanco", "160g", "6 Pulgadas", "full HD", "16GB");
const celular4 = new celularAltaGama("Rojo", "150g", "5 Pulgadas", "full HD", "2GB", "4k");
const celular5 = new celularAltaGama("Negro", "200g", "5.3 Pulgadas", "full HD", "4GB", "4k");

celular1.mostrarInfo();
celular2.mostrarInfo();
celular3.mostrarInfo();
celular4.mostrarInfo();
celular5.mostrarInfo();
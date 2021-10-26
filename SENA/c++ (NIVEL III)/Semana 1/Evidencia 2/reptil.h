#include <iostream>
using namespace std;

//Clase reptil
class reptil{
    private:
        string colorDeEscamas;
        int edad;
        string especie;
        int hijos;
        bool escamas;
    public:
        void contructor(string, int, string, int, bool);
        //Setters
        void setcolorDeEscamas(string ColorDeEscamas);
        void setEdad(int Edad);
        void setEspecie(string Especie);
        void setHijos(int Hijos);
        void setEscamas(bool Escamas);
        //Getters
        string getColorDeEscamas();
        int getEdad();
        string getEspecie();
        int getHijos();
        bool getEscamas();
};

void reptil::contructor(string Color, int Edad, string Especie, int Hijos, bool Escamas){
    colorDeEscamas=Color;
    edad=Edad;
    especie=Especie;
    hijos=Hijos;
    escamas=Escamas;
}

//Setters
void reptil::setcolorDeEscamas(string ColorDeEscamas){
    colorDeEscamas=ColorDeEscamas;
}

void reptil::setEdad(int Edad){
    edad=Edad;
}

void reptil::setEspecie(string Especie){
    especie=Especie;
}

void reptil::setHijos(int Hijos){
    hijos=Hijos;
}

void reptil::setEscamas(bool Escamas){
    escamas=Escamas;
}


//Getters
string reptil::getColorDeEscamas(){
    return colorDeEscamas;
}

int reptil::getEdad(){
    return edad;
}

string reptil::getEspecie(){
    return especie;
}

int reptil::getHijos(){
    return hijos;
}

bool reptil::getEscamas(){
    return escamas;
}
//Función mostrar_reptil
void mostrar_reptil(reptil objeto){
    cout<<"Su "<<objeto.getEspecie()<<" tiene la siguiente informacion: "<<endl;
    cout<<"Especie: "<<objeto.getEspecie()<<endl;
    if (objeto.getEscamas()==false)
    {
        cout<<"Escamas: No"<<endl;
    }
    else{
        cout<<"Escamas: Si"<<endl;
        cout<<"Color de escamas: "<<objeto.getColorDeEscamas()<<endl;
    }
    cout<<"Edad: "<<objeto.getEdad()<<endl;
    cout<<"Hijos: "<<objeto.getHijos();
}
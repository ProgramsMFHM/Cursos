#include <iostream>
using namespace std;

//Clase mamifero
class mamifero{
    private:
        string colorDePelo;
        int edad;
        string especie;
        int hijos;
    public:
        void contructor(string, int, string, int);
        //Setters
        void setcolorDePelo(string ColorDePelo);
        void setEdad(int Edad);
        void setEspecie(string Especie);
        void setHijos(int Hijos);
        //Getters
        string getColorDePelo();
        int getEdad();
        string getEspecie();
        int getHijos();
};

void mamifero::contructor(string Color, int Edad, string Especie, int Hijos){
    colorDePelo=Color;
    edad=Edad;
    especie=Especie;
    hijos=Hijos;
}

//Setters
void mamifero::setcolorDePelo(string ColorDePelo){
    colorDePelo=ColorDePelo;
}

void mamifero::setEdad(int Edad){
    edad=Edad;
}

void mamifero::setEspecie(string Especie){
    especie=Especie;
}

void mamifero::setHijos(int Hijos){
    hijos=Hijos;
}

//Getters
string mamifero::getColorDePelo(){
    return colorDePelo;
}

int mamifero::getEdad(){
    return edad;
}

string mamifero::getEspecie(){
    return especie;
}

int mamifero::getHijos(){
    return hijos;
}

//Función mostrar_mamifero
void mostrar_mamifero(mamifero objeto){
    cout<<"Su "<<objeto.getEspecie()<<" tiene la siguiente informacion: "<<endl;
    cout<<"Especie: "<<objeto.getEspecie()<<endl;
    cout<<"Color de pelaje: "<<objeto.getColorDePelo()<<endl;
    cout<<"Edad: "<<objeto.getEdad()<<endl;
    cout<<"Hijos: "<<objeto.getHijos();
}
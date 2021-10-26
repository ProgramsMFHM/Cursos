#include <iostream>
using namespace std;

//Clase ave
class ave{
    private:
        string colorDePlumas;
        int edad=0;
        string especie;
        int hijos=0;
    public:
        void contructor(string, int, string, int);
        //Setters
        void setcolorDePlumas(string colorDePlumas);
        void setEdad(int Edad);
        void setEspecie(string Especie);
        void setHijos(int Hijos);
        //Getters
        string getColorDePlumas();
        int getEdad();
        string getEspecie();
        int getHijos();
};

void ave::contructor(string Color, int Edad, string Especie, int Hijos){
    colorDePlumas=Color;
    edad=Edad;
    especie=Especie;
    hijos=Hijos;
}

//Setters
void ave::setcolorDePlumas(string ColorDePlumas){
    colorDePlumas=ColorDePlumas;
}

void ave::setEdad(int Edad){
    edad=Edad;
}

void ave::setEspecie(string Especie){
    especie=Especie;
}

void ave::setHijos(int Hijos){
    hijos=Hijos;
}

//Getters
string ave::getColorDePlumas(){
    return colorDePlumas;
}

int ave::getEdad(){
    return edad;
}

string ave::getEspecie(){
    return especie;
}

int ave::getHijos(){
    return hijos;
}

//Función mostrar_ave
void mostrar_ave(ave objeto){
    cout<<"Su "<<objeto.getEspecie()<<" tiene la siguiente informacion: "<<endl;
    cout<<"Especie: "<<objeto.getEspecie()<<endl;
    cout<<"Color de plumas: "<<objeto.getColorDePlumas()<<endl;
    cout<<"Edad: "<<objeto.getEdad()<<endl;
    cout<<"Hijos: "<<objeto.getHijos();
}
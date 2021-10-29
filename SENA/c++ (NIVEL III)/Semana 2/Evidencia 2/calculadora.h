#include <math.h>
#include <iostream>
using namespace std;
class calculadora{
    private:
        double suma, resta, multiplicacion, division;
        long double potencia;
        int entero[3];
        double decimal[3];
    public:
        //constructores
        calculadora();
        calculadora(int a, int b);
        calculadora(int a, int b, int c);
        calculadora(double a, double b);
        calculadora(double a, double b, double c);

        //metodos
        void operaciones(int numero1, int numero2);
        void operaciones(int numero1, int numero2, int numero3);
        void operaciones(double numero1, double numero2);
        void operaciones(double numero1, double numero2, double numero3);

        //Getters
        int getEntero1();
        int getEntero2();
        int getEntero3();
        double getDecimal1();
        double getDecimal2();
        double getDecimal3();
};

//constructores
calculadora::calculadora(){
    for (int i = 0; i < 3; i++)
    {
        entero[i]=0;
        decimal[i]=0;
    }
}

calculadora::calculadora(int a, int b){
    entero[0]=a;
    entero[1]=b;
    entero[2]=0;
}

calculadora::calculadora(int a, int b, int c){
    entero[0]=a;
    entero[1]=b;
    entero[2]=c;
}

calculadora::calculadora(double a, double b){
    decimal[0]=a;
    decimal[1]=b;
    decimal[2]=0;
}

calculadora::calculadora(double a, double b, double c){
    decimal[0]=a;
    decimal[1]=b;
    decimal[2]=c;
}

//metodos
void calculadora::operaciones(int numero1, int numero2){
    suma=numero1+numero2;
    resta=numero1-numero2;
    multiplicacion=numero1*numero2;
    division=numero1/numero2;
    potencia=pow(numero1,numero2);

    cout<<"Los valores de las operaciones para los numeros: "<<numero1<<" y "<<numero2<<" son las siguientes:\n\n";
    cout<<numero1<<" + "<<numero2<<" = "<<suma<<endl;
    cout<<numero1<<" - "<<numero2<<" = "<<resta<<endl;
    cout<<numero1<<" * "<<numero2<<" = "<<multiplicacion<<endl;
    cout<<numero1<<" / "<<numero2<<" = "<<division<<endl;
    cout<<numero1<<" ^ "<<numero2<<" = "<<llround(potencia)<<endl;
}

void calculadora::operaciones(int numero1, int numero2, int numero3){
    suma=numero1+numero2+numero3;
    resta=numero1-numero2-numero3;
    multiplicacion=numero1*numero2*numero3;
    division=(numero1/numero2)/numero3;
    potencia=pow(numero1,(numero2*numero3));

    cout<<"Los valores de las operaciones para los numeros: "<<numero1<<", "<<numero2<<" y "<<numero3<<" son las siguientes:\n\n";
    cout<<numero1<<" + "<<numero2<<" + "<<numero3<<" = "<<suma<<endl;
    cout<<numero1<<" - "<<numero2<<" - "<<numero3<<" = "<<resta<<endl;
    cout<<numero1<<" * "<<numero2<<" * "<<numero3<<" = "<<multiplicacion<<endl;
    cout<<"("<<numero1<<" / "<<numero2<<") / "<<numero3<<" = "<<division<<endl;
    cout<<"("<<numero1<<" ^ "<<numero2<<") ^ "<<numero3<<" = "<<llround(potencia)<<endl;
}

void calculadora::operaciones(double numero1, double numero2){
    suma=numero1+numero2;
    resta=numero1-numero2;
    multiplicacion=numero1*numero2;
    division=numero1/numero2;
    potencia=pow(numero1,numero2);

    cout<<"Los valores de las operaciones para los numeros: "<<numero1<<" y "<<numero2<<" son las siguientes:\n\n";
    cout<<numero1<<" + "<<numero2<<" = "<<suma<<endl;
    cout<<numero1<<" - "<<numero2<<" = "<<resta<<endl;
    cout<<numero1<<" * "<<numero2<<" = "<<multiplicacion<<endl;
    cout<<numero1<<" / "<<numero2<<" = "<<division<<endl;
    cout<<numero1<<" ^ "<<numero2<<" = "<<potencia<<endl;
}

void calculadora::operaciones(double numero1, double numero2, double numero3){    suma=numero1+numero2+numero3;
    resta=numero1-numero2-numero3;
    multiplicacion=numero1*numero2*numero3;
    division=(numero1/numero2)/numero3;
    potencia=pow(numero1,(numero2*numero3));

    cout<<"Los valores de las operaciones para los numeros: "<<numero1<<", "<<numero2<<" y "<<numero3<<" son las siguientes:\n\n";
    cout<<numero1<<" + "<<numero2<<" + "<<numero3<<" = "<<suma<<endl;
    cout<<numero1<<" - "<<numero2<<" - "<<numero3<<" = "<<resta<<endl;
    cout<<numero1<<" * "<<numero2<<" * "<<numero3<<" = "<<multiplicacion<<endl;
    cout<<"("<<numero1<<" / "<<numero2<<") / "<<numero3<<" = "<<division<<endl;
    cout<<"("<<numero1<<" ^ "<<numero2<<") ^ "<<numero3<<" = "<<potencia<<endl;
}

//Getters
int calculadora::getEntero1(){
    return entero[0];
}

int calculadora::getEntero2(){
    return entero[1];
}

int calculadora::getEntero3(){
    return entero[2];
}

double calculadora::getDecimal1(){
    return decimal[0];
}

double calculadora::getDecimal2(){
    return decimal[1];
}

double calculadora::getDecimal3(){
    return decimal[2];
}
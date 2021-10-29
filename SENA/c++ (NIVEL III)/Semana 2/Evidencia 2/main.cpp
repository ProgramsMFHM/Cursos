#include"calculadora.h"
#include<cstdlib>
#include<iostream>
using namespace std;

int main(){
    bool comprobante;
    int aInt, bInt, cInt;
    double aDouble, bDouble, cDouble;
    int cantidadDeDatos;

    system("cls");
    cout<<"Cuantos numeros va a ingresar (2 o 3)?: ";
    cin>>cantidadDeDatos;
    cout<<"Va a ingresar numeros enteros (1) decimales (0)?: ";
    cin>>comprobante;

    if(cantidadDeDatos<=2){ //Si son 2 numeros
        if(comprobante==true){ //Si son enteros
            cout<<"Cual es el primer numero?: ";
            cin>>aInt;
            cout<<"Cual es el segundo numero?: ";
            cin>>bInt;
            calculadora numeros(aInt, bInt);
            numeros.operaciones(numeros.getEntero1(), numeros.getEntero2());
        }
        else{ //Si son decimales
            cout<<"Cual es el primer numero?: ";
            cin>>aDouble;
            cout<<"Cual es el segundo numero?: ";
            cin>>bDouble;
            calculadora numeros(aDouble, bDouble);
            numeros.operaciones(numeros.getDecimal1(), numeros.getDecimal2());
        }
    }
    else{ //Si son 3 numeros
        if(comprobante==true){ //Si son enteros
            cout<<"Cual es el primer numero?: ";
            cin>>aInt;
            cout<<"Cual es el segundo numero?: ";
            cin>>bInt;
            cout<<"Cual es el tercer numero?: ";
            cin>>cInt;
            calculadora numeros(aInt, bInt, cInt);
            numeros.operaciones(numeros.getEntero1(), numeros.getEntero2(), numeros.getEntero3());
        }
        else{ //Si son decimales
            cout<<"Cual es el primer numero?: ";
            cin>>aDouble;
            cout<<"Cual es el segundo numero?: ";
            cin>>bDouble;
            cout<<"Cual es el terccer numero?: ";
            cin>>cDouble;
            calculadora numeros(aDouble, bDouble, cDouble);
            numeros.operaciones(numeros.getDecimal1(), numeros.getDecimal2(), numeros.getDecimal3());
        }
    }
    cout<<endl<<endl<<"Gracias por usar el programa.\nCreador: Milton Fabricio Hernandez Morales."<<endl;
    system("PAUSE");
    return 0;
}
#include "mamifero.h"
#include "ave.h"
#include "reptil.h"
#include <iostream>
using namespace std;

int main(){
    //Variables
    string especie, color;
    int edad, hijos;
    bool escamas;
    int cantidadDeMamiferos, cantidadDeAves, CantidadDeReptiles;

    //Inicio
    cout<<"\t\t\tBienvenid@ a su programa de animales\n\n";
    cout<<"Cuantos mamiferos ingresara?: ";
    cin>>cantidadDeMamiferos;
    cout<<"Cuantas aves ingresara?: ";
    cin>>cantidadDeAves;
    cout<<"Cuantos reptiles ingresara?: ";
    cin>>CantidadDeReptiles;

    //Objetos
    mamifero mamiferos [cantidadDeMamiferos];
    ave aves [cantidadDeAves];
    reptil reptiles [CantidadDeReptiles];

    //Llenando objetos
    for (int i = 0; i < cantidadDeMamiferos; i++){
        cout<<"De que especie es el mamifero "<<i+1<<"?: ";
        cin>>especie;
        cout<<"De que color tiene el pelaje su "<<especie<<"?: ";
        cin>>color;
        cout<<"Cuantos anios tiene su "<<especie<<"?: ";
        cin>>edad;
        cout<<"Cuantos hijos tiene su "<<especie<<"?: ";
        cin>>hijos;
        mamiferos[i].contructor(color, edad, especie, hijos);
        cout<<endl<<endl;
    }

    for (int i = 0; i < cantidadDeAves; i++){
        cout<<"De que especie es el Ave "<<i+1<<"?: ";
        cin>>especie;
        cout<<"De que color tiene las plumas su "<<especie<<"?: ";
        cin>>color;
        cout<<"Cuantos anios tiene su "<<especie<<"?: ";
        cin>>edad;
        cout<<"Cuantos hijos tiene su "<<especie<<"?: ";
        cin>>hijos;
        aves[i].contructor(color, edad, especie, hijos);
        cout<<endl<<endl;
    }

    for (int i = 0; i < CantidadDeReptiles; i++){

        char aux;

        cout<<"De que especie es el Reptil "<<i+1<<"?: ";
        cin>>especie;

        cout<<"Cuantos anios tiene su "<<especie<<"?: ";
        cin>>edad;
        cout<<"Cuantos hijos tiene su "<<especie<<"?: ";
        cin>>hijos;
        cout<<"Tu "<<especie<<" tiene escamas? (Si='1' No='0'): ";
        cin>>aux;
        if (aux=='1'){
            escamas=true;
            cout<<"De que color tiene las escamas su "<<especie<<"?: ";
            cin>>color;
        }
        else{
            reptiles[i].setEscamas(false);
            color="No";
        }
        reptiles[i].contructor(color, edad, especie, hijos, escamas);
        cout<<endl<<endl;
    }

    //Mostrando objetos
    cout<<"\t\t=======================================\n";
    cout<<"\t\t==Informacion de especies ingresadas:==\n";
    cout<<"\t\t=======================================\n";
    for (int i = 0; i < cantidadDeMamiferos; i++){
        mostrar_mamifero(mamiferos[i]);
        mamiferos[i].getEdad();
        cout<<endl<<endl;
    }
    for (int i = 0; i < cantidadDeAves; i++){
        mostrar_ave(aves[i]);
        cout<<endl;
    }
    for (int i = 0; i < CantidadDeReptiles; i++){
        mostrar_reptil(reptiles[i]);
        cout<<endl;
    }

    return 0;
}
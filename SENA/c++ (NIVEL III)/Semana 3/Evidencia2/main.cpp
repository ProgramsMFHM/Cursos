//Archivos de cabecera
#include"vendedor.h"
#include"promedioVentasMes.h"
//Funciones io
#include <iomanip>
#include<iostream>
using namespace std;

int main()
{
    int cantidadVendedores;
    long double promedios[4];
    string nombre;

    cout<<"\t\tBienvenido o Bienvenida a su programa para registrar ventas de sus vendedores:\n\n";

    cout<<"Cuantos vendedores va a evaluar?: ";
    cin>>cantidadVendedores;

    vendedor vendedores[cantidadVendedores];

    for (int i = 0; i < cantidadVendedores; i++)
    {
        cout<<"Cual es el nombre del vendedor #"<<i+1<<"?: ";
        cin>>nombre;
        cout<<"\n\t\t==Mes 1==";
        promedios[0]=promedioVentasMes(1, nombre);
        cout<<"\n\t\t==Mes 2==";
        promedios[1]=promedioVentasMes(2, nombre);
        cout<<"\n\t\t==Mes 3==";
        promedios[2]=promedioVentasMes(3, nombre);
        cout<<"\n\t\t==Mes 4==";
        promedios[3]=promedioVentasMes(4, nombre);
        vendedores[i].datosVendedor(nombre, promedios);
    }

    system("cls");

    cout<<"\t\t\t========================\n";
    cout<<"\t\t\t====Datos vendedores====\n";
    cout<<"\t\t\t========================\n";
    cout<<endl;

    cout<<setw(10)<<"Nombre"<<"\tPromedio mes 1\tPromedio mes 2\tPromedio mes 3\tPromedio mes 4\tPromedio total";

    for (int i = 0; i < cantidadVendedores; i++)
    {
        cout<<endl;
        cout<<setw(10)<<vendedores[i].getNombre();
        cout<<"\t";
        cout<<setw(14)<<vendedores[i].getPromedioMes1();
        cout<<"\t";
        cout<<setw(14)<<vendedores[i].getPromedioMes2();
        cout<<"\t";
        cout<<setw(14)<<vendedores[i].getPromedioMes3();
        cout<<"\t";
        cout<<setw(14)<<vendedores[i].getPromedioMes4();
        cout<<"\t";
        cout<<setw(14)<<vendedores[i].getPromedioGeneral();
    }

    cout<<endl<<"\nGracias por usar el programa\n\nCreador: Milton Fabricio Hernandez Morales\n\n";
    system("pause");
    return 0;
}
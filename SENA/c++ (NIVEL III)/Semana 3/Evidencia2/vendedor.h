#include<iostream>
using namespace std;

class vendedor{
    private:
        string nombre;
        long double promedioVentas[5];
    public:
        //constructor
        vendedor();
        void datosVendedor(string, long double[4]);
        //getters
        string getNombre();
        long double getPromedioMes1();
        long double getPromedioMes2();
        long double getPromedioMes3();
        long double getPromedioMes4();
        long double getPromedioGeneral();
};

//constructor
vendedor::vendedor()
{
    nombre="Vacio";
    for (int i = 0; i < 5; i++)
    {
        promedioVentas[i]=0;
    }
}

void vendedor::datosVendedor(string nom, long double arreglo[4])
{
    nombre=nom;
    for (int i = 0; i < 4; i++)
    {
        promedioVentas[i]=arreglo[i];
    }
}

//getters
string vendedor::getNombre()
{
    return nombre;
}

long double vendedor::getPromedioMes1()
{
    return promedioVentas[0];
}

long double vendedor::getPromedioMes2()
{
    return promedioVentas[1];
}

long double vendedor::getPromedioMes3()
{
    return promedioVentas[2];
}

long double vendedor::getPromedioMes4()
{
    return promedioVentas[3];
}

long double vendedor::getPromedioGeneral()
{
    promedioVentas[4]=((promedioVentas[0]+promedioVentas[1]+promedioVentas[2]+promedioVentas[3])/4);
    return promedioVentas[4];
}


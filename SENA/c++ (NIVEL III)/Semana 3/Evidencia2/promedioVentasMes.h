#include<math.h>
#include<iostream>
using namespace std;

long double promedioVentasMes (int mes, string nombreVendedor)
{
    int cantidadVentas;
    long double promedioVentas=0;

    cout<<endl;
    cout<<"Cuantas ventas hizo "<<nombreVendedor<<" en el mes "<<mes<<"?: ";
    cin>>cantidadVentas;

    if (cantidadVentas>0)
    {
        double ventas[cantidadVentas];

        for (int i = 0; i < cantidadVentas; i++)
        {
            cout<<"Cual es el valor de la venta: "<<i+1<<"?: ";
            cin>>ventas[i];
        }

        for (int i = 0; i < cantidadVentas; i++)
        {
            promedioVentas+=ventas[i];
        }

        promedioVentas/=cantidadVentas;

        cout<<endl;
        return promedioVentas;
    }
    else{
        return 0;
    }
}
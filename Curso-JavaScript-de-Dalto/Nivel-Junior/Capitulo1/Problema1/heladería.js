// Montos disponibles.
let Roberto;
let Pedro;
let Cofla;

//Opciones
let palitoHeladoDeAgua = 0.6;
let palitoHeladoDeCrema = 1;
let bombónHeladix = 1.6;
let bombónHeladovich = 1.7;
let bombónHelardo = 1.8;
let poteConfites = 2.9;
let poteUnCuartoKilo = 2.9;

//Rellenar variables
Roberto = prompt("Cuanto dinero trae Roberto?: ");

Pedro = prompt("Cuanto dinero trae Pedro?: ");

Cofla = prompt("Cuanto dinero trae Cofla?: ");

//Roberto
if (Roberto >= palitoHeladoDeAgua && Roberto < palitoHeladoDeCrema){
    alert(`Roberto, Puedes comprarte un Palito de helado de agua por $ ${palitoHeladoDeAgua} USD`);
}
else if (Roberto >= palitoHeladoDeCrema && Roberto < bombónHeladix){
    alert(`Roberto, Puedes comprarte un palito de helado de crema por $ ${palitoHeladoDeCrema} USD`);
}
else if (Roberto >= bombónHeladix && Roberto < bombónHeladovich){
    alert(`Roberto, Puedes comprarte un bombón de helado marca heladix por $ ${bombónHeladix} USD`)
}
else if (Roberto >= bombónHeladovich && Roberto < bombónHelardo){
    alert(`Roberto, Puedes comprarte un bombón de helado marca heladovich por $ ${bombónHeladovich} USD`)
}
else if (Roberto >= bombónHelardo && Roberto < poteConfites){
    alert(`Roberto, Puedes comprarte un bombón de helado marca helardo por $ ${bombónHelardo} USD`)
}
else if( Roberto >= poteConfites){
    alert(`Roberto, Puedes comprarte un Potecito de helado con confites por $ ${poteConfites} o un Pote de 1/4 KG por el mismo valor.`)
}
else{
    alert("Roberto, No puedes comprar ningún helado, sorry");
}

//Pedro
if (Pedro >= palitoHeladoDeAgua && Pedro < palitoHeladoDeCrema){
    alert(`Pedro, Puedes comprarte un Palito de helado de agua por $ ${palitoHeladoDeAgua} USD`);
}
else if (Pedro >= palitoHeladoDeCrema && Pedro < bombónHeladix){
    alert(`Pedro, Puedes comprarte un palito de helado de crema por $ ${palitoHeladoDeCrema} USD`);
}
else if (Pedro >= bombónHeladix && Pedro < bombónHeladovich){
    alert(`Pedro, Puedes comprarte un bombón de helado marca heladix por $ ${bombónHeladix} USD`)
}
else if (Pedro >= bombónHeladovich && Pedro < bombónHelardo){
    alert(`Pedro, Puedes comprarte un bombón de helado marca heladovich por $ ${bombónHeladovich} USD`)
}
else if (Pedro >= bombónHelardo && Pedro < poteConfites){
    alert(`Pedro, Puedes comprarte un bombón de helado marca helardo por $ ${bombónHelardo} USD`)
}
else if( Pedro >= poteConfites){
    alert(`Pedro, Puedes comprarte un Potecito de helado con confites por $ ${poteConfites} o un Pote de 1/4 KG por el mismo valor.`)
}
else{
    alert("Pedro, No puedes comprar ningún helado, sorry");
}

//Cofla
if (Cofla >= palitoHeladoDeAgua && Cofla < palitoHeladoDeCrema){
    alert(`Cofla, Puedes comprarte un Palito de helado de agua por $ ${palitoHeladoDeAgua} USD; Y como me lo pediste te lo digo, te sobran: $ ${Cofla-palitoHeladoDeAgua} USD`);
}
else if (Cofla >= palitoHeladoDeCrema && Cofla < bombónHeladix){
    alert(`Cofla, Puedes comprarte un palito de helado de crema por $ ${palitoHeladoDeCrema} USD; Y como me lo pediste te lo digo, te sobran: $ ${Cofla-palitoHeladoDeCrema} USD`);
}
else if (Cofla >= bombónHeladix && Cofla < bombónHeladovich){
    alert(`Cofla, Puedes comprarte un bombón de helado marca heladix por $ ${bombónHeladix} USD; Y como me lo pediste te lo digo, te sobran: $ ${Cofla-bombónHeladix} USD`)
}
else if (Cofla >= bombónHeladovich && Cofla < bombónHelardo){
    alert(`Cofla, Puedes comprarte un bombón de helado marca heladovich por $ ${bombónHeladovich} USD; Y como me lo pediste te lo digo, te sobran: $ ${Cofla-bombónHeladovich} USD`)
}
else if (Cofla >= bombónHelardo && Cofla < poteConfites){
    alert(`Cofla, Puedes comprarte un bombón de helado marca helardo por $ ${bombónHelardo} USD; Y como me lo pediste te lo digo, te sobran: $ ${Cofla-bombónHelardo} USD`)
}
else if( Cofla >= poteConfites){
    alert(`Cofla, Puedes comprarte un Potecito de helado con confites por $ ${poteConfites} o un Pote de 1/4 KG por el mismo valor.; Y como me lo pediste te lo digo, te sobran: $ ${Cofla-poteConfites} USD`)
}

else{
    alert("Cofla, No puedes comprar ningún helado, sorry");
}
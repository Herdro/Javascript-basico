//General Arrays
var frutas = ["Manzana", "Pálatano", "Cereza", "Fresa"];

console.log(frutas[3]);

//Modificar arrays
    //Agregar datos al final del array
    var masFrutas = frutas.push("Uvas");
    //Quitar datos
    var ultimo = frutas.pop("Uvas");
    //Agregar datos al principio del array
    var nuevaLongitud = frutas.unshift("Uvas");
    //Quitar primer datos
    var borrarFruta = frutas.shift("Uvas");
    //Consultar posición de un dato
    var posicion = frutas.indexOf("cereza");
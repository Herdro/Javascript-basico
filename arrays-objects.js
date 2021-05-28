var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];
//filtrar array
var articulosFiltrado = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
})
//Extraer tipo de dato
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
})
//Encontrar
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
})
//filtrar array
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
//
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

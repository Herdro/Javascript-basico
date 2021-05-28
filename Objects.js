//crear un objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    datalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
//Acceder a objeto
miAuto.marca
//Acceder a metodo
miAuto.datalleDelAuto();
//Crear objetos con una función constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autoNuevo = new auto("Tesla", "Model 3", 2020);

//Reto juego de piedra, papel o tijeras
var user = "Piedra";
var cpu = "Papel";
var resultado = match();

function match () {
if ((user == "Piedra" && cpu == "Piedra") || (user == "Papel" && cpu == "Papel") || (user == "Tijeras" && cpu == "Tijeras")) {
        return resultado = "Empate";
    } else if ((user == "Piedra" && cpu == "Tijeras") || (user == "Papel" && cpu == "Piedra") || (user == "Tijeras" && cpu == "Papel")){
        return resultado = "User Win";
    } else if ((user == "Piedra" && cpu == "Papel") || (user == "Papel" && cpu == "Tijeras") || (user == "Tijeras" && cpu == "Piedra")) {
        return resultado = "CPU Win";
    } else {
        return resultado = "Valores Erroneos";
    }
}
console.log(resultado);
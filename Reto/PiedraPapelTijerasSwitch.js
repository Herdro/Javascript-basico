//Juego piedra papel o tijeras con switch
var user = "Papel";
var cpu = "Piedra";

switch (user) {
    case "Piedra":
        if (cpu == "Piedra") {
            console.log("Empate");
        } else if (cpu == "Papel") {
            console.log("CPU Win");
        } else if (cpu == "Tijeras") {
            console.log("User Win");
        } else {
            console.log("Valor erroneo");
        } break;
    case "Papel":
        if (cpu == "Piedra") {
            console.log("User Win");
        } else if (cpu == "Papel") {
            console.log("Empate");
        } else if (cpu == "Tijeras") {
            console.log("CPU Win");
        } else {
            console.log("Valor erroneo");
        } break;
    case "Tijeras":
        if (cpu == "Piedra") {
            console.log("CPU Win");
        } else if (cpu == "Papel") {
            console.log("User Win");
        } else if (cpu == "Tijeras") {
            console.log("Empate");
        } else {
            console.log("Valor erroneo");
        } break;
    default:
        console.log("Valor erroneo")
}
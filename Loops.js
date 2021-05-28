//Crear array
var estudiantes = [
    "Maria",
    "Sergio",
    "Rosa",
    "Daniel"
]
//crear función a ejecutar
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
//Loop con for
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
//Loop con for of
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
//Loop con while
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
function mostrar()
{
//tomo la edad  

var edad;
var mensaje;

edad = document.getElementById("edad").value //tomo la edad 
if (edad<13) {
    alert("Es niño")
}
if (edad>=13 && edad<=17) {
    alert("Es adolescente")
}
if (edad>=18) {
    alert("Es adulto")
}


}//FIN DE LA FUNCIÓN
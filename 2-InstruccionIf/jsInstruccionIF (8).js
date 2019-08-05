function mostrar()
{
//tomo la edad  
var edad;
var estadoc;
var estadof;


edad = document.getElementById("edad").value
estadoc = document.getElementById("estadoCivil").value
estadof="Soltero"

if(edad>=18 && estadoc === estadof){
alert("Es soltero y no es menor")

}
}
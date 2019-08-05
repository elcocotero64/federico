/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numuno;
var numdos;
var resultado
var dato1;
var dato2;

numuno = document.getElementById("numeroUno").value
numdos = document.getElementById("numeroDos").value

dato1 = parseInt(numuno)
dato2= parseInt(numdos)

resultado = dato1+dato2;

alert("la suma es "+resultado)


}


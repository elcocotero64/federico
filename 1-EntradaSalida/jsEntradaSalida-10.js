/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

    var num1;
    var numero1;
    var resultado;
    var total;
    
    num1 = document.getElementById("importe").value
    numero1= parseInt(num1)
    resultado = (numero1*0.25)
    
    total = (numero1-resultado)

document.getElementById("resultado").value  = total
	
}

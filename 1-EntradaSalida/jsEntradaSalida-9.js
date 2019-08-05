/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var num1;
    var numero1;
    var resultado;
    var total;
    
    num1 = document.getElementById("sueldo").value
    numero1= parseInt(num1)
    resultado = (numero1*0.10)
    
    total = (numero1+resultado)

document.getElementById("resultado").value  = total
	
}

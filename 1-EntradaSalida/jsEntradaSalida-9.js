/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var resultado;
    
    
    

    sueldo=prompt("Ingrese un numero");
    

    document.getElementById('sueldo').value=sueldo;
    document.getElementById('resultado').value=resultado;

    aumento=parseInt(sueldo) * 10/100;
    resultado=parseInt(sueldo) + parseInt(aumento);

      alert("mostrar aumento" + resultado);



	
}

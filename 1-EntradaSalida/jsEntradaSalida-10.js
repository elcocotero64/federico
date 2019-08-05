/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var descuento;
    var resultado;

    //importe=prompt("ingrese importe");
    importe=document.getElementById('importe').value;
    
    descuento=parseInt(importe)* 25/100;
    resultado=parseInt(importe)-parseInt(descuento);
    document.getElementById('resultado').value=resultado;
    

      alert("Resultado " +resultado);

      //revisar porque no funciona


	
}

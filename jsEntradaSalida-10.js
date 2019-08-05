/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var descuento;
    var resultado;

    importe=prompt("ingrese importe");
    

    document.getElementById('importe').value=importe;
    
    descuento=parseInt(importe)*0.25;
    document.getElementById('resultado').value=resultado;
    resultado=parseInt(importe)-parseInt(descuento);

      alert(""+resultado);

      //revisar porque no funciona
      //Listoooooo

	
}

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoterreno;
    var anchoterreno;
    var radioterreno;
    var alambre;

    largoterreno=prompt("Ingrese el largo");
    anchoterreno=prompt("ingrese el ancho");

    document.getElementById('Largo').value=largoterreno;
    document.getElementById('Ancho').value=anchoterreno;
    document.getElementById('Radio').value=radioterreno;

    radioterreno=parseInt(largoterreno)*parseInt(anchoterreno);
    alambre=parseInt(radioterreno*3);



       alert("Cantidad de alambre a comprar "+alambre + " Metros");


}
function Circulo () 
{ 
   
   
    var radioterreno;
    var area;
    
    radioterreno=prompt("Ingrese el radio del terreno");

    
    document.getElementById('Ancho').value=area;
    document.getElementById('Radio').value=radioterreno;
    
    
    area=parseInt(radioterreno*Math.PI)*3;



       alert("Cantidad de alambre a comprar "+area + " Metros");
	
}
function Materiales () 
{
    var anchoterreno;
    var largoterreno;
    var radioterreno;
    var bolsascemento;
    var bolsascal;
    
    largoterreno=prompt("Ingrese el largo");
    anchoterreno=prompt("Ingrese el ancho");
   

    document.getElementById('Ancho').value=anchoterreno;
    document.getElementById('Largo').value=largoterreno;
    document.getElementById('Radio').value=radioterreno;

    radioterreno=parseInt(anchoterreno)*parseInt(largoterreno);
    bolsascemento=parseInt(radioterreno)*2;
    bolsascal=parseInt(radioterreno)*3;

    

        alert("Se necesitan  "+bolsascemento +" bolsas de cemento y "+bolsascal +" bolsas de cal" );




	
}
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var producto1;
    var producto2;
    var producto3;
    var sumaproductos;
  

    producto1=prompt("Ingrese precio");
    producto2=prompt("Ingrese precio");
    producto3=prompt("Ingrese precio");
    

    document.getElementById('PrecioUno').value=producto1;
    document.getElementById('PrecioDos').value=producto2;
    document.getElementById('PrecioTres').value=producto3;

    sumaproductos=parseInt(producto1)+parseInt(producto2)+parseInt(producto3);

       alert(+sumaproductos);


}
function Promedio () 
{
    var producto1;
    var producto2;
    var producto3;
    var sumaproductos;
    var promedio;
  

    producto1=prompt("Ingrese precio");
    producto2=prompt("Ingrese precio");
    producto3=prompt("Ingrese precio");
    

    document.getElementById('PrecioUno').value=producto1;
    document.getElementById('PrecioDos').value=producto2;
    document.getElementById('PrecioTres').value=producto3;

    sumaproductos=parseInt(producto1)+parseInt(producto2)+parseInt(producto3);
    promedio=(sumaproductos/3);

    alert("el promedio es : "+promedio);

	
}
function PrecioFinal () 
{
    var producto1;
    var producto2;
    var producto3;
    var sumaproductos;
    var preciofinal;
  

    producto1=prompt("Ingrese precio");
    producto2=prompt("Ingrese precio");
    producto3=prompt("Ingrese precio");
    

    document.getElementById('PrecioUno').value=producto1;
    document.getElementById('PrecioDos').value=producto2;
    document.getElementById('PrecioTres').value=producto3;

    sumaproductos=parseInt(producto1)+parseInt(producto2)+parseInt(producto3);
    preciofinal=(sumaproductos*1.21);

    alert( preciofinal);
	
}
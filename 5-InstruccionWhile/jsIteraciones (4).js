function mostrar()
{

	/*var numero= prompt("ingrese un número entre 0 y 9.");
	numero=parseInt(numero);

	while(isNaN(numero))
	{
		numero=prompt("Ingrese un numero entre 0 y 9");
	}
	while(numero<0 || numero>9)

	{
		
		numero=prompt("Ingrese un numero entre 0 y 9");
	}*/
	do{
		var numero= prompt("ingrese un número entre 0 y 9.");
		numero=parseInt(numero);

	}
	while(isNaN(numero)||(numero<0 || numero>9));


}//FIN DE LA FUNCIÓN
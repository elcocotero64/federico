function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;


	while (respuesta=='si')
	{
		contador++;
		numero=prompt("ingresar numero ");
		numero=parseInt(numero);
		
		
		while(isNaN(numero))
		
		{	
			numero=prompt("Error ingresar numero ");
			numero=parseInt(numero);
			

		}
		acumulador=acumulador+numero; 
		respuesta=prompt("ingrese 'si para continuar");
	}
		
		
		promedio=acumulador/contador;
		alert("El promedio es : "+promedio);
	
	

		


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA Funcion
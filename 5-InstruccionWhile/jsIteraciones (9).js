function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo=0;
	var minimo=0;
	var numero;
	
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("Ingrese un valor valido");
			numero=parseInt(numero);

		}
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
		}

		respuesta=prompt("Desea seguir");
	}

	


document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
			



}//FIN DE LA FUNCIÓN
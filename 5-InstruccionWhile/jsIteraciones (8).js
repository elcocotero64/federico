function mostrar()


{ 
	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	//var acumulador=0;
	var contadorpositivo=0;
	var contadornegativo=0;
	
	var respuesta='si';
 
	
		while(respuesta=='si')
		{
			contador++;
			numero=prompt("ingrese numero");
			numero=parseInt(numero);

			while(isNaN(numero))
			{
				numero=prompt("Error, vuelva a ingresar un numero");
				numero=parseInt(numero);

				
				
			}
			
			if(numero>0)
			{ 
		
				positivo=positivo+numero;

			}
		
				if(numero<0)
				{ 

					negativo=negativo*numero;

				}
				
				
			respuesta=prompt("Desea seguir ponga si");
		
		}
			
		

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
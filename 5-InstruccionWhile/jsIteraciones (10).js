function mostrar()
{

	var contador=0;
	//declarar contadores y variables
	var numero;
	var negativos=0;
	var positivo=0;
	var acumpositivo=0;
	var acumnegativo=0;
	var contadorpositivo=0;
	var contadornegativo=0;
	var cantceros=0;
	var cantpares=0;
	var prompositivo;//no es necesario inicializarla porque al utilizarlo no interesa lo que estaba cargado
	var promnegativos;
	var diferencia;//(positivos-negativos)

	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("Ingrese un valor valido");
			numero=parseInt(numero);
		}
			
		if(numero<0)
		{
			
			negativos=negativos+numero;
			contadornegativo=contadornegativo+1;// es lo mismo que contadornegativo++;
			acumnegativo=acumnegativo+numero;//acumnegativi+=numero;	
		
		}
		
		else
		{
			if(numero>0)
			{
				
				positivo=positivo+numero;
				contadorpositivo=contadorpositivo+1;
				acumpositivo=acumpositivo+numero;
					
			}
			else// si no es nada de lo que esta arriba por descarte es 0
			{
				cantceros=cantceros+1;//le sumo 1 por cada cantidad de su valor// contadorceros++
				
			}
			
		
			
		}
			if(numero%2==0) //si el resto de la division es 0 es par
			{
			cantpares=cantpares+1;//cantidadpares++;
			}
				
		respuesta=prompt("Quiere seguir?");
		
		}
			if(contadorpositivo!=0)
			{
				prompositivo=acumpositivo/contadorpositivo;
				
			}
			else
			{
				prompositivo = "No se ingresaron numeros positivos";

			}
			if(contadornegativo!=0)
			{
				promnegativos=acumnegativo/contadornegativo;

			}
			else
			{
				promnegativos=" No se ingresaron numeros negativos";
			}
		
		
		
		diferencia=(acumpositivo-acumnegativo);
	
		document.write("Suma de negativos "+ negativos + "<br>");
		document.write("Suma de positivos "+ positivo + "<br>");
		document.write("Cantidad de negativos "+ contadornegativo+"<br>" );
		document.write("Cantidad de positivos "+ contadorpositivo+"<br>" );
		document.write("Cantidad de ceros "+ cantceros +"<br>" );
		document.write("Cantidad de numeros pares "+ cantpares +"<br>" );
		document.write("Promedio de positivos "+ prompositivo+"<br>" );
		document.write("Promedio de negativos "+ promnegativos+"<br>" );
		document.write("Diferencia entre positivos y negativos "+ diferencia +"<br>" );
	




}

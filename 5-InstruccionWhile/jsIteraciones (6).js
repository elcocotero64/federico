function mostrar()
{

	/*var contador=0;
	var acumulador=0;
	var numero;
	

	while(contador<5)
	{
		contador++;
		numero=prompt("Ingrese 5 notas");
		numero=parseInt(numero);
		acumulador+=numero

		while(isNaN(numero))
		{
			promedio=acumulador/contador;
		}

	}
	 
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;*/
		var contador=0;
		var acumulador=0;
		var numero;
		do{
			contador++;
			numero=prompt("Ingrese 5 notas");
			numero=parseInt(numero);
			acumulador+=numero
			promedio=acumulador/contador;
			


		}while(isNaN(numero)||(contador<5)) ;
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/5;
		
		

}//FIN DE LA FUNCIÓN
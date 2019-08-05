function mostrar()
{

	var numero;
	var num;

	numero = prompt("ingrese un número entre 0 y 10.");
	num = parseInt(numero)

	while (num<0 || num>9)
	{
		numero = prompt("ingrese un número entre 0 y 10.");
		num = parseInt(numero)
	}
	document.getElementById("Numero").value = num


}//FIN DE LA FUNCIÓN
function mostrar()
{
	
	var r= Math.round(Math.random()*10)	
// si da 0 primero incrementa 1 y entra en las comparaciones 
if (r==0){
r = r+1
if(r<4)
{
alert("Vamos, la proxima se puede")
}
if(r>4 && r<9){
alert("APROBÓ")
}
if(r==9 || r===10)
{
alert("EXCELENTE")

}
// si da mayor a 0 compara directamente
}
else{
	if(r<4)
	{
	alert("Vamos, la proxima se puede")
	}
	if(r>4 && r<9){
	alert("APROBÓ")
	}
	if(r==9 || r===10)
	{
	alert("EXCELENTE")
	
	}


}


}//FIN DE LA FUNCIÓN
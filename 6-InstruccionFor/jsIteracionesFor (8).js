function mostrar()
{
<<<<<<< HEAD
    //var numero;
    //var i;
=======
    var numero;
    var i=1;
>>>>>>> aba06a12452537c15a336f1979fa2cfeb106085c
    numero=prompt("Ingrese un numero");
    var contdivisibles=0;
    
    for(i=1 ; i<=numero; i++ )
    {
<<<<<<< HEAD
        if(numero/1==numero && numero/numero==1)
        {
            
            alert("ES NUMERO PRIMO");
        }
        else
        {
            alert("no es numero primo");
        }

    
    }*/

       for (var primos = 1; primos <= primos; primos++) {
	if (primos % 2 == 0) {
		document.write(primos+"<br>");
	}else {
		console.log(primos+': No es primo');
	}
}
=======
        console.log(i);
        
        
        if(numero%i==0 )//si numero es divisible por contador y su resto es 0
        {
            
            contdivisibles++; 
            
        }
         
        
    }
    if(contdivisibles==2)//si contador de divisores es 2 es numero primo
    {
        alert("ES NUMERO PRIMO");
    }
    else{
        alert("No es primo");
    }
       
>>>>>>> aba06a12452537c15a336f1979fa2cfeb106085c
    
        
        


}//FIN DE LA FUNCIÓN
/* por consola evaluada todos los numeros hasta llegar al numero
 ingresado. en consola con sources poner un break point
 (posarce en una fila y darle click) chequeamos posandonos en cada
  variable nos da su valor y a medida que corre el programa
   su incremento. nos desplazamos con f10*/
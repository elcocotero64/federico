function mostrar()
{
    var numero;
    var letra;
    var respuesta="si";
    var cantidadpares=0;
    var cantidadimpares=0;
    var cantidadceros=0;
    var promedio;
    var positivo=0;
    var negativo=0;
    var contadorPositivo=0;
    var contadorNegativo=0;
    var acumuladorPositivo=0;
    var acumuladorNegativo=0;
    var sumaNegativos;
    var maximo=0;
    var minimo=0;
    var letraMaximo=0;
    var letraMinimo=0;
    var contador=0;
    


    while(respuesta=="si")
    {
       
        letra=prompt("Ingrese letra");
       
        
        

        while(!isNaN(letra) || letra.length>1)  
        {
            letra=prompt("Ingrese una letra valida");
        }

        numero=prompt("Ingrese un numero entre -100 y 100");
        numero=parseInt(numero);
        
       
        
        while(isNaN(numero) || (numero<-100 || numero>100))//validamos lo contrario
        { 
            numero=prompt("Ingrese un numero valido");

        }
    
    
        if(numero%2==0)
        {   
            cantidadpares++;
        
        }
        else
        {
            cantidadimpares++;
        }

        if(numero==0)
        {
            cantidadceros++;
        }
        else{
            if(numero>0)
            {
                contadorPositivo++;
                positivo=positivo+numero;
                acumuladorPositivo=acumuladorPositivo+numero;
            }
            else
            {
                contadorNegativo++;
                negativo=negativo+numero;
                acumuladorNegativo=acumuladorNegativo+numero;
            }   
            }
    
                if(contador==0 || numero>maximo)
                {
                    maximo=numero;
                    letraMaximo=letra;
                }
                if(contador==0 || numero<minimo)
                {
                    
                    minimo=numero;
                    letraMinimo=letra;
                }

    contador++;
    respuesta=prompt("Quiere seguir ponga si o no");
    //dentro del while pregunta despues de chequear
    //y fuera del while pregunta primero.
     }
        promedio=acumuladorPositivo/contadorPositivo;
        sumaNegativos=acumuladorNegativo;
    
    document.write("Cantidad de numeros pares "+cantidadpares+ "<br>");
    document.write("Cantidad de numeros Impares "+cantidadimpares+"<br>");
    document.write("Cantidad de Ceros "+cantidadceros+"<br>");
    document.write("El promedio de los numeros positivos es : "+promedio+"<br>");
    document.write("La suma de los negativos es : "+sumaNegativos+"<br>");
    document.write("El numero maximo es : "+maximo+"<br>");
    document.write("El numero minimo es : "+minimo+"<br>");
    document.write("La letra del maximo es : " +letraMaximo+"<br>")
    document.write("La letra del minimo es : " +letraMinimo+"<br>");
}

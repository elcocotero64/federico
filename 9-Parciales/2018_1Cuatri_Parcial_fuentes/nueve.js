function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta= "si";
    var cantTemperaturasPares=0;
    var productopesado;
    var productomenospesado;
    var contadorpeso=0;
    var contador=0;
    var maximo=0;
    var minimo=0;

    while(respuesta=="si")
    {
        marca=prompt("Ingrese marca");
        peso=prompt("Ingrese peso");
        peso=parseInt(peso);
       
        while(isNaN(peso) || (peso<0 || peso>100))
        {
            peso=prompt("Ingrese un peso valido");
        }

        temperatura=prompt("Ingrese temperatura");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura) || (temperatura>30 || temperatura<-30))
        {
            temperatura=prompt("Ingrese temperatura valida");
        }
        if(temperatura%2==0)
        {
            cantTemperaturasPares++;
        }
        else
        {

        if(contadorpeso==0 || peso>maximo)
        {
            maximo=peso;
            productopesado=marca;
        }
        if(contadorpeso==0 || peso<minimo)
        {
            minimo=peso;
            productomenospesado=marca;
            
        }

        }

        respuesta=prompt("Desea seguir");
    }
   
    contadorpeso++;


document.write("Cantidad de temperaturas pares : "+cantTemperaturasPares+"<br>");
document.write("Producto mas pesado: "+productopesado+"<br>");



    

}

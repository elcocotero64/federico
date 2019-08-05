function mostrar()
{
    var numero;
    var i;
    numero=prompt("Ingrrese numero");
    var cantidadpares=0;


    for(i=2; i<=numero ; i++)
    {
        
        
        if(i%2==0) 
        { 
            console.log(i);
            cantidadpares++;
            
        }
        
    }
    
    
    alert(i);
    alert("Cantidad de numeros pares "+cantidadpares);



}//FIN DE LA FUNCIÓN
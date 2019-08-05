function mostrar()
{

    var sexo = prompt("ingrese f ó m .");
    var fem ="f";
    var mas ="m";
    while(sexo!=fem && sexo!=mas)
    {
        sexo = prompt("ingrese f ó m .");        
    } 
    
    if(sexo==fem)
    {
        document.getElementById('Sexo').value=fem;   
    }
    else
    {
        document.getElementById('Sexo').value=mas;    
    }
    
    
    
     
}


 //FIN DE LA FUNCIÓN
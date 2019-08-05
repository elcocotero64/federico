function mostrar()
{


    var cantidadnotas=0;
    var nota;
    var sexo;
    var contador=0;
    var acumulador=0;
    var promedio;
    var sexobaja;
    var maximo;
    var minimo;

    while(cantidadnotas<5)
	{

    
		
        nota=prompt("Ingrese un numero entre 0 y 10");
        nota=parseInt(nota);
        cantidadnotas++;
        
       
       
        while(isNaN(nota)||(nota<0||nota>10))
        {
            nota=prompt("Ingrese un numero valido entre 0 y 10");
            nota=parseInt(nota);
        }
           sexo=prompt("Ingrese f o m");
        while(sexo!="f" && sexo!="m")

            {
                    
                sexo=prompt("El sexo es invalido, ingrese sexo f o m");
                    
            }
                acumulador=acumulador+nota;

                if(cantidadnotas==1)
                {
                    maximo=nota;
                    minimo=nota;
                }
                if(nota<minimo)
                {
                    minimo=nota;
                    sexobaja=sexo;
                }
                else
                {
                    if(nota>maximo)
                    {
                        maximo=nota;
                    }
                }
                
                if(sexo=="m" && nota>=6)

                {
                    contador++;
                }
                 


     }
           


       promedio=acumulador/cantidadnotas;
      alert("El promedio es : "+promedio);
      alert("La nota es "+minimo+" y el sexo es "+sexobaja);
      alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es : "+contador);
  

    

}

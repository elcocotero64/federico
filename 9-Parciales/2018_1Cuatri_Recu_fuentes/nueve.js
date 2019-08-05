function mostrar()
{
    var marca;
    var peso;
    var temp;
    var resp;
    var canttemp=0;
    var prodmaspesado;
    var cantprodtempneg; 
    var prompesoprod;
    var pesomax;
    var pesomin;
    var flag=0;

        do{
        marca= prompt("Ingrese la Marca del producto");
        peso = prompt("Ingrese el peso del producto (0 a 100)");
            while(parseInt(peso)<0 || parseInt(peso)>100)
            {
                peso = prompt("Error,Ingrese el peso del producto entre 0 y 100)")
            }
        temp = prompt("Ingrese la temperatura del producto (-30º a 30º");
            while(parseInt(temp)>-30 && parseInt(temp)<30 )
                {
                    peso = prompt("Eror,Ingrese la temperatura del producto entre -30 y 30)");
                }
            if(temp % 2 == 0) 
            {
                canttemp++;
            }
            if(peso>pesomax || flag!=0)  
            {
                peso=pesomax;
                flag=1

            }
            
        
              



        resp = confirm("Desea ingresar otro producto?")
        }while(resp)

alert("La cantidad de temperaturas pares es "+ canttemp)
alert("La marca del producto mas pesado es "+ pesomax )
}

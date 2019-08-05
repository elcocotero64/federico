function mostrar()
{
    var numuno;
    var numdos;
    var num1;
    var num2;
    var total;


    numuno = prompt("Ingrese el primer numero");
    numdos = prompt("ingrese el segundo numero");



        if(numuno==numdos)
        {
            total = numuno+numdos;
        }
             else
            {
                if(numuno>numdos)
                {
                    total = (numuno-numdos);
                }
                    else{
                        num1=parseInt(numuno);
                        num2=parseInt(numdos);
                        total = num1+num2;
                        if(total>10){
                            total = total + " es mayor a 10";
                        } 
                }
                
            }

            alert(total);
}
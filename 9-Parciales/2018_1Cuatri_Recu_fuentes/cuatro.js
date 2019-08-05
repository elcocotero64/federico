function mostrar()
{
    var numero1;
    var numero2;

    numero1=prompt("Ingrese un numero");
    numero2=prompt("Ingrese otro numero");

    if(numero1==numero2)
    {
        alert(numero1+numero2);
    }
    else
    {
        if(numero1>numero2)
        {
            alert(numero1/numero2);
        }
        else{

        }
        if(numero1<numero2){
            
            alert(parseInt(numero1)+parseInt(numero2));
        }

    }

}

function mostrar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1=prompt("Ingrese numero");
    numero2=prompt("Ingrese numero");
    //resultado=parseInt(numero1)+parseInt(numero2);


    if(numero1==numero2)
    {
        resultado=numero1+""+numero2;
    }
    else
    {
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        if(numero1>numero2)
        {
            resultado=numero1-numero2;
        }
        else
        {
            resultado=numero1+numero2;
        }
        if((numero1+numero2)>10)
        {
            resultado="la suma es : "+resultado+" y supera el 10";
        }

    }
                    alert(resultado);

}

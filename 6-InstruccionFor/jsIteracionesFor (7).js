function mostrar()
{
    var numero;
    var divisores=0;
    var i=0;
    numero=prompt("Ingrese un numero");

    for(i=1;i<=numero ;i++)
    {
        if(numero%i==0)
        {
        console.log(i);
        divisores++;

        }    

    }
        alert(" "+i);
        alert("Los divisores son "+divisores);


}//FIN DE LA FUNCIÓN
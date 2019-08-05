/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var numero1;
    var numero2;
    var resultadoSuma;

    numero1=prompt("ingrese un numero");
    numero2=prompt("ingrese otro numero");

    document.getElementById('numeroUno').value=numero1;
    document.getElementById('numeroDos').value=numero2;

    resultadoSuma=parseInt(numero1) + parseInt(numero2);
    
        alert("El resultado es : "+resultadoSuma);
    
    

}

function restar()
{
	var numero1;
    var numero2;
    var resultadoRestar;

    numero1=prompt("ingrese un numero");
    numero2=prompt("ingrese otro numero");

    document.getElementById('numeroUno').value=numero1;
    document.getElementById('numeroDos').value=numero2;

    resultadoRestar=parseInt(numero1) - parseInt(numero2);
    
        alert("El resultado es : "+resultadoRestar);
}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var resultadoMultiplicar;

    numero1=prompt("ingrese un numero");
    numero2=prompt("ingrese otro numero");

    document.getElementById('numeroUno').value=numero1;
    document.getElementById('numeroDos').value=numero2;

    resultadoMultiplicar=parseInt(numero1) * parseInt(numero2);
    
        alert("El resultado es : "+resultadoMultiplicar);
	
}

function dividir()
{
    var numero1;
    var numero2;
    var resultadoDividir;

    numero1=prompt("ingrese un numero");
    numero2=prompt("ingrese otro numero");

    document.getElementById('numeroUno').value=numero1;
    document.getElementById('numeroDos').value=numero2;

    resultadoDividir=parseInt(numero1) / parseInt(numero2);
    
        alert("El resultado es : "+resultadoDividir);    
        



	
}


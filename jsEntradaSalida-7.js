/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var numero1;
    var numero2;
    var resultadoSuma;


    numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;

    resultadoSuma=parseInt(numero1) + parseInt(numero2);
    
        alert("La suma es : "+resultadoSuma);
    
    

}

function restar()
{
	var numero1;
    var numero2;
    var resultadoRestar;

    numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;

    resultadoRestar=parseInt(numero1) - parseInt(numero2);
    
        alert("La resta es : "+resultadoRestar);
}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var resultadoMultiplicar;

    numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;

    resultadoMultiplicar=parseInt(numero1) * parseInt(numero2);
    
        alert("El producto es : "+resultadoMultiplicar);
	
}

function dividir()
{
    var numero1;
    var numero2;
    var resultadoDividir;

    numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;

    resultadoDividir=parseInt(numero1) / parseInt(numero2);
    
        alert("El cosiente es : "+resultadoDividir);    
        



	
}


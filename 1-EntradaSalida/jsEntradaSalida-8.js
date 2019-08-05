/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
        
    var numero1;
    var numero2;
    var resultadoSacarResto;

    numero1=prompt("ingrese un numero");
    numero2=prompt("ingrese otro numero");

    document.getElementById('numeroDividendo').value=numero1;
    document.getElementById('numeroDivisor').value=numero2;

    resultadoSacarResto=parseInt(numero1) % parseInt(numero2);
    
        alert("El resultado es : "+resultadoSacarResto);
	
}

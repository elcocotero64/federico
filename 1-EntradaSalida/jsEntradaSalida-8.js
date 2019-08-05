/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
    var num2;
    var numero1;
    var numero2;
    var resultado;
    
    num1 = document.getElementById("numeroDividendo").value
    num2 = document.getElementById("numeroDivisor").value
    numero1= parseInt(num1)
    numero2= parseInt(num2)
    resultado =(numero1%numero2);
    alert("el resto de la division es "+resultado)
}

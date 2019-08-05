/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    

    var numero1;
    var numero2;
    var resultado;

   numero1=prompt("Ingrese un numero: ");
   numero2=prompt("Ingrese un numero:");
   

   document.getElementById('numeroUno').value= numero1;
   document.getElementById('numeroDos').value=numero2;
    
    
     
    
    
    resultado=parseInt(numero1) + parseInt(numero2);

    alert("El resultado es : "+resultado);



}


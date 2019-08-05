function mostrar()
{
//tomo la edad  
var edad;
var estadocivil;

edad=prompt("ingrese su edad");
edad=document.getElementById('edad').value=edad;
edad=document.getElementById('estadocivil').value=estadocivil;

if (edad<18 && estadocivil !='Soltero')
{
     alert("Es muy pequeño para No ser soltero");
}


}//FIN DE LA FUNCIÓN
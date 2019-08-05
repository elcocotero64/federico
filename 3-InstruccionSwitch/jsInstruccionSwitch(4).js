function mostrar()
{
    var mesda = document.getElementById('mes').value;

    switch(mesda){
    
    case 'Febrero':
       alert("Este mes tiene más de 28 días")
    break;
    case 'Enero':
    case 'Marzo':
    case 'Diciembre':
    case 'Mayo':
    case 'Julio':
    case 'Octubre':
    case 'Agosto':
        alert("Este mes tiene 31 días")
    break;
    case 'Junio':
    case 'Septiembre':
    case 'Noviembre':
    case 'Abril':
        alert("Este mes tiene 30 ")
    break;
     
              
    }
}//FIN DE LA FUNCIÓN
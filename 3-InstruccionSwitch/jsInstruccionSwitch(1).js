function mostrar()
{
var txt;
var mesda ;

mesda = document.getElementById('mes').value;

switch(mesda){
    case 'Enero':
        txt = "que comiences bien el año!!!"
        break;
    case 'Marzo':
            txt = "a clases!!!"
            break;
    case 'Julio':
            txt ="se vienen las vacaciones!!!"
            break;
    case 'Diciembre':
           txt = "Felices fiesta!!!"
break;
        default:
                txt="Mes invalido"
        }
alert(txt)

}//FIN DE LA FUNCIÓN
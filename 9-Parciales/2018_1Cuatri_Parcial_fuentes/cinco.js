function mostrar()
{
    var dato;
    

    dato=prompt("Ingrese un planeta");

    switch(dato)
    {
        case 'tierra':{
            alert("Aca vivimos")
            break;
        }
        case 'mercurio':{

        }
        case 'venus':{
            alert("Aca hace más calor")
            break;
        }
        case 'marte':{

        }
        case 'júpiter':{

        }
        case 'saturno':{

        }
        case 'urano':{

        }
        case 'neptuno':{
            alert("acá hace mas frío")
            break;
        }
        default:
            alert("No es un planeta valido")
            

    }


}

/*Mercurio.
Venus.
Tierra.
Marte.
Júpiter.
Saturno.
Urano.
Neptuno.*/
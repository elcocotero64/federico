function mostrar()
{
    var hora;
    var mensaje;
    hora=document.getElementById('laHora').value;

    switch(hora)
    {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7': 
        case '8':
        case '9':
        case '10':
        case '11':
        case '12':
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
        case '19':
        case '20':
        case '21':
        case '22':
        case '23':  
        case '24':                          
            
        {
            if((hora>=6)&&(hora<=11))
            { 
                mensaje="Es de mañana";
            }
            else
            {
                if((hora>=12)&&(hora<=19))
                {
            
                mensaje=("Es de tarde");
                }
            }    
            if((hora>=0)&&(hora<=5))
            {
                mensaje=("Es de noche");
            }  
            if((hora>=20)&&(hora<24))
            { 
                mensaje=("Es de noche a dormir"); 

            }
            if(hora==24){
                mensaje="Es de noche";
            }
           break;
            
               
        }  
        default :
                
        mensaje="La hora no es valida";

        }
        
        alert(mensaje);
     
        
       
    } 
    

function mostrar()
{

    var clave ;
    var pass="utn750";

    clave= prompt("ingrese el número clave.");

    while(clave!==pass)
    {
        clave= prompt("Clave incorrecta  - ingrese el número clave.");
    }

    alert("Acceso consedido");
}

//FIN DE LA FUNCIÓN

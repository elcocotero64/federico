function mostrar()
{
    var precio;
    var descuento;
    var preciofinal;

    precio=prompt("Ingrese precio");
    descuento=prompt("ingrese descuento");
    descuento=parseInt(precio)*parseInt(descuento)/100;
    preciofinal=parseInt(precio)-parseInt(descuento);
    document.getElementById('elPrecioFinal').value=preciofinal;

        
}

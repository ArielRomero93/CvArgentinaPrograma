/**function mostrarContacto() {
    var div = document.getElementById("contenedorContacto");
    if (div.style.display === "none") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
}*/

document.getElementById("boton").addEventListener('click',function() {
    var div = document.getElementById("contacto");
    if (div.style.display === "none") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
}
)
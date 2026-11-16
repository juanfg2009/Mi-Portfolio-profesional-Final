
// Formulario de contacto
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    let destino = "TU-EMAIL-AQUI";

    let asunto = "Contacto desde mi Portfolio";

    let cuerpo = "Nombre: " + nombre +
        "\nEmail: " + email +
        "\nMensaje: " + mensaje;

    window.location.href = "mailto:" + destino +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(cuerpo);

});

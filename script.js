// Manejo de envío de formulario
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    this.reset();
});

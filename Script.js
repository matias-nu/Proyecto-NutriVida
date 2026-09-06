document.addEventListener("DOMContentLoaded", function () {
 
    // ===== MENU HAMBURGUESA =====
 
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
 
    if (menuBtn && menu) {
        menuBtn.addEventListener("click", function () {
 
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
 
        });
    }
 
 
    // ===== VALIDACIÓN FORMULARIO AGENDA =====
 
    const formAgenda = document.getElementById("form-agenda");
 
    if (formAgenda) {
 
        formAgenda.addEventListener("submit", function (evento) {
 
            evento.preventDefault();
 
            let formularioValido = true;
 
            const nombre = document.getElementById("nombre");
            const correo = document.getElementById("correo");
            const telefono = document.getElementById("telefono");
            const nutricionista = document.getElementById("nutricionista");
            const fecha = document.getElementById("fecha");
            const motivo = document.getElementById("motivo");
 
            // Nombre
            if (nombre.value.trim() === "") {
                document.getElementById("error-nombre").textContent = "Ingresa tu nombre completo.";
                formularioValido = false;
            } else {
                document.getElementById("error-nombre").textContent = "";
            }
 
            // Correo
            const formatoCorreoAgenda = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formatoCorreoAgenda.test(correo.value.trim())) {
                document.getElementById("error-correo").textContent = "Ingresa un correo válido.";
                formularioValido = false;
            } else {
                document.getElementById("error-correo").textContent = "";
            }
 
            // Teléfono
            const formatoTelefono = /^[0-9+\s]{8,15}$/;
            if (!formatoTelefono.test(telefono.value.trim())) {
                document.getElementById("error-telefono").textContent = "Ingresa un teléfono válido.";
                formularioValido = false;
            } else {
                document.getElementById("error-telefono").textContent = "";
            }
 
            // Nutricionista
            if (nutricionista.value === "") {
                document.getElementById("error-nutricionista").textContent = "Selecciona un profesional.";
                formularioValido = false;
            } else {
                document.getElementById("error-nutricionista").textContent = "";
            }
 
            // Fecha
            if (fecha.value === "") {
                document.getElementById("error-fecha").textContent = "Selecciona una fecha.";
                formularioValido = false;
            } else {
                document.getElementById("error-fecha").textContent = "";
            }
 
            // Motivo
            if (motivo.value.trim().length < 10) {
                document.getElementById("error-motivo").textContent = "Cuéntanos un poco más (mínimo 10 caracteres).";
                formularioValido = false;
            } else {
                document.getElementById("error-motivo").textContent = "";
            }
 
            // Resultado
            const confirmacion = document.getElementById("confirmacion-agenda");
 
            if (formularioValido) {
                confirmacion.textContent = "¡Solicitud enviada! Te contactaremos para confirmar tu hora.";
                formAgenda.reset();
            } else {
                confirmacion.textContent = "Revisa los campos marcados en rojo.";
            }
 
        });
 
    }
 
 
    // ===== VALIDACIÓN FORMULARIO CONTACTO =====
 
    const formContacto = document.getElementById("form-contacto");
 
    if (formContacto) {
 
        formContacto.addEventListener("submit", function (evento) {
 
            evento.preventDefault();
 
            let formularioValido = true;
 
            const nombreContacto = document.getElementById("nombre-contacto");
            const correoContacto = document.getElementById("correo-contacto");
            const mensaje = document.getElementById("mensaje");
 
            // Nombre
            if (nombreContacto.value.trim() === "") {
                document.getElementById("error-nombre-contacto").textContent = "Ingresa tu nombre.";
                formularioValido = false;
            } else {
                document.getElementById("error-nombre-contacto").textContent = "";
            }
 
            // Correo
            const formatoCorreoContacto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formatoCorreoContacto.test(correoContacto.value.trim())) {
                document.getElementById("error-correo-contacto").textContent = "Ingresa un correo válido.";
                formularioValido = false;
            } else {
                document.getElementById("error-correo-contacto").textContent = "";
            }
 
            // Mensaje
            if (mensaje.value.trim().length < 10) {
                document.getElementById("error-mensaje").textContent = "Escribe un mensaje un poco más detallado (mínimo 10 caracteres).";
                formularioValido = false;
            } else {
                document.getElementById("error-mensaje").textContent = "";
            }
 
            // Resultado
            const confirmacionContacto = document.getElementById("confirmacion-contacto");
 
            if (formularioValido) {
                confirmacionContacto.textContent = "¡Mensaje enviado! Te responderemos a la brevedad.";
                formContacto.reset();
            } else {
                confirmacionContacto.textContent = "Revisa los campos marcados en rojo.";
            }
 
        });
 
    }
 
});
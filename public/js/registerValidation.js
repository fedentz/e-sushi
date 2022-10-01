window.addEventListener("load", function () {
    let registerForm = document.querySelector("form.register-full");

    registerForm.addEventListener("submit", function (e) {

        let errores = [];
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let nameField = document.querySelector(".form-control");
        if (nameField.value == "") {
            errores.push("El nombre es obligatorio");
        } else if (nameField.value.length < 2) {
            errores.push("El nombre debe tener al menos 2 caracteres")
        }

        let lastNameField = document.querySelector(".form-lastname");
        if (lastNameField.value == "") {
            errores.push("El apellido es obligatorio");
        } else if (lastNameField.value.length < 2) {
            errores.push("El apellido debe tener al menos 2 caracteres")
        }

        let emailField = document.querySelector(".form-email");
        if (emailField.value == "") {
            errores.push("El mail es obligatorio");
        } else if (!emailField.value.match(validRegex)) {

            errores.push("Debes ingresar un formato de email valido")
        }
        let phoneField = document.querySelector(".form-number");
        if (phoneField.value == "") {
            errores.push("El numero es obligatorio");
        }

        let passwordField = document.querySelector(".form-password");
        if (passwordField.value == "") {
            errores.push("La clave es obligatoria");
        } else if (passwordField.value.length < 8) {
            errores.push("La clave debe tener al menos 8 caracteres")
        }

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector(".validacionesFront ul")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    });
})
window.addEventListener("load", function () {

    let loginForm = document.querySelector("form.login-full");

    loginForm.addEventListener("submit", function (event) {

        let errores = [];
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let email = document.querySelector(".form-control");
        if (email.value == "") {
            errores.push("El mail es obligatorio");
        } else if (!email.value.match(validRegex)) {
   
            errores.push("Debes ingresar un formato de email valido")
        }
        
        let password = document.querySelector(".form-password");
        if (password.value == "") {
            errores.push("La clave es obligatoria");
        } else if (password.value.length < 8) {
            errores.push("La clave debe tener al menos 8 caracteres")
        }

        if (errores.length > 0) {
            event.preventDefault();
            let ulErrores = document.querySelector(".validacionesFront ul")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    });
})
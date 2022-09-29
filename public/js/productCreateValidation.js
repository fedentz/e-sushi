window.addEventListener("load", function () {
    let registerForm = document.querySelector("form.productCerate");

    registerForm.addEventListener("submit", function (e) {

        let errores = [];

        let nameField = document.querySelector(".form-input vista-create-input");
        if (nameField.value == "") {
            errores.push("El nombre es obligatorio");
        } else if (nameField.value.length < 5) {
            errores.push("El nombre debe tener al menos 5 caracteres")
        }

        let lastNameField = document.querySelector(".form-input vista-create-input-imagen");
        if (lastNameField.value == "") {
            errores.push("El apellido es obligatorio");
        } else if (lastNameField.value.length < 2) {
            errores.push("El apellido debe tener al menos 2 caracteres")
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
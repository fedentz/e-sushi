window.addEventListener("load", function () {
    let registerForm = document.querySelector(".productCerate");
    let ulErrores = document.querySelector(".validacionesFront")
    registerForm.addEventListener("submit", function (e) {
        ulErrores.innerHTML = "" //para que no se acumulen las validaciones anteriores
        let errores = [];

        let nameField = document.querySelector("#name"); //use el id en vez de la clase para evitar confusion
        if (!nameField.value.trim().length) {
            errores.push("El nombre es obligatorio");
        } else if (nameField.value.length < 5) {
            errores.push("El nombre debe tener al menos 5 caracteres")
        }

        let priceField = document.querySelector("#price"); //use el id en vez de la clase para evitar confusion
        if (!priceField.value.trim().length) {
            errores.push("El precio es obligatorio");
        }
        
        let descriptionField = document.querySelector("#description"); //use el id en vez de la clase para evitar confusion
        if (!descriptionField.value.trim().length) {
            errores.push("la desripcion es obligatoria");
        } else if (descriptionField.value.length < 20) {
            errores.push("La desripcion debe tener al menos 20 caracteres")
        }

         if (errores.length > 0) {
              e.preventDefault();              
              for (let i = 0; i < errores.length; i++) {
                  ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
              }
          } 
    });
})
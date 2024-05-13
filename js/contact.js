const nombre = document.getElementById("name")
const email = document.getElementById("email")
const telefono = document.getElementById("number")
const asunto = document.getElementById("subject")
const parrafo = document.getElementById("warnings")
const mensaje = document.getElementById("message")

form.addEventListener("submit", e => {
    e.preventDefault()

    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexTelefono = /^\d{10}$/
    parrafo.innerHTML = ""

    if(nombre.value.length < 3){
        warnings += `Nombre no valido. Min 3 caract. <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `Email no valido. <br>`
        entrar = true
    }
    if(!regexTelefono.test(telefono.value)){
        warnings += `Numero no valido. 10 caract. <br>`
        entrar = true
    }

    if(asunto.value.length > 20 || asunto.value.length < 3){
        warnings += `Asunto min 3 máx 20 caracteres. <br>`
        entrar = true
    }

    if(mensaje.value.length > 100 || mensaje.value.length < 3){
        warnings += `Mensaje min 3 y máx 100 caracteres <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        alert("Gracias por contactarnos. En breve nos comunicaremos!")
        document.getElementById("form").reset()
    }
})



function cleanForm(){
    document.getElementById("form").reset()
}



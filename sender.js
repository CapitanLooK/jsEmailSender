//Se declaran las variables de entrada del formulario

let nombre = document.getElementById('nombre')
let telefono = document.getElementById('telefono')
let email = document.getElementById('email')
let mensaje = document.getElementById('mensaje')

//Se Guarda el form en una constante

const form  = document.getElementById('formulario')

//Creamos un evento de escucha del formulario

form.addEventListener('submit', (e) => {

    //Se detiende el evento de recarga del navegador
    e.preventDefault()

    //Se invoca la funcion sender que se declara abajo
    sender(nombre.value,telefono.value,email.value,mensaje.value)

    //Se Blanquea el formulario
    form.reset()
})

//Se declara la funcion para enviar correos

function sender(nombre, telefono, email, mensaje) {
    Email.send({
        SecureToken: 'token de seguridad generado por https://smtp.js', //Para configurar los permisos de seguridad SSL
        To: 'correo de destino', //Donde va a llegar el mail
        From: 'correo de origen', //Desde donde se va a enviar. Tiene que ser el mismo que genero el token de seguridad
        Subject: `${nombre} envio un mensaje`,
        Body: `
                <p>Nombre: <b>${nombre}</b></p>
                <p>Telefono: <b>${telefono}</b></p>
                <p>Email: <b>${email}</b></p>
                <p>Mensaje: <b>${mensaje}</b></p>
                `
    }).then(
        message => swal("Correo enviado exitosamente", "en breve nos pondremos en contacto", "success")
        //Se utiliza la libreria sweetAlert para generar ventanas emergentes tipo popup, se cargo el cdn en el index para mostrar funcionamiento
        //mas info en https://sweetalert.js.org/
    )
    .catch(error => swal("Error al enviar el mensaje", "disculpa las molestias", "error"))
    //en caso de error sale otro popup informando esto
}
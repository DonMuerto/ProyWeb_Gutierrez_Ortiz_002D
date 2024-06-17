const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); // const se vuelve un arreglo con todos lo inputs que se encuentran dentro del formulario

const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/ // 4 a 12 digitos.
}

const celdas = {
    email: false,
    password: false
}

let password = document.getElementById("password")

$(document).ready(function(){
    $("#email").keyup(function(){
        let email= $(this).val();
        validarCampo(expresiones.email, email ,"email");
    })
    $("#password").keyup(function(){
        let password= $(this).val();
        validarCampo(expresiones.password, password ,"password");
    })
    $("#ojo").click(function(){
        let mucho_ojo = document.getElementById('ojo');
        if (password.type === "password"){
            password.type = "text";
            mucho_ojo.src = "img/ojo_off.png"
        }
        else{
            password.type = "password"
            mucho_ojo.src = "img/ojo_on.png"
        }
    })
})

const validarCampo = (expresion, validar, campo) => {

    if(expresion.test(validar)){ // expresiones.rut.test() <-- Retorna True or False
        document.querySelector(`#grupo__${campo} .inputStyle`).classList.add("formulario_grupo-correcto")
        document.querySelector(`#grupo__${campo} .inputStyle`).classList.remove("formulario_grupo-incorrecto")
        document.querySelector(`#grupo__${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo')
        celdas[campo] = true;
    } else{
        document.querySelector(`#grupo__${campo} .inputStyle`).classList.add("formulario_grupo-incorrecto")
        document.querySelector(`#grupo__${campo} .inputStyle`).classList.remove("formulario_grupo-correcto")
        document.querySelector(`#grupo__${campo} .formulario_input-error`).classList.add('formulario_input-error-activo')
        celdas[campo] = false;
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(celdas.email && celdas.password){
        formulario.reset();

        document.querySelectorAll('.formulario_grupo-correcto').forEach((p) => {
            p.classList.remove('formulario_grupo-correcto')
        });
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
    }else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);
	}

});
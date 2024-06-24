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
    $("#ojo_on").click(function(){
        let mucho_ojo_on = document.getElementById('ojo_on');
        let mucho_ojo_off = document.getElementById('ojo_off');
        if (password.type === "password"){
            password.type = "text";
            mucho_ojo_on.classList.remove("seen")
            mucho_ojo_on.classList.add("hid")
            mucho_ojo_off.classList.add("seen")
            mucho_ojo_off.classList.remove("hid")
        }
        else{
            password.type = "password"
            mucho_ojo_on.classList.remove("hid")
            mucho_ojo_on.classList.add("seen")
            mucho_ojo_off.classList.add("hid")
            mucho_ojo_off.classList.remove("seen")
        }
    })
    $("#ojo_off").click(function(){
        let mucho_ojo_on = document.getElementById('ojo_on');
        let mucho_ojo_off = document.getElementById('ojo_off');
        if (password.type === "password"){
            password.type = "text";
            mucho_ojo_on.classList.remove("seen")
            mucho_ojo_on.classList.add("hid")
            mucho_ojo_off.classList.add("seen")
            mucho_ojo_off.classList.remove("hid")
        }
        else{
            password.type = "password"
            mucho_ojo_on.classList.remove("hid")
            mucho_ojo_on.classList.add("seen")
            mucho_ojo_off.classList.add("hid")
            mucho_ojo_off.classList.remove("seen")
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
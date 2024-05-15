const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); // const se vuelve un arreglo con todos lo inputs que se encuentran dentro del formulario

const expresiones = {
    materno: /^[a-zA-ZÀ-ÿ]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    paterno: /^[a-zA-ZÀ-ÿ]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ]{3,20}$/,  // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{9}$/, // /^(6|9)(\s)?\d{4}(\s)?\d{4}$/
    password: /^.{4,12}$/ // 4 a 12 digitos.
}

var genero = "Otro";
let selectGenero = document.getElementById('Genero');


selectGenero.addEventListener('change', function() {
    genero = selectGenero.value; 
});


const celdas = {
    nombre: false,
    materno: false,
    paterno: false,
    email: false,
    celular: false,
    password: false
}

$(document).ready(function(){
    $("#materno").keyup(function(){
        let materno= $(this).val();
        validarCampo(expresiones.materno, materno ,"materno");
    })
    $("#paterno").keyup(function(){
        let paterno= $(this).val();
        validarCampo(expresiones.paterno, paterno ,"paterno");
    })
    $("#nombre").keyup(function(){
        let nombre= $(this).val();
        validarCampo(expresiones.nombre, nombre ,"nombre");
    })
    $("#email").keyup(function(){
        let email= $(this).val();
        validarCampo(expresiones.email, email ,"email");
    })
    $("#password").keyup(function(){
        let password= $(this).val();
        validarCampo(expresiones.password, password ,"password");
    })
    $("#password2").keyup(function(){
        validarPassword2();
    })
    $("#celular").keyup(function(){
        let celular= $(this).val();
        validarCampo(expresiones.celular, celular ,"celular");
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

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value ){
        document.querySelector(`#grupo__password2 .inputStyle`).classList.add("formulario_grupo-incorrecto")
        document.querySelector(`#grupo__password2 .inputStyle`).classList.remove("formulario_grupo-correcto")
        document.querySelector(`#grupo__password2 .formulario_input-error`).classList.add('formulario_input-error-activo')
		campos['password'] = false;
	} else {
        document.querySelector(`#grupo__password2 .inputStyle`).classList.add("formulario_grupo-correcto")
        document.querySelector(`#grupo__password2 .inputStyle`).classList.remove("formulario_grupo-incorrecto")
        document.querySelector(`#grupo__password2 .formulario_input-error`).classList.remove('formulario_input-error-activo')
		campos['password'] = true;
	}
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(celdas.paterno && celdas.materno && celdas.nombre && celdas.email && celdas.celular && celdas.password){
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
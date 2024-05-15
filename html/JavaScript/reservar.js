const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); // const se vuelve un arreglo con todos lo inputs que se encuentran dentro del formulario

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ]{3,20}$/,  // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{9,12}$/ // /^(6|9)(\s)?\d{4}(\s)?\d{4}$/
}

var genero = "Otro";
let selectGenero = document.getElementById('Genero');


selectGenero.addEventListener('change', function() {
    genero = selectGenero.value; 
});


const celdas = {
    nombre: false,
    email: false,
    celular: false
}

$(document).ready(function(){
    $("#nombre").keyup(function(){
        let nombre= $(this).val();
        validarCampo(expresiones.nombre, nombre ,"nombre");
    })
    $("#email").keyup(function(){
        let email= $(this).val();
        validarCampo(expresiones.email, email ,"email");
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


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    

    if(celdas.nombre && celdas.email && celdas.celular ){
        
            emailjs.send("service_nt2wwvc","template_t4zqlsn",{
                name: String(document.getElementById('nombre').value),
                gender: String(document.getElementById('Genero').value),
                email: String(document.getElementById('email').value),
                cellphone: String(document.getElementById('celular').value),
                domicilio: String(document.getElementById('domicilio').value)
            }).then((res)=>{
                console.log(res);
                alert("Se envio el mensaje");
            })
            .catch((err)=>console.log(err));

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


const expresiones = {
    materno: /^[a-zA-ZÀ-ÿ]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    paterno: /^[a-zA-ZÀ-ÿ]{3,20}$/, // Letras y espacios, pueden llevar acentos.
}
$("#nombre").keyup(function(){
    let nombre= $(this).val();
    validarCampo(expresiones.nombre, nombre ,"nombre");
})
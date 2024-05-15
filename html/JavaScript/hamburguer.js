const burguer = document.querySelector("#burguer");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    burguer.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    burguer.classList.remove("visible");
})
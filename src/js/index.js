const botao = document.querySelector(".btn-plaraforma");
const elementoPlataformas = document.querySelector("btn-plataforma .plataformas");
botao.addEventListener("click",() =>{
    elementoPlataformas.classList.toggle("ativo");

});
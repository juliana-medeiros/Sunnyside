const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-itens");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})
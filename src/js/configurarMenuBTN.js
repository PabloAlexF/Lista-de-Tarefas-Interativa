const btn_Menu = document.querySelector("#menu");
const menu = document.querySelector("#opcoes");
let contador = 0;

btn_Menu.addEventListener("click", () => {
    contador++;
    menu.style.transition = "2s";

    if (contador > 1) {
        menu.style.left = "-250px";
        contador = 0;
    } else {
        menu.style.left = "2rem";
        menu.style.position = "fixed"
    }
});

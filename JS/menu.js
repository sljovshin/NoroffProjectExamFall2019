const menuburger = document.getElementById("menuburger");
const menu_panel = document.getElementById("menu_panel");
let menu_active = false;

menuburger.addEventListener('click', ()=> {
    if (menu_active === false) {
        menuburger.src = "../IMAGES/header/cMenu.svg";
        menu_panel.style.width = "250px";
        menu_active = true;
    } else {
        menuburger.src = "../IMAGES/header/oMenu.svg";
        menu_panel.style.width = "0px";
        menu_active = false;
    }
})

menu_panel.addEventListener('click', ()=> {
    menuburger.src = "../IMAGES/header/oMenu.svg";
    menu_panel.style.width = "0px";
    menu_active = false;
})
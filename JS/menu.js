const menuburger = document.getElementById("menuburger");
const menu_panel = document.getElementById("menu_panel");
let menu_active = false;

menuburger.addEventListener('click', ()=> {
    if (menu_active === false) {
        menuburger.src = "../IMAGES/cMenu.svg";
        menu_panel.style.width = "250px";
        menu_active = true;
        console.log(menu_active);
        
    } else {
        menuburger.src = "../IMAGES/oMenu.svg";
        menu_panel.style.width = "0px";
        menu_active = false;
        console.log(menu_active);
    }
})

menu_panel.addEventListener('click', ()=> {
    menuburger.src = "../IMAGES/oMenu.svg";
    menu_panel.style.width = "0px";
    menu_active = false;
})
// mobile menu logic
let scrollpos = window.scrollY;
const landing = document.getElementById("landing");
const landing_height = landing.offsetHeight;
const header = document.getElementById("mobile_menu");
const header_height = header.offsetHeight;
const visable_on_scroll = () => header.style.display= "flex";
const hide_on_scroll = () => header.style.display= "none";

window.addEventListener('scroll', ()=> { 
  scrollpos = window.scrollY;
  if (scrollpos >= landing_height - header_height-50) { visable_on_scroll() }
  else { hide_on_scroll() }
})


